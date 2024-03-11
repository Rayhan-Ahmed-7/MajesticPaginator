import usePagination from "./usePagination"
import "./pagination.css"
import { useEffect, useState } from "react";
import Select from "./Select";
function Pagination({ onChange }: { onChange: Function }) {
  const { paginationRange, selected, totalPage, setPageSize, setSelected, goTo } = usePagination({ count: 96 })

  const [showSkip, setShowSkip] = useState<null | string>(null);

  useEffect(() => {
    onChange(selected.page)
  }, [selected])
  return (
    <div className="pagination">
      <button className="previous_btn arrow" disabled={selected.page == 1} onClick={() => { goTo(selected.page - 1) }}></button>
      {
        paginationRange.map((i, index) => {
          if (i.type == 'page') {
            return <button className={`pagination_item page_btn ${i.page == selected.page ? "active" : ''}`} onClick={() => setSelected(i)} key={i.page}>{i.page}</button>
          } else if (i.type == "left_dot") {
            return <button key={i.type} className="pagination_item" onMouseOver={() => setShowSkip(i.type)} onMouseOut={() => setShowSkip(null)}>
              {
                showSkip == 'left_dot' &&
                <svg onClick={() => { goTo(selected.page - 5) }} xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="m13 19l-6-7l6-7" /><path d="m17 19l-6-7l6-7" /></g></svg>
              }
              {
                (showSkip == null || showSkip == 'right_dot') && <span className="dot" key={index + i.type} />
              }
            </button>
          } else if (i.type == "right_dot") {
            return <button key={i.type} className="pagination_item" onMouseOver={() => setShowSkip(i.type)} onMouseOut={() => setShowSkip(null)}>
              {
                showSkip == 'right_dot' &&
                <svg className="right_dot" onClick={() => { goTo(selected.page + 5) }} xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="m13 19l-6-7l6-7" /><path d="m17 19l-6-7l6-7" /></g></svg>
              }
              {
                (showSkip == null || showSkip == 'left_dot') && <span className="dot" key={index + i.type} />
              }
            </button>
          }
        })
      }
      <button className="next_btn arrow arrow_right" disabled={selected.page == totalPage} onClick={() => { goTo(selected.page + 1) }}></button>
      <Select
        onChange={(option: any) => setPageSize(option.value)}
        options={[{ label: "5/page", value: 5 }, { label: "10/page", value: 10 }, { label: "15/page", value: 15 }]} />
    </div>
  )
}

export default Pagination
