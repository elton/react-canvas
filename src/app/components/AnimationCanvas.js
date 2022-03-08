import useAnimationCanvas, { useCanvas } from '../hooks/useCanvas';

const AnimationCanvas = (props) => {
  const { draw, ...rest } = props;
  const canvasRef = useAnimationCanvas(draw);

  return <canvas ref={canvasRef} {...rest} />;
};

export const Canvas = (props) => {
  const { draw, ...rest } = props;
  const canvasRef = useCanvas(draw);

  return <canvas ref={canvasRef} {...rest} />;
};

export default AnimationCanvas;
