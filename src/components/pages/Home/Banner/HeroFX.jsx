import { Component, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";

/**
 * Tiny error boundary so a missing WebGL context can never blank the hero.
 * If the 3D layer fails, we simply render nothing in its place.
 */
class FXBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

const DarkroomDust = () => (
  <Sparkles
    count={55}
    scale={[14, 8, 6]}
    size={2.4}
    speed={0.28}
    opacity={0.55}
    color="#86AECB"
    noise={1.2}
  />
);

const HeroFX = () => {
  return (
    <FXBoundary>
      <Canvas
        className="!absolute inset-0"
        camera={{ position: [0, 0, 9], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <DarkroomDust />
        </Suspense>
      </Canvas>
    </FXBoundary>
  );
};

export default HeroFX;
