import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <h1 className="mt-5 text-xl">An error has occured</h1>
      <p className="text-sm mb-5">
        Go back to{" "}
        <Link to="/products" className="text-blue-400">
          main page
        </Link>
      </p>
      <p className="text-lg">
        Error details: {error.statusText || error.message}
      </p>
    </div>
  );
};

export default ErrorPage;
