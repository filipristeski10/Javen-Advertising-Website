import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <FirstHeroSection />
      <SecondHeroSection />
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
      <div className="heroSectionContainer">
        <LeftColumnHeroSection />
        <RightColumnHeroSection />
      </div>
    </div>
  );
}

function LeftColumnHeroSection() {
  return (
    <div className="leftColumnSection">
      <LeftColumnHeroSectionText />
      <LeftColumnHeroSectionButton />
    </div>
  );
}

function RightColumnHeroSection() {
  return (
    <div className="rightColumnImageDiv">
      <img
        src="/reading.jpg"
        alt="women reading"
        className="rightColumnImage"
      />
    </div>
  );
}

function LeftColumnHeroSectionText() {
  return (
    <div className="leftColumnHeroSection">
      <h2>
        I'am here to shine up <br></br> your social media
      </h2>
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus
        turpis mi. Donec non efficitur sapien. Maecenas posuere ipsum id
        tincidunt dapibus. Maecenas tortor diam, fermentum vel laoreet eu,
        venenatis sit amet arcu.
      </h4>
    </div>
  );
}

function LeftColumnHeroSectionButton() {
  return (
    <button className="buttonLeftColumnHero">
      <a href="#">WHEN DO WE BEGIN?</a>
    </button>
  );
}

//This above is the first Main Hero Section of the Website

function SecondHeroSection() {
  return (
    <div className="secondHeroSection">
      <div className="secondHeroSectionContainer">
        <div className="secondHeroSectionText">
          <h2>MY MISSION</h2>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            pulvinar maximus dapibus. Pellentesque nulla nibh, commodo in
            interdum ac, efficitur vitae nunc
          </h4>
        </div>
      </div>
    </div>
  );
}
