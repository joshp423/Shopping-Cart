import { Link } from 'react-router';

function ErrorPage() {
  return (
    <div className="errorPage">
      <h1>Error 404: Page not found</h1>
      <Link to="/"></Link>
    </div>
  );
}

export default ErrorPage
