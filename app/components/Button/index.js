/**
*
* Button
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({text}) => getColor(text).color };
  color: white;
  padding: 5px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${({text}) => getColor(text).hover};
  }
`;

function Button({onClick, text}) {
  return (
    <Wrapper onClick={onClick} text={text}>
      {text}
    </Wrapper>
  );
}

Button.propTypes = {

};

function getColor(text){
  switch(text){
    case 'START':
      return {
        color: '#304f82',
        hover: '#3e66a8'
      }
    case 'STOP':
      return {
        color: '#8e1818',
        hover: '#ba2121'
      }
    case 'CLEAR':
       return {
         color: '#8bb584',
         hover: '#a2d39a'
       }
  }
}

export default Button;

