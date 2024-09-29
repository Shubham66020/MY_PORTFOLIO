// index.js
import Atom from '../components/Atom';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import Background from '@/components/Background';
import Head from 'next/head';
import ThemeToggle from '@/components/ThemeToggle';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJs, faJava, faAws, faReact, faTensorflow, faNeos } from '@fortawesome/free-brands-svg-icons';
import { faCss3, faHtml5 } from '@fortawesome/free-brands-svg-icons';




const HomePage = () => {
    return (
        <>
            <Head>
                <title>Shubham Kumar | Portfolio</title>
                <meta name="description" content="Portfolio of Shubham Kumar, Machine Learning Enthusiast & Web Developer." />
            </Head>
            <Background />
            <MainContainer>
                <Header>
                    <h1>Welcome to My Portfolio</h1>
                    <h3>Hi, I'm <span>Shubham Kumar</span></h3>
                    <Atom />
                    <ThemeToggle />
                    <Navigation>
                        <button onClick={() => scrollToSection('about')}>About</button>
                        <button onClick={() => scrollToSection('projects')}>Projects</button>
                        <button onClick={() => scrollToSection('experience')}>Experience</button>
                        <button onClick={() => scrollToSection('contact')}>Contact</button>
                    </Navigation>
                </Header>


                <Section id="about">
                    <SectionTitle>About Me</SectionTitle>
                    <SectionContent>
                        A digital craftsman with a passion for code and creativity. I merge the worlds of Machine Learning and Web Development to create solutions that are as functional as they are visually captivating. Currently honing my skills in Computer Science, I'm all about transforming ideas into impactful digital experiences. Ready to innovate and elevate together?
                    </SectionContent>
                </Section>

                <Section id="projects">
                    <SectionTitle>Projects</SectionTitle>
                    <ProjectsGrid>
                        {/* Map through your projects and render them here */}
                        {/* Example Project Card */}
                        <ProjectCard>
                            <ImageWrapper>
                                <Image src="/images/Why making a real warp drive is possible.jpeg" alt="Personal Portfolio Website" layout="responsive" width={300} height={200} />
                            </ImageWrapper>
                            <ProjectInfo>
                                <h3>Predictive Analytics Model</h3>
                                <br></br>
                                <TechIcons>
                                    <FontAwesomeIcon icon={faPython} title="Python" />
                                    <FontAwesomeIcon icon={faJava} title="Java" />
                                    <FontAwesomeIcon icon={faAws} title="AWS" />
                                </TechIcons>
                                <br></br>
                                <ProjectLinks>
                                    <a href="https://github.com/Shubham66020/predictive-analytics" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    <a href="https://project-live-link.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                </ProjectLinks>
                            </ProjectInfo>
                        </ProjectCard>

                        <ProjectCard>
                            <ProjectImage src="/images/1.jpeg" alt="Project 2" />
                            <ProjectInfo>
                                <h3>Personal Portfolio Website</h3>
                                <br></br>
                                <TechIcons>
                                    <FontAwesomeIcon icon={faJs} />
                                    <FontAwesomeIcon icon={faReact} />
                                    <FontAwesomeIcon icon={faCss3} />
                                    <FontAwesomeIcon icon={faHtml5} />
                                </TechIcons>
                                <br></br>
                                <ProjectLinks>
                                    <a href="https://github.com/Shubham66020/predictive-analytics" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    <a href="https://project-live-link.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                </ProjectLinks>
                            </ProjectInfo>
                        </ProjectCard>

                        <ProjectCard>
                            <ProjectImage src="\images\1.jpeg" alt="Project 3" />
                            <ProjectInfo>
                                <h3>Real-Time Chat Application</h3>
                                <br></br>
                                <TechIcons>
                                    <FontAwesomeIcon icon={faJs} title="JavaScript" />
                                    <FontAwesomeIcon icon={faReact} title="React" />
                                </TechIcons>
                                <br></br>
                                <ProjectLinks>
                                    <a href="https://github.com/Shubham66020/predictive-analytics" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    <a href="https://project-live-link.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                </ProjectLinks>
                            </ProjectInfo>
                        </ProjectCard>

                        <ProjectCard>
                            <ProjectImage src="\images\1.jpeg" alt="Project 4" />
                            <ProjectInfo>
                                <h3>Image Classification System</h3>
                                <br></br>
                                <TechIcons>
                                    <FontAwesomeIcon icon={faTensorflow} title="TensorFlow" />
                                    <FontAwesomeIcon icon={faPython} title="Python" />
                                </TechIcons>
                                <br></br>
                                <ProjectLinks>
                                    <a href="https://github.com/Shubham66020/predictive-analytics" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    <a href="https://project-live-link.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                </ProjectLinks>
                            </ProjectInfo>
                        </ProjectCard>

                        <ProjectCard>
                            <ProjectImage src="\images\1.jpeg" alt="Project 5" />
                            <ProjectInfo>
                                <h3>Cloud-Based Task Management App</h3>
                                <br></br>
                                <TechIcons>
                                    <FontAwesomeIcon icon={faAws} title="AWS" />
                                    <FontAwesomeIcon icon={faReact} title="React" />
                                    <FontAwesomeIcon icon={faJs} title="JavaScript" />
                                </TechIcons>
                                <br></br>
                                <ProjectLinks>
                                    <a href="https://github.com/Shubham66020/predictive-analytics" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    <a href="https://project-live-link.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                </ProjectLinks>
                            </ProjectInfo>
                        </ProjectCard>
                        {/* Repeat for other projects */}
                    </ProjectsGrid>
                </Section>

                <Section id="experience">
                    <SectionTitle>Experience</SectionTitle>
                    <ExperienceTimeline>
                        {/* Map through your experiences and render them here */}
                        <ExperienceItem>
                            <Year>2023</Year>
                            <Details>
                                <h4>Machine Learning Project Lead</h4>
                                <p>Developed supervised learning models with high predictive accuracy.</p>
                            </Details>
                        </ExperienceItem>


                        {/* Repeat for other experiences */}
                    </ExperienceTimeline>
                </Section>



                <Section id="contact">
                    <SectionTitle>Contact Me</SectionTitle>
                    <ContactInfo>
                        <p>Email: <a href="mailto:sy6207972@gmail.com">sy6207972@gmail.com</a></p>
                        <SocialLinks>
                            <a href="https://github.com/Shubham66020" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://twitter.com/Shubham241424" target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a href="https://www.linkedin.com/in/shubham-yadav-07199a24b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </SocialLinks>
                    </ContactInfo>
                </Section>

                <Footer>
                    <p>&copy; {new Date().getFullYear()} Shubham Kumar. All rights reserved.</p>
                </Footer>
            </MainContainer>

        </>
    );
};

const TechIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 2.5rem;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
`;


const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
};

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled Components
const MainContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #0d0d0d;
  color: #ffffff;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #1e1e1e, #121212);

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    animation: ${fadeIn} 1s ease-in-out;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 40px;

    span {
      color: #61dafb;
    }
  }

  p {
    font-size: 1.2rem;
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 15px;

  button {
    background-color: #61dafb;
    color: #0d0d0d;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    font-weight: bold;

    &:hover {
      background-color: #21a1f1;
      transform: scale(1.05);
    }
  }
`;

const Section = styled.section`
  padding: 80px 20px;
  background-color: ${({ id }) => (id === 'about' || id === 'experience' || id === 'contact' ? '#1a1a1a' : '#0d0d0d')};
  color: #ffffff;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    padding: 60px 10px;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #61dafb;
`;

const SectionContent = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  padding: 0 20px;
`;

const ProjectCard = styled.div`
  background-color: #1e1e1e;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 20px;

  h3 {
    margin-bottom: 10px;
    color: #61dafb;
  }

  p {
    font-size: 0.95rem;
    margin-bottom: 15px;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 10px;

  a {
    background-color: #61dafb;
    color: #0d0d0d;
    padding: 8px 12px;
    border-radius: 20px;
    text-decoration: none;
    font-size: 0.85rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #21a1f1;
    }
  }
`;

const ExperienceTimeline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
`;

const ExperienceItem = styled.div`
  background-color: #1e1e1e;
  width: 80%;
  padding: 20px;
  margin: 15px 0;
  border-left: 4px solid #61dafb;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: -8px;
    top: 20px;
    width: 16px;
    height: 16px;
    background-color: #61dafb;
    border-radius: 50%;
  }

  h4 {
    margin-bottom: 10px;
    color: #61dafb;
  }

  p {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Year = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #21a1f1;
`;

const Details = styled.div`
  margin-left: 30px;
`;

const ContactInfo = styled.div`
  text-align: center;

  a {
    color: #61dafb;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #21a1f1;
    }
  }
`;

const SocialLinks = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    color: #61dafb;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #21a1f1;
    }
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #0d0d0d;
  color: #666666;
  font-size: 0.9rem;
`;

export default HomePage;
