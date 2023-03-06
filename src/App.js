import React, { useState } from "react";
import "./App.css";
import "./canvas.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function getImageName(imageUrl) {
  const parts = imageUrl.split('/');
  const filename = parts[parts.length - 1];
  return filename.split('.')[0];
}

function App() { 
  const [activeSection, setActiveSection] = useState("home");
  // const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = (section) => {
    setActiveSection(section);
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
    // setShowMenu(false);
  };

  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const testimonials = [
    {
      quote: "I couldn't be happier with the painting of my dog. The artist really captured his personality!",
      name: "Emily",
      avatar: require('./images/mih_mid.PNG'),
    },
    {
      quote: "The painting of my cat is stunning. I'm so glad I decided to get it done!",
      name: "Mike",
      avatar: require('./images/hen_mid.PNG'),
    },
    {
      quote: "I was blown away by the painting of my rabbit. It looks just like her!",
      name: "Sarah",
      avatar: require('./images/kylie_mid.PNG'),
    },
  ];
  

  const images = [
    require('./images/Watercolor V1.png'),
    require('./images/Watercolor V2.png'),
    require('./canvas.png'),
    require('./canvas.png'),
    require('./canvas.png'),
    require('./canvas.png'),
    require('./canvas.png'),
    require('./canvas.png'),
    require('./images/rocky-psy.png'),
    require('./images/rocky-psy-2.png'),
    require('./canvas.png'),
    require('./canvas.png'),
    require('./canvas.png'),
    require('./canvas.png'),
    require('./canvas.png'),
    require('./canvas.png'),
    require('./canvas.png'),
    require('./canvas.png'),
    require('./canvas.png'),
    require('./canvas.png'),
    require('./canvas.png'),
    require('./canvas.png'),
    require('./canvas.png'),
    require('./canvas.png'),
  ];

  const imagesPerSet = 4;
  const startIndex = activeButtonIndex * imagesPerSet;
  const endIndex = startIndex + imagesPerSet;
  const activeImages = images.slice(startIndex, endIndex);

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
    setActiveImageIndex(0);
  };

  const handleNextImage = () => {
    if (activeImageIndex < activeImages.length - 1) {
      setActiveImageIndex(activeImageIndex + 1);
    } else {
      setActiveImageIndex(0);
    }
  };


  const handlePreviousImage = () => {
    if (activeImageIndex > 0) {
      setActiveImageIndex(activeImageIndex - 1);
    } else {
      setActiveImageIndex(activeImages.length - 1);
    }
  };

  const buttonNames = ["Watercolor", "Reneissance", "Psychadelic", "The Magician", "The Sweetest", "The Wise One", "Top of the World", "Mischevious"];

  return (
        <div className="App">
          <header>
          <img className="headerimg" src={require('./logo.png')}></img>
          <div className='titletext'>PET PAINTING</div>
          <div className="nav-menu-container">
          <nav className="nav-menu">
      <div className="nav-links">
      <ul>
        <li
          className={activeSection === "home" ? "active" : ""}
          onClick={() => handleMenuClick("home")}
        >
          Home
        </li>
        <li
          className={activeSection === "how-it-works" ? "active" : ""}
          onClick={() => handleMenuClick("how-it-works")}
        >
          How it works
        </li>
        <li
          className={activeSection === "testimonials" ? "active" : ""}
          onClick={() => handleMenuClick("testimonials")}
        >
          Testimonials
        </li>
        <li
          className={activeSection === "sign-in" ? "active" : ""}
          onClick={() => handleMenuClick("sign-in")}
        >
          Sign In
        </li>
      </ul>
      </div>
    </nav>
    </div>

      </header>
          <section id="home">
          <div className="home-content">
        <h1>Capturing the essence 
    of your special pet.</h1>
        <h1>Pick from one of our 
    popular options or
    tell us your vision. 
    Our talented AI-inspired
    artists take care of 
    the rest.</h1>
      </div>
      <div className="home-image">
        <img src={require('./canvas.png')} alt="description" />
      </div>
      </section>
      <section id="how-it-works">
      <h1>How It Works</h1>
      <h2>Step 1 (Optional) Choose From One of Our Artist Created Styles</h2>
        <div className="image-gallery-container">

            <div className="button-container">
              {buttonNames.map((buttonName, index) => (
                <button
                  key={index}
                  className={activeButtonIndex === index ? "active" : ""}
                  onClick={() => handleButtonClick(index)}
                >
                  {buttonName}
                </button>
              ))}
            </div>

          <div className="image-scroll-container">
          <div className="image-container">
            <img
              src={activeImages[activeImageIndex]}
              alt={`Image ${activeImageIndex + 1}`}
            />
            <div>
            {getImageName(activeImages[activeImageIndex])}
            </div>
          </div>
          <button onClick={handlePreviousImage} className="arrow left">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button onClick={handleNextImage} className="arrow right">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        </div>
        <div className="text-box">
        <h2>Step 2: Tell us What You Want and Upload a Photo of Your Pet</h2>
        <p>For example: My dog Rambo is a serious guy so don't make him too happy. He loves to be on trails so paint him in the forest. I really like the Watercolor V2 template but please make it brighter :) </p>
        <p>Or: Just like the Psychadelic V2 template please!</p>
      </div>
      <div className='text-box'>
        <h2>Step 3: Choose Your Final Product</h2>
        <p>Our canvases and framed prints are the highest quality and arrive in 7-10 days from when you approve the photo. Once you order, our AI artists text or email your digital copy for approval within 24 hours.</p>
        <div>
        <img src={require('./images/watercolor_canvas.PNG')}
           />
           <img src={require('./images/watercolor_framed.PNG')}
           />
        </div>
      </div>

      </section>
      <section id="testimonials">
        <h1>Testimonials</h1>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <div className="testimonial-content">
                <blockquote>{testimonial.quote}</blockquote>
                <cite>{testimonial.name}</cite>
              </div>
              <div className="testimonial-avatar">
                <img src={testimonial.avatar} alt={testimonial.name} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="sign-in">
        <h1>Sign In</h1>
        {/* Sign In section content goes here */}
      </section>
    </div>
  );
}

export default App;
