import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #00a5ff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function SharedLayout() {
  const [clicked, setClicked] = React.useState(false);
  const toggleClick = () => setClicked(!clicked);

  return (
    <Wrapper onClick={toggleClick}>
      <Box>
        {!clicked ? (
          <Circle layoutId="same" style={{ borderRadius: "50px", scale: 1 }} />
        ) : null}
      </Box>
      <Box>
        {clicked ? (
          <Circle layoutId="same" style={{ borderRadius: "5px", scale: 3 }} />
        ) : null}
      </Box>
    </Wrapper>
  );
}

export default SharedLayout;
