import styled from 'styled-components';

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



