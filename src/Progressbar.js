import React from "react";
import styled from "styled-components";

// import "./progressbar.css";

// here you start styled-components

// Here we create a component that will rotate everything we pass in over two seconds

const ProgressbarContainerOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  cursor: pointer;
  background-color: rgb(180, 216, 247);
  border-radius: 15px;
`;

const ProgressbarContainer = styled.div`
  height: 20px;
  width: 200px;
  background-color: rgb(237, 225, 225);
  position: relative;
  border-radius: 15px;
`;
const Indicator = styled.div`
  height: 20px;
  background-color: green;
  width: ${(props) => props.width}%;
  border-radius: 15px;
  animation: inidicator 4s linear;
  transition: 4s ease-in-out;

  @keyframes inidicator {
    from {
      width: 0%;
    }
    to {
      width: ${(props) => props.width}%;
    }
  }
`;
const IndicatorCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: orangered;
  position: absolute;
  left: ${(props) => props.position}%;
  top: 0%;
  animation: inidicatorcircle 4s;
  transition: 1s ease-in-out;

  @keyframes inidicatorcircle {
    from {
      left: 0%;
    }
    to {
      left: ${(props) => props.position}%;
    }
  }
`;

//end here

//outside of function components
const Progressbar = ({ indicatorColor, indicatorBorderColor }) => {
  const value = 60;

  return (
    // outer contaner for skyblue
    <ProgressbarContainerOuter>
      {/* inside container for grey */}
      <ProgressbarContainer>
        {/* inside container for green */}
        <Indicator width={value} />
        {/* inside container for red */}
        <IndicatorCircle position={value - 2} />
      </ProgressbarContainer>
    </ProgressbarContainerOuter>
  );
};

export default Progressbar;
