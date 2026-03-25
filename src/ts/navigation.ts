export function initScrollNav(): void {
  document.querySelectorAll<HTMLElement>('section[id]').forEach((section) => {
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.querySelectorAll('.nav-dot').forEach((d) => d.classList.remove('active'));
            const dot = document.querySelector(`.nav-dot[href="#${entry.target.id}"]`);
            if (dot) dot.classList.add('active');
          }
        });
      },
      { threshold: 0.4 },
    ).observe(section);
  });
}
