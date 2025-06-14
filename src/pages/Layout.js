import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProductList from '../component/ProductList';

const Layout = () => {
  return (
    <div>
      <ProductList />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
    />
    </div>
  )
}

export default Layout
