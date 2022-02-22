import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";

import styled from "styled-components";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
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

function UseViewportScroll() {
  const x = useMotionValue(0);
  // const scale = useTransform(x, [-600, 0, 600], [0.2, 2, 0.2]);
  const rotateZ = useTransform(x, [-600, 0, 600], [-360, 0, 360]);
  const gradient = useTransform(
    x,
    [-600, 600],
    [
      "linear-gradient(135deg, rgb(238, 20, 153), rgb(221, 0, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );

  const { scrollYProgress } = useViewportScroll();
  const scaleScrollY = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Box
        style={{ x: x, rotateZ: rotateZ, scale: scaleScrollY }}
        drag="x"
        dragSnapToOrigin
      />
    </Wrapper>
  );
}

export default UseViewportScroll;
