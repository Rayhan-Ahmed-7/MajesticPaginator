import usePagination from "./usePagination"
import "./App.css"
import { useState } from "react";
function App() {
  const { paginationRange, selected, setSelected } = usePagination({ count: 96 })
  const [showSkip, setShowSkip] = useState<null | string>(null);

  return (
    <>
      <button>prev</button>
      {
        paginationRange.map((i, index) => {
          if (i.type == 'page') {
            return <button className={`${i.page == selected.page ? "active" : ''}`} onClick={() => setSelected(i)} key={i.page}>{i.page}</button>
          } else if (i.type == "left_dot") {
            return <button onMouseOver={() => setShowSkip(i.type)} onMouseOut={() => setShowSkip(null)}>
              {
                showSkip == 'left_dot' &&
                <span onClick={() => { }} key={index + i.type}>{"<<<"}</span>
              }
              {
                (showSkip == null || showSkip == 'right_dot')&& <span key={index + i.type}>{"..."}</span>
              }
            </button>
          } else if (i.type == "right_dot") {
            return <button onMouseOver={() => setShowSkip(i.type)} onMouseOut={() => setShowSkip(null)}>
              {
                showSkip == 'right_dot' &&
                <span onClick={() => { }} key={index + i.type}>{">>>"}</span>
              }
              {
                (showSkip == null || showSkip == 'left_dot') && <span key={index + i.type}>{"..."}</span>
              }
            </button>
          }
        })
      }
      <button>next</button>
    </>
  )
}

export default App
