import Pagination from "./Pagination";

const App = () => {

  return (
    <Pagination
      onChange={(selected: any) => console.log(selected)}
    />
  );
};

export default App;