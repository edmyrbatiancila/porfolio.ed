import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/can_i_use_clone.JPG';
import Portfolio2 from '../../assets/contact-list.JPG';
import Portfolio3 from '../../assets/python-website-clone.JPG';
import Portfolio4 from '../../assets/portfolio-first-attempt.JPG';
import Portfolio5 from '../../assets/moneybutton-game.JPG';
import Portfolio6 from '../../assets/fortune-cookies.JPG';

const portfolioItems = [
  {
    imageUrl: Portfolio1,
    linkUrl: "https://edmyrbatiancila.github.io/Can_I_Use_Clone/",
    altText: "first Portfolio Can I Use Website Clone",
    titleText: "Can I Use Website Cloning",
  },
  {
    imageUrl: Portfolio2,
    linkUrl: "https://contactlistv2.netlify.app/",
    altText: "Second Portfolio Contact Lists",
    titleText: "Contact Lists",
  },
  {
    imageUrl: Portfolio3,
    linkUrl: "https://edmyrbatiancila.github.io/Python_Website_Clone/",
    alText: "Third Portfolio Python Website Cloning",
    titleText: "Python Website Clone",
  },
  {
    imageUrl: Portfolio4,
    linkUrl: "https://edmyr-portfolio.netlify.app/",
    alText: "Fourth Portfolio Created Portfolio first Attempt",
    titleText: "Portfolio First Attempt",
  },
  {
    imageUrl: Portfolio5,
    linkUrl: "https://money-button-game.netlify.app/",
    alText: "Fifth Portfolio Money Button Game",
    titleText: "Money Button Game",
  },
  {
    imageUrl: Portfolio6,
    linkUrl: "https://edmyrbatiancila.github.io/fortune_cookies/",
    alText: "Sixth Portfolio Fortune Cookies",
    titleText: "Fortune Cookies",
  },
];


const Works = () => {
  const handleImageClick = (linkUrl) => {
    window.open(linkUrl, '_blank');
  }
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I am passionate about what I do. The images below showcase some of the
        work I have created to demonstrate the skills I have gained from 4
        months of coding bootcamp and 1 year of self-study. Although I still
        have more to learn, I will never stop striving to expand my knowledge
        and abilities.
      </span>
      <div className="worksImgs">
        {portfolioItems.map((item, index) => (
          <img key={index} src={item.imageUrl} alt={item.alText} className='worksImg' title={item.titleText} onClick={() => handleImageClick(item.linkUrl)} />
        ))}
      </div>
    </section>
  );
}

export default Works;
