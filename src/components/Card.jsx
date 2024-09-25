function Card() {
  return (
    <>
      <div className="card">
        <img
          className="card--image"
          src="../src/assets/swimmer.png"
          alt="card--imag"
        />
        <img
          className="star-icon"
          src="../src/assets/star-icon.png"
          alt="star-icon"
        />
        <span>5.0</span>
        <span>(6) • </span>
        <span>USA</span>
        <div>Life lessons with Katie Zaferes</div>
        <div>
          <span>From $136 </span>/ person
        </div>
      </div>
    </>
  );
}

export default Card;
