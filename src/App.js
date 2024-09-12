import { useState } from "react";
import "./App.css";

const Services = [
  {
    name: "SOME MANAGEMENT",
    image: "/scott-graham-5fNmWej4tAA-unsplash.jpg",
  },

  {
    name: "FACEBOOK ADS",
    image: "/myriam-jessier-eveI7MOcSmw-unsplash.jpg",
  },

  {
    name: "COURSES",
    image: "/kenny-eliason-Ak5c5VTch5E-unsplash.jpg",
  },
];

const Clients = [
  {
    image: "pngegg.png",
  },

  {
    image: "pngegg.png",
  },

  {
    image: "pngegg.png",
  },

  {
    image: "pngegg.png",
  },
];

const Blog = [
  {
    name: "First Post Name",
    image: "/scott-graham-5fNmWej4tAA-unsplash.jpg",
  },

  {
    name: "Second Post Name",
    image: "/myriam-jessier-eveI7MOcSmw-unsplash.jpg",
  },

  {
    name: "Third Post Name",
    image: "/kenny-eliason-Ak5c5VTch5E-unsplash.jpg",
  },
];

const FooterImages = [
  {
    image: "/scott-graham-5fNmWej4tAA-unsplash.jpg",
  },

  {
    image: "/myriam-jessier-eveI7MOcSmw-unsplash.jpg",
  },

  {
    image: "/kenny-eliason-Ak5c5VTch5E-unsplash.jpg",
  },

  {
    image: "/kenny-eliason-Ak5c5VTch5E-unsplash.jpg",
  },

  {
    image: "/kenny-eliason-Ak5c5VTch5E-unsplash.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <FirstHeroSection />
      <SecondHeroSection />
      <ThirdSection />
      <WallOfFameSection />
      <AboutMeSection />
      <KindWordsSection />
      <CatchUpOnTheBlog />
      <ContactSection />
      <Footer />
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

//This above is the second Hero Section of the website.

function ThirdSection() {
  return (
    <div className="thirdSection">
      <div className="thirdSectionContainer">
        <h2>
          Let us help you <br></br> skyrocket your social media presence
        </h2>
        <ServicesContainer />
      </div>
    </div>
  );
}

function ServicesContainer() {
  return (
    <div className="thirdSectionServicesContainer">
      {Services.map((eachservice) => (
        <EachOneService service={eachservice} />
      ))}
    </div>
  );
}

function EachOneService({ service }) {
  const inlineStyles = {
    backgroundImage: `url(${service.image})`,
  };
  return (
    <div className="eachOneServiceBackgroundPicture" style={inlineStyles}>
      <h2>{service.name}</h2>
    </div>
  );
}

//This above is the fourth section of the website, services page.

function WallOfFameSection() {
  return (
    <div className="wallOfFameSection">
      <div className="wallOfFameSectionContainer">
        <h2>Our Wall Of Fame</h2>
        <div className="imagesContainer">
          {Clients.map((ourclient) => (
            <OurClients client={ourclient} />
          ))}
        </div>
        <button>
          <a href="#">TIME TO CLAIM YOUR SPOT!</a>
        </button>
      </div>
    </div>
  );
}

function OurClients({ client }) {
  return <img src={client.image} alt="Each Client" className="eachImage"></img>;
}

/* This above is the Wall Of Fame Section*/

function AboutMeSection() {
  return (
    <div className="AboutMeSection">
      <div className="AboutMeSectionContainer">
        <AboutMeLeftColumnHeroSection />
        <AboutMeRightColumnHeroSection />
      </div>
    </div>
  );
}

function AboutMeLeftColumnHeroSection() {
  return (
    <div>
      <AboutMeLeftColumnHeroSectionImage />
    </div>
  );
}

function AboutMeLeftColumnHeroSectionImage() {
  return (
    <div className="AboutMerightColumnImageDiv">
      <img
        src="/reading.jpg"
        alt="women reading"
        className="rightColumnImage"
      />
    </div>
  );
}

function AboutMeRightColumnHeroSection() {
  return (
    <div className="AboutMeRighColumnHeroSection">
      <AboutMeRightColumnHeroSectionText />
      <AboutMeRightColumnHeroSectionButton />
    </div>
  );
}

function AboutMeRightColumnHeroSectionText() {
  return (
    <div className="RightColumnHeroSection">
      <h2>I'am Abbie, the founder of Social ME</h2>
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus
        turpis mi. Donec non efficitur sapien. Maecenas posuere ipsum id
        tincidunt dapibus. Maecenas tortor diam, fermentum vel laoreet eu,
        venenatis sit amet arcu.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin finibus turpis mi. Donec non efficitur sapien.
        Maecenas posuere ipsum id tincidunt dapibus. Maecenas tortor diam,
        fermentum vel laoreet eu, venenatis sit amet arcu.
      </h4>
    </div>
  );
}

function AboutMeRightColumnHeroSectionButton() {
  return (
    <button className="buttonLeftColumnHero">
      <a href="#">WANNA GET TO KNOW ME BETTER?</a>
    </button>
  );
}

//This above is the About Me Section//

function KindWordsSection() {
  return (
    <div className="KindWordsSection">
      <div className="KindWordsSectionContainer">
        <h2>Kind Words</h2>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus
          turpis mi. Donec non efficitur sapien. Maecenas posuere ipsum id
          tincidunt dapibus. Maecenas tortor diam, fermentum vel laoreet eu,
          venenatis sit amet arcu, Maecenas tortor diam, fermentum vel laoreet
          eu, venenatis sit amet arc
        </h3>
        <h4>-Sienna Halle</h4>
      </div>
    </div>
  );
}

/* This above is the Kind Words Section*/

function CatchUpOnTheBlog() {
  return (
    <div className="CatchUpOnTheBlogSection">
      <div className="CatchUpOnTheBlogSectionContainer">
        <h2>Catch up on the blog</h2>
        <div className="EachBlogContainer">
          {Blog.map((eachblog) => (
            <EachOneBlogPost eachblog={eachblog} />
          ))}
        </div>
      </div>
    </div>
  );
}

function EachOneBlogPost({ eachblog }) {
  return (
    <div className="EachBlogPost">
      <img src={eachblog.image} className="eachBlogPostImage"></img>
      <h4>{eachblog.name}</h4>
    </div>
  );
}

//This above is the Blog Posts Section//

function ContactSection() {
  return (
    <div className="ContactSection">
      <div className="ContactSectionContainer">
        <div className="ContactSectionContainerInside">
          <LeftColumnContactSection />
          <RightColumnContactSection />
        </div>
      </div>
    </div>
  );
}

function LeftColumnContactSection() {
  return (
    <div className="leftColumnContactSection">
      <LeftColumnContactSectionText />
      <LeftColumnContactSectionForm />
    </div>
  );
}

function RightColumnContactSection() {
  return (
    <div className="rightColumnContactImageDiv">
      <img
        src="/reading.jpg"
        alt="women reading"
        className="rightColumnContactImage"
      />
    </div>
  );
}

function LeftColumnContactSectionText() {
  return (
    <div className="leftColumnContactSection">
      <h2>Wanna elevate your insta game this year ?</h2>
      <h4>
        Get our free guide on how to build a successfull instagram profile for
        your business
      </h4>
    </div>
  );
}

function LeftColumnContactSectionForm() {
  const [form, setForm] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // Ova mozhe da se trgne vo zavisnost od toa kakva funkcija kje ima submit buttonot podolu.

    if (!form) return;
    console.log(form);
    setForm("");
  }

  return (
    <form
      action="#"
      method="post"
      className="ContactForm"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="inputField"
        placeholder="Email Address"
        value={form}
        onChange={(e) => setForm(e.target.value)}
      ></input>
      <button type="submit" className="ContactFormButton">
        Download Now
      </button>
    </form>
  );
}

//This above is the contact section //

function Footer() {
  return (
    <div className="FooterSection">
      <div className="FooterSectionContainer">
        <h2>SOCIAL ME</h2>
        <FooterMenu />
        <FooterPictures />
        <FooterSocialMedia />
        <LastButton />
      </div>
    </div>
  );
}

function FooterMenu() {
  return (
    <div className="FooterMenuContainer">
      <ul>
        <li>
          {" "}
          <a href="https://example.com">Home</a>
        </li>
        <li>
          {" "}
          <a href="https://example.com">About</a>
        </li>
        <li>
          {" "}
          <a href="https://example.com">Services</a>
        </li>
        <li>
          {" "}
          <a href="https://example.com">Courses</a>
        </li>
        <li>
          {" "}
          <a href="https://example.com">Blog</a>
        </li>
        <li>
          {" "}
          <a href="https://example.com">Contact</a>
        </li>
      </ul>
    </div>
  );
}

function FooterPictures() {
  return (
    <div className="FooterPicturesContainer">
      <div className="FirstBox">
        <h4>Lets Connect</h4>
        <h4>@Social Me</h4>
      </div>
      {FooterImages.map((eachimage) => (
        <EachImageFooter eachimage={eachimage} />
      ))}
    </div>
  );
}

function EachImageFooter({ eachimage }) {
  return (
    <div className="EachImageDiv">
      <img src={eachimage.image} className="EachImageInside"></img>
    </div>
  );
}

function FooterSocialMedia() {
  return (
    <div className="LowestFooter">
      <h4>Copyright - Social.me</h4>
      <div className="SocialMediaIcons">
        <img src="/icons8-facebook (13).svg"></img>
        <img src="/icons8-instagram (15).svg"></img>
      </div>
      <div className="PrivacyPolicy">
        <h4>
          <a href="https://example.com">Privacy</a>
        </h4>
        <h4>
          <a href="https://example.com">Cookies</a>
        </h4>
      </div>
    </div>
  );
}

function LastButton() {
  return (
    <div className="LastButtonDiv">
      <button className="LastButton">SHOP OUR FAVORITES</button>
    </div>
  );
}
