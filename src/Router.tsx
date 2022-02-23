import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogoAnimation from "./components/LogoAnimation";
import Variants from "./components/Variants";
import Home from "./routes/Home";
import Gesture from "./components/Gesture";
import Drag from "./components/Drag";
import MotionValue from "./components/MotionValue";
import UseViewportScroll from "./components/UseViewportScroll";
import SVGAnimation from "./components/SVGAnimation";
import AnimationPresenceFn from "./components/AnimationPresenceFn";
import SliderComponent from "./components/SliderComponent";
import SharedLayout from "./components/SharedLayout";
import MagicMotion from "./components/MagicMotion";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/logoani_01" element={<LogoAnimation />} />
        <Route path="/variants" element={<Variants />} />
        <Route path="/gesture" element={<Gesture />} />
        <Route path="/drag" element={<Drag />} />
        <Route path="/motionvalue" element={<MotionValue />} />
        <Route path="/useviewportscroll" element={<UseViewportScroll />} />
        <Route path="/svganimation" element={<SVGAnimation />} />
        <Route path="/animationpresence" element={<AnimationPresenceFn />} />
        <Route path="/slider" element={<SliderComponent />} />
        <Route path="/sharedlayout" element={<SharedLayout />} />
        <Route path="/magic" element={<MagicMotion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
