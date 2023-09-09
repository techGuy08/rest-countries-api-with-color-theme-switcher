import Navbar from "../components/Navbar";
export default function ErrorPage({ themeMode, toggleDarkMode }) {


  return (
    <div className="error-page">
      <header className="header">
        <Navbar themeMode={themeMode} toggleDarkMode={toggleDarkMode} />
      </header>
      <div className="container mt-5">
        <div
          className={`error-page-content ${
            themeMode === "dark" ? "text-white" : ""
          }`}
        >
          <h1>Oops! 404 Error</h1>
          <p>This Page is no where to be found.</p>
          <p>{/* <i>{error.statusText || error.message}</i> */}</p>
        </div>
      </div>
    </div>
  );
}
