import './App.css';

import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faEnvelope,
	faPhoneSquare,
	faFileDownload,
} from '@fortawesome/free-solid-svg-icons';

import profile from './profile.jpg';

import { education, experience, projects, skills } from './resume';

import { Education, Experience, Projects, Skills } from './Components';

library.add(fab, faEnvelope, faPhoneSquare, faFileDownload);

function App() {
	return (
		<div className="App">
			<Navbar
				bg="dark"
				expand="lg"
				variant="dark"
				fixed="top"
				collapseOnSelect="True"
			>
				<Navbar.Brand href="#home">
					<span className="nicholas-brand">VIVEK</span>KARICHETI
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="justify-content-center">
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#education">Education</Nav.Link>
						<Nav.Link href="#experience">Experience</Nav.Link>
						<Nav.Link href="#projects">Projects</Nav.Link>
						<Nav.Link href="#skills">Skills</Nav.Link>
						<Nav.Link href="/resume.pdf" target="_blank">
							Resume
						</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<div className="header" id="home">
				<div className="inner">
					<img src={profile} alt="Profile" className="profile-pic"></img>
					<h1 className="inner-text">
						<span role="img" aria-label="Hi">
							👋
						</span>{' '}
						 Hey!
					</h1>
					<span className="inner-text">
						<a
							href="https://www.linkedin.com/in/vivek-karicheti/"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={['fab', 'linkedin']} />
						</a>
						<a
							href="mailto:viv.karicheti@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon="envelope" />
						</a>
						<a href="tel:+19294273692" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon="phone-square" />
						</a>
					</span>
				</div>
			</div>
			<Container id="about">
				<Row>
					<Col className="heading">
						<h1>About Me</h1>
					</Col>
				</Row>
				<Row>
					<Col className="about-text">
						<p>
							I'm Vivek Karicheti, a 23 year old Product Management aspirant, 
							living in the greatest city in the world and graduating from the 
							prestigious New York University with a Master's degree in 
							Management of Technology on May 19th,2021. I am passionate about 
							Product Development and Design,and hope to get the opportunity to 
							work with some of the great Product Development teams in the world!
							
							<br />
							<br />
							I have always been fascinated with the people of the world, and photography
							was an excellent creative outlet for this. In my free time, you will find me
							either going around the city, exploring the great urban jungle or planning my 
							travels through yet another country I would backpack through! 
							<br />
							<br />
							Currently interning as a Product Manager in an amazing startup called Tegger, I get the opportunity
							to work with an amazing cross-collaborative team living in all corners of the world, from USA to Mexico 
							to India to New Zealand and we have already deployed our first product!
						</p>
					</Col>
				</Row>
			</Container>
			<Container id="education">
				<Row>
					<Col className="heading">
						<h1>Education</h1>
					</Col>
				</Row>
				<Education education={education} />
			</Container>
			<Container id="experience">
				<Row>
					<Col className="heading">
						<h1>Experience</h1>
					</Col>
				</Row>
				<Experience experience={experience} />
			</Container>
			<Container id="projects">
				<Row>
					<Col className="heading">
						<h1>Projects</h1>
					</Col>
				</Row>
				<Projects projects={projects} />
			</Container>
			<Container id="skills">
				<Row>
					<Col className="heading">
						<h1>Skills</h1>
					</Col>
				</Row>
				<Skills skills={skills} />
			</Container>
			<Container id="contact">
				<Row>
					<Col className="heading">
						<h1>Contact Me</h1>
					</Col>
				</Row>
				<Row>
					<Col className="contact-det">
						<div className="contact-phone">
							<FontAwesomeIcon icon="phone-square" />{' '}
							<a href="tel:+13479710488" target="_blank" rel="noreferrer">
								+1-(929)-427-3692
							</a>
						</div>
						<div className="contact-email">
							<FontAwesomeIcon icon="envelope" />{' '}
							<a
								href="mailto:viv.karicheti@gmail.com"
								target="_blank"
								rel="noreferrer"
							>
								viv.karicheti@gmail.com
							</a>{' '}
							,{' '}
							<a
								href="mailto:vivek.karicheti@nyu.edu"
								target="_blank"
								rel="noreferrer"
							>
								vivek.karicheti@nyu.edu
							</a>
						</div>
						<div className="resume-download-btn">
							<a href="/resume.pdf" download="Vivek-Karicheti-Resume.pdf">
								<Button variant="dark">
									<FontAwesomeIcon icon="file-download" /> Download my Resume
								</Button>
							</a>
						</div>

						<span className="contact-text">
							<a
								href="https://www.linkedin.com/in/vivek-karicheti/"
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon icon={['fab', 'linkedin']} />
							</a>
							<a
								href="mailto:viv.karicheti@gmail.com"
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon icon="envelope" />
							</a>
							<a href="tel:+19294273692" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon="phone-square" />
							</a>
						</span>
					</Col>
				</Row>
			</Container>
			<Row className="footer">
				<Col>
					<div>
						Made using{' '}
						<a
							href="https://reactjs.org/"
							target="_blank"
							rel="noreferrer"
							className="react"
						>
							ReactJS
						</a>{' '}
						and{' '}
						<a
							href="https://react-bootstrap.github.io/"
							target="_blank"
							rel="noreferrer"
							className="react"
						>
							React Bootstrap
						</a>
					</div>
					<div>&copy; 2021 Vivek Karicheti</div>
				</Col>
			</Row>
		</div>
	);
}

export default App;
