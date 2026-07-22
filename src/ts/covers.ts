import { COVERS } from './galleries';

export function injectCovers(): void {
  Object.entries(COVERS).forEach(([id, src]) => {
    const card = document.getElementById(id);
    if (!card) return;

    const body = card.querySelector('.project-body');
    const img = document.createElement('img');
    img.className = 'card-cover';
    img.src = src;
    img.alt = '';
    img.loading = 'lazy';

    if (body) {
      card.insertBefore(img, body);
    } else {
      card.insertBefore(img, card.firstChild);
    }
  });
}
