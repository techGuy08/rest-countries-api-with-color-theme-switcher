import Card from "react-bootstrap/Card";

function CountryCard({ info, formatNumber }) {
  return (
    <a
      href={`#/country/${info.name.toLowerCase().replaceAll(" ", "-")}`}
      className="countryCard text-decoration-none"
    >
      <Card style={{ width: "100%", minHeight: 330 }}>
        <Card.Img variant="top" src={info.flags.svg} height="150" />
        <Card.Body>
          <Card.Title>{info.name}</Card.Title>
          <div className="card-text">
            <p>
              <strong>Population: </strong>
              {formatNumber(info.population) || "-"}
            </p>
            <p>
              <strong>Region: </strong>
              {info.region || "-"}
            </p>
            <p>
              <strong>Capital: </strong>
              {info.capital || "-"}
            </p>
          </div>
        </Card.Body>
      </Card>
    </a>
  );
}

export default CountryCard;
