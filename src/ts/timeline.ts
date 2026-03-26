export function initTimeline(): void {
  const yearButtons = document.querySelectorAll<HTMLElement>('.log-year');
  const entries = document.querySelectorAll<HTMLElement>('.log-entry');

  yearButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      yearButtons.forEach((b) => b.classList.remove('active'));
      entries.forEach((e) => e.classList.remove('active'));

      btn.classList.add('active');
      const year = btn.dataset.year;
      if (year === 'all') {
        entries.forEach((e) => {
          if (e.dataset.year === 'all') e.classList.add('active');
        });
      } else {
        const entry = document.querySelector(`.log-entry[data-year="${year}"]`);
        if (entry) entry.classList.add('active');
      }
    });
  });
}
