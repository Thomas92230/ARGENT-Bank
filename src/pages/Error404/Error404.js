import "./Error404.css";

function Error() {
  return (
    <div className="sportsee-error">
      <h1 className="error-title">404</h1>
      <span className="error-description">
        La page que vous demandez n'existe pas.
      </span>
    </div>
  );
}
export default Error;
