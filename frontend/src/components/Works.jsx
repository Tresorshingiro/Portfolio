import React from 'react';
import '../App.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.jpg';

const Works = () => {
  return (
    <section id='works'>
      <h1 className='title'>My Projects</h1>
      <p className='title-description'>Here are some of the projects I've worked on, showcasing my skills in web development and AI-driven solutions.</p>
      <div className='experience-container'>
        <div className='details-container'>
          <div className='article-container'>
            <img src={project1} alt='Autohub' />
            <h2 className='experience-subtitle'>Autohub</h2>
            <p className='project-description'>Autohub is a garage management system designed to streamline operations, including scheduling, vehicle tracking, and maintenance history management.</p>
            <div className='btn-container'>
              <a href='https://github.com/Tresorshingiro/AutoHub' target='_blank' rel='noopener noreferrer'>
                <button className='projectBtn'>Github</button>
              </a>
            </div>
          </div>
          
          <div className='article-container'>
            <img src={project2} alt='Ecom' />
            <h2 className='experience-subtitle'>Ecom</h2>
            <p className='project-description'>An e-commerce web application designed for online shopping, featuring product management, cart functionalities, and secure checkout options.</p>
            <div className='btn-container'>
              <a href='https://github.com/Tresorshingiro/Ecom' target='_blank' rel='noopener noreferrer'>
                <button className='projectBtn'>Github</button>
              </a>
            </div>
          </div>
          
          <div className='article-container'>
            <img src={project3} alt='HinganAI' />
            <h2 className='experience-subtitle'>HinganAI</h2>
            <p className='project-description'>An AI-driven agricultural platform that uses machine learning to monitor soil health and provide smart crop and irrigation recommendations.</p>
            <div className='btn-container'>
              <a href='https://github.com/Tresorshingiro/HinganAI' target='_blank' rel='noopener noreferrer'>
                <button className='projectBtn'>Github</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
