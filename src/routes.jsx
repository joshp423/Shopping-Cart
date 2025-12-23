import App from './App';
import Homepage from './components/Homepage/homepage';
import ErrorPage from './components/ErrorPage/errorPage';

const routes = [
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'Cart',
    
  }
];

export default routes;
