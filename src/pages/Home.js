import React from 'react'
import {
    AiOutlineGithub,
    AiFillLinkedin,
} from 'react-icons/ai'
import { IoMdMail } from 'react-icons/io'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Bob</h2>
        <div className="prompt">
          <p>Web Developer with a passion for learning and creating</p>
          <IoMdMail />
          <AiOutlineGithub />
          <AiFillLinkedin />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className='list'>
          <li className="item">
            <h2>Frontend</h2>
            <span>
              ReactJS, HTML, CSS, Bootstrap, Material UI, TailwindCSS, Sass, Styled Components
            </span>
          </li>
          <li className="item">
            <h2>Backend</h2>
            <span>
              NodeJS, ExpressJS, GraphQL, MongoDB, Firebase
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home