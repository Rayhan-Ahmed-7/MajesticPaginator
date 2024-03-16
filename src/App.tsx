import { Pagination } from "./components/pagination/Pagination"

const App = () => {
    return (
        <div>
            <Pagination total={50} currentPage={4} />
        </div>
    );
};

export default App;