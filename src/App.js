
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Home from './pages/home/Home';
import "./App.scss"
import Products from './pages/products/Products';
import Product from './pages/product/Product';

function Layout (){
  return (
    <div className='app'>
    <Nav></Nav>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  )
}
function App() {
  const router = createBrowserRouter([
    {path: "/", element: <Layout></Layout>, children:([
      {path:"/", element:<Home/>},
      {path:"/products/1", element: <Products></Products>},
      {path:"/product/1", element: <Product></Product>}
    ])}
  ])
  return (
   <div >
     <RouterProvider  router={router}>

</RouterProvider>
   </div>
  );
}

export default App;
