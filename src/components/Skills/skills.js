import React from 'react';
import './skills.css';
import htmlLogo from '../../assets/HTML.png';
import cssLogo from '../../assets/css-logo.png';
import javascriptLogo from '../../assets/JavaScript.png';
import expressLogo from '../../assets/express-js.png';
import codeigniterLogo from '../../assets/codeigniter.png';
import bootstrapLogo from '../../assets/bootstrap.png';
import githubLogo from '../../assets/github.png';
import reactLogo from '../../assets/react-logo.png';
import jqueryLogo from '../../assets/jQuery.png';
import socketLogo from '../../assets/socket.png';
import mysqlLogo from '../../assets/mysql.png';
import wampLogo from '../../assets/wamp-logo.png';
import canvaLogo from '../../assets/canva-logo.png';
import sqlLogo from '../../assets/sql-logo.png';
import phpLogo from '../../assets/php.png';
import nodeLogo from '../../assets/nodejs-logo.png';

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">About Me</span>
      <span className="skillDescription">
        I am extremely passionate about web and software development. I received
        intensive training at a Coding Bootcamp for four months and continued
        self-studying for a year to reach advanced levels in the tools utilized
        by full-stack developers. During the program, I passed exams, actively
        participated in daily sessions and code reviews, and acquired best
        practices knowledge in coding. Currently, I am focusing on front-end
        development. I have six years of experience in a support role at my
        previous company, but now I am pursuing my aspiration to become a web
        developer. Please see below for a list of my skills and technologies
        that I am proficient in.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <div className="skillBarText">
            <h2>Languages:</h2>
            <div className="skillBarImg">
              <img src={htmlLogo} alt="Logo of HTML Language" />
              <img src={cssLogo} alt="Logo of CSS Language" />
              <img src={javascriptLogo} alt="Logo of JavaScript Language" />
              <img src={sqlLogo} alt="Logo of SQL Language" />
              <img src={phpLogo} alt="Logo of PHP Language" />
            </div>
            <p>
              I have knowledge of HTML, CSS, JavaScript, SQL, and PHP from
              fundamentals to advanced concepts.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <div className="skillBarText">
            <h2>Frameworks:</h2>
            <section className="skillBarImg">
              <img
                className="express"
                src={expressLogo}
                alt="Logo of ExpressJS Tech"
              />
              <img src={codeigniterLogo} alt="Logo of CodeIgniter Tech" />
              <img src={bootstrapLogo} alt="Logo of Bootstrap Tech" />
            </section>
            <p>
              I am proud of my ability to understand frameworks <br /> like
              ExpressJS, CodeIgniter, and Bootstrap. <br /> I have completed
              simple to advanced assignments during my training bootcamp. <br />{" "}
              I am still learning these frameworks through self-study.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <div className="skillBarText">
            <h2>Tools:</h2>
            <section className="skillBarImg">
              <img src={mysqlLogo} alt="Logo of MySQL Tool" />
              <img src={wampLogo} alt="Logo of WAMP Tool" />
              <img src={canvaLogo} alt="Logo of Canva Tool" />
            </section>
            <p>
              I was able to use these tools to create a complete project,
              including both the frontend and backend.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <div className="skillBarText">
            <h2>Platform:</h2>
            <section className="skillBarImg">
              <img src={githubLogo} alt="Logo of GitHub Platform" />
              <img
                className="node"
                src={nodeLogo}
                alt="Logo of NodeJS Platform"
              />
            </section>
            <p>
              GitHub and NodeJS are the best tools for managing my website's
              infrastructure.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <div className="skillBarText">
            <section className="skillBarImg">
              <h2>Libraries:</h2>
              <img src={reactLogo} alt="Logo of ReactJS Library" />
              <img src={jqueryLogo} alt="Logo of jQuery Library" />
              <img src={socketLogo} alt="Logo of Socket.IO library" />
            </section>
            <p>
              During my bootcamp, I learned ReactJS, jQuery, and Socket.IO, and
              I am grateful for these libraries. <br /> I continue to use
              ReactJS in particular for my frontend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills
