import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ErrorPage from "./404";

export default function Country({
  themeMode,
  toggleDarkMode,
  countryList,
  formatNumber,
}) {
  const { id } = useParams();
  let borderCountries = [];
  let name = id.replaceAll("-", " ");
  let index = countryList.findIndex(
    (el) => el.name.common.toLowerCase() === name
  );
  let item = countryList[index];
  const getBorderCountries = (codes = []) => {
    let arr = [];
    if (codes) {
      arr = countryList
        .filter((el) => {
          const { cca3 } = el;
          return codes.includes(cca3);
        })
        .map((el) => el.name.common);
      borderCountries = arr;
    }
    return arr;
  };

  if (item) {
    getBorderCountries(item.borders);
  }

  const navElement = (
    <header className="header">
      <Navbar themeMode={themeMode} toggleDarkMode={toggleDarkMode} />
    </header>
  );

  const mainElement = (
    <div className="Country">
      {navElement}
      <div className="container mt-5">
        <Link to="/" className="shadow btn border-0 btn-back">
          <i className="fa-solid fa-arrow-left-long"></i> Back
        </Link>
      </div>
      <div className="container mt-5">
        {item && (
          <div className="row">
            <div className="col-md-5 px-3 px-sm-0 mb-4">
              <img
                src={item.flags.png}
                alt={item.altSpellings[0] || "image"}
                className="img-fluid w-100"
              />
            </div>
            <div className="col-md-6 ms-auto  px-3 px-sm-0 mt-3">
              <h2>{item.name.common}</h2>
              <div className="row mt-4">
                <div className="col-sm-6">
                  <p>
                    <strong>Native Name: </strong>
                    {Object.values(item.name.nativeName)[0].common || "-"}
                  </p>
                  <p>
                    <strong>Population: </strong>
                    {formatNumber(item.population) || "-"}
                  </p>
                  <p>
                    <strong>Region: </strong>
                    {item.region || "-"}
                  </p>
                  <p>
                    <strong>Sub Region: </strong>
                    {item.subregion || "-"}
                  </p>
                  <p>
                    <strong>Capital: </strong>
                    {item.capital[0] || "-"}
                  </p>
                </div>
                <div className="col-sm-6">
                  <p>
                    <strong>Top Level Domain: </strong>
                    {item.tld[0] || "-"}
                  </p>
                  <p>
                    <strong>Currencies: </strong>
                    {Object.values(item.currencies)[0].name || "-"}
                  </p>
                  <p>
                    <strong>Languages: </strong>
                    {Object.values(item.languages).join(", ") || "-"}
                  </p>
                </div>
              </div>
              <p className="mt-4 d-flex flex-wrap align-items-center">
                <strong className="me-2 mb-2">Border Countries: </strong>
                <span className=" d-flex flex-wrap align-items-center">
                  {" "}
                  {item.borders
                    ? borderCountries.map((val, i) => {
                        return (
                          <a
                            key={i}
                            href={
                              "#/country/" +
                              val.toLowerCase().replaceAll(" ", "-")
                            }
                            className="btn mb-2 border-dark-syvtle border rounded-0 border-1 px-4 py-1 mx-1 btn-Cborders"
                          >
                            {val}
                          </a>
                        );
                      })
                    : "-"}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  const loadingElement = (
    <div className="Country">
      {navElement}
      <div className="container mt-4">
        <h6>Loading...</h6>
      </div>
    </div>
  );

  let isNotfound = index === -1 && countryList.length;
  let isLoading = index === -1 && countryList.length === 0;
  return (
    <React.Fragment>
      {item && mainElement}
      {isNotfound ? (
        <ErrorPage themeMode={themeMode} toggleDarkMode={toggleDarkMode} />
      ) : isLoading ? (
        loadingElement
      ) : (
        ""
      )}
    </React.Fragment>
  );
}
