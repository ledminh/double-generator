/**
*
* Block
*
*/

import React from 'react';
import styled from 'styled-components';

import {
  HORIZONTAL_CENTER,
  VERTICAL_CENTER,
  CENTER
} from './constants';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => props.height? props.height : 'auto'};
`;

const HorizontalCenter = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const VerticalCenter = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
`;

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Block({type, height, children}){
  switch(type){
    case HORIZONTAL_CENTER:
      return (
         <Wrapper height={height}>
            <HorizontalCenter>
                {children}
            </HorizontalCenter>  
         </Wrapper> 
      );
    case VERTICAL_CENTER:
      return (
         <Wrapper height={height} >
            <VerticalCenter>
                {children}
            </VerticalCenter>  
         </Wrapper> 
      );
    case CENTER:
      return (
         <Wrapper height={height}>
            <Center>
               {children}
            </Center>
         </Wrapper> 
      );

    default:
      return (
          <Wrapper height={height}>
              {children}
          </Wrapper>
      )

  }
};


export default Block;
