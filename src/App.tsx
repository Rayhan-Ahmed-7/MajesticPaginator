import usePagination from "./usePagination"
import "./App.css"
function App() {
  const { range, } = usePagination()
  return (
    <>
      <button>prev</button>
      {
        range.map((i) => (
          <button key={i.page}>{i.page}</button>
        ))
      }
      <button>next</button>
    </>
  )
}

export default App
