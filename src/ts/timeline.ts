export function initTimeline(): void {
  const yearButtons = document.querySelectorAll<HTMLElement>('.log-year');
  const entries = document.querySelectorAll<HTMLElement>('.log-entry');

  yearButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      yearButtons.forEach((b) => b.classList.remove('active'));
      entries.forEach((e) => e.classList.remove('active'));

      btn.classList.add('active');
      const entry = document.querySelector(`.log-entry[data-year="${btn.dataset.year}"]`);
      if (entry) entry.classList.add('active');
    });
  });
}
