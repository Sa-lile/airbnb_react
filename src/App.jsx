import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";
console.log(data); /* test data */
<meta name="google-site-verification" content="OOFOKR60rIgMUYuDpqZ2QBDcPLNGz2Rs1Cpk0UXeTQE" />
function App() {

 
  const cards = data.map((item) => {
    // console.log(item.openSpots)

    return (
      <Card
        key={item.id}
        {...item}
        /** all data */
        // item={item}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // country={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots= {item.openSpots}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
