let c = init('canvas');
w = canvas.width = window.innerWidth;
h = canvas.height = window.innerHeight;

class firefly {
  constructor() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.s = Math.random() * 5; /// firefly size
    this.ang = Math.random() * 2 * Math.PI;
    this.v = (this.s * this.s) / 16; /// firefly speed
  }

  /// Makes the fireflies move away from the mouse
  move() {
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < this.s * 20) {
      this.ang = Math.atan2(dy, dx) + Math.PI;
    }

    this.x += this.v * Math.cos(this.ang);
    this.y += this.v * Math.sin(this.ang);
    this.and += (Math.random() * 20 * Math.PI) / 180 - (10 * Math.PI) / 180;
  }

  show() {
    c.beginPath();
    c.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
    c.fillStyle = '#fddba3'; /// firefly color
    c.fill();
  }
}

let f = [];

function draw() {
  const targetFireflies = 150; /// desired number of fireflies

  /// update and show fireflies
  for (let i = 0; i < f.length; i++) {
    f[i].move();
    f[i].show();
    if (f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h) {
      f[i] = new firefly(); /// replace firefly with a new one
    }
  }

  /// add new fireflies if necessary
  while (f.length < targetFireflies) {
    f.push(new firefly());
  }

  /// remove excess fireflies
  while (f.length > targetFireflies) {
    f.pop();
  }
}

let mouse = {};
let last_mouse = {};

canvas.addEventListener(
  'mousemove',
  function (e) {
    last_mouse.x = mouse.x;
    last_mouse.y = mouse.y;

    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
  },
  false
);

function init(elemid) {
  let canvas = document.getElementById(elemid),
    c = canvas.getContext('2d'),
    w = (canvas.width = window.innerWidth),
    h = (canvas.height = window.innerHeight);
  c.fillStyle = 'rgba(30, 30, 30, 1)';
  c.fillRect(0, 0, w, h);
  return c;

}

window.requestAnimationFrame = function () {
  return (
    window.requestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback);
    }
  );
};

function loop() {
  requestAnimationFrame(loop);
  c.clearRect(0, 0, w, h);
  draw();
}
window.addEventListener('resize', function () {
  (w = canvas.width = window.innerWidth),
    (h = canvas.height = window.innerHeight);
  loop();
});

loop();
setInterval(loop, 1000 / 60);

/// makes the fireflies move away from the mouse in every section
document.addEventListener('mousemove', function (e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

