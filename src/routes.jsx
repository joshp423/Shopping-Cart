import App from './App';
import Homepage from './components/Homepage/homepage';
import ErrorPage from './components/ErrorPage/errorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> }
    ]
  },
  {
    path: 'Cart',
    
  }
];

export default routes;
