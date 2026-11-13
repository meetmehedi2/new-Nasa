import React from 'react';

interface NotebookIdeaComicArtworkProps {
  sketchType: string;
  moduleId?: number;
  ideaNumber?: number;
}

export const NotebookIdeaComicArtwork: React.FC<NotebookIdeaComicArtworkProps> = ({
  sketchType,
  moduleId = 1,
  ideaNumber = 1,
}) => {
  const pid = `comic-panel-${sketchType.toLowerCase()}`;

  // Common Comic Gradients & Halftone Dots
  const renderDefs = (primaryGrad: [string, string]) => (
    <defs>
      <linearGradient id={`${pid}-sky`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={primaryGrad[0]} />
        <stop offset="100%" stopColor={primaryGrad[1]} />
      </linearGradient>
      <pattern id={`${pid}-dots`} x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" fill="rgba(255, 255, 255, 0.12)" />
      </pattern>
      <filter id={`${pid}-shadow`} x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="2" dy="2" stdDeviation="0" floodColor="#000000" floodOpacity="0.9" />
      </filter>
      <marker id={`${pid}-arrow`} viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
      </marker>
      <marker id={`${pid}-arrow-red`} viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444" />
      </marker>
      <marker id={`${pid}-arrow-cyan`} viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
      </marker>
    </defs>
  );

  const renderPanelFrame = (title: string, badge?: string) => (
    <>
      <rect width="100%" height="100%" fill={`url(#${pid}-sky)`} />
      <rect width="100%" height="100%" fill={`url(#${pid}-dots)`} />
      {/* Comic border */}
      <rect x="0" y="0" width="320" height="155" fill="none" stroke="#000000" strokeWidth="3" />
      {/* Top Banner Tag */}
      <g filter={`url(#${pid}-shadow)`}>
        <rect x="8" y="8" width="115" height="18" fill="#fde047" stroke="#000" strokeWidth="1.5" rx="2" />
        <text x="14" y="21" fill="#000" fontSize="9" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.05em">
          {badge || `PANEL #${ideaNumber} · PHYSICS`}
        </text>
      </g>
    </>
  );

  switch (sketchType) {
    // ══════════════════════════════════════════════════════════════════════════
    // MODULE 1: LAUNCH & ORBIT
    // ══════════════════════════════════════════════════════════════════════════
    case 'ROCKET_FORCES':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#0c192c', '#1e3a5f'])}
          {renderPanelFrame('THRUST VS GRAVITY', 'PANEL #1 · FORCES')}

          {/* Speed lines radiating down */}
          <g stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="8,10">
            <line x1="80" y1="20" x2="80" y2="140" />
            <line x1="240" y1="20" x2="240" y2="140" />
            <line x1="60" y1="40" x2="40" y2="140" />
            <line x1="260" y1="40" x2="280" y2="140" />
          </g>

          {/* Exhaust Billowing Clouds */}
          <ellipse cx="160" cy="145" rx="55" ry="20" fill="#e2e8f0" opacity="0.8" />
          <ellipse cx="140" cy="148" rx="35" ry="16" fill="#f8fafc" />
          <ellipse cx="180" cy="148" rx="35" ry="16" fill="#cbd5e1" />

          {/* Rocket Exhaust Fire Blast */}
          <polygon points="152,90 168,90 180,140 140,140" fill="#ef4444" stroke="#000" strokeWidth="1.5" />
          <polygon points="155,90 165,90 172,130 148,130" fill="#f59e0b" />
          <polygon points="157,90 163,90 167,115 153,115" fill="#fef08a" />

          {/* Atlas Rocket Silhouette / Body */}
          <g filter={`url(#${pid}-shadow)`}>
            <polygon points="160,25 152,48 168,48" fill="#dc2626" stroke="#000" strokeWidth="2" />
            <rect x="151" y="48" width="18" height="42" fill="#f1f5f9" stroke="#000" strokeWidth="2" />
            <rect x="151" y="60" width="18" height="6" fill="#0284c7" />
            {/* Fins */}
            <polygon points="151,80 142,90 151,90" fill="#dc2626" stroke="#000" strokeWidth="1.5" />
            <polygon points="169,80 178,90 169,90" fill="#dc2626" stroke="#000" strokeWidth="1.5" />
          </g>

          {/* UPWARD THRUST ARROW */}
          <g filter={`url(#${pid}-shadow)`}>
            <line x1="195" y1="75" x2="195" y2="28" stroke="#10b981" strokeWidth="4" markerEnd={`url(#${pid}-arrow)`} />
            <rect x="205" y="32" width="105" height="20" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" rx="3" />
            <text x="211" y="46" fill="#a7f3d0" fontSize="9" fontWeight="900">THRUST (F_t) ↑</text>
          </g>

          {/* DOWNWARD WEIGHT & DRAG ARROWS */}
          <g filter={`url(#${pid}-shadow)`}>
            {/* Gravity */}
            <line x1="125" y1="65" x2="125" y2="115" stroke="#ef4444" strokeWidth="3" markerEnd={`url(#${pid}-arrow-red)`} />
            <rect x="20" y="80" width="95" height="18" fill="#450a0a" stroke="#ef4444" strokeWidth="1.5" rx="3" />
            <text x="26" y="93" fill="#fca5a5" fontSize="8.5" fontWeight="900">GRAVITY (W) ↓</text>

            {/* Drag */}
            <line x1="135" y1="45" x2="135" y2="78" stroke="#38bdf8" strokeWidth="2.5" markerEnd={`url(#${pid}-arrow-cyan)`} />
            <rect x="20" y="52" width="102" height="18" fill="#082f49" stroke="#38bdf8" strokeWidth="1.5" rx="3" />
            <text x="26" y="65" fill="#bae6fd" fontSize="8.5" fontWeight="900">AIR DRAG (F_d) ↓</text>
          </g>

          {/* Comic Sound Effect */}
          <g transform="translate(195, 95) rotate(-8)" filter={`url(#${pid}-shadow)`}>
            <polygon points="0,10 12,0 24,8 36,0 48,10 38,18 46,28 32,24 20,32 14,22 0,26 6,17" fill="#facc15" stroke="#000" strokeWidth="1.5" />
            <text x="7" y="19" fill="#000" fontSize="8.5" fontWeight="900">ROAAR!</text>
          </g>

          {/* Bottom Formula Tag */}
          <rect x="180" y="125" width="132" height="22" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" rx="3" />
          <text x="186" y="140" fill="#38bdf8" fontSize="8.5" fontWeight="800">F_net = F_t - (W + F_d) &gt; 0</text>
        </svg>
      );

    case 'STAGING_DROP':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#020617', '#0f172a'])}
          {renderPanelFrame('STAGING & MASS', 'PANEL #2 · STAGING')}

          {/* Earth Horizon Curvature */}
          <path d="M -20 160 Q 160 110 340 160 Z" fill="#0369a1" />
          <path d="M -20 158 Q 160 108 340 158" stroke="#38bdf8" strokeWidth="3" fill="none" opacity="0.6" />

          {/* Upper Stage Boosting Forward */}
          <g transform="translate(170, 25) rotate(-22)" filter={`url(#${pid}-shadow)`}>
            {/* Second stage flame */}
            <polygon points="12,48 18,48 24,75 6,75" fill="#38bdf8" />
            <polygon points="13,48 17,48 20,68 10,68" fill="#ffffff" />
            {/* Second stage body */}
            <polygon points="15,0 8,16 22,16" fill="#ef4444" stroke="#000" strokeWidth="1.5" />
            <rect x="7" y="16" width="16" height="32" fill="#f8fafc" stroke="#000" strokeWidth="1.5" />
            <rect x="7" y="24" width="16" height="6" fill="#3b82f6" />
          </g>

          {/* Comic Blast SFX */}
          <g transform="translate(150, 70)" filter={`url(#${pid}-shadow)`}>
            <polygon points="0,8 10,-4 20,6 30,-2 26,14 36,20 22,24 16,34 8,24 -2,28 4,16" fill="#f59e0b" stroke="#000" strokeWidth="1.5" />
            <text x="5" y="18" fill="#000" fontSize="8" fontWeight="900">CLANK!</text>
          </g>

          {/* Spent Booster Tumbling Away */}
          <g transform="translate(90, 85) rotate(28)" filter={`url(#${pid}-shadow)`}>
            <rect x="0" y="0" width="20" height="45" fill="#64748b" stroke="#000" strokeWidth="1.5" />
            <line x1="0" y1="12" x2="20" y2="12" stroke="#000" strokeWidth="1" />
            <line x1="0" y1="28" x2="20" y2="28" stroke="#000" strokeWidth="1" />
            <text x="2" y="24" fill="#ef4444" fontSize="6.5" fontWeight="900">EMPTY</text>
          </g>

          {/* Separation Springs / Sparks */}
          <line x1="125" y1="88" x2="145" y2="78" stroke="#facc15" strokeWidth="2" strokeDasharray="3,2" />
          <circle cx="135" cy="83" r="2.5" fill="#fde047" />

          {/* Callout Banners */}
          <g filter={`url(#${pid}-shadow)`}>
            <rect x="195" y="15" width="115" height="34" fill="#064e3b" stroke="#10b981" strokeWidth="1.2" rx="3" />
            <text x="201" y="28" fill="#34d399" fontSize="8.5" fontWeight="900">UPPER STAGE FIRES ↑</text>
            <text x="201" y="42" fill="#a7f3d0" fontSize="8" fontWeight="700">Mass Drops, a = F/m Spikes!</text>
          </g>

          <g filter={`url(#${pid}-shadow)`}>
            <rect x="15" y="85" width="95" height="34" fill="#450a0a" stroke="#ef4444" strokeWidth="1.2" rx="3" />
            <text x="21" y="99" fill="#f87171" fontSize="8.5" fontWeight="900">BOOSTER SHED ↓</text>
            <text x="21" y="112" fill="#fca5a5" fontSize="7.8">85% Fuel Gone = Dead Mass</text>
          </g>
        </svg>
      );

    case 'ORBIT_FALLING':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#020617', '#090d16'])}
          {renderPanelFrame('WHAT IS ORBIT?', 'PANEL #3 · ORBIT')}

          {/* Starfield dots */}
          <circle cx="45" cy="35" r="1" fill="#fff" />
          <circle cx="95" cy="25" r="1.5" fill="#fef08a" />
          <circle cx="280" cy="35" r="1.2" fill="#93c5fd" />
          <circle cx="260" cy="130" r="1" fill="#fff" />

          {/* Earth Illustrated Sphere */}
          <g filter={`url(#${pid}-shadow)`}>
            <circle cx="140" cy="82" r="42" fill="#0284c7" stroke="#000" strokeWidth="2.5" />
            {/* Continents */}
            <path d="M 125 55 Q 145 65 140 85 Q 120 85 118 70 Z" fill="#16a34a" />
            <path d="M 148 70 Q 165 75 160 95 Q 142 100 138 90 Z" fill="#16a34a" />
            <path d="M 122 92 Q 135 98 128 115 Q 115 110 118 95 Z" fill="#16a34a" />
            {/* Atmosphere Rim Glow */}
            <circle cx="140" cy="82" r="44" fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.7" />
          </g>

          {/* Elliptical Orbit Curve */}
          <ellipse cx="140" cy="82" rx="85" ry="52" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="6,4" />

          {/* Spacecraft Moving Sideways at 7.8 km/s */}
          <g transform="translate(225, 76)" filter={`url(#${pid}-shadow)`}>
            <circle cx="0" cy="0" r="6" fill="#f8fafc" stroke="#000" strokeWidth="1.5" />
            {/* Solar wings */}
            <rect x="-14" y="-3" width="8" height="6" fill="#38bdf8" stroke="#000" strokeWidth="1" />
            <rect x="6" y="-3" width="8" height="6" fill="#38bdf8" stroke="#000" strokeWidth="1" />
            {/* Sideways velocity vector arrow */}
            <line x1="0" y1="0" x2="0" y2="-28" stroke="#facc15" strokeWidth="3" markerEnd={`url(#${pid}-arrow)`} />
          </g>

          {/* Gravitational Pull Arrow toward center */}
          <line x1="220" y1="78" x2="175" y2="81" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="3,2" markerEnd={`url(#${pid}-arrow-red)`} />
          <text x="180" y="74" fill="#ef4444" fontSize="8" fontWeight="bold">GRAVITY PULL</text>

          {/* Comic Explanation Tags */}
          <g filter={`url(#${pid}-shadow)`}>
            <rect x="180" y="15" width="132" height="34" fill="#78350f" stroke="#f59e0b" strokeWidth="1.5" rx="3" />
            <text x="187" y="28" fill="#fef08a" fontSize="8.5" fontWeight="900">7.8 KM/S (SIDEWAYS!)</text>
            <text x="187" y="42" fill="#fed7aa" fontSize="8" fontWeight="700">Curves at same rate Earth curves!</text>
          </g>

          <g filter={`url(#${pid}-shadow)`}>
            <rect x="15" y="118" width="135" height="26" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" rx="3" />
            <text x="21" y="134" fill="#38bdf8" fontSize="8.5" fontWeight="800">FREE-FALL: Never Hits Ground!</text>
          </g>
        </svg>
      );

    // ══════════════════════════════════════════════════════════════════════════
    // MODULE 2: DOCKING & RELATIVE VELOCITY
    // ══════════════════════════════════════════════════════════════════════════
    case 'RELATIVE_SPEED':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#0f172a', '#1e293b'])}
          {renderPanelFrame('RELATIVE VELOCITY', 'PANEL #1 · VELOCITY')}

          {/* Highway Split Divider */}
          <line x1="10" y1="78" x2="310" y2="78" stroke="#475569" strokeWidth="1.5" strokeDasharray="6,4" />

          {/* TOP HALF: Two Highway Cars */}
          <g filter={`url(#${pid}-shadow)`}>
            {/* Road */}
            <rect x="15" y="32" width="290" height="38" fill="#334155" stroke="#000" strokeWidth="1.5" rx="4" />
            <line x1="15" y1="51" x2="305" y2="51" stroke="#fde047" strokeWidth="1.5" strokeDasharray="10,8" />
            {/* Car A */}
            <rect x="60" y="38" width="34" height="15" fill="#38bdf8" stroke="#000" strokeWidth="1.5" rx="3" />
            <text x="65" y="49" fill="#000" fontSize="7" fontWeight="bold">100 km/h</text>
            {/* Car B */}
            <rect x="120" y="38" width="34" height="15" fill="#4ade80" stroke="#000" strokeWidth="1.5" rx="3" />
            <text x="125" y="49" fill="#000" fontSize="7" fontWeight="bold">100 km/h</text>
            {/* Delta-v callout */}
            <rect x="175" y="38" width="120" height="24" fill="#0f172a" stroke="#facc15" strokeWidth="1.2" rx="3" />
            <text x="181" y="52" fill="#facc15" fontSize="8" fontWeight="bold">Δv = 0 km/h (STATIONARY!)</text>
          </g>

          {/* BOTTOM HALF: Gemini & Agena Docking */}
          <g filter={`url(#${pid}-shadow)`}>
            {/* Gemini 8 */}
            <g transform="translate(60, 105)">
              <polygon points="25,5 35,0 35,20 25,15" fill="#000" />
              <polygon points="5,3 25,5 25,15 5,17" fill="#cbd5e1" stroke="#000" strokeWidth="1.5" />
              <text x="7" y="12" fill="#000" fontSize="6" fontWeight="bold">GEMINI</text>
            </g>
            {/* Agena Target */}
            <g transform="translate(130, 103)">
              <rect x="0" y="3" width="35" height="14" fill="#94a3b8" stroke="#000" strokeWidth="1.5" />
              <circle cx="0" cy="10" r="5" fill="#f59e0b" stroke="#000" strokeWidth="1" />
              <text x="7" y="13" fill="#000" fontSize="6.5" fontWeight="bold">AGENA</text>
            </g>
            {/* Closing radar vector */}
            <line x1="96" y1="110" x2="128" y2="110" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,2" markerEnd={`url(#${pid}-arrow-red)`} />
            {/* Bottom Tag */}
            <rect x="180" y="100" width="128" height="32" fill="#064e3b" stroke="#34d399" strokeWidth="1.2" rx="3" />
            <text x="186" y="114" fill="#34d399" fontSize="8.5" fontWeight="900">CLOSING AT 0.1 M/S</text>
            <text x="186" y="126" fill="#a7f3d0" fontSize="7.5">Both at 28,000 km/h in orbit!</text>
          </g>
        </svg>
      );

    case 'THRUSTER_BURSTS':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#020617', '#172554'])}
          {renderPanelFrame('RCS COLD-GAS BURSTS', 'PANEL #2 · INERTIA')}

          {/* Gemini Capsule in Space */}
          <g transform="translate(120, 50)" filter={`url(#${pid}-shadow)`}>
            <polygon points="40,20 60,10 60,35 40,30" fill="#1e293b" stroke="#000" strokeWidth="2" />
            <rect x="10" y="14" width="30" height="22" fill="#cbd5e1" stroke="#000" strokeWidth="2" />
            <polygon points="0,20 10,14 10,36 0,30" fill="#3b82f6" stroke="#000" strokeWidth="1.5" />

            {/* Thruster Plumes (Puffs) */}
            <path d="M 20 14 Q 25 0 35 2" stroke="#38bdf8" strokeWidth="3" fill="none" />
            <path d="M 20 14 Q 22 -4 30 -6" stroke="#f8fafc" strokeWidth="2" fill="none" opacity="0.8" />
            <path d="M 20 36 Q 25 50 35 48" stroke="#38bdf8" strokeWidth="3" fill="none" />
          </g>

          {/* Comic Sound Effect */}
          <g transform="translate(165, 30)" filter={`url(#${pid}-shadow)`}>
            <polygon points="0,5 8,-2 16,4 24,0 20,12 28,18 16,18 12,26 6,18 0,22 3,12" fill="#facc15" stroke="#000" strokeWidth="1.5" />
            <text x="4" y="13" fill="#000" fontSize="7.5" fontWeight="900">PFFT!</text>
          </g>

          {/* Callout */}
          <g filter={`url(#${pid}-shadow)`}>
            <rect x="15" y="112" width="150" height="32" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" rx="3" />
            <text x="21" y="125" fill="#38bdf8" fontSize="8.5" fontWeight="800">NO ATMOSPHERIC DRAG</text>
            <text x="21" y="137" fill="#94a3b8" fontSize="7.5">1-second puff keeps you rotating forever!</text>
          </g>

          <g filter={`url(#${pid}-shadow)`}>
            <rect x="180" y="112" width="128" height="32" fill="#7f1d1d" stroke="#ef4444" strokeWidth="1.2" rx="3" />
            <text x="186" y="125" fill="#fca5a5" fontSize="8.5" fontWeight="800">ROLL CRISIS: STUCK THRUSTER</text>
            <text x="186" y="137" fill="#fecaca" fontSize="7.5">1 revolution per second peril!</text>
          </g>
        </svg>
      );

    case 'DOCKING_ALIGN':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#030712', '#0f172a'])}
          {renderPanelFrame('ALIGNING DOCKING LATCHES', 'PANEL #3 · DOCKING')}

          {/* Radar HUD Crosshair */}
          <circle cx="160" cy="78" r="45" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6" />
          <circle cx="160" cy="78" r="22" fill="none" stroke="#22c55e" strokeWidth="1.5" opacity="0.8" />
          <line x1="160" y1="20" x2="160" y2="135" stroke="#22c55e" strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
          <line x1="100" y1="78" x2="220" y2="78" stroke="#22c55e" strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />

          {/* Nose Indexing Collar */}
          <rect x="148" y="65" width="24" height="26" fill="none" stroke="#facc15" strokeWidth="2.5" />
          <polygon points="148,65 142,58 154,58" fill="#facc15" />
          <polygon points="172,65 178,58 166,58" fill="#facc15" />

          {/* Comic Sound Effect */}
          <g transform="translate(195, 45)" filter={`url(#${pid}-shadow)`}>
            <polygon points="0,6 10,0 20,8 30,2 24,14 34,22 18,22 12,30 6,20 -2,22 3,12" fill="#22c55e" stroke="#000" strokeWidth="1.5" />
            <text x="5" y="17" fill="#000" fontSize="7.5" fontWeight="900">LOCK!</text>
          </g>

          <g filter={`url(#${pid}-shadow)`}>
            <rect x="15" y="118" width="140" height="25" fill="#0f172a" stroke="#22c55e" strokeWidth="1.2" rx="3" />
            <text x="21" y="134" fill="#86efac" fontSize="8.5" fontWeight="800">LATERAL ERROR &lt; 5 CM</text>
          </g>
          <g filter={`url(#${pid}-shadow)`}>
            <rect x="175" y="118" width="130" height="25" fill="#0f172a" stroke="#facc15" strokeWidth="1.2" rx="3" />
            <text x="181" y="134" fill="#fef08a" fontSize="8.5" fontWeight="800">12 MECHANICAL LATCHES</text>
          </g>
        </svg>
      );

    // ══════════════════════════════════════════════════════════════════════════
    // MODULE 3: LUNAR LANDING
    // ══════════════════════════════════════════════════════════════════════════
    case 'GRAVITY_COMPARE':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#0b1329', '#1c2541'])}
          {renderPanelFrame('GRAVITY COMPARISON', 'PANEL #1 · GRAVITY')}

          {/* Three planetary pedestals */}
          {/* Earth Pedestal */}
          <g transform="translate(30, 60)" filter={`url(#${pid}-shadow)`}>
            <rect x="0" y="50" width="70" height="35" fill="#0284c7" stroke="#000" strokeWidth="2" rx="3" />
            <text x="14" y="65" fill="#ffffff" fontSize="9" fontWeight="bold">EARTH</text>
            <text x="14" y="78" fill="#bae6fd" fontSize="8">1.0g (9.8 m/s²)</text>
            {/* Heavy jump - low bounce */}
            <circle cx="35" cy="30" r="10" fill="#f8fafc" stroke="#000" strokeWidth="1.5" />
            <path d="M 25 45 Q 35 20 45 45" stroke="#ef4444" strokeWidth="2" fill="none" />
            <text x="22" y="15" fill="#ef4444" fontSize="8" fontWeight="bold">Low Leap</text>
          </g>

          {/* Moon Pedestal */}
          <g transform="translate(125, 30)" filter={`url(#${pid}-shadow)`}>
            <rect x="0" y="80" width="70" height="35" fill="#64748b" stroke="#000" strokeWidth="2" rx="3" />
            <text x="16" y="95" fill="#ffffff" fontSize="9" fontWeight="bold">MOON</text>
            <text x="12" y="108" fill="#e2e8f0" fontSize="8">0.16g (1.62 m/s²)</text>
            {/* Super high jump */}
            <circle cx="35" cy="20" r="10" fill="#f8fafc" stroke="#000" strokeWidth="1.5" />
            <path d="M 20 75 Q 35 0 50 75" stroke="#10b981" strokeWidth="2.5" fill="none" strokeDasharray="3,2" />
            <text x="18" y="-5" fill="#34d399" fontSize="8.5" fontWeight="900">6x Higher!</text>
          </g>

          {/* Mars Pedestal */}
          <g transform="translate(220, 48)" filter={`url(#${pid}-shadow)`}>
            <rect x="0" y="62" width="70" height="35" fill="#b91c1c" stroke="#000" strokeWidth="2" rx="3" />
            <text x="16" y="77" fill="#ffffff" fontSize="9" fontWeight="bold">MARS</text>
            <text x="12" y="90" fill="#fecaca" fontSize="8">0.38g (3.71 m/s²)</text>
            {/* Medium jump */}
            <circle cx="35" cy="25" r="10" fill="#f8fafc" stroke="#000" strokeWidth="1.5" />
            <path d="M 22 58 Q 35 15 48 58" stroke="#f59e0b" strokeWidth="2" fill="none" />
            <text x="16" y="8" fill="#f59e0b" fontSize="8" fontWeight="bold">2.6x Higher</text>
          </g>
        </svg>
      );

    case 'DESCENT_FUEL':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#020617', '#0f172a'])}
          {renderPanelFrame('DESCENT FUEL MARGIN', 'PANEL #2 · FUEL')}

          {/* Moon Surface with Crater */}
          <path d="M 0 135 Q 120 120 220 145 L 320 130 L 320 155 L 0 155 Z" fill="#334155" />
          <ellipse cx="140" cy="142" rx="35" ry="8" fill="#1e293b" />

          {/* Lunar Module Eagle */}
          <g transform="translate(110, 40)" filter={`url(#${pid}-shadow)`}>
            {/* Ascent Stage */}
            <polygon points="25,5 35,0 45,5 45,25 25,25" fill="#f8fafc" stroke="#000" strokeWidth="1.5" />
            <circle cx="32" cy="12" r="3" fill="#38bdf8" />
            {/* Descent Stage (Gold foil) */}
            <polygon points="15,25 55,25 50,42 20,42" fill="#fbbf24" stroke="#000" strokeWidth="1.5" />
            {/* Landing legs */}
            <line x1="20" y1="42" x2="5" y2="65" stroke="#94a3b8" strokeWidth="2" />
            <line x1="50" y1="42" x2="65" y2="65" stroke="#94a3b8" strokeWidth="2" />
            {/* Descent Rocket Flame */}
            <polygon points="30,42 40,42 45,75 25,75" fill="#f97316" />
            <polygon points="32,42 38,42 40,65 30,65" fill="#fef08a" />
          </g>

          {/* Fuel Gauge Danger Dial */}
          <g transform="translate(230, 25)" filter={`url(#${pid}-shadow)`}>
            <circle cx="35" cy="35" r="30" fill="#090d16" stroke="#ef4444" strokeWidth="2.5" />
            {/* Needle in the red */}
            <line x1="35" y1="35" x2="18" y2="20" stroke="#ef4444" strokeWidth="3" />
            <circle cx="35" cy="35" r="4" fill="#fef08a" />
            <text x="18" y="52" fill="#ef4444" fontSize="8" fontWeight="900">LOW FUEL!</text>
          </g>

          {/* 1202 Alarm Banner */}
          <g filter={`url(#${pid}-shadow)`}>
            <rect x="15" y="32" width="95" height="30" fill="#450a0a" stroke="#ef4444" strokeWidth="1.5" rx="3" />
            <text x="21" y="46" fill="#f87171" fontSize="8" fontWeight="900">1202 PROGRAM ALARM</text>
            <text x="21" y="57" fill="#fca5a5" fontSize="7">Radar overload at 1,000 ft!</text>
          </g>

          <g filter={`url(#${pid}-shadow)`}>
            <rect x="195" y="105" width="115" height="32" fill="#78350f" stroke="#f59e0b" strokeWidth="1.2" rx="3" />
            <text x="201" y="119" fill="#fef08a" fontSize="8.5" fontWeight="900">30 SECONDS LEFT</text>
            <text x="201" y="131" fill="#fed7aa" fontSize="7.5">Neil Armstrong lands manually</text>
          </g>
        </svg>
      );

    case 'INERTIA_BRAKING':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#020617', '#0f172a'])}
          {renderPanelFrame('NO BRAKES IN SPACE', 'PANEL #3 · INERTIA')}

          {/* Velocity Vector Arrow Heading Right */}
          <line x1="80" y1="45" x2="250" y2="45" stroke="#38bdf8" strokeWidth="3" markerEnd={`url(#${pid}-arrow-cyan)`} strokeDasharray="6,4" />
          <text x="120" y="38" fill="#38bdf8" fontSize="8.5" fontWeight="bold">FORWARD VELOCITY (v)</text>

          {/* LM Flipped 180° firing backwards */}
          <g transform="translate(170, 75) rotate(90)" filter={`url(#${pid}-shadow)`}>
            <polygon points="15,10 35,10 30,30 20,30" fill="#fbbf24" stroke="#000" strokeWidth="1.5" />
            <rect x="18" y="0" width="14" height="10" fill="#f8fafc" stroke="#000" strokeWidth="1.5" />
            {/* Retro engine blast firing AGAINST velocity */}
            <polygon points="20,30 30,30 38,70 12,70" fill="#f97316" />
            <polygon points="22,30 28,30 32,55 18,55" fill="#fde047" />
          </g>

          {/* Retro-Thrust Force Vector Arrow Heading Left */}
          <line x1="220" y1="105" x2="90" y2="105" stroke="#ef4444" strokeWidth="4" markerEnd={`url(#${pid}-arrow-red)`} />
          <text x="95" y="98" fill="#ef4444" fontSize="9" fontWeight="900">RETRO-THRUST (F_brake) ←</text>

          <g filter={`url(#${pid}-shadow)`}>
            <rect x="15" y="118" width="150" height="25" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.2" rx="3" />
            <text x="21" y="134" fill="#fde047" fontSize="8" fontWeight="800">FLIP AROUND & BURN OPPOSITE!</text>
          </g>
        </svg>
      );

    // ══════════════════════════════════════════════════════════════════════════
    // MODULE 4: MARS ROVER
    // ══════════════════════════════════════════════════════════════════════════
    case 'ROVER_ROUTES':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#450a0a', '#7f1d1d'])}
          {renderPanelFrame('ROVER ROUTE HAZARD MAP', 'PANEL #1 · ROVER')}

          {/* Martian Red Terrain with Boulders & Dunes */}
          <path d="M 0 110 Q 80 85 160 115 Q 240 135 320 100 L 320 155 L 0 155 Z" fill="#991b1b" />
          {/* Boulders */}
          <polygon points="90,105 105,90 120,105" fill="#7f1d1d" stroke="#000" strokeWidth="1.5" />
          <polygon points="210,115 230,95 245,115" fill="#7f1d1d" stroke="#000" strokeWidth="1.5" />

          {/* Dangerous Route (Red X) */}
          <path d="M 50 125 Q 110 95 100 85" stroke="#ef4444" strokeWidth="3" fill="none" strokeDasharray="4,4" />
          <text x="108" y="85" fill="#ef4444" fontSize="12" fontWeight="900">✕ HAZARD</text>

          {/* Safe Green Route */}
          <path d="M 50 125 Q 80 140 160 135 Q 200 130 260 125" stroke="#22c55e" strokeWidth="3.5" fill="none" />
          <text x="250" y="118" fill="#86efac" fontSize="9" fontWeight="900">✓ SAFE PATH</text>

          {/* Sojourner Micro Rover */}
          <g transform="translate(30, 110)" filter={`url(#${pid}-shadow)`}>
            <rect x="0" y="0" width="22" height="12" fill="#fbbf24" stroke="#000" strokeWidth="1.5" />
            <circle cx="3" cy="14" r="3.5" fill="#1e293b" />
            <circle cx="11" cy="14" r="3.5" fill="#1e293b" />
            <circle cx="19" cy="14" r="3.5" fill="#1e293b" />
          </g>

          <g filter={`url(#${pid}-shadow)`}>
            <rect x="180" y="15" width="128" height="32" fill="#0f172a" stroke="#22c55e" strokeWidth="1.2" rx="3" />
            <text x="186" y="28" fill="#4ade80" fontSize="8.5" fontWeight="900">ROCKER-BOGIE SYSTEM</text>
            <text x="186" y="40" fill="#a7f3d0" fontSize="7.5">Climbs rocks larger than wheel size</text>
          </g>
        </svg>
      );

    case 'SAMPLE_GEOLOGY':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#1e1b4b', '#311042'])}
          {renderPanelFrame('ROBOTIC SPECTROSCOPY', 'PANEL #2 · SCIENCE')}

          {/* Layered Rock Strata */}
          <g filter={`url(#${pid}-shadow)`}>
            <polygon points="180,45 280,35 300,140 190,145" fill="#78350f" stroke="#000" strokeWidth="2" />
            <line x1="183" y1="70" x2="285" y2="60" stroke="#d97706" strokeWidth="2" />
            <line x1="186" y1="95" x2="290" y2="85" stroke="#b45309" strokeWidth="3" />
            <line x1="188" y1="120" x2="295" y2="110" stroke="#92400e" strokeWidth="2" />
            <text x="210" y="80" fill="#fef08a" fontSize="7.5" fontWeight="bold">IRON OXIDE LAYER</text>
          </g>

          {/* APXS Laser Zap Beam */}
          <line x1="110" y1="75" x2="195" y2="72" stroke="#ec4899" strokeWidth="3" strokeDasharray="5,2" />
          <circle cx="195" cy="72" r="6" fill="#f43f5e" opacity="0.8" />
          <circle cx="195" cy="72" r="2" fill="#fff" />

          {/* Rover Robotic Arm */}
          <g filter={`url(#${pid}-shadow)`}>
            <line x1="40" y1="110" x2="75" y2="85" stroke="#94a3b8" strokeWidth="4" />
            <circle cx="75" cy="85" r="4" fill="#f59e0b" />
            <line x1="75" y1="85" x2="110" y2="75" stroke="#94a3b8" strokeWidth="3" />
            <rect x="105" y="70" width="12" height="10" fill="#0284c7" stroke="#000" strokeWidth="1" />
          </g>

          {/* Comic ZAP sound */}
          <g transform="translate(145, 45)" filter={`url(#${pid}-shadow)`}>
            <polygon points="0,8 10,-2 18,6 26,0 22,12 30,18 16,18 12,26 6,18 0,22 3,12" fill="#ec4899" stroke="#000" strokeWidth="1.5" />
            <text x="5" y="14" fill="#fff" fontSize="7.5" fontWeight="900">ZAP!</text>
          </g>

          <g filter={`url(#${pid}-shadow)`}>
            <rect x="15" y="115" width="145" height="30" fill="#0f172a" stroke="#ec4899" strokeWidth="1.2" rx="3" />
            <text x="21" y="128" fill="#f472b6" fontSize="8.5" fontWeight="900">APXS SPECTROMETER</text>
            <text x="21" y="139" fill="#fbcfe8" fontSize="7.5">Measures silica, nickel, and basalt</text>
          </g>
        </svg>
      );

    case 'ROVER_LIMITS':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#450a0a', '#1e293b'])}
          {renderPanelFrame('ROVER SURVIVAL LIMITS', 'PANEL #3 · POWER')}

          {/* Sun with Martian Dust Haze */}
          <circle cx="60" cy="45" r="18" fill="#fb923c" opacity="0.8" />
          <circle cx="60" cy="45" r="28" fill="none" stroke="#fdba74" strokeWidth="2" strokeDasharray="4,4" opacity="0.4" />

          {/* Battery Meter Dial */}
          <g transform="translate(180, 25)" filter={`url(#${pid}-shadow)`}>
            <rect x="0" y="0" width="120" height="38" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" rx="4" />
            <text x="10" y="16" fill="#f59e0b" fontSize="8" fontWeight="bold">BATTERY POWER:</text>
            {/* Battery bar 35% */}
            <rect x="10" y="22" width="100" height="9" fill="#334155" rx="2" />
            <rect x="10" y="22" width="35" height="9" fill="#ef4444" rx="2" />
            <text x="50" y="30" fill="#fff" fontSize="7" fontWeight="bold">35%</text>
          </g>

          {/* Dust accumulation on Solar Panel */}
          <g transform="translate(80, 95)" filter={`url(#${pid}-shadow)`}>
            <polygon points="20,0 80,0 70,25 10,25" fill="#0284c7" stroke="#000" strokeWidth="2" />
            <ellipse cx="45" cy="12" rx="25" ry="6" fill="#d97706" opacity="0.75" />
            <text x="25" y="15" fill="#fef08a" fontSize="7.5" fontWeight="bold">DUST LAYER COATING</text>
          </g>

          <g filter={`url(#${pid}-shadow)`}>
            <rect x="15" y="118" width="145" height="25" fill="#450a0a" stroke="#ef4444" strokeWidth="1.2" rx="3" />
            <text x="21" y="134" fill="#fca5a5" fontSize="8.5" fontWeight="800">FREEZING NIGHTS: -120°C</text>
          </g>
        </svg>
      );

    // ══════════════════════════════════════════════════════════════════════════
    // MODULE 5: HUBBLE SPACE TELESCOPE
    // ══════════════════════════════════════════════════════════════════════════
    case 'ATMOSPHERE_TURBULENCE':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#020617', '#0369a1'])}
          {renderPanelFrame('ATMOSPHERIC TURBULENCE', 'PANEL #1 · OPTICS')}

          {/* Turbulent atmosphere heat ripples */}
          <path d="M 20 60 Q 40 45 60 60 T 100 60 T 140 60" stroke="#f59e0b" strokeWidth="2" fill="none" />
          <path d="M 20 75 Q 40 90 60 75 T 100 75 T 140 75" stroke="#38bdf8" strokeWidth="2" fill="none" opacity="0.8" />
          <text x="20" y="98" fill="#fde047" fontSize="8" fontWeight="bold">TURBULENT AIR RIPPLES</text>

          {/* Blurry Star on Ground */}
          <ellipse cx="60" cy="35" rx="14" ry="10" fill="#fef08a" opacity="0.5" />
          <circle cx="60" cy="35" r="4" fill="#fff" />
          <text x="35" y="20" fill="#ef4444" fontSize="8" fontWeight="bold">BLURRY STAR</text>

          {/* VS Divider */}
          <line x1="160" y1="15" x2="160" y2="140" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4,4" />
          <circle cx="160" cy="78" r="12" fill="#000" stroke="#fff" strokeWidth="1.5" />
          <text x="154" y="82" fill="#fff" fontSize="8" fontWeight="bold">VS</text>

          {/* Hubble Above Atmosphere */}
          <g transform="translate(190, 30)" filter={`url(#${pid}-shadow)`}>
            {/* Hubble cylinder */}
            <rect x="30" y="30" width="55" height="24" fill="#cbd5e1" stroke="#000" strokeWidth="2" rx="3" />
            <polygon points="85,30 100,30 95,54 85,54" fill="#1e293b" />
            {/* Solar panels */}
            <rect x="42" y="10" width="16" height="18" fill="#0284c7" stroke="#000" strokeWidth="1.2" />
            <rect x="42" y="56" width="16" height="18" fill="#0284c7" stroke="#000" strokeWidth="1.2" />
            {/* Sharp pinpoint stars */}
            <circle cx="115" cy="20" r="1.5" fill="#fff" />
            <circle cx="118" cy="65" r="1.5" fill="#fde047" />
          </g>

          <g filter={`url(#${pid}-shadow)`}>
            <rect x="180" y="112" width="128" height="30" fill="#064e3b" stroke="#34d399" strokeWidth="1.2" rx="3" />
            <text x="186" y="125" fill="#86efac" fontSize="8.5" fontWeight="900">ABOVE ATMOSPHERE</text>
            <text x="186" y="136" fill="#a7f3d0" fontSize="7.5">Zero shimmer = razor sharp focus</text>
          </g>
        </svg>
      );

    case 'EM_SPECTRUM':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#020617', '#111827'])}
          {renderPanelFrame('ELECTROMAGNETIC SPECTRUM', 'PANEL #2 · SPECTRUM')}

          {/* Rainbow Spectral Ribbon */}
          <g filter={`url(#${pid}-shadow)`}>
            <rect x="20" y="55" width="40" height="35" fill="#6366f1" stroke="#000" strokeWidth="1" />
            <text x="24" y="75" fill="#fff" fontSize="6.5" fontWeight="bold">GAMMA</text>

            <rect x="60" y="55" width="40" height="35" fill="#3b82f6" stroke="#000" strokeWidth="1" />
            <text x="68" y="75" fill="#fff" fontSize="6.5" fontWeight="bold">X-RAY</text>

            <rect x="100" y="55" width="40" height="35" fill="#06b6d4" stroke="#000" strokeWidth="1" />
            <text x="110" y="75" fill="#fff" fontSize="7" fontWeight="bold">UV</text>

            <rect x="140" y="55" width="45" height="35" fill="#10b981" stroke="#000" strokeWidth="1" />
            <text x="144" y="75" fill="#fff" fontSize="6.5" fontWeight="bold">VISIBLE</text>

            <rect x="185" y="55" width="45" height="35" fill="#f59e0b" stroke="#000" strokeWidth="1" />
            <text x="189" y="75" fill="#000" fontSize="6.5" fontWeight="bold">INFRARED</text>

            <rect x="230" y="55" width="40" height="35" fill="#ef4444" stroke="#000" strokeWidth="1" />
            <text x="236" y="75" fill="#fff" fontSize="6.5" fontWeight="bold">MICROWAVE</text>

            <rect x="270" y="55" width="35" height="35" fill="#831843" stroke="#000" strokeWidth="1" />
            <text x="274" y="75" fill="#fff" fontSize="6.5" fontWeight="bold">RADIO</text>
          </g>

          {/* Hubble Scope Bracket */}
          <line x1="120" y1="98" x2="165" y2="98" stroke="#38bdf8" strokeWidth="3" />
          <text x="122" y="112" fill="#38bdf8" fontSize="8" fontWeight="bold">HUBBLE (UV/VIS)</text>

          {/* Webb Scope Bracket */}
          <line x1="190" y1="98" x2="235" y2="98" stroke="#f59e0b" strokeWidth="3" />
          <text x="194" y="112" fill="#f59e0b" fontSize="8" fontWeight="bold">JWST (INFRARED)</text>

          <g filter={`url(#${pid}-shadow)`}>
            <rect x="15" y="122" width="290" height="22" fill="#0f172a" stroke="#fff" strokeWidth="1" rx="3" />
            <text x="22" y="137" fill="#f8fafc" fontSize="8">Infrared pierces cosmic dust clouds to see the very first stars!</text>
          </g>
        </svg>
      );

    case 'SPHERICAL_ABERRATION':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#020617', '#1e293b'])}
          {renderPanelFrame('HUBBLE SPHERICAL ABERRATION', 'PANEL #3 · MIRROR')}

          {/* Curved Primary Mirror (Flawed edge) */}
          <path d="M 40 25 Q 75 75 40 125" stroke="#38bdf8" strokeWidth="6" fill="none" />
          <text x="15" y="78" fill="#38bdf8" fontSize="8" fontWeight="bold">PRIMARY MIRROR</text>

          {/* Light Rays Focusing at 2 Different Points */}
          <line x1="45" y1="35" x2="190" y2="75" stroke="#ef4444" strokeWidth="2" />
          <line x1="45" y1="115" x2="190" y2="75" stroke="#ef4444" strokeWidth="2" />
          <circle cx="190" cy="75" r="4" fill="#ef4444" />
          <text x="160" y="65" fill="#ef4444" fontSize="7.5" fontWeight="bold">EDGE FOCUS (SHORT)</text>

          <line x1="55" y1="55" x2="250" y2="75" stroke="#10b981" strokeWidth="2" />
          <line x1="55" y1="95" x2="250" y2="75" stroke="#10b981" strokeWidth="2" />
          <circle cx="250" cy="75" r="4" fill="#10b981" />
          <text x="210" y="90" fill="#10b981" fontSize="7.5" fontWeight="bold">CENTER FOCUS (LONG)</text>

          {/* COSTAR Eyeglasses Fix Stamp */}
          <g transform="translate(195, 110)" filter={`url(#${pid}-shadow)`}>
            <rect x="0" y="0" width="115" height="32" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" rx="3" />
            <text x="6" y="14" fill="#34d399" fontSize="8.5" fontWeight="900">COSTAR FIX: 1993</text>
            <text x="6" y="26" fill="#a7f3d0" fontSize="7.5">Installed corrective mirrors!</text>
          </g>
        </svg>
      );

    // ══════════════════════════════════════════════════════════════════════════
    // MODULE 6: VOYAGER DEEP SPACE
    // ══════════════════════════════════════════════════════════════════════════
    case 'GRAVITY_SLINGSHOT':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#020617', '#172554'])}
          {renderPanelFrame('GRAVITY SLINGSHOT ASSIST', 'PANEL #1 · GRAVITY')}

          {/* Jupiter with atmospheric swirling bands */}
          <g filter={`url(#${pid}-shadow)`}>
            <circle cx="150" cy="78" r="38" fill="#ea580c" stroke="#000" strokeWidth="2.5" />
            <ellipse cx="150" cy="65" rx="37" ry="6" fill="#fed7aa" opacity="0.7" />
            <ellipse cx="150" cy="78" rx="38" ry="7" fill="#c2410c" opacity="0.8" />
            <ellipse cx="150" cy="92" rx="36" ry="6" fill="#fb923c" opacity="0.7" />
            {/* Great Red Spot */}
            <ellipse cx="165" cy="85" rx="8" ry="5" fill="#dc2626" stroke="#000" strokeWidth="1" />
            <text x="135" y="52" fill="#fff" fontSize="8" fontWeight="bold">JUPITER</text>
          </g>

          {/* Hyperbolic Slingshot Trajectory */}
          <path d="M 30 140 Q 150 15 280 40" stroke="#22c55e" strokeWidth="4" fill="none" strokeDasharray="6,4" />
          <polygon points="280,35 292,42 278,50" fill="#22c55e" />

          {/* Voyager Probe */}
          <g transform="translate(190, 25) rotate(22)" filter={`url(#${pid}-shadow)`}>
            {/* Dish antenna */}
            <circle cx="12" cy="12" r="10" fill="#f8fafc" stroke="#000" strokeWidth="1.5" />
            <line x1="12" y1="12" x2="28" y2="4" stroke="#94a3b8" strokeWidth="2" />
          </g>

          {/* Comic Sound Effect */}
          <g transform="translate(210, 55)" filter={`url(#${pid}-shadow)`}>
            <polygon points="0,8 10,0 20,8 30,2 24,14 34,22 18,22 12,30 6,20 -2,22 3,12" fill="#22c55e" stroke="#000" strokeWidth="1.5" />
            <text x="5" y="17" fill="#000" fontSize="7.5" fontWeight="900">+15 KM/S!</text>
          </g>

          <g filter={`url(#${pid}-shadow)`}>
            <rect x="15" y="112" width="130" height="32" fill="#0f172a" stroke="#22c55e" strokeWidth="1.2" rx="3" />
            <text x="21" y="126" fill="#86efac" fontSize="8.5" fontWeight="900">FREE VELOCITY BOOST</text>
            <text x="21" y="137" fill="#bbf7d0" fontSize="7.5">Steals orbital momentum from planet</text>
          </g>
        </svg>
      );

    case 'COURSE_CORRECTIONS':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#020617', '#1e293b'])}
          {renderPanelFrame('TRAJECTORY LEVERAGE', 'PANEL #2 · NAVIGATION')}

          {/* Early tiny burn vs late giant burn */}
          <circle cx="35" cy="78" r="8" fill="#38bdf8" />
          <text x="22" y="98" fill="#38bdf8" fontSize="8" fontWeight="bold">EARTH</text>

          {/* Early puff path */}
          <path d="M 45 78 Q 120 78 280 35" stroke="#22c55e" strokeWidth="3" fill="none" />
          <polygon points="280,30 292,37 280,44" fill="#22c55e" />
          <text x="180" y="30" fill="#22c55e" fontSize="8.5" fontWeight="bold">EARLY BURN: 1 m/s Δv</text>

          {/* Late panic burn */}
          <path d="M 45 78 Q 200 78 280 115" stroke="#ef4444" strokeWidth="3" fill="none" strokeDasharray="4,4" />
          <polygon points="280,110 292,117 280,124" fill="#ef4444" />
          <text x="180" y="132" fill="#ef4444" fontSize="8.5" fontWeight="bold">LATE BURN: 100 m/s Δv</text>

          <g filter={`url(#${pid}-shadow)`}>
            <rect x="15" y="25" width="130" height="26" fill="#064e3b" stroke="#34d399" strokeWidth="1.2" rx="3" />
            <text x="21" y="41" fill="#86efac" fontSize="8" fontWeight="bold">100x FUEL SAVINGS EARLY!</text>
          </g>
        </svg>
      );

    case 'RADIATION_SHIELDING':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#020617', '#311042'])}
          {renderPanelFrame('RADIATION & RADIO BEAMS', 'PANEL #3 · RADIO')}

          {/* High Energy Cosmic Rays striking Shield */}
          <line x1="30" y1="40" x2="130" y2="70" stroke="#ef4444" strokeWidth="2.5" />
          <line x1="30" y1="60" x2="130" y2="75" stroke="#f59e0b" strokeWidth="2" />
          <line x1="30" y1="80" x2="130" y2="80" stroke="#ec4899" strokeWidth="2.5" />
          <text x="20" y="32" fill="#ef4444" fontSize="8" fontWeight="bold">COSMIC RAYS</text>

          {/* Spacecraft Shield */}
          <rect x="135" y="45" width="10" height="65" fill="#f8fafc" stroke="#000" strokeWidth="2" rx="2" />
          <text x="110" y="125" fill="#f8fafc" fontSize="8" fontWeight="bold">SHIELD</text>

          {/* High Gain Dish transmitting radio waves */}
          <ellipse cx="170" cy="78" rx="8" ry="24" fill="#cbd5e1" stroke="#000" strokeWidth="2" />
          {/* Radio Waves */}
          <path d="M 185 60 Q 200 78 185 96" stroke="#38bdf8" strokeWidth="2" fill="none" />
          <path d="M 205 50 Q 225 78 205 106" stroke="#38bdf8" strokeWidth="2.5" fill="none" />
          <path d="M 225 40 Q 250 78 225 116" stroke="#38bdf8" strokeWidth="3" fill="none" />
          <text x="235" y="75" fill="#38bdf8" fontSize="8" fontWeight="bold">23 WATT SIGNAL</text>

          <g filter={`url(#${pid}-shadow)`}>
            <rect x="175" y="115" width="130" height="28" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" rx="3" />
            <text x="181" y="128" fill="#bae6fd" fontSize="8" fontWeight="bold">24 BILLION KM AWAY</text>
            <text x="181" y="139" fill="#94a3b8" fontSize="7">Signal takes 22+ hours to reach Earth</text>
          </g>
        </svg>
      );

    // ══════════════════════════════════════════════════════════════════════════
    // MODULE 7: ARTEMIS LUNAR SOUTH POLE
    // ══════════════════════════════════════════════════════════════════════════
    case 'LUNAR_TRAJECTORY':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#020617', '#0f172a'])}
          {renderPanelFrame('FREE-RETURN FIGURE-8', 'PANEL #1 · TRAJECTORY')}

          {/* Earth */}
          <circle cx="60" cy="78" r="22" fill="#0284c7" stroke="#000" strokeWidth="2" />
          <text x="45" y="82" fill="#fff" fontSize="8" fontWeight="bold">EARTH</text>

          {/* Moon */}
          <circle cx="250" cy="78" r="14" fill="#94a3b8" stroke="#000" strokeWidth="2" />
          <text x="236" y="82" fill="#000" fontSize="7.5" fontWeight="bold">MOON</text>

          {/* Figure-8 Loop Trajectory */}
          <path d="M 75 62 Q 160 30 240 65 Q 275 80 255 95 Q 160 120 75 92" stroke="#f59e0b" strokeWidth="3" fill="none" />
          <polygon points="75,92 88,88 84,98" fill="#f59e0b" />

          {/* Free Return Label */}
          <g filter={`url(#${pid}-shadow)`}>
            <rect x="100" y="22" width="120" height="24" fill="#064e3b" stroke="#34d399" strokeWidth="1.2" rx="3" />
            <text x="106" y="36" fill="#34d399" fontSize="8" fontWeight="900">FREE-RETURN SAFETY LOOP</text>
          </g>
          <g filter={`url(#${pid}-shadow)`}>
            <rect x="15" y="115" width="290" height="25" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.2" rx="3" />
            <text x="21" y="131" fill="#fde047" fontSize="8">If engine fails, lunar gravity swings Apollo/Artemis straight back to Earth!</text>
          </g>
        </svg>
      );

    case 'CRATER_SHADOW':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#020617', '#1e293b'])}
          {renderPanelFrame('PERMANENT SHADOW (PSRs)', 'PANEL #2 · ICE')}

          {/* Low angle horizontal sunlight rays */}
          <line x1="0" y1="45" x2="320" y2="45" stroke="#fde047" strokeWidth="3" opacity="0.8" />
          <line x1="0" y1="52" x2="160" y2="52" stroke="#fde047" strokeWidth="2" opacity="0.6" />
          <text x="15" y="38" fill="#fde047" fontSize="8" fontWeight="bold">SUNLIGHT AT 1.5° GRAZING ANGLE</text>

          {/* Shackleton Crater Rim Peaks */}
          <polygon points="80,50 140,50 160,110 60,110" fill="#cbd5e1" stroke="#000" strokeWidth="2" />
          <text x="75" y="75" fill="#000" fontSize="7" fontWeight="bold">SUNLIT RIM</text>

          {/* Deep Crater Pit in Pitch Black */}
          <polygon points="140,50 280,50 260,140 180,140" fill="#000000" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="185" y="90" fill="#38bdf8" fontSize="8.5" fontWeight="900">-233°C (40 K)</text>
          <text x="185" y="105" fill="#93c5fd" fontSize="7.5">PERMANENT ICE TRAP</text>

          {/* Ice crystals sparkle */}
          <circle cx="215" cy="120" r="2" fill="#fff" />
          <circle cx="230" cy="125" r="2" fill="#38bdf8" />
          <circle cx="205" cy="130" r="1.5" fill="#fff" />

          <g filter={`url(#${pid}-shadow)`}>
            <rect x="15" y="118" width="150" height="25" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" rx="3" />
            <text x="21" y="134" fill="#38bdf8" fontSize="8" fontWeight="800">BILLIONS OF TONS WATER ICE</text>
          </g>
        </svg>
      );

    case 'WATER_ELECTROLYSIS':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#082f49', '#0284c7'])}
          {renderPanelFrame('ISRU WATER ELECTROLYSIS', 'PANEL #3 · CHEMISTRY')}

          {/* Chemical Formula Banner */}
          <g filter={`url(#${pid}-shadow)`}>
            <rect x="50" y="30" width="220" height="30" fill="#0f172a" stroke="#facc15" strokeWidth="2" rx="4" />
            <text x="65" y="50" fill="#facc15" fontSize="13" fontWeight="900">2 H₂O  ➔  2 H₂ (Fuel) + O₂ (Air)</text>
          </g>

          {/* Water Splitting Plant Chambers */}
          {/* Water Input Chamber */}
          <g transform="translate(40, 75)" filter={`url(#${pid}-shadow)`}>
            <rect x="0" y="0" width="60" height="40" fill="#0284c7" stroke="#000" strokeWidth="2" rx="3" />
            <text x="8" y="24" fill="#fff" fontSize="8" fontWeight="bold">LUNAR ICE</text>
          </g>

          {/* Arrow */}
          <line x1="105" y1="95" x2="135" y2="95" stroke="#fff" strokeWidth="3" markerEnd={`url(#${pid}-arrow)`} />

          {/* Electrolyzer Reactor */}
          <g transform="translate(140, 70)" filter={`url(#${pid}-shadow)`}>
            <rect x="0" y="0" width="50" height="50" fill="#1e293b" stroke="#facc15" strokeWidth="2" rx="3" />
            <line x1="15" y1="10" x2="15" y2="40" stroke="#ef4444" strokeWidth="3" />
            <line x1="35" y1="10" x2="35" y2="40" stroke="#3b82f6" strokeWidth="3" />
            <text x="7" y="58" fill="#facc15" fontSize="7" fontWeight="bold">POWER (+/-)</text>
          </g>

          {/* Gas Outputs */}
          <g transform="translate(210, 70)" filter={`url(#${pid}-shadow)`}>
            <rect x="0" y="0" width="85" height="22" fill="#15803d" stroke="#000" strokeWidth="1.5" rx="3" />
            <text x="8" y="15" fill="#fff" fontSize="8" fontWeight="bold">O₂ BREATHING AIR</text>

            <rect x="0" y="28" width="85" height="22" fill="#b91c1c" stroke="#000" strokeWidth="1.5" rx="3" />
            <text x="8" y="43" fill="#fff" fontSize="8" fontWeight="bold">H₂ ROCKET FUEL</text>
          </g>
        </svg>
      );

    // ══════════════════════════════════════════════════════════════════════════
    // MODULE 8: JAMES WEBB SPACE TELESCOPE
    // ══════════════════════════════════════════════════════════════════════════
    case 'LAGRANGE_L2':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#020617', '#111827'])}
          {renderPanelFrame('LAGRANGE POINT L2 ORBIT', 'PANEL #1 · ORBIT')}

          {/* Sun on left */}
          <circle cx="-10" cy="78" r="35" fill="#f59e0b" />

          {/* Earth */}
          <circle cx="90" cy="78" r="16" fill="#0284c7" stroke="#000" strokeWidth="2" />
          <text x="76" y="82" fill="#fff" fontSize="7" fontWeight="bold">EARTH</text>

          {/* 1.5 Million KM Line */}
          <line x1="108" y1="78" x2="245" y2="78" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,3" />
          <text x="135" y="70" fill="#94a3b8" fontSize="7.5" fontWeight="bold">1.5 MILLION KM</text>

          {/* L2 Halo Orbit */}
          <ellipse cx="250" cy="78" rx="14" ry="38" fill="none" stroke="#facc15" strokeWidth="2" strokeDasharray="3,3" />
          <text x="242" y="32" fill="#facc15" fontSize="9" fontWeight="900">L2</text>

          {/* JWST Telescope */}
          <g transform="translate(245, 68)" filter={`url(#${pid}-shadow)`}>
            <polygon points="6,0 12,3 12,9 6,12 0,9 0,3" fill="#fbbf24" stroke="#000" strokeWidth="1" />
            <polygon points="3,12 15,12 18,18 0,18" fill="#e2e8f0" stroke="#000" strokeWidth="1" />
          </g>

          <g filter={`url(#${pid}-shadow)`}>
            <rect x="15" y="118" width="290" height="25" fill="#0f172a" stroke="#facc15" strokeWidth="1.2" rx="3" />
            <text x="21" y="134" fill="#fde047" fontSize="8">Orbits in sync with Earth — Sun and Earth stay permanently behind shield!</text>
          </g>
        </svg>
      );

    case 'KAPTON_SHIELD':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#020617', '#172554'])}
          {renderPanelFrame('5-LAYER KAPTON SUNSHIELD', 'PANEL #2 · THERMAL')}

          {/* Sun on Left with 85°C Heat Blast */}
          <circle cx="10" cy="78" r="30" fill="#ea580c" />
          <text x="45" y="55" fill="#f97316" fontSize="10" fontWeight="900">+85°C (HOT)</text>
          <text x="45" y="68" fill="#fed7aa" fontSize="7.5">Sun-Facing Side</text>

          {/* 5 Distinct Kapton Layers */}
          <g filter={`url(#${pid}-shadow)`}>
            <polygon points="120,20 135,135 130,135 115,20" fill="#cbd5e1" stroke="#000" strokeWidth="1" />
            <polygon points="132,20 147,135 143,135 128,20" fill="#e2e8f0" stroke="#000" strokeWidth="1" />
            <polygon points="144,20 159,135 155,135 140,20" fill="#f1f5f9" stroke="#000" strokeWidth="1" />
            <polygon points="156,20 171,135 167,135 152,20" fill="#cbd5e1" stroke="#000" strokeWidth="1" />
            <polygon points="168,20 183,135 179,135 164,20" fill="#f8fafc" stroke="#000" strokeWidth="1.5" />
          </g>

          {/* Telescope on Cold Side */}
          <g transform="translate(205, 50)" filter={`url(#${pid}-shadow)`}>
            {/* Hexagonal Mirror */}
            <polygon points="20,0 35,8 35,26 20,34 5,26 5,8" fill="#fbbf24" stroke="#000" strokeWidth="1.5" />
            <text x="42" y="18" fill="#38bdf8" fontSize="10" fontWeight="900">-233°C (COLD)</text>
            <text x="42" y="30" fill="#bae6fd" fontSize="7.5">40 Kelvin Mirror Side</text>
          </g>

          <g filter={`url(#${pid}-shadow)`}>
            <rect x="15" y="118" width="140" height="25" fill="#450a0a" stroke="#ef4444" strokeWidth="1.2" rx="3" />
            <text x="21" y="134" fill="#fca5a5" fontSize="8" fontWeight="bold">VACUUM GAPS BETWEEN LAYERS</text>
          </g>
        </svg>
      );

    case 'INFRARED_REDSHIFT':
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#020617', '#311042'])}
          {renderPanelFrame('COSMOLOGICAL REDSHIFT', 'PANEL #3 · REDSHIFT')}

          {/* Stretched wave: Blue to Red to Infrared */}
          {/* Compressed Blue wave */}
          <path d="M 20 78 Q 28 60 36 78 T 52 78 T 68 78" stroke="#38bdf8" strokeWidth="3" fill="none" />
          <text x="22" y="52" fill="#38bdf8" fontSize="7.5" fontWeight="bold">SHORT (BLUE)</text>

          {/* Medium Green/Yellow wave */}
          <path d="M 68 78 Q 80 50 92 78 T 116 78 T 140 78" stroke="#facc15" strokeWidth="3" fill="none" />

          {/* Stretched Red/Infrared wave */}
          <path d="M 140 78 Q 165 40 190 78 T 240 78" stroke="#ef4444" strokeWidth="3.5" fill="none" />
          <text x="165" y="42" fill="#ef4444" fontSize="8.5" fontWeight="900">STRETCHED (INFRARED)</text>

          {/* JWST 18 Gold Mirror Hexagons */}
          <g transform="translate(250, 52)" filter={`url(#${pid}-shadow)`}>
            <polygon points="15,0 26,6 26,19 15,25 4,19 4,6" fill="#fbbf24" stroke="#000" strokeWidth="1.5" />
            <polygon points="30,8 41,14 41,27 30,33 19,27 19,14" fill="#f59e0b" stroke="#000" strokeWidth="1.5" />
            <polygon points="15,28 26,34 26,47 15,53 4,47 4,34" fill="#fbbf24" stroke="#000" strokeWidth="1.5" />
          </g>

          <g filter={`url(#${pid}-shadow)`}>
            <rect x="15" y="118" width="220" height="25" fill="#0f172a" stroke="#ec4899" strokeWidth="1.2" rx="3" />
            <text x="21" y="134" fill="#f472b6" fontSize="8">Light from 13.5 Billion Years Ago stretched into Infrared!</text>
          </g>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 320 155" className="notebook-comic-svg">
          {renderDefs(['#0f172a', '#1e293b'])}
          {renderPanelFrame(sketchType, 'PANEL · SCIENCE')}
          <circle cx="160" cy="78" r="30" fill="#f59e0b" stroke="#000" strokeWidth="2" opacity="0.6" />
          <text x="135" y="82" fill="#000" fontSize="11" fontWeight="900">DIAGRAM</text>
        </svg>
      );
  }
};
