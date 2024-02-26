import usePagination from "./usePagination"
import "./App.css"
import { useState } from "react";
function App() {
  const { paginationRange, selected, totalPage, setPageSize, setSelected, goTo } = usePagination({ count: 96 })

  const [showSkip, setShowSkip] = useState<null | string>(null);
  return (
    <>
      <button disabled={selected.page == 1} onClick={() => { goTo(selected.page - 1) }}>prev</button>
      {
        paginationRange.map((i, index) => {
          if (i.type == 'page') {
            return <button className={`${i.page == selected.page ? "active" : ''}`} onClick={() => setSelected(i)} key={i.page}>{i.page}</button>
          } else if (i.type == "left_dot") {
            return <button onMouseOver={() => setShowSkip(i.type)} onMouseOut={() => setShowSkip(null)}>
              {
                showSkip == 'left_dot' &&
                <span onClick={() => { goTo(selected.page - 5) }} key={index + i.type}>{"<<<"}</span>
              }
              {
                (showSkip == null || showSkip == 'right_dot') && <span key={index + i.type}>{"..."}</span>
              }
            </button>
          } else if (i.type == "right_dot") {
            return <button onMouseOver={() => setShowSkip(i.type)} onMouseOut={() => setShowSkip(null)}>
              {
                showSkip == 'right_dot' &&
                <span onClick={() => { goTo(selected.page + 5) }} key={index + i.type}>{">>>"}</span>
              }
              {
                (showSkip == null || showSkip == 'left_dot') && <span key={index + i.type}>{"..."}</span>
              }
            </button>
          }
        })
      }
      <button disabled={selected.page == totalPage} onClick={() => { goTo(selected.page + 1) }}>next</button>
      <select onChange={(e) => setPageSize(parseInt(e.target.value))} name="page_size" id="page_size">
        <option value="5">5/page</option>
        <option value="10">10/page</option>
        <option value="15">15/page</option>
      </select>
    </>
  )
}

export default App
