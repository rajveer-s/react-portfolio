import React from 'react'
import { Link } from 'react-router-dom';
import projects from '../../assets/data/projectwork'


const Work = () => {
  return (
    <div>
      <h2>Work</h2>
      {projects.map((project, index) => {
        if (index >= 4) return;
        return <div className='container'>
          <>
          <ul className="cards">
            <li>
              <Link
                className="card"
                to={`#`}
              >
          <h3 className="card__title">{project.name}</h3>
                <img src={project.img} className="card__image" alt="nature background" />
                <div className="card__overlay">
                  <div className="card__header">
                    <img className="card__thumb" src="http://www.jeremymcquown.com/wp-content/uploads/2012/05/Go-Outside-Mark-02.png" alt="website logo" />
                    <div className="card__header-text">
                    </div>
                  </div>
                  <h4 className="card__description">{project.desc}</h4>
                </div>
              </Link>
            </li>
          </ul>
          <div className="buttonContainer">
          <a href={project.gitlink} target="_blank"><button class="btn"><span>Github Link</span></button></a>
          <a href={project.deplink} target="_blank"><button class="btn"><span>Deployed Link</span></button></a>
          </div>
          <hr />
          </>
        </div>
      })}
    </div>
  )
}

export default Work