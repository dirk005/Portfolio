import React from 'react';
import './About.css';
import { Jumbotron } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({offset: -60, scrollDuration: 200})

const About = () => {
	return(
		<ScrollableAnchor id={'about'}>
			<div className="aboutStyle" >
				<article className="vh-100 dt w-100 ">
					<h1 className=" f2-m f-subheadline-l fw6 tc">ABOUT ME</h1>
		   			<div className=' ma4 tc'>						 
		 				<img className='profileImage grow'  src='https://dirk005.github.io/resume/images/profile.png' alt='Logo'/> 		 				
					</div>		
				      <Jumbotron className="ma4">  
				      	<div className="lead">  						
					        <p>Hi, my name is Dirk Jansen van Rensburg, and I am a Full Stack Web Developer. I have been doing Web development for ± 2 years. Within this time I have also created my own freelance web design company  <a href="https://focuswebdesign.co.za" rel="noopener noreferrer" target="_blank">Focus Web Design</a>. </p>
					        <p>I am a quick learner and I constantly strive to learn new skills, pushing to myself to grow and keep up-to-date with the latest web technologies.</p>
					        <p>I have been employed full-time by Arwyp Medical Centre for the last 8+ years. My duties include developing and maintaining their hospital management system, using the BASIC programming language.  The recent systematic integration of the system with dynamic web technologies is what has sparked my passion into the world of web development. This has resulted in numerous sites being setup for the hospital which are all linked to a central server.</p>
				        </div>
				        <hr className="my-2" />
				        <p>Thank for viewing my portfolio.</p>
				        <div className="ma4">
					        <p className="lead ">
					         <a className="aboutButtonStyle tc fw6" href='#portfolio'>Portfolio </a>					          
					        </p>
				        </div>
				      </Jumbotron>					
				</article>	
			</div>
		</ScrollableAnchor>
		);
}

export default About;
