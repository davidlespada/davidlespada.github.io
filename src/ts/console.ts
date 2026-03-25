interface LogMessage {
  ts: string;
  lvl: 'info' | 'warn' | 'err';
  txt: string;
}

const BOOT_MESSAGES: LogMessage[] = [
  { ts: '00:00:01', lvl: 'info', txt: 'LogInit: Unreal Engine 5 initialized. Platform: PC / PS5 / XSX.' },
  { ts: '00:00:01', lvl: 'info', txt: 'LogLoad: ADavidEspada spawned. YearsXP=5+. ROLE_Authority.' },
  { ts: '00:00:02', lvl: 'info', txt: 'LogGAS: AbilitySystemComponent registered. GAS architecture loaded.' },
  { ts: '00:00:02', lvl: 'info', txt: 'LogNet: NetDriver online. Multiplayer replication graph initialized.' },
  { ts: '00:00:03', lvl: 'info', txt: 'LogAnim: AnimInstance compiled. Locomotion & Motion Warping ready.' },
  { ts: '00:00:03', lvl: 'warn', txt: 'LogSecret: [REDACTED] AAA multiplayer project active @ GRIP Studios.' },
  { ts: '00:00:04', lvl: 'info', txt: 'LogConsole: PS5 & Xbox Series X/S devkits connected.' },
  { ts: '00:00:04', lvl: 'info', txt: 'LogShip: The Occultist — shipping April 8 2026. Daedalic Entertainment.' },
  { ts: '00:00:05', lvl: 'info', txt: 'LogInit: Portfolio ready. bAvailable = true.' },
];

const COMMANDS: Record<string, LogMessage[] | null> = {
  'help':       [{ lvl: 'info', txt: "Commands: help | whoami | skills | experience | contact | helloworld | hire | sudo | iddqd | idkfa | noclip | stat fps | clear", ts: '' }],
  'whoami':     [
    { lvl: 'info', txt: 'David Espada — Unreal C++ Gameplay Programmer. Spain. 5+ years.', ts: '' },
    { lvl: 'info', txt: 'Lead Programmer: The Occultist (Daedalic). Shipping April 2026.', ts: '' },
    { lvl: 'info', txt: 'Currently: GRIP Studios — unannounced Triple-A Multiplayer.', ts: '' },
  ],
  'skills':     [{ lvl: 'info', txt: 'UE5, Unreal C++, GAS, 3Cs, CommonUI, Multiplayer, Tech Animation, AI, VR, Python.', ts: '' }],
  'experience': [
    { lvl: 'info', txt: 'GRIP Studios (2025→) — AAA Multiplayer, Unreal C++ core systems.', ts: '' },
    { lvl: 'info', txt: 'Pentakill/Daloar Studios (2021–2025) — The Occultist, Lead Programmer.', ts: '' },
    { lvl: 'info', txt: 'FrameOver (2020–2021) — VR Programmer, Oculus Quest 2.', ts: '' },
    { lvl: 'info', txt: 'Indie / Jams (2018→) — Epic MegaJam Winner 2023, Itch.io #1 Kibus.', ts: '' },
  ],
  'contact':    [
    { lvl: 'info', txt: 'davidlespada@gmail.com', ts: '' },
    { lvl: 'info', txt: 'linkedin.com/in/david-lopez-espada', ts: '' },
    { lvl: 'info', txt: 'github.com/davidlespada | daboiowich.itch.io', ts: '' },
  ],
  'helloworld': [{ lvl: 'info', txt: 'UE_LOG(LogTemp, Display, TEXT("Hello World! — ADavidEspada reporting for duty."));', ts: '' }],
  'hello':      [{ lvl: 'info', txt: 'Hello there! Type "hire" if you like what you see. 🚀', ts: '' }],
  'hire':       [
    { lvl: 'warn', txt: '🟢 bAvailable = true. Ready for your next AAA or AA project.', ts: '' },
    { lvl: 'info', txt: 'Send a message → davidlespada@gmail.com or connect on LinkedIn.', ts: '' },
  ],
  'sudo':       [{ lvl: 'err',  txt: 'Nice try. Root access denied. This isn\'t that kind of terminal.', ts: '' }],
  'sudo hire':  [{ lvl: 'warn', txt: 'Permission granted. Sending CV at the speed of light... ✉️', ts: '' }],
  '42':         [{ lvl: 'info', txt: 'The Answer to the Ultimate Question of Life, the Universe, and Everything.', ts: '' }],
  'ping':       [{ lvl: 'info', txt: 'Pong! 🏓 Latency: 0ms. David is always online (mentally).', ts: '' }],
  'coffee':     [{ lvl: 'warn', txt: '☕ Brewing... WARNING: CoffeeComponent nearly depleted. Refill required.', ts: '' }],
  'ship it':    [{ lvl: 'warn', txt: '🚀 Deploying to production... Done. That\'s what we do here.', ts: '' }],
  'ue5':        [{ lvl: 'info', txt: 'Unreal Engine 5 — the best engine for the best games. No debate.', ts: '' }],
  'gamescom':   [{ lvl: 'info', txt: 'Gamescom 2024 — The Occultist showcased in Cologne. Doug Cockle confirmed. Epic.', ts: '' }],
  'konami':     [{ lvl: 'warn', txt: '↑↑↓↓←→←→BA — 30 lives unlocked. You\'ll need them in AAA production.', ts: '' }],
  'crash':      [{ lvl: 'err',  txt: 'CRITICAL ERROR: Just kidding. This codebase doesn\'t crash. 😎', ts: '' }],
  'version':    [{ lvl: 'info', txt: 'DavidEspada.exe v5.0+ — Built with Unreal Engine 5, passion, and too much coffee.', ts: '' }],
  'iddqd':      [{ lvl: 'warn', txt: 'God Mode already active. You were born with it.', ts: '' }],
  'idkfa':      [{ lvl: 'warn', txt: 'All weapons unlocked: UE5, GAS, Multiplayer, VR, Console... ready.', ts: '' }],
  'noclip':     [{ lvl: 'warn', txt: 'Warning: geometry collision disabled. Architecture may be bypassed.', ts: '' }],
  'stat fps':   [{ lvl: 'info', txt: 'LogRHI: Frame time within budget. No hitches. No apologies.', ts: '' }],
  'clear':      null,
};

function getLevelClass(lvl: string): string {
  if (lvl === 'warn') return 'log-warn';
  if (lvl === 'err') return 'log-err';
  return 'log-info';
}

function createLogLine(msg: LogMessage, tsLabel?: string): HTMLDivElement {
  const div = document.createElement('div');
  div.className = 'log-msg';
  const ts = tsLabel || msg.ts || 'SYSTEM';
  div.innerHTML =
    `<span class="log-ts">[${ts}]</span>` +
    `<span class="${getLevelClass(msg.lvl)}">[${msg.lvl.toUpperCase().padEnd(4)}]</span>` +
    `<span class="log-txt">${msg.txt}</span>`;
  return div;
}

export function initConsole(): void {
  const output = document.getElementById('console-output')!;
  const input = document.getElementById('ci') as HTMLInputElement;

  // Boot sequence
  BOOT_MESSAGES.forEach((msg, i) => {
    setTimeout(() => {
      output.appendChild(createLogLine(msg));
      output.scrollTop = output.scrollHeight;
    }, i * 380 + 600);
  });

  // Interactive input
  input.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;

    const raw = input.value.trim();
    const cmd = raw.toLowerCase();
    input.value = '';
    if (!raw) return;

    // Echo command
    const echo = document.createElement('div');
    echo.className = 'log-msg';
    echo.innerHTML =
      `<span class="log-ts">[INPUT]</span>` +
      `<span class="log-info">[CMD ]</span>` +
      `<span class="log-txt" style="color:var(--ue)">${raw}</span>`;
    output.appendChild(echo);

    if (cmd === 'clear') {
      output.innerHTML = '';
      return;
    }

    const results = COMMANDS[cmd] || [{ lvl: 'err' as const, txt: `Unknown command: '${raw}'. Type 'help'.`, ts: '' }];
    results.forEach((r) => {
      output.appendChild(createLogLine(r, 'SYSTEM'));
    });

    output.scrollTop = output.scrollHeight;
  });
}
