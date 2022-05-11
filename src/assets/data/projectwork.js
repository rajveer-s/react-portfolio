import { v4 as uuidv4 } from 'uuid';
import Image from '../images/mockup.jpg';
import Image2 from '../images/project-1.png';
import Image3 from '../images/project-2.png';
import Image4 from '../images/TechBlog.png';

const projects = [
  {
    id: uuidv4(),
    name: "Get OutSide",
    desc: "Get Outside is a full stack MERN application with a front end built with React. It is fully mobile responsive.",
    img: Image,
    gitlink: 'https://github.com/rajveer-s/get-outside',
    deplink: 'https://arcane-stream-21674.herokuapp.com/'
  },
  {
    id: uuidv4(),
    name: "Are We There Yet ?",
    desc: "Are we there yet app, where the user can fetch all the national parks in the U.S. with just a click of the button. User can also save thier favorite parks which gets saved into the local storage. It also has a To-do list page where the user can write anything they would want to take on the trip.",
    img: Image2,
    gitlink: 'https://github.com/rajveer-s/Are_We_There_Yet_Adventure_App',
    deplink: 'https://xnd0.github.io/Are_We_There_Yet_Adventure_App/'
  },
  {
    id: uuidv4(),
    name: "Key Change",
    desc: "This web application presents a centralized internet commerce hub for musicians to buy, sell, and auction instruments. Key Change Allows users to submit their instrument name, description, image, and price that is then dynamically uploaded to our database and is added to our homepage.",
    img: Image3,
    gitlink: 'https://github.com/rajveer-s/Key-Change',
    deplink: 'https://thawing-fjord-72285.herokuapp.com/'
  },
  {
    id: uuidv4(),
    name: "Tech Blog",
    desc: "It's a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers posts as well. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language.",
    img: Image4,
    gitlink: 'https://github.com/rajveer-s/Tech-Blog',
    deplink: 'https://protected-coast-45527.herokuapp.com/'
  }
]

export default projects