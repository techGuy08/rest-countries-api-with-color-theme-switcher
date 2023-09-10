import HomeFilter from "../components/HomeFilter";
import CountryCard from "../components/CountryCard";
import Navbar from "../components/Navbar";

export default function Root({
  themeMode,
  toggleDarkMode,
  updateVisibleList,
  visibleList,
  formatNumber,
  loadMoreClick,
  filteredList,
  countryList
}) {
  const handleLoadMoreClick = (e) => {
    loadMoreClick();
  };
  let isAllVisible = filteredList.length <= visibleList.length;
  return (
    <div className="home">
      <header className="header">
        <Navbar themeMode={themeMode} toggleDarkMode={toggleDarkMode} />
      </header>
      <HomeFilter
        updateVisibleList={updateVisibleList}
        filteredList={filteredList}
        countryList={countryList}
      />
      <div className="container mt-4">
        <div className="countryCards-grid row">
          {visibleList.map((item, i) => {
            return (
              <div className="col-xl-3 col-lg-4 col-md-6 mb-5" key={i}>
                <CountryCard info={item} formatNumber={formatNumber} />
              </div>
            );
          })}
        </div>
        {!isAllVisible && (
          <div className="text-center">
            <button
              className={`btn btn-loadmore ${
                themeMode === "dark" ? "btn-light" : "btn-dark"
              }`}
              onClick={handleLoadMoreClick}
            >
              Load 20 more
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
