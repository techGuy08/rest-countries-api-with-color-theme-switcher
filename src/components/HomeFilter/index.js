import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";

export default function HomeFilter({ updateVisibleList }) {
  const [filterBy, setFilterBy] = useState("all");
  const [searchBy, setSearchBy] = useState("");

  const handleSearchChange = (event) => {
    let value = event.target.value;
    setSearchBy(value);
    updateVisibleList({
      searchBy: value.replace(/\s+/g, " ").trim(),
      filterBy,
    });
  };
  const handleFilterByChange = (value) => {
    let keys = {
      American: "Americas",
    };
    setFilterBy(value);
    if (keys[value]) {
      value = keys[value];
    }
    updateVisibleList({
      searchBy,
      filterBy: value,
    });
  };
  return (
    <div className="home-filter mt-5">
      <Container>
        <div className="row">
          <div className="col-lg-4">
            <InputGroup className="mb-3 shadow-sm home-search-wrap">
              <InputGroup.Text id="basic-addon1" className="rounded-0 bg-white">
                <i className="fa-solid fa-magnifying-glass"></i>
              </InputGroup.Text>
              <Form.Control
                placeholder="Search for a country"
                className="rounded-0"
                value={searchBy}
                onChange={handleSearchChange}
                type="search"
              />
            </InputGroup>
          </div>
          <div className="col-lg-3 ms-auto">
            <div className="d-flex align-items-center home-filter-dropdown-wrap">
              <Dropdown className="home-filter-dropdown w-100">
                <Dropdown.Toggle
                  variant="warning"
                  className="bg-white w-100 text-start shadow-sm rounded-0"
                >
                  {filterBy === "all" ? "Filter by Region" : filterBy}
                  <i className="fa-solid fa-chevron-down"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-100">
                  <Dropdown.Item
                    href="#"
                    onClick={() => handleFilterByChange("Africa")}
                  >
                    Africa
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#"
                    onClick={() => handleFilterByChange("American")}
                  >
                    American
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#"
                    onClick={() => handleFilterByChange("Asia")}
                  >
                    Asia
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#"
                    onClick={() => handleFilterByChange("Europe")}
                  >
                    Europe
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#"
                    onClick={() => handleFilterByChange("Oceania")}
                  >
                    Oceania
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {filterBy !== "all" && (
                <button
                  className={`btn btn-clear ${
                    document.body.classList.contains("dark")
                      ? "text-white"
                      : "text-dark"
                  }`}
                  onClick={() => handleFilterByChange("all")}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
