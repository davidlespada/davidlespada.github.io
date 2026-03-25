import { GALLERIES, GalleryKey, GalleryImage } from './galleries';

let currentImages: GalleryImage[] = [];
let currentIndex = 0;
let lb: HTMLElement;
let lbImg: HTMLImageElement;
let lbCount: HTMLElement;
let lbThumbs: HTMLElement;

function render(): void {
  lbImg.src = currentImages[currentIndex].src;
  lbCount.textContent = `${currentIndex + 1} / ${currentImages.length}`;
  lbThumbs.innerHTML = '';

  currentImages.forEach((im, i) => {
    const thumb = document.createElement('img');
    thumb.className = 'lb-thumb' + (i === currentIndex ? ' active' : '');
    thumb.src = im.src;
    thumb.alt = im.cap;
    thumb.onclick = () => { currentIndex = i; render(); };
    lbThumbs.appendChild(thumb);
  });
}

function open(key: string): void {
  currentImages = GALLERIES[key as GalleryKey] || [];
  currentIndex = 0;
  if (!currentImages.length) return;
  lb.classList.add('open');
  render();
}

function close(): void {
  lb.classList.remove('open');
}

function prev(): void {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  render();
}

function next(): void {
  currentIndex = (currentIndex + 1) % currentImages.length;
  render();
}

export function initLightbox(): void {
  lb = document.getElementById('lb')!;
  lbImg = document.getElementById('lb-img') as HTMLImageElement;
  lbCount = document.getElementById('lb-count')!;
  lbThumbs = document.getElementById('lb-thumbs')!;

  document.getElementById('lb-close')!.onclick = close;
  document.getElementById('lb-prev')!.onclick = prev;
  document.getElementById('lb-next')!.onclick = next;

  lb.addEventListener('click', (e) => {
    if (e.target === lb) close();
  });

  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  });

  (window as unknown as Record<string, unknown>).openLb = open;
}
