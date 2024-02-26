import usePagination from "./usePagination"
import "./App.css"
import { useState } from "react";
function App() {
  const { paginationRange, selected, totalPage, setPageSize, setSelected, goTo } = usePagination({ count: 96 })

  const [showSkip, setShowSkip] = useState<null | string>(null);
  return (
    <div className="pagination">
      <button className="previous_btn arrow" disabled={selected.page == 1} onClick={() => { goTo(selected.page - 1) }}></button>
      {
        paginationRange.map((i, index) => {
          if (i.type == 'page') {
            return <button className={`pagination_item page_btn ${i.page == selected.page ? "active" : ''}`} onClick={() => setSelected(i)} key={i.page}>{i.page}</button>
          } else if (i.type == "left_dot") {
            return <button className="pagination_item" onMouseOver={() => setShowSkip(i.type)} onMouseOut={() => setShowSkip(null)}>
              {
                showSkip == 'left_dot' &&
                <svg onClick={() => { goTo(selected.page - 5) }} xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m13 19l-6-7l6-7" /><path d="m17 19l-6-7l6-7" /></g></svg>
              }
              {
                (showSkip == null || showSkip == 'right_dot') && <span className="dot" key={index + i.type} />
              }
            </button>
          } else if (i.type == "right_dot") {
            return <button className="pagination_item" onMouseOver={() => setShowSkip(i.type)} onMouseOut={() => setShowSkip(null)}>
              {
                showSkip == 'right_dot' &&
                <svg className="right_dot" onClick={() => { goTo(selected.page + 5) }} xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m13 19l-6-7l6-7" /><path d="m17 19l-6-7l6-7" /></g></svg>
              }
              {
                (showSkip == null || showSkip == 'left_dot') && <span className="dot" key={index + i.type} />
              }
            </button>
          }
        })
      }
      <button className="next_btn arrow arrow_right" disabled={selected.page == totalPage} onClick={() => { goTo(selected.page + 1) }}></button>
      <select className="page_size_selector" onChange={(e) => setPageSize(parseInt(e.target.value))} name="page_size" id="page_size">
        <option value="5">5/page</option>
        <option value="10">10/page</option>
        <option value="15">15/page</option>
      </select>
    </div>
  )
}

export default App
