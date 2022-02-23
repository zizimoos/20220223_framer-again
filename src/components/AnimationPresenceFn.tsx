import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 300px;
  height: 200px;
  position: absolute;
  top: 100px;
  // display: grid;
  // grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 50,
  },
};

function AnimationPresenceFn() {
  const [isVisible, setIsVisible] = React.useState(true);
  const onClick = () => setIsVisible(!isVisible);
  return (
    <Wrapper>
      <button onClick={onClick}>CLICK</button>
      <AnimatePresence>
        {isVisible ? (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default AnimationPresenceFn;
