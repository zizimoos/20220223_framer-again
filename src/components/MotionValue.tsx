import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBOX = styled(motion.div)`
  width: 600px;
  height: 600px;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "rgb(46, 204, 113)", transition: { duration: 3 } },
};

function MotionValue() {
  const biggerBox = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <BiggerBOX ref={biggerBox}>
        <Box
          drag
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBox}
          variants={boxVariants}
          whileHover="hover"
          whileDrag="drag"
          whileTap="click"
        />
      </BiggerBOX>
    </Wrapper>
  );
}

export default MotionValue;
