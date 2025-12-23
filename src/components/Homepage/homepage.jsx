import NavBar from "../Navbar/navBar";


function Homepage() {
  return (
    <>
    <NavBar></NavBar>
      <div className="hpTitle">
        <h1>Welcome to Josh's Shop!</h1>
      </div>

      <div className="hpImage">
        <img src="" alt="shop-image" />
      </div>

      <div className="hpAbout">
        <h2>About us</h2>
        <p>
          Bre's really really asleep, order from the store now or she will wake
          up and be extremely upset! I'm serious order now or I'll ship Liam's
          farts to your door. Fuck around and find out. Dr Dreas you are nervous!!!
        </p>
      </div>
    </>
  );
}

export default Homepage;
