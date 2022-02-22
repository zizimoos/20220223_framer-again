import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function LogoAnimation() {
  return (
    <Wrapper>
      <Box
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateZ: 360 }}
        transition={{ type: "spring", delay: 0.5 }}
      ></Box>
    </Wrapper>
  );
}

export default LogoAnimation;
