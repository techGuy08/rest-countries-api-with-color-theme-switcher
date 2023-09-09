import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../../routes/Root";
import Country from "../../routes/Country";
import ErrorPage from "../../routes/404";
import "./App.css";

const API_URL = "https://restcountries.com/v3.1/";

function App() {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("themeMode") || "light"
  );
  const [countryList, setCountryList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [visibleList, setVisibleList] = useState([]);
  let maxResults = 20;

  const toggleDarkMode = () => {
    // document.body.classList.toggle("dark");
    let value = themeMode === "light" ? "dark" : "light";
    setThemeMode(value);
    ["dark", "light"].forEach((val) => document.body.classList.remove(val));
    document.body.classList.add(value);
    localStorage.setItem("themeMode", value);
  };

  const updateVisibleList = ({ searchBy, filterBy }) => {
    filterBy = filterBy !== "all" ? filterBy : "";
    let sorted = countryList.filter((el) => {
      return (
        (el.region.toLowerCase().includes(filterBy.toLowerCase()) ||
          !filterBy.length) &&
        (!searchBy.length ||
          el.name.common.toLowerCase().includes(searchBy.toLowerCase()))
      );
    });

    setFilteredList(sorted);

    setTimeout(() => {
      setVisibleList(sorted.slice(0, maxResults));
    }, 100);
  };
  const loadMoreClick = () => {
    if (filteredList) {
      let arr = filteredList.slice(0, visibleList.length + maxResults);
      setVisibleList(arr);
    }
  };
  const formatNumber = (n) => {
    let arr = n.toString().split(".");
    let nums = arr[0].split("");
    for (var i = nums.length; i > 0; i -= 3) {
      if (nums[i]) {
        nums[i] = "," + nums[i];
      }
    }
    arr[0] = nums.join("");
    return arr.join(".");
  };

  useEffect(() => {
    const getAllCountries = async () => {
      const data = await fetch(API_URL + "all")
        .then((res) => res.json())
        .then((data) => {
          let values = [...data];
          setCountryList(values);
          setFilteredList(values);
          setVisibleList(values.slice(0, maxResults));

          return values;
        });

      return data;
    };

    if (!countryList.length) {
      getAllCountries();
    } else {
      setVisibleList(countryList.slice(0, maxResults));
    }
    document.body.classList.add(themeMode);
  }, [countryList, filteredList, maxResults, themeMode]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Root
          themeMode={themeMode}
          toggleDarkMode={toggleDarkMode}
          updateVisibleList={updateVisibleList}
          visibleList={visibleList}
          formatNumber={formatNumber}
          loadMoreClick={loadMoreClick}
          filteredList={filteredList}
        />
      ),
    },
    {
      path: "country/:id",
      element: (
        <Country
          themeMode={themeMode}
          toggleDarkMode={toggleDarkMode}
          countryList={countryList}
          formatNumber={formatNumber}
        />
      ),
    },
    {
      path: "*",
      element: (
        <ErrorPage themeMode={themeMode} toggleDarkMode={toggleDarkMode} />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
