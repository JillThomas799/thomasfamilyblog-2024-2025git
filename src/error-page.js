import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  // whenever a page can't be found this HTML is shown
  // customize it however you want!
  return (
    <div id="error-page">
      <h1>
        <center>Oops!</center>
      </h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
