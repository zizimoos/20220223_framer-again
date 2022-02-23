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
  width: 800px;
  height: 400px;
  position: absolute;
  display: flex;
  top: 100px;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  // display: grid;
  // grid-template-columns: repeat(2, 1fr);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  entry: (back: boolean) => ({
    x: back ? 1000 : -1000,
    opacity: 0,
    scale: 1,
    transition: { type: "spring", duration: 2 },
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", duration: 1 },
  },
  leaving: (back: boolean) => ({
    x: back ? -1000 : 1000,
    opacity: 0,
    scale: 1,
    transition: { type: "spring", duration: 2 },
  }),
};

function SliderComponent() {
  const [isVisible, setIsVisible] = React.useState(1);
  const [back, setBack] = React.useState(false);

  const nextSlide = () => {
    setBack(false);
    setIsVisible((prev) => (prev === 10 ? 1 : prev + 1));
  };
  const prevSlide = () => {
    setBack(true);
    setIsVisible((prev) => (prev === 1 ? 10 : prev - 1));
  };

  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        <Box
          custom={back}
          variants={boxVariants}
          initial="entry"
          animate="center"
          exit="leaving"
          key={isVisible}
        >
          {isVisible}
        </Box>
      </AnimatePresence>
      <div>
        <button onClick={prevSlide}>PREV</button>
        <button onClick={nextSlide}>NEXT</button>
      </div>
    </Wrapper>
  );
}

export default SliderComponent;
