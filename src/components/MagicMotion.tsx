import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Grid = styled(motion.div)`
  width: 50vw;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function MagicMotion() {
  const [clickId, setClickId] = React.useState<null | string>(null);
  return (
    <Wrapper>
      <Grid>
        {["1", "2", " 3", "4"].map((i) => (
          <Box onClick={() => setClickId(i)} key={i} layoutId={i} />
        ))}
      </Grid>
      <AnimatePresence>
        {clickId ? (
          <Overlay
            onClick={() => setClickId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box layoutId={clickId} style={{ width: 400, height: 600 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default MagicMotion;
