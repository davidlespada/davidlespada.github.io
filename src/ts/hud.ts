export function initFpsCounter(): void {
  let lastTime = performance.now();
  let frames = 0;
  const fpsEl = document.getElementById('fps')!;
  const fmsEl = document.getElementById('fms')!;

  (function tick() {
    const now = performance.now();
    frames++;
    if (now - lastTime >= 500) {
      fpsEl.textContent = String(Math.round(frames / (now - lastTime) * 1000));
      fmsEl.textContent = ((now - lastTime) / frames).toFixed(2) + 'ms';
      lastTime = now;
      frames = 0;
    }
    requestAnimationFrame(tick);
  })();
}

export function initClock(): void {
  const clkEl = document.getElementById('clk')!;
  const fdateEl = document.getElementById('fdate')!;

  function update() {
    clkEl.textContent = new Date().toTimeString().slice(0, 8);
  }

  setInterval(update, 1000);
  update();
  fdateEl.textContent = new Date().toISOString().slice(0, 10);
}

export function initCrosshair(): void {
  const xhair = document.getElementById('xhair')!;

  document.addEventListener('click', (e) => {
    xhair.style.left = e.clientX + 'px';
    xhair.style.top = e.clientY + 'px';
    xhair.style.animation = 'none';
    void xhair.offsetWidth;
    xhair.style.animation = 'xFade 0.5s ease-out forwards';
  });
}
