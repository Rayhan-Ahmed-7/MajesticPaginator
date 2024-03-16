import ReactDOM from 'react-dom/client'
import { Pagination } from './components/pagination/Pagination'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Pagination total={50} currentPage={10}/>
  // </React.StrictMode>,
)
