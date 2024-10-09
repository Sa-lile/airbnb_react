

function Card(props) {
  // console.log(props);
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }


  return (
    <>
      <div className="card">
        {badgeText && <div className="card--badge">SOLD OUT</div>}
        <img
          className="card--image"
          src={`../src/assets/${props.coverImg}`}
          alt="card--imag"
        />
        <div className="card--stats">
          <img
            className="star-icon"
            src="../src/assets/star-icon.png"
            alt="star-icon"
          />
          <span>{props.stats.rating}</span>
          <span className="gray">({props.stats.reviewCount}) • </span>
          <span className="gray">{props.location}</span>
        </div>
        <p className="card--title">{props.title}</p>
        <p className="card--price">
          <span className="bold">From ${props.price}</span> / person
        </p>
      </div>
    </>
  );
}

export default Card;
