import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Header from '../components/Header';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

const PortfolioScreen = () => {
  return (
    <Container>
      <Header />
      <HeroSection>
        <HeroText>
          <h1>Hi, I'm [Your Name]</h1>
          <p>A passionate Web Developer and Designer</p>
        </HeroText>
        <HeroImage src="/assets/profile.jpg" alt="Profile" />
      </HeroSection>
      
      <Section id="about">
        <h2>About Me</h2>
        <p>Brief description about yourself, your background, and your aspirations.</p>
      </Section>
      
      <Section id="projects">
        <h2>Projects</h2>
        <ProjectContainer>
          <ProjectCard title="Project 1" description="Description of project 1" link="https://github.com/project1" />
          <ProjectCard title="Project 2" description="Description of project 2" link="https://github.com/project2" />
          {/* Add more projects as needed */}
        </ProjectContainer>
      </Section>
      
      <Section id="skills">
        <h2>Skills</h2>
        <SkillContainer>
          <SkillCard title="JavaScript" />
          <SkillCard title="React" />
          <SkillCard title="CSS" />
          {/* Add more skills */}
        </SkillContainer>
      </Section>
      
      <Section id="contact">
        <h2>Contact</h2>
        <SocialIcons>
          <FaGithub />
          <FaLinkedin />
          <FaEnvelope />
        </SocialIcons>
      </Section>
      
      <Footer />
    </Container>
  );
};

export default PortfolioScreen;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
  color: #333;
  padding: 20px;
`;

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  flex-wrap: wrap;
`;

const HeroText = styled.div`
  max-width: 500px;
  margin-right: 20px;
  text-align: center;
  
  h1 {
    font-size: 2.5rem;
    color: #333;
  }
  
  p {
    font-size: 1.2rem;
    color: #555;
  }
`;

const HeroImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-top: 20px;
`;

const Section = styled.section`
  width: 80%;
  max-width: 1000px;
  margin: 40px 0;
  
  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1rem;
    color: #555;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const SkillContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  font-size: 1.5rem;
  color: #333;
  
  svg:hover {
    color: #0073e6;
    cursor: pointer;
  }
`;
