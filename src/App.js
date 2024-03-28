import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <FirstHeroSection />
    </div>
  );
}

export default App;

function Header() {
  return (
    <div className="topHeaderContainer">
      <div className="topHeader">
        <Logo />
        <NavBar />
        <ContactDetails />
      </div>
    </div>
  );
}

function Logo() {
  return <div className="logo">SOCIAL ME</div>;
}

function NavBar() {
  return (
    <ul className="topHeaderList">
      <li>HOME</li>
      <li>ABOUT</li>
      <li>SERVICES</li>
      <li>COURSE</li>
      <li>BLOG</li>
    </ul>
  );
}

function ContactDetails() {
  return (
    <div className="topHeaderContactDetails">
      <div className="topHeaderContactDetailsSocials">
        <img src="/icons8-instagram (14).svg" alt="instagram" />
        <img src="/icons8-facebook (12).svg" alt="facebook" />
      </div>
      <button className="topHeaderContactButton">
        <a href="https://www.example.com">CONTACT</a>
      </button>
    </div>
  );
}

/* This above is the Header of the website*/

function FirstHeroSection() {
  return (
    <div className="heroSection">
      <div className="herSectionContainer">
        <LeftColumnHeroSection />
        <RightColumnHeroSection />
      </div>
    </div>
  );
}

function LeftColumnHeroSection() {
  return (
    <div>
      <LeftColumnHeroSectionText />
      <LeftColumnHeroSectionButton />
    </div>
  );
}

function RightColumnHeroSection() {
  return <img src="/reading.jpg" alt="women reading" />;
}

function LeftColumnHeroSectionText() {
  return (
    <div>
      <h2>I'am here to shine up your social media</h2>
      <h4>awydgauywgdauywgduaywgduawydgauywgduaywgduaywdguawydgauwydawd</h4>
    </div>
  );
}

function LeftColumnHeroSectionButton() {
  return (
    <button>
      <a href="#">WHEN DO WE BEGIN?</a>
    </button>
  );
}
