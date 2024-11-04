import React from 'react';
import styled from 'styled-components';

const ProjectCard = ({ title, description, link }) => (
  <Card>
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
  </Card>
);

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  
  h3 {
    font-size: 1.5rem;
    color: #333;
  }
  
  p {
    font-size: 1rem;
    color: #555;
    margin: 10px 0;
  }
  
  a {
    color: #0073e6;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
`;

export default ProjectCard;
