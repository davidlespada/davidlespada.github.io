import '../styles/main.css';
import { injectCovers } from './covers';
import { initLightbox } from './lightbox';
import { initFpsCounter, initClock, initCrosshair } from './hud';
import { initConsole } from './console';
import { initTimeline } from './timeline';
import { initSkillBars } from './skills';
import { initScrollNav } from './navigation';

injectCovers();
initLightbox();
initFpsCounter();
initClock();
initCrosshair();
initConsole();
initTimeline();
initSkillBars();
initScrollNav();
