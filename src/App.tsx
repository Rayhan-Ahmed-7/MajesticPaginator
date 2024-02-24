import usePagination from "./usePagination"

function App() {
  const { range } = usePagination()
  return (
    <>
      <button>prev</button>
      {
        range.map((i) => (
          <button>{i}</button>
        ))
      }
      <button>next</button>
    </>
  )
}

export default App
