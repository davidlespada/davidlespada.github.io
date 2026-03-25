export function initSkillBars(): void {
  document.querySelectorAll<HTMLElement>('.skill-bar-fill').forEach((fill) => {
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.width = (entry.target as HTMLElement).dataset.w + '%';
          }
        });
      },
      { threshold: 0.2 },
    ).observe(fill);
  });
}
