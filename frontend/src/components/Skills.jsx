import React from 'react'
import ML from '../assets/ML.png'
import UI from '../assets/UIdesign.png'
import webDev from '../assets/webDev.png'
import '../App.css'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I've had the privilege of working on different projects honed my abilities in Node JS, React JS, Python, C++ and Java. My professional journey is driven by a commitment to continuous growth and improvement. I actively seek out opportunities to expand my knowledge base and stay abreast of emerging trends in the ever-evolving tech landscape.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UI} alt='ui design' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>I focus on creating intuitive and visually appealing interfaces. My design approach centers on enhancing user experience through clean layouts, consistent aesthetics, and responsive design.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={webDev} alt='web development' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Web Development</h2>
                    <p>With expertise in full-stack development, I build scalable and responsive web applications using technologies like React, Node.js/ExpressJS and Python</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={ML} alt='machine Learning' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Machine Learning</h2>
                    <p>I'm currently specialising myself in machine learning by creating predictive models and algorithms to analyze data patterns</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
