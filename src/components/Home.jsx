import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <section>
        <div className="home-container"></div>

        <div className="hero-text">
          <h1>
            MASTERING TECHNOLOGY,
            <br />
            SHAPING THE FUTURE,
          </h1>
          <button> DISCOVER MORE !</button>
        </div>
      </section>
      <section className="about"></section>
    </>
  );
};

export default Home;
