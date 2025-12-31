import App from './App';
import Homepage from './components/Homepage/homepage';
import ErrorPage from './components/ErrorPage/errorPage';
import ShopPage from './components/Shop-page/shopPage';
import CartPage from './components/Cart-Page/cartPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'cart', element: <CartPage /> },
    ],
  },
];

export default routes;
