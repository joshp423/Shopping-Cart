import './homepage.css';
import storeImage from '../../assets/sleek-and-modern-storefront-design-black-aluminum-glass-front-view-3d-rendered-illustration_9863077.png';

function Homepage() {
  return (
    <div className="homePage">
      <div className="hpTitle">
        <h1>Welcome to Josh's Shop!</h1>
      </div>

      <div className="hpImage">
        <img src={storeImage} alt="shop-image" />
      </div>

      <div className="hpAbout">
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat
          eu felis vitae gravida. Praesent ac mollis lectus. Nulla aliquam in
          magna nec sodales. Vivamus ac vehicula nibh. Nunc turpis mi, tempus ac
          laoreet et, dignissim ut ipsum. Maecenas efficitur tempor ultricies.
          Suspendisse sodales leo elit, dictum rhoncus tellus dapibus ac. Proin
          bibendum aliquam pretium. Mauris quis est vel mauris fringilla sodales
          nec ac augue. Nam nec neque et elit sagittis rhoncus. Fusce efficitur
          accumsan ultrices. In consectetur pretium orci, nec tristique odio
          vehicula sit amet. Fusce tristique lacus augue, nec cursus ligula
          commodo at. Donec tellus elit, iaculis vitae neque ac, blandit
          imperdiet tellus. Integer bibendum mi ut ex finibus faucibus. Praesent
          quam nisl, lacinia quis ultricies nec, pretium sed nulla. Duis
          dignissim dolor sed sem accumsan tempus. Vestibulum velit mauris,
          accumsan ut pretium a, volutpat a erat. Vivamus malesuada ex nisl,
          blandit gravida sem aliquam ac. Fusce porttitor, lacus at volutpat
          condimentum, sem mauris dignissim velit, non pharetra tellus metus et
          quam.
        </p>
      </div>
    </div>
  );
}

export default Homepage;