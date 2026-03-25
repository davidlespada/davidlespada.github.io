export interface GalleryImage {
  src: string;
  cap: string;
}

export type GalleryKey = 'yellow_robot' | 'ciev' | 'kibus' | 'nodine' | 'syzygy' | 'occultist';

export const GALLERIES: Record<GalleryKey, GalleryImage[]> = {
  yellow_robot: [
    { src: '/images/yellow_robot_0.jpg', cap: 'The Yellow Robot — World' },
    { src: '/images/yellow_robot_1.jpg', cap: 'The Yellow Robot — Level' },
  ],
  ciev: [
    { src: '/images/ciev_0.jpg', cap: 'C.I.E.V — Environment' },
    { src: '/images/ciev_1.jpg', cap: 'C.I.E.V — Character' },
    { src: '/images/ciev_2.jpg', cap: 'C.I.E.V — Scene' },
  ],
  kibus: [
    { src: '/images/kibus_0.jpg', cap: 'Kibus — Atmosphere' },
    { src: '/images/kibus_1.jpg', cap: 'Kibus — Scene' },
    { src: '/images/kibus_2.jpg', cap: 'Kibus — Gameplay' },
  ],
  nodine: [
    { src: '/images/nodine_0.jpg', cap: 'Nodine — Title' },
    { src: '/images/nodine_1.jpg', cap: 'Nodine — Room' },
  ],
  syzygy: [
    { src: '/images/syzygy_0.jpg', cap: 'Syzygy — Runner' },
    { src: '/images/syzygy_1.jpg', cap: 'Syzygy — Lanes' },
  ],
  occultist: [
    { src: '/images/TheOccultist_Cover.jpg', cap: 'The Occultist — Cover' },
    { src: '/images/TheOccultist_01.webp', cap: 'The Occultist — Gameplay' },
    { src: '/images/TheOccultist_02.jpg', cap: 'The Occultist — Scene' },
    { src: '/images/TheOccultist_03.jpg', cap: 'The Occultist — Environment' },
  ],
};

export const COVERS: Record<string, string> = {
  'card-yr': '/images/cover_card-yr.jpg',
  'card-ciev': '/images/cover_card-ciev.jpg',
  'card-kibus': '/images/cover_card-kibus.jpg',
  'card-occultist': '/images/TheOccultist_Cover.jpg',
  'card-grip': '/images/Grip.webp',
  'card-nodine': '/images/nodine_0.jpg',
  'card-syzygy': '/images/syzygy_0.jpg',
};
