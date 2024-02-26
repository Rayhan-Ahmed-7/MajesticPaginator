import usePagination from "./usePagination"
import "./App.css"
function App() {
  const { paginationRange, selected,setSelected } = usePagination({count:96})
  return (
    <>
      <button>prev</button>
      {
        paginationRange.map((i,index) => {
          if (i.type == 'page') {
            return <button className={`${i.page == selected.page ? "active":''}`} onClick={()=>setSelected(i)} key={i.page}>{i.page}</button>
          } else {
            return <button key={index + i.type}>{"..."}</button>
          }
        })
      }
      <button>next</button>
    </>
  )
}

export default App
