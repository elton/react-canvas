import AnimationCanvas, { Canvas } from './AnimationCanvas';
function App() {
  const canvasStyle =
    'mx-auto w-80 h-40 border border-neutral-200 rounded-md shadow-lg';
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  const draw1 = (ctx) => {
    ctx.fillStyle = 'rgb(200,0,0)';
    ctx.fillRect(10, 10, 55, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 55, 50);

    ctx.fillStyle = 'rgb(19, 78, 74)';
    ctx.beginPath();
    ctx.moveTo(95, 50); // start point
    ctx.lineTo(120, 75); // lineTo(x, y) 从当前位置画到(x, y)
    ctx.lineTo(120, 25);
    ctx.fill();

    ctx.strokeStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.beginPath();
    ctx.arc(200, 75, 50, 0, Math.PI * 2, true); // 绘制,arc(x, y, radius, startAngle, endAngle, anticlockwise),画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。
    ctx.moveTo(235, 75);
    ctx.arc(200, 75, 35, 0, Math.PI, false); // 口(顺时针)
    ctx.moveTo(190, 65);
    ctx.arc(185, 65, 5, 0, Math.PI * 2, true); // 左眼
    ctx.moveTo(220, 65);
    ctx.arc(215, 65, 5, 0, Math.PI * 2, true); // 右眼
    ctx.stroke();
  };

  const roundedRect = (ctx, x, y, width, height, radius) => {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
    ctx.lineTo(x + width - radius, y + height);
    ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
    ctx.lineTo(x + width, y + radius);
    ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.quadraticCurveTo(x, y, x, y + radius);
    ctx.stroke();
  };

  const draw2 = (ctx) => {
    roundedRect(ctx, 12, 12, 150, 150, 15);
    roundedRect(ctx, 19, 19, 150, 150, 9);
    roundedRect(ctx, 53, 53, 49, 33, 10);
    roundedRect(ctx, 53, 119, 49, 16, 6);
    roundedRect(ctx, 135, 53, 49, 33, 10);
    roundedRect(ctx, 135, 119, 25, 49, 10);

    ctx.beginPath();
    ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    ctx.lineTo(31, 37);
    ctx.fill();

    for (var i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 35, 4, 4);
    }

    for (i = 0; i < 6; i++) {
      ctx.fillRect(115, 51 + i * 16, 4, 4);
    }

    for (i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 99, 4, 4);
    }

    ctx.beginPath();
    ctx.moveTo(83, 116);
    ctx.lineTo(83, 102);
    ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
    ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
    ctx.lineTo(111, 116);
    ctx.lineTo(106.333, 111.333);
    ctx.lineTo(101.666, 116);
    ctx.lineTo(97, 111.333);
    ctx.lineTo(92.333, 116);
    ctx.lineTo(87.666, 111.333);
    ctx.lineTo(83, 116);
    ctx.fill();

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(91, 96);
    ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
    ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
    ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
    ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
    ctx.moveTo(103, 96);
    ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
    ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
    ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
    ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
    ctx.fill();

    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();
  };

  const draw3 = (ctx) => {
    const rectangle = new Path2D(); //Path2D 用来缓存或记录绘画命令,提升性能
    rectangle.rect(10, 10, 50, 50);

    const circle = new Path2D();
    circle.moveTo(125, 35);
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    const svg = new Path2D('M150 10 h 80 v 80 h -80 Z'); // 这条路径将先移动到点 (M10 10) 然后再水平移动80个单位(h 80)，然后下移80个单位 (v 80)，接着左移80个单位 (h -80)，再回到起点处 (z)。

    ctx.stroke(rectangle);
    ctx.fill(circle);
    ctx.stroke(svg);
  };

  const draw4 = (ctx) => {
    // ctx.fillStyle = 'orange';
    // ctx.fillStyle = '#FFA500';
    // ctx.fillStyle = 'rgb(255,165,0)';
    // ctx.fillStyle = 'rgba(255,165,0,1)';

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        ctx.fillStyle =
          'rgb(' +
          Math.floor(255 - 42.5 * i) +
          ',' +
          Math.floor(255 - 42.5 * j) +
          ',0)';
        ctx.fillRect(j * 25, i * 25, 25, 25);
      }
    }

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        ctx.strokeStyle =
          'rgb(0,' +
          Math.floor(255 - 42.5 * i) +
          ',' +
          Math.floor(255 - 42.5 * j) +
          ')';
        ctx.beginPath();
        ctx.arc(180.5 + j * 25, 15 + i * 25, 10, 0, Math.PI * 2, true);
        ctx.stroke();
      }
    }
  };

  const draw5 = (ctx) => {
    let img = new Image();
    img.src = 'https://img.pwr.ink/nft/endless-clouds.svg';
    img.onload = () => {
      let ptrn = ctx.createPattern(img, 'repeat');
      ctx.fillStyle = ptrn;
      ctx.fillRect(0, 0, 300, 150);
    };
  };

  const draw6 = (ctx) => {
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

    ctx.font = '20px Times New Roman';
    ctx.fillStyle = 'Black';
    ctx.fillText('Sample String', 5, 30); // fillText(text, x, y [, maxWidth]),g在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的.
  };

  const draw7 = (ctx) => {
    let img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      ctx.beginPath();
      ctx.moveTo(30, 96);
      ctx.lineTo(70, 66);
      ctx.lineTo(103, 76);
      ctx.lineTo(170, 15);
      ctx.stroke();
    };
    img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
  };

  const draw8 = (ctx) => {
    ctx.fillRect(0, 0, 150, 150); // 使用默认设置绘制一个矩形
    ctx.save(); // 保存默认状态

    ctx.fillStyle = '#09F'; // 在原有配置基础上对颜色做改变
    ctx.fillRect(15, 15, 120, 120); // 使用新的设置绘制一个矩形

    ctx.save(); // 保存当前状态
    ctx.fillStyle = '#FFF'; // 再次改变颜色配置
    ctx.globalAlpha = 0.5;
    ctx.fillRect(30, 30, 90, 90); // 使用新的配置绘制一个矩形

    ctx.restore(); // 重新加载之前的颜色状态
    ctx.fillRect(45, 45, 60, 60); // 使用上一次的配置绘制一个矩形

    ctx.restore(); // 加载默认颜色配置
    ctx.fillRect(60, 60, 30, 30); // 使用加载的配置绘制一个矩形

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        ctx.save();
        ctx.fillStyle = 'rgb(' + 51 * i + ', ' + (255 - 51 * i) + ', 255)';
        ctx.translate(180 + j * 50, 10 + i * 50); // translate(x, y),x 是左右偏移量，y 是上下偏移量
        ctx.fillRect(0, 0, 25, 25);
        ctx.restore();
      }
    }
  };

  return (
    <div className='space-y-4 p-4'>
      <h1 className='text-center text-3xl font-semibold text-teal-900 underline '>
        Canvas Demo
      </h1>
      <Canvas draw={draw1} className={canvasStyle} />
      <Canvas draw={draw2} className={canvasStyle} />
      <Canvas draw={draw3} className={canvasStyle} />
      <Canvas draw={draw4} className={canvasStyle} />
      <Canvas draw={draw5} className={canvasStyle} />
      <Canvas draw={draw6} className={canvasStyle} />
      <Canvas draw={draw7} className={canvasStyle} />
      <Canvas draw={draw8} className={canvasStyle} />
      <AnimationCanvas draw={draw} className={canvasStyle} />
    </div>
  );
}

export default App;
