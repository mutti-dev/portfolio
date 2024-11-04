import React from 'react';
import styled from 'styled-components';

const SkillCard = ({ title }) => (
  <Card>
    <h4>{title}</h4>
  </Card>
);

const Card = styled.div`
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  h4 {
    font-size: 1.2rem;
    color: #333;
  }
`;

export default SkillCard;
