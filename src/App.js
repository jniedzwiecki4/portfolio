import React, { useState, useRef, useEffect } from "react";
import "./App.css";

import img1 from "./images/img1.JPG";
import react from "./images/react.png";
import react2 from "./images/react2.png";
import jest from "./images/jest.jpg";
import redux from "./images/redux.png";
import redux2 from "./images/redux2.png";
import tsandjs from "./images/tsandjs.png";
import sass from "./images/sass.svg";
import wordpress from "./images/wordpress.png";
import adobe from "./images/adobe.jpg";
import nodejs from "./images/nodejs.png";
import db from "./images/db.jpg";
import firebase from "./images/firebase.png";
import git from "./images/git.png";
import click from "./images/click.png";
import swipe from "./images/swipe.png";
import graphql from "./images/GraphQL.png";
import gatsby from "./images/gatsby.png";
import next from "./images/next.png";
import gsapLogo from "./images/gsap.png";
import neonPortrait from "./images/portrait2.jpg";
import front from "./images/projects/vdo/Front.png";
import shop from "./images/projects/vdo/Shop.png";
import contact from "./images/projects/vdo/Contact.png";
import signin from "./images/projects/vdo/SingIn.png";
import payment from "./images/projects/vdo/Payment.png";
import chat from "./images/projects/ChatApp/Front2.png";
import login from "./images/projects/ChatApp/Login.png";
import register from "./images/projects/ChatApp/Register.png";
import allPosts from "./images/projects/Blog/Front.png";
import allPosts2 from "./images/projects/Blog/Front2.png";
import singlePost from "./images/projects/Blog/Single.png";
import styledComponents from "./images/styledComponents.jpg";
import googleApi from "./images/Google-API.jpg";
import stripe from "./images/stripe.png";
import semanticUI from "./images/semanticUI.png";
import typescript from "./images/typescript.png";
import reactNative from "./images/reactNative.png";
import mongodb from "./images/mongodb.png";
import express from "./images/express.png";
import freelancer1 from "./images/projects/Freelancer/front.png";
import freelancer2 from "./images/projects/Freelancer/front2.png";
import freelancer3 from "./images/projects/Freelancer/dashboard.png";
import freelancer4 from "./images/projects/Freelancer/freelancers.png";
import freelancer5 from "./images/projects/Freelancer/offerts.png";
import freelancer6 from "./images/projects/Freelancer/signin.png";
import freelancer7 from "./images/projects/Freelancer/signup.png";
import logoPortfolio from "./images/LogoPortfolio4.png";
import gif from "./images/gif2.gif";

import gsap from "gsap";
import {
  Power3,
  Power1,
  Bounce,
  SteppedEase,
  Elastic,
  Circ,
  Sine,
  TweenMax,
} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Carousel from "react-elastic-carousel";

gsap.registerPlugin(ScrollTrigger);

function App() {
  let intro = useRef(null);
  let introTrigger = useRef(null);
  let skill = useRef([null]);
  let theme = useRef([null]);
  let clickButton = useRef(null);
  let clickButton2 = useRef([null]);
  let swipeButton = useRef([null]);
  let swipeButtonMove = useRef(null);
  let project = useRef([null]);
  let socialMedia = useRef([null]);
  let navTrigger = useRef([null]);
  let navTriggerBox = useRef([null]);

  let logo = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      intro,
      { autoAlpha: 0, y: -10 },
      {
        autoAlpha: 0.9,
        duration: 1,
        ease: SteppedEase.easeOut,
        y: 0,

        yoyo: true,
        scrollTrigger: {
          trigger: introTrigger,
          scrub: 1,
          toggleActions: "restart pause resume none",
          start: "-900px 60%",
          end: "-900px 70%",
        },
      }
    );
    gsap.fromTo(
      theme.current[0],
      { autoAlpha: 0, y: -5 },
      {
        autoAlpha: 1,
        duration: 2,
        ease: Elastic.easeIn,
        y: 0,

        yoyo: true,
        scrollTrigger: {
          trigger: theme.current[0],
          scrub: 1,
          toggleActions: "restart pause resume none",
          start: "top 80%",
          end: "top 75%",
        },
      }
    );
    gsap.fromTo(
      theme.current[1],
      { autoAlpha: 0, y: -5 },
      {
        autoAlpha: 1,
        duration: 2,
        ease: Elastic.easeIn,
        y: 0,

        yoyo: true,
        scrollTrigger: {
          trigger: theme.current[1],
          scrub: 1,
          toggleActions: "restart pause resume none",
          start: "top 80%",
          end: "top 75%",
        },
      }
    );
    gsap.fromTo(
      theme.current[2],
      { autoAlpha: 0, y: -5 },
      {
        autoAlpha: 1,
        duration: 2,
        ease: Elastic.easeIn,
        y: 0,

        yoyo: true,
        scrollTrigger: {
          trigger: theme.current[2],
          scrub: 1,
          toggleActions: "restart pause resume none",
          start: "top 80%",
          end: "top 75%",
        },
      }
    );
    gsap.fromTo(
      theme.current[3],
      { autoAlpha: 0, y: -5 },
      {
        autoAlpha: 1,
        duration: 2,
        ease: Elastic.easeIn,
        y: 0,

        yoyo: true,
        scrollTrigger: {
          trigger: theme.current[3],
          scrub: 1,
          toggleActions: "restart pause resume none",
          start: "top 80%",
          end: "top 75%",
        },
      }
    );
    gsap.fromTo(
      theme.current[4],
      { autoAlpha: 0, y: -5 },
      {
        autoAlpha: 1,
        duration: 2,
        ease: Elastic.easeIn,
        y: 0,

        yoyo: true,
        scrollTrigger: {
          trigger: theme.current[4],
          scrub: 1,
          toggleActions: "restart pause resume none",
          start: "top 80%",
          end: "top 75%",
        },
      }
    );
    gsap.fromTo(
      clickButton,
      { y: 10 },
      {
        duration: 1,
        ease: SteppedEase.easeOut,
        y: 20,
        repeat: -1,
        yoyo: true,
      }
    );
    gsap.fromTo(
      swipeButtonMove,
      { y: 10 },
      {
        duration: 1,
        ease: SteppedEase.easeOut,
        y: 20,
        repeat: -1,
        yoyo: true,
      }
    );
    gsap.fromTo(
      clickButton2.current[0],
      { opacity: 0 },
      {
        duration: 5,
        opacity: 1,
        ease: Bounce.easeInOut,
        stagger: 5,

        scrollTrigger: {
          trigger: clickButton2.current[0],
          scrub: 1,
          toggleActions: "restart pause resume none",
          start: "top 60%",
          end: "bottom 70%",
        },
      }
    );
    gsap.fromTo(
      clickButton2.current[1],
      { opacity: 0 },
      {
        duration: 5,
        opacity: 1,
        ease: Bounce.easeInOut,
        stagger: 5,

        scrollTrigger: {
          trigger: clickButton2.current[1],
          scrub: 1,
          toggleActions: "restart pause resume none",
          start: "top 60%",
          end: "bottom 70%",
        },
      }
    );
    gsap.fromTo(
      swipeButton.current[0],
      { opacity: 0 },
      {
        duration: 5,
        opacity: 1,
        ease: Bounce.easeInOut,
        stagger: 5,

        scrollTrigger: {
          trigger: swipeButton.current[0],
          scrub: 1,
          toggleActions: "restart pause resume none",
          start: "top 60%",
          end: "bottom 70%",
        },
      }
    );
    gsap.fromTo(
      swipeButton.current[1],
      { opacity: 0 },
      {
        duration: 5,
        opacity: 1,
        ease: Bounce.easeInOut,
        stagger: 5,

        scrollTrigger: {
          trigger: swipeButton.current[1],
          scrub: 1,
          toggleActions: "restart pause resume none",
          start: "top 60%",
          end: "bottom 70%",
        },
      }
    );
    gsap.fromTo(
      skill.current,
      { autoAlpha: 0, y: -50 },
      {
        duration: 3,
        autoAlpha: 1,
        ease: Power3.easeOut,
        y: 0,
        stagger: 0.5,

        scrollTrigger: {
          trigger: skill.current,
          scrub: 1,
          toggleActions: "restart pause resume none",
          start: "top bottom",
          end: "bottom 90%",
          endTrigger: skill.current[12],
        },
      }
    );
    gsap.fromTo(
      project.current,
      { autoAlpha: 0, y: -50 },
      {
        duration: 1,
        autoAlpha: 1,
        ease: Power3.easeOut,
        y: 0,
        stagger: 2,

        scrollTrigger: {
          trigger: project.current,
          scrub: 1,
          toggleActions: "restart pause resume none",
          start: "center bottom",
          end: "bottom 90%",
          endTrigger: project.current[8],
        },
      }
    );
    gsap.fromTo(
      socialMedia.current,
      { autoAlpha: 0, y: -50 },
      {
        duration: 1,
        autoAlpha: 1,
        ease: Power3.easeOut,
        y: 0,
        stagger: 2,

        scrollTrigger: {
          trigger: socialMedia.current,
          scrub: 1,
          toggleActions: "restart pause resume none",
          start: "center bottom",
          end: "center 90%",
          endTrigger: socialMedia.current[2],
        },
      }
    );
  }, []);

  const size = useWindowSize();

  return (
    <div className="App">
      <div className="slide one" id="AboutMe">
        <header className="App-header">
          <img src={gif} alt="" className="logoAbs gif" />

          <img src={logoPortfolio} alt="" className="logoAbs logo" />
        </header>
      </div>
      <div>
        <nav
          ref={(el) => {
            intro = el;
          }}
        >
          <a
            className="a"
            href="#AboutMe"
            id="navAboutMe"
            ref={(el) => {
              navTrigger.current[0] = el;
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            About Me
          </a>
          {/* <a className='a' href='#Motivation'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Motivation
          </a> */}
          <a
            className="a"
            href="#SkillSet"
            ref={(el) => {
              navTrigger.current[1] = el;
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            SkillSet
          </a>
          <a
            className="a"
            href="#projects"
            ref={(el) => {
              navTrigger.current[2] = el;
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Projects
          </a>
          <a
            className="a"
            href="#contact"
            id="navAboutMe"
            style={{ marginRight: "15px" }}
            ref={(el) => {
              navTrigger.current[0] = el;
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Contact
          </a>
        </nav>

        <div
          className="slide two tech"
          ref={(el) => {
            navTriggerBox.current[0] = el;
          }}
        >
          <section
            className="sectionSkills"
            ref={(el) => {
              theme.current[3] = el;
            }}
          >
            <div className="skillsDiv">
              <h2 className="skills" id="aboutme">
                <span className="skillsSpan">A</span>bout Me
              </h2>
            </div>
          </section>

          <div className="container">
            <div
              ref={(el) => {
                theme.current[2] = el;
              }}
              className="imgbox"
            >
              <img
                src={neonPortrait}
                // style={{
                //   width: size.width > 525 ? '525px' : '350px',
                //   height: size.width > 525 ? '600px' : '400px',
                // }}
                alt=""
              />
            </div>
            <div className="textbox">
              <h2>Bio</h2>
              <p>
                I am student of Computer Science and Econometrics at AGH
                Uniersity of Science and Technology. Few years ago I wanted to
                start a blog about automation trading in the stock market,
                because at that time I was learning and writing in MQL4 language
                (which is very similar to C++ or C) simple trading bots. I
                decided to make it in Wordpress, but I was not content of my
                work. I wanted to make it look better, so I started learning
                front-end technologies. After a while, I realized that building
                websites and learning everything about it, was much more
                interesting than my previous job. My amateur 'career' as web
                developer started two years ago with writing plugins and custom
                themes in Wordpress CMS. I wanted to know more, so after
                learning JQuery, I switched to another front-end framework,
                React, which I am currently using for my projects. Since January
                2019 I have been constantly expanding my knowledge in the field
                of back-end and front-end technologies. My goal is to become a
                full-stack developer in a future.{" "}
              </p>
              <p>
                I have more than 1 year experience in commercial projects as a
                software developer. I am tools analyst at Capgemini and
                full-stack developer at Devutnia. I was involved in
                international projects. My biggest adventure was data
                transformation project for one of the biggest airplane company.
                That experience taught me how to conduct conversation with
                clients and contribute software engineering expertise, from
                requirements through deployment.
              </p>
              <p>
                Beside, studying at university and writing websites I am
                passionate about olympic weightlifting and powerlifting. I like
                learning foreign languages (currently Spanish, which I practice
                until middle school), but also I cut my teeth on Russian and
                German. In my free time I try my hand at photography and drawing
                art, watch movies and read a lot of books on theorethical
                physics, philosophy and philosophy of science.
              </p>
            </div>
          </div>
        </div>

        <div
          className="slide three"
          ref={(el) => {
            introTrigger = el;
          }}
          id="Motivation"
        ></div>
        <div
          className="slide four"
          id="SkillSet"
          ref={(el) => {
            navTriggerBox.current[1] = el;
          }}
        >
          <section
            className="sectionSkills"
            ref={(el) => {
              theme.current[0] = el;
            }}
          >
            <div className="skillsDiv">
              <h2 className="skills" id="skills">
                <span className="skillsSpan">S</span>kills
              </h2>
            </div>
          </section>
          <div style={{ color: "white", width: "100%" }}>
            <img
              ref={(el) => {
                clickButton = el;
                clickButton2.current[0] = el;
              }}
              style={{ width: "50px", height: "50px", margin: "10px" }}
              src={click}
              alt=""
            />

            <span
              ref={(el) => {
                clickButton2.current[1] = el;
              }}
            >
              If you are on tablet or phone{" "}
              <span style={{ letterSpacing: "2px", fontSize: "20px" }}>
                click
              </span>{" "}
              on skill icon
            </span>
          </div>
          <div
            className="containerSkill"
            ref={(el) => {
              skill.current[0] = el;
            }}
          >
            <div className="card">
              <div className="imgBox">
                <img src={react} alt="" />
              </div>
              <div className="content">
                <h2>React</h2>
                <p>
                  I am fluent in writing functional and class components, using
                  React Hooks and Higher-Order Components, and making use of
                  React-Router. I have been using Material-UI and
                  React-Bootstrap in my projects. I know basics of React Native.
                </p>
              </div>
            </div>
          </div>
          <div
            className="containerSkill"
            ref={(el) => {
              skill.current[1] = el;
            }}
          >
            <div className="card">
              <div className="imgBox">
                <img src={redux} alt="" />
              </div>
              <div className="content">
                <h2>Redux</h2>
                <p>
                  I know principles of writing redux actions, reducers and
                  store. I am capable of using asynchronous actions and
                  middleware.{" "}
                </p>
              </div>
            </div>
          </div>
          <div
            className="containerSkill"
            ref={(el) => {
              skill.current[2] = el;
            }}
          >
            <div className="card">
              <div className="imgBox">
                <img src={jest} alt="" />
              </div>
              <div className="content">
                <h2>Jest, Enzyme and Testing</h2>
                <p>
                  I understand diferences between Unit, Integration and
                  Functional Testing. I know how to test functional and
                  statefull components as well as connected components to redux
                  store, actions or reducers.{" "}
                </p>
              </div>
            </div>
          </div>
          <div
            className="containerSkill"
            ref={(el) => {
              skill.current[3] = el;
            }}
          >
            <div className="card">
              <div className="imgBox">
                <img src={tsandjs} alt="" />
              </div>
              <div className="content">
                <h2>JavaScript and basics of TypeScript</h2>
                <p>
                  I am fluent in coding in modern JavaScript. I am currently
                  learning nuances of TypeScript. I already know how to
                  implement TSX in my react projects and how to provide typing
                  in components, hooks and redux actions and reducers.{" "}
                </p>
              </div>
            </div>
          </div>
          <div
            className="containerSkill"
            ref={(el) => {
              skill.current[4] = el;
            }}
          >
            <div className="card" id="scss">
              <div className="imgBox">
                <img src={sass} alt="" />
              </div>
              <div className="content">
                <h2>CSS, Sass, BEM and StyledComponents</h2>
                <p>
                  I can style my website with plain css as well as in Sass. I am
                  usually using StyledComponents in my projects, but also I am
                  able to use BEM methodology. All of my websites have been
                  complied with responsive design principles.{" "}
                </p>
              </div>
            </div>
          </div>
          <div
            className="containerSkill"
            ref={(el) => {
              skill.current[5] = el;
            }}
          >
            <div className="card">
              <div className="imgBox">
                <img src={wordpress} alt="" />
              </div>
              <div className="content">
                <h2>Wordpress</h2>
                <p>
                  I know how to build custom theme and how to develop wordpress
                  plugins. I have knowledge of modern PHP and object oriented
                  programing (OOP) and how to deal with MySQL database. I am
                  aware of codex and Wordpress Core.
                </p>
              </div>
            </div>
          </div>
          <div
            className="containerSkill"
            ref={(el) => {
              skill.current[6] = el;
            }}
          >
            <div className="card">
              <div className="imgBox">
                <img src={adobe} alt="" />
              </div>
              <div className="content">
                <h2>Adobe Photoshop, Ilustrator and Adobe XD</h2>
                <p>
                  I can do simple svg graphics, and have been using Photoshop in
                  my websites for better UI. I have been experimenting with
                  basic usage of Adobe XD.{" "}
                </p>
              </div>
            </div>
          </div>
          <div
            className="containerSkill"
            ref={(el) => {
              skill.current[7] = el;
            }}
          >
            <div className="card">
              <div className="imgBox">
                <img src={nodejs} alt="" />
              </div>
              <div className="content">
                <h2>Node.js and Express.js</h2>
                <p>
                  I know how to make use of of Node.js REST API and web
                  framework Express.js (including middleware, routing and error
                  handling) and mix it with MongoDb{" "}
                </p>
              </div>
            </div>
          </div>
          <div
            className="containerSkill"
            ref={(el) => {
              skill.current[8] = el;
            }}
          >
            <div className="card">
              <div className="imgBox">
                <img src={firebase} alt="" />
              </div>
              <div className="content">
                <h2>Firebase</h2>
                <p>
                  I have been using firebase authentication, realtime database,
                  firestore cloud and storage.
                </p>
              </div>
            </div>
          </div>
          <div
            className="containerSkill"
            ref={(el) => {
              skill.current[9] = el;
            }}
          >
            <div className="card">
              <div className="imgBox">
                <img src={db} alt="" />
              </div>
              <div className="content">
                <h2>MongoDb, MySQL and MS SQL queries</h2>
                <p>
                  I know how to integrate databases in my web projects. I have
                  been using relational and nonrelational databases.
                </p>
              </div>
            </div>
          </div>
          <div
            className="containerSkill"
            ref={(el) => {
              skill.current[10] = el;
            }}
          >
            <div className="card">
              <div className="imgBox">
                <img src={git} alt="" />
              </div>
              <div className="content">
                <h2>GIT</h2>
                <p>
                  I have been using GIT for all of my projects, I know basic
                  commands for version control.
                </p>
              </div>
            </div>
          </div>
          <div
            className="containerSkill"
            ref={(el) => {
              skill.current[11] = el;
            }}
          >
            <div className="card">
              <div className="imgBox">
                <img src={graphql} alt="" />
              </div>
              <div className="content">
                <h2>GraphQL and Apollo</h2>
                <p>
                  I know how to fetch data and how to use Apollo Client. I am
                  currently building website back-end with this technology which
                  you can find on my github.{" "}
                </p>
              </div>
            </div>
          </div>
          <div
            className="containerSkill"
            ref={(el) => {
              skill.current[12] = el;
            }}
          >
            <div className="card">
              <div className="imgBox">
                <img src={gatsby} alt="" />
              </div>
              <div className="content">
                <h2>Gatsby</h2>
                <p>
                  I know how gatsby is building blocks and how to deal with
                  plugins such as transformer and source-filesystem. I can
                  programmatically create pages with slugs. Moreover I have been
                  using GraphQL development environment and know how gatsby is
                  storing data.
                </p>
              </div>
            </div>
          </div>
          <div
            className="containerSkill"
            ref={(el) => {
              skill.current[13] = el;
            }}
          >
            <div className="card">
              <div className="imgBox">
                <img src={gsapLogo} alt="" />
              </div>
              <div className="content">
                <h2>Animations</h2>
                <p>
                  I usually use Gsap for animations (including this site), but I
                  also know how to deal with other libraries like Framer Motion,
                  React-Transition-Group or React Motion. I know basics of
                  Three.js and in the future I want to deepen my knowledge in 3D
                  graphics and animations.{" "}
                </p>
              </div>
            </div>
          </div>
          <div
            className="containerSkill"
            ref={(el) => {
              skill.current[14] = el;
            }}
          >
            <div className="card">
              <div className="imgBox">
                <img src={next} alt="" />
              </div>
              <div className="content">
                <h2>Next.js</h2>
                <p>
                  I know advantages of SSR (Server Side Rendering), how to
                  migrate React project to Next.js and how to integrate rich
                  snippets in website.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="slide five "
          id="projects"
          ref={(el) => {
            navTriggerBox.current[2] = el;
          }}
        >
          <section className="sectionSkills">
            <div
              className="skillsDiv"
              ref={(el) => {
                theme.current[1] = el;
              }}
            >
              <h2 className="skills" id="projects">
                Projects
              </h2>
            </div>
          </section>
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              width: "100%",
              paddingBottom: "50px",
            }}
          >
            <img
              ref={(el) => {
                swipeButton.current[0] = el;
                swipeButtonMove = el;
              }}
              style={{ width: "50px", height: "50px", margin: "10px" }}
              src={swipe}
              alt=""
            />

            <span
              className="help"
              ref={(el) => {
                swipeButton.current[1] = el;
              }}
            >
              You can{" "}
              <span
                className="helpDan"
                style={{ letterSpacing: "2px", fontSize: "20px" }}
              >
                swipe
              </span>{" "}
              or{" "}
              <span style={{ letterSpacing: "2px", fontSize: "20px" }}>
                click
              </span>{" "}
              on slider
            </span>
          </div>
          <div className="carousel">
            <div
              className="introductionField"
              ref={(el) => {
                project.current[0] = el;
              }}
            >
              <h2>E-Commerce Site</h2>
              <div>
                This is my latest online store project made in React and Redux.
                For this project I made back-end in firestore and used firebase
                authentication. Firstly I styled it with SCSS, but then I
                rewrote entire projects to StyledComponents. In addition,
                contact page is using Google Maps API and site is connected to
                Stripe API to mimic payment.
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    margin: "10px 0px 30px 0px",
                  }}
                >
                  Technologies:
                </div>
                <div className="gridSkill">
                  <div className="containerSkill2" style={{ width: "55px" }}>
                    <div className="card2">
                      <div className="imgBox2">
                        <img src={react} alt="" />
                      </div>
                      <div className="content2" style={{ marginLeft: "-35px" }}>
                        <h2>React</h2>
                      </div>
                    </div>
                  </div>
                  <div className="containerSkill2">
                    <div className="card2">
                      <div className="imgBox2">
                        <img src={redux} alt="" />
                      </div>
                      <div className="content2" style={{ marginLeft: "-35px" }}>
                        <h2>Redux</h2>
                      </div>
                    </div>
                  </div>
                  <div className="containerSkill2">
                    <div className="card2">
                      <div className="imgBox2">
                        <img src={firebase} alt="" style={{ width: "50px" }} />
                      </div>
                      <div className="content2" style={{ marginLeft: "-40px" }}>
                        <h2>Firebase</h2>
                      </div>
                    </div>
                  </div>
                  <div className="containerSkill2" style={{ width: "145px" }}>
                    <div className="card2">
                      <div
                        className="imgBox2"
                        style={{ width: "100px", left: "-50px" }}
                      >
                        <img src={styledComponents} alt="" />
                      </div>
                      <div className="content2" style={{ marginLeft: "-80px" }}>
                        <h2>StyledComponents</h2>
                      </div>
                    </div>
                  </div>
                  <div className="containerSkill2" style={{ width: "105px" }}>
                    <div className="card2">
                      <div
                        className="imgBox2"
                        style={{ width: "100px", left: "-50px" }}
                      >
                        <img src={googleApi} alt="" />
                      </div>
                      <div className="content2">
                        <h2>GoogleApi</h2>
                      </div>
                    </div>
                  </div>
                  <div className="containerSkill2" style={{ width: "105px" }}>
                    <div className="card2">
                      <div
                        className="imgBox2"
                        style={{ width: "100px", left: "-50px" }}
                      >
                        <img src={stripe} alt="" />
                      </div>
                      <div className="content2" style={{ marginLeft: "-40px" }}>
                        <h2>Stripe</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Links:
                </div>
                <div
                  style={{
                    display: "flex",
                    wrap: "wrap",
                    padding: "5px",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="shadowCopyrightBox"
                    style={{
                      display: "flex",
                      wrap: "wrap",
                      borderRadius: "50px",
                      width: "100px",
                      margin: "5px",
                    }}
                  >
                    <a
                      className="a3"
                      style={{ fontSize: "50px" }}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/nikub444/e-commerce-site"
                    >
                      <i
                        className="fab fa-github-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                  <div
                    className="shadowCopyrightBox"
                    style={{
                      display: "flex",
                      wrap: "wrap",
                      borderRadius: "50px",
                      width: "100px",
                      margin: "5px",
                    }}
                  >
                    <a
                      className="a3"
                      style={{
                        fontSize: "50px",
                        padding: "15px 30px 15px 25px",
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://vdo-e-commerce.herokuapp.com/"
                    >
                      <i className="fas fa-globe"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={(el) => {
                project.current[1] = el;
              }}
            >
              {size.width > 520 ? (
                <Carousel
                  easing="cubic-bezier(0.0, 0.0, 0.58, 1.0)"
                  transitionMs={700}
                  itemsToShow={1}
                  pagination={false}
                  //enableAutoPlay
                  //autoPlaySpeed={5500}
                  style={{
                    backgroundColor: " black",
                    width:
                      size.width > 950
                        ? "900px"
                        : size.width > 700
                        ? "650px"
                        : size.width > 520
                        ? "500px"
                        : "350px",
                    height:
                      size.width > 950
                        ? "600px"
                        : size.width > 700
                        ? "450px"
                        : "300px",
                    margin: "20px",
                  }}
                >
                  <div>
                    <img
                      src={front}
                      style={{
                        width:
                          size.width > 950
                            ? "750px"
                            : size.width > 700
                            ? "500px"
                            : size.width > 520
                            ? "400px"
                            : "200px",
                        height:
                          size.width > 950
                            ? "600px"
                            : size.width > 700
                            ? "450px"
                            : "300px",
                      }}
                      alt="front"
                    />
                  </div>
                  <div>
                    <img
                      src={shop}
                      style={{
                        width:
                          size.width > 950
                            ? "750px"
                            : size.width > 700
                            ? "500px"
                            : size.width > 520
                            ? "400px"
                            : "200px",
                        height:
                          size.width > 950
                            ? "600px"
                            : size.width > 700
                            ? "450px"
                            : "300px",
                      }}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={contact}
                      style={{
                        width:
                          size.width > 950
                            ? "750px"
                            : size.width > 700
                            ? "500px"
                            : size.width > 520
                            ? "400px"
                            : "200px",
                        height:
                          size.width > 950
                            ? "600px"
                            : size.width > 700
                            ? "450px"
                            : "300px",
                      }}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={signin}
                      style={{
                        width:
                          size.width > 950
                            ? "750px"
                            : size.width > 700
                            ? "500px"
                            : size.width > 520
                            ? "400px"
                            : "200px",
                        height:
                          size.width > 950
                            ? "600px"
                            : size.width > 700
                            ? "450px"
                            : "300px",
                      }}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={payment}
                      style={{
                        width:
                          size.width > 950
                            ? "750px"
                            : size.width > 700
                            ? "500px"
                            : size.width > 520
                            ? "400px"
                            : "200px",
                        height:
                          size.width > 950
                            ? "600px"
                            : size.width > 700
                            ? "450px"
                            : "300px",
                      }}
                      alt=""
                    />
                  </div>
                </Carousel>
              ) : null}
            </div>
          </div>
          <div className="carousel" style={{ flexWrap: "wrap-reverse" }}>
            <div
              ref={(el) => {
                project.current[3] = el;
              }}
            >
              {size.width > 520 ? (
                <Carousel
                  easing="cubic-bezier(0.0, 0.0, 0.58, 1.0)"
                  transitionMs={700}
                  itemsToShow={1}
                  pagination={false}
                  //enableAutoPlay
                  //autoPlaySpeed={5500}
                  style={{
                    backgroundColor: " black",
                    width:
                      size.width > 950
                        ? "900px"
                        : size.width > 700
                        ? "650px"
                        : size.width > 520
                        ? "500px"
                        : "350px",
                    height:
                      size.width > 950
                        ? "600px"
                        : size.width > 700
                        ? "450px"
                        : "300px",
                    margin: "20px",
                  }}
                >
                  <div>
                    <img
                      src={chat}
                      style={{
                        width:
                          size.width > 950
                            ? "750px"
                            : size.width > 700
                            ? "500px"
                            : size.width > 520
                            ? "400px"
                            : "200px",
                        height:
                          size.width > 950
                            ? "600px"
                            : size.width > 700
                            ? "450px"
                            : "300px",
                      }}
                      alt="front"
                    />
                  </div>
                  <div>
                    <img
                      src={login}
                      style={{
                        width:
                          size.width > 950
                            ? "750px"
                            : size.width > 700
                            ? "500px"
                            : size.width > 520
                            ? "400px"
                            : "200px",
                        height:
                          size.width > 950
                            ? "600px"
                            : size.width > 700
                            ? "450px"
                            : "300px",
                      }}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={register}
                      style={{
                        width:
                          size.width > 950
                            ? "750px"
                            : size.width > 700
                            ? "500px"
                            : size.width > 520
                            ? "400px"
                            : "200px",
                        height:
                          size.width > 950
                            ? "600px"
                            : size.width > 700
                            ? "450px"
                            : "300px",
                      }}
                      alt=""
                    />
                  </div>
                </Carousel>
              ) : null}
            </div>
            <div
              className="introductionField"
              ref={(el) => {
                project.current[2] = el;
              }}
            >
              <h2>Online Chat</h2>
              <div>
                Its my third version of this kind of aplication. Firstly, I used
                local storage for storing data, but it wasn't the best way to
                handle that, so I rewrote it to redux. Current version of app is
                storing data in Realtime Database and Storage from Firebase. App
                also uses Firebase Authentication. For frontend I have used
                React Semantic UI framework. Basic fuctionalities of this site
                are: sending messages, images, changing color themes and more!
                Works only on desktop and tablet.{" "}
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    margin: "10px 0px 30px 0px",
                  }}
                >
                  Technologies:
                </div>
                <div className="gridSkill">
                  <div className="containerSkill2" style={{ width: "55px" }}>
                    <div className="card2">
                      <div className="imgBox2">
                        <img src={react} alt="" />
                      </div>
                      <div className="content2" style={{ marginLeft: "-35px" }}>
                        <h2>React</h2>
                      </div>
                    </div>
                  </div>
                  <div className="containerSkill2">
                    <div className="card2">
                      <div className="imgBox2">
                        <img src={redux} alt="" />
                      </div>
                      <div className="content2" style={{ marginLeft: "-35px" }}>
                        <h2>Redux</h2>
                      </div>
                    </div>
                  </div>
                  <div className="containerSkill2">
                    <div className="card2">
                      <div className="imgBox2">
                        <img src={firebase} alt="" style={{ width: "50px" }} />
                      </div>
                      <div className="content2" style={{ marginLeft: "-40px" }}>
                        <h2>Firebase</h2>
                      </div>
                    </div>
                  </div>
                  <div className="containerSkill2" style={{ width: "85px" }}>
                    <div className="card2">
                      <div className="imgBox2">
                        <img src={semanticUI} alt="" />
                      </div>
                      <div className="content2" style={{ marginLeft: "-55px" }}>
                        <h2>SemanticUI</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Links:
                </div>
                <div
                  style={{
                    display: "flex",
                    wrap: "wrap",
                    padding: "5px",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="shadowCopyrightBox"
                    style={{
                      display: "flex",
                      wrap: "wrap",
                      borderRadius: "50px",
                      width: "100px",
                      margin: "5px",
                    }}
                  >
                    <a
                      className="a3"
                      style={{ fontSize: "50px" }}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/nikub444/Online-Chat"
                    >
                      <i
                        className="fab fa-github-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                  <div
                    className="shadowCopyrightBox"
                    style={{
                      display: "flex",
                      wrap: "wrap",
                      borderRadius: "50px",
                      width: "100px",
                      margin: "5px",
                    }}
                  >
                    <a
                      className="a3"
                      style={{
                        fontSize: "50px",
                        padding: "15px 30px 15px 25px",
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://conector-chat.web.app/"
                    >
                      <i className="fas fa-globe"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel">
            <div
              className="introductionField"
              ref={(el) => {
                project.current[4] = el;
              }}
            >
              <h2>Science Blog</h2>
              <div>
                Its simple blog made in Gatsby. I used gasby feature to create
                programmatically new pages with unique slug. Whole blog is wrote
                in styling components and for backend it uses GraphiQL
                development environment for building queries. Blog can be
                easilly expanded and changed, because I used transformer-plugin
                to convert mdx to posts and used global typography.{" "}
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    margin: "10px 0px 30px 0px",
                  }}
                >
                  Technologies:
                </div>
                <div className="gridSkill">
                  <div className="containerSkill2" style={{ width: "55px" }}>
                    <div className="card2">
                      <div className="imgBox2">
                        <img src={react} alt="" />
                      </div>
                      <div className="content2" style={{ marginLeft: "-35px" }}>
                        <h2>React</h2>
                      </div>
                    </div>
                  </div>
                  <div className="containerSkill2">
                    <div className="card2">
                      <div className="imgBox2">
                        <img src={gatsby} alt="" />
                      </div>
                      <div className="content2" style={{ marginLeft: "-40px" }}>
                        <h2>Gatsby</h2>
                      </div>
                    </div>
                  </div>
                  <div className="containerSkill2">
                    <div className="card2">
                      <div className="imgBox2">
                        <img src={graphql} alt="" />
                      </div>
                      <div className="content2" style={{ marginLeft: "-40px" }}>
                        <h2>GraphQL</h2>
                      </div>
                    </div>
                  </div>
                  <div className="containerSkill2" style={{ width: "145px" }}>
                    <div className="card2">
                      <div
                        className="imgBox2"
                        style={{ width: "100px", left: "-50px" }}
                      >
                        <img src={styledComponents} alt="" />
                      </div>
                      <div className="content2" style={{ marginLeft: "-80px" }}>
                        <h2>StyledComponents</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Links:
                </div>
                <div
                  style={{
                    display: "flex",
                    wrap: "wrap",
                    padding: "5px",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="shadowCopyrightBox"
                    style={{
                      display: "flex",
                      wrap: "wrap",
                      borderRadius: "50px",
                      width: "100px",
                      margin: "5px",
                    }}
                  >
                    <a
                      className="a3"
                      style={{ fontSize: "50px" }}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/nikub444/gatsby-blog"
                    >
                      <i
                        className="fab fa-github-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                  <div
                    className="shadowCopyrightBox"
                    style={{
                      display: "flex",
                      wrap: "wrap",
                      borderRadius: "50px",
                      width: "100px",
                      margin: "5px",
                    }}
                  >
                    <a
                      className="a3"
                      style={{
                        fontSize: "50px",
                        padding: "15px 30px 15px 25px",
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://gatsby-blog-project.netlify.app/"
                    >
                      <i className="fas fa-globe"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={(el) => {
                project.current[5] = el;
              }}
            >
              {size.width > 520 ? (
                <Carousel
                  easing="cubic-bezier(0.0, 0.0, 0.58, 1.0)"
                  transitionMs={700}
                  itemsToShow={1}
                  pagination={false}
                  //enableAutoPlay
                  //autoPlaySpeed={5500}
                  style={{
                    backgroundColor: " black",
                    width:
                      size.width > 950
                        ? "900px"
                        : size.width > 700
                        ? "650px"
                        : size.width > 520
                        ? "500px"
                        : "350px",
                    height:
                      size.width > 950
                        ? "600px"
                        : size.width > 700
                        ? "450px"
                        : "300px",
                    margin: "20px",
                  }}
                >
                  <div>
                    <img
                      src={allPosts}
                      style={{
                        width:
                          size.width > 950
                            ? "750px"
                            : size.width > 700
                            ? "500px"
                            : size.width > 520
                            ? "400px"
                            : "200px",
                        height:
                          size.width > 950
                            ? "600px"
                            : size.width > 700
                            ? "450px"
                            : "300px",
                      }}
                      alt="front"
                    />
                  </div>
                  <div>
                    <img
                      src={allPosts2}
                      style={{
                        width:
                          size.width > 950
                            ? "750px"
                            : size.width > 700
                            ? "500px"
                            : size.width > 520
                            ? "400px"
                            : "200px",
                        height:
                          size.width > 950
                            ? "600px"
                            : size.width > 700
                            ? "450px"
                            : "300px",
                      }}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={singlePost}
                      style={{
                        width:
                          size.width > 950
                            ? "750px"
                            : size.width > 700
                            ? "500px"
                            : size.width > 520
                            ? "400px"
                            : "200px",
                        height:
                          size.width > 950
                            ? "600px"
                            : size.width > 700
                            ? "450px"
                            : "300px",
                      }}
                      alt=""
                    />
                  </div>
                </Carousel>
              ) : null}
            </div>
            <div className="carousel" style={{ flexWrap: "wrap-reverse" }}>
              <div
                ref={(el) => {
                  project.current[7] = el;
                }}
              >
                <div className="test">
                  {size.width > 520 ? (
                    <Carousel
                      easing="cubic-bezier(0.0, 0.0, 0.58, 1.0)"
                      transitionMs={700}
                      itemsToShow={1}
                      pagination={false}
                      //enableAutoPlay
                      //autoPlaySpeed={5500}
                      style={{
                        backgroundColor: " black",
                        width:
                          size.width > 950
                            ? "900px"
                            : size.width > 700
                            ? "650px"
                            : size.width > 520
                            ? "500px"
                            : "350px",
                        height:
                          size.width > 950
                            ? "600px"
                            : size.width > 700
                            ? "450px"
                            : "300px",
                        margin: "20px 0px 20px 0px",
                      }}
                    >
                      <div>
                        <img
                          src={freelancer1}
                          style={{
                            width:
                              size.width > 950
                                ? "750px"
                                : size.width > 700
                                ? "500px"
                                : size.width > 520
                                ? "380px"
                                : "200px",
                            height:
                              size.width > 950
                                ? "600px"
                                : size.width > 700
                                ? "450px"
                                : "300px",
                          }}
                          alt="front"
                        />
                      </div>
                      <div>
                        <img
                          src={freelancer2}
                          style={{
                            width:
                              size.width > 950
                                ? "750px"
                                : size.width > 700
                                ? "500px"
                                : size.width > 520
                                ? "400px"
                                : "200px",
                            height:
                              size.width > 950
                                ? "600px"
                                : size.width > 700
                                ? "450px"
                                : "300px",
                          }}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src={freelancer3}
                          style={{
                            width:
                              size.width > 950
                                ? "750px"
                                : size.width > 700
                                ? "500px"
                                : size.width > 520
                                ? "380px"
                                : "200px",
                            height:
                              size.width > 950
                                ? "600px"
                                : size.width > 700
                                ? "450px"
                                : "300px",
                          }}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src={freelancer4}
                          style={{
                            width:
                              size.width > 950
                                ? "750px"
                                : size.width > 700
                                ? "500px"
                                : size.width > 520
                                ? "380px"
                                : "200px",
                            height:
                              size.width > 950
                                ? "600px"
                                : size.width > 700
                                ? "450px"
                                : "300px",
                          }}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src={freelancer5}
                          style={{
                            width:
                              size.width > 950
                                ? "750px"
                                : size.width > 700
                                ? "500px"
                                : size.width > 520
                                ? "380px"
                                : "200px",
                            height:
                              size.width > 950
                                ? "600px"
                                : size.width > 700
                                ? "450px"
                                : "300px",
                          }}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src={freelancer6}
                          style={{
                            width:
                              size.width > 950
                                ? "750px"
                                : size.width > 700
                                ? "500px"
                                : size.width > 520
                                ? "380px"
                                : "200px",
                            height:
                              size.width > 950
                                ? "600px"
                                : size.width > 700
                                ? "450px"
                                : "300px",
                          }}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src={freelancer7}
                          style={{
                            width:
                              size.width > 950
                                ? "750px"
                                : size.width > 700
                                ? "500px"
                                : size.width > 520
                                ? "380px"
                                : "200px",
                            height:
                              size.width > 950
                                ? "600px"
                                : size.width > 700
                                ? "450px"
                                : "300px",
                          }}
                          alt=""
                        />
                      </div>
                    </Carousel>
                  ) : null}
                </div>
              </div>
              <div
                className="introductionField"
                // style={{
                //   width: size.width > 560 ? '500px' : '100%',
                //   height: '600px',
                // }}
                ref={(el) => {
                  project.current[6] = el;
                }}
              >
                <h2>Social media, JobFinder</h2>
                <div>
                  It is user friendly site where you can post or find job
                  offerts, make your own portfolio and connect with other
                  professionals. For backend I have used nonrelatioal database
                  MongoDB and Node.js and Express.js framework. Recently I added
                  github API feature to display github repositories of users by
                  adding their github username to profile.
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      margin: "10px 0px 30px 0px",
                    }}
                  >
                    Technologies:
                  </div>
                  <div className="gridSkill">
                    <div className="containerSkill2" style={{ width: "55px" }}>
                      <div className="card2">
                        <div className="imgBox2">
                          <img src={react} alt="" />
                        </div>
                        <div
                          className="content2"
                          style={{ marginLeft: "-35px" }}
                        >
                          <h2>React</h2>
                        </div>
                      </div>
                    </div>
                    <div className="containerSkill2">
                      <div className="card2">
                        <div className="imgBox2">
                          <img src={redux} alt="" />
                        </div>
                        <div
                          className="content2"
                          style={{ marginLeft: "-40px" }}
                        >
                          <h2>Redux</h2>
                        </div>
                      </div>
                    </div>
                    <div className="containerSkill2">
                      <div className="card2">
                        <div className="imgBox2">
                          <img src={mongodb} alt="" style={{ width: "50px" }} />
                        </div>
                        <div
                          className="content2"
                          style={{ marginLeft: "-40px" }}
                        >
                          <h2>MongoDB</h2>
                        </div>
                      </div>
                    </div>
                    <div className="containerSkill2">
                      <div className="card2">
                        <div className="imgBox2">
                          <img src={nodejs} alt="" style={{ width: "50px" }} />
                        </div>
                        <div
                          className="content2"
                          style={{ marginLeft: "-40px" }}
                        >
                          <h2>Node.js</h2>
                        </div>
                      </div>
                    </div>
                    <div className="containerSkill2" style={{ width: "145px" }}>
                      <div className="card2">
                        <div
                          className="imgBox2"
                          style={{ width: "100px", left: "-50px" }}
                        >
                          <img src={express} alt="" />
                        </div>
                        <div
                          className="content2"
                          style={{ marginLeft: "-50px" }}
                        >
                          <h2>Express.js</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Links:
                  </div>
                  <div
                    style={{
                      display: "flex",
                      wrap: "wrap",
                      padding: "5px",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      className="shadowCopyrightBox"
                      style={{
                        display: "flex",
                        wrap: "wrap",
                        borderRadius: "50px",
                        width: "100px",
                        margin: "5px",
                      }}
                    >
                      <a
                        className="a3"
                        style={{ fontSize: "50px" }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/nikub444/Freelancer"
                      >
                        <i
                          className="fab fa-github-square"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div
                      className="shadowCopyrightBox"
                      style={{
                        display: "flex",
                        wrap: "wrap",
                        borderRadius: "50px",
                        width: "100px",
                        margin: "5px",
                      }}
                    >
                      <a
                        className="a3"
                        style={{
                          fontSize: "50px",
                          padding: "15px 30px 15px 25px",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://freelancerjobs.herokuapp.com/"
                      >
                        <i className="fas fa-globe"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              width: "100%",
              height: "auto ",
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
            }}
            className="end"
          >
            <div
              className="introductionField"
              style={{ width: "400px", height: "auto" }}
              ref={(el) => {
                project.current[8] = el;
              }}
            >
              <h2>Current scope of interest</h2>
              <div style={{ padding: "20px" }}>
                I am currently working on my algo trading project for my BA
                dissertation. I want to build it in MERN stack with
                microservices built in python. At this time I am broadening my
                knowledge in Docker and AWS and developing commercial apps at my
                workplace.
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "black",

            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <section
            className="sectionSkills"
            ref={(el) => {
              theme.current[4] = el;
            }}
          >
            <div className="skillsDiv">
              <h2 className="skills" id="contact">
                <span className="skillsSpan">C</span>ontact
              </h2>
            </div>
          </section>
          <div className="shadowCopyright"></div>
          <div
            className="copyright"
            style={{ width: "100%", color: "white", padding: "20px" }}
          >
            <h1>You can contact me by email:</h1>
            <h2>jniedzwiecki444@gmail.com</h2>
            <h1>or find me on:</h1>
          </div>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <li
              className="shadowCopyrightBox"
              style={{
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "50px",
                height: "120px",
              }}
              ref={(el) => {
                socialMedia.current[0] = el;
              }}
            >
              <a
                className="a1"
                style={{ padding: "2px" }}
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/jakub-nied%C5%BAwiecki-22773b1b7/"
              >
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>

            <li
              className="shadowCopyrightBox"
              style={{
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "50px",
                height: "120px",
              }}
              ref={(el) => {
                socialMedia.current[1] = el;
              }}
            >
              <a
                className="a2"
                style={{ padding: "2px" }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/kuba.niedzwiecki.7/"
              >
                <i className="fab fa-facebook-square" aria-hidden="true"></i>
              </a>
            </li>

            <li
              className="shadowCopyrightBox"
              style={{
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "50px",
                height: "120px",
              }}
              ref={(el) => {
                socialMedia.current[2] = el;
              }}
            >
              <a
                className="a3"
                style={{ padding: "2px" }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/nikub444"
              >
                <i className="fab fa-github-square" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <div style={{ width: "100%", color: "white", padding: "20px" }}>
            © 2020 Copyright: Jakub Niedźwiecki.
          </div>
        </div>
      </div>
    </div>
  );
}
// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
export default App;
