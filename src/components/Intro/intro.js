import React from 'react';
import bg from '../../assets/bg.png';
import './intro.css';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Edmyr Batiancila</span> <br />
          <span className="aspiring">
            An Aspiring Web/Front-End/Software Developer
          </span>
        </span>
        <p className="introPara">
          After completing a bootcamp and pursuing self-study,
          <br /> I am ready to embark on my journey <br /> into the field of
          web/software development <br /> and make a significant impact.
        </p>
      </div>
      <div className='myImage'>
        <img src={bg} alt="background img" className="bg" />
      </div>
    </section>
  );
}

export default Intro;
