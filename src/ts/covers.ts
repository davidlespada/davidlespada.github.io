import { COVERS } from './galleries';

export function injectCovers(): void {
  Object.entries(COVERS).forEach(([id, src]) => {
    const card = document.getElementById(id);
    if (!card) return;

    const img = document.createElement('img');
    img.className = 'card-cover';
    img.src = src;
    img.alt = '';
    card.insertBefore(img, card.firstChild);
  });
}
