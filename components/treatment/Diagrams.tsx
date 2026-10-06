import styles from "./Diagrams.module.css";

const GOLD = "#34d399";
const BLUE = "#60a5fa";
const RED = "#f87171";

/** Mandibular contour scan used on the chin & jawline page */
export function JawlineScan() {
  return (
    <div className={styles.panel}>
      <div className={styles.head}>
        <span className={styles.label}>Cephalometric Biometric Scan</span>
        <span className={styles.mono}>SYS.ID: 8092-DELHI-MANDIBLE</span>
      </div>
      <div className={styles.screen}>
        <svg viewBox="0 0 300 200" fill="none" className={styles.svg} aria-hidden="true">
          {[20, 60, 100, 140, 180].map((y) => (
            <line key={y} x1="20" x2="280" y1={y} y2={y} stroke={GOLD} strokeOpacity="0.3" strokeDasharray="2 4" strokeWidth="0.7" />
          ))}
          {[50, 150, 250].map((x) => (
            <line key={x} x1={x} x2={x} y1="10" y2="190" stroke={GOLD} strokeOpacity="0.3" strokeDasharray="2 4" strokeWidth="0.7" />
          ))}
          <path d="M 50 40 Q 120 70 170 120 T 250 160" stroke={BLUE} strokeWidth="3" />
          <circle cx="170" cy="120" r="4" fill={GOLD} />
          <circle cx="170" cy="120" r="8" stroke={GOLD} className={styles.ping} />
          <circle cx="250" cy="160" r="5" fill={BLUE} />
          <text x="180" y="115" fill="#ffffff" fontSize="10">Gonion (Mandibular Angle)</text>
          <text x="196" y="178" fill={GOLD} fontSize="10">Pogonion Alignment</text>
        </svg>
      </div>
      <div className={styles.legend}>
        <span><i className={styles.dotBlue} /> Anatomical Implant Alignment: Locked</span>
        <span><i className={styles.dotGreen} /> Occlusion Verified Class I</span>
      </div>
    </div>
  );
}

/** Nasal profile vector mesh used on the rhinoplasty page */
export function NasalProfileScan() {
  return (
    <div className={styles.panel}>
      <div className={styles.screen}>
        <svg viewBox="0 0 500 320" fill="none" className={styles.svg} aria-hidden="true">
          <defs>
            <pattern id="hud-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" stroke={GOLD} strokeOpacity="0.2" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="500" height="320" fill="url(#hud-grid)" />
          <path
            d="M 120 20 C 140 45, 148 65, 142 85 C 138 98, 145 108, 175 130 L 235 175 C 242 180, 245 190, 238 198 C 230 207, 215 208, 200 205 C 185 202, 175 210, 175 220 C 175 235, 185 245, 192 255 C 200 266, 190 285, 160 300"
            stroke={GOLD}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 142 85 C 140 102, 155 125, 180 148 L 220 180 C 228 186, 230 193, 225 198 C 218 205, 205 204, 195 202 C 182 200, 175 210, 175 220"
            stroke={RED}
            strokeDasharray="4 4"
            strokeWidth="2"
          />
          <line x1="142" x2="260" y1="85" y2="85" stroke={GOLD} strokeDasharray="2 2" />
          <line x1="142" x2="235" y1="85" y2="175" stroke={GOLD} />
          <circle cx="142" cy="85" r="4" fill={BLUE} />
          <circle cx="235" cy="175" r="4" fill={RED} />
          <circle cx="200" cy="205" r="4" fill={GOLD} />
          <text x="250" y="80" fill="#e2e8f0" fontSize="11">Nasofrontal: 124.6°</text>
          <text x="250" y="175" fill="#e2e8f0" fontSize="11">Rhinion Vector: -1.8mm</text>
          <text x="215" y="235" fill="#e2e8f0" fontSize="11">Nasolabial: 98.2°</text>
        </svg>
      </div>
      <div className={styles.legend}>
        <span><i className={styles.dotRed} /> Live 3D Vector Coordinate Mesh</span>
        <span className={styles.accent}>Tolerance ± 0.1mm</span>
      </div>
    </div>
  );
}

/** Hairline design simulation used on the hair transplant page */
export function HairlineScan() {
  return (
    <div className={styles.panel}>
      <div className={styles.head}>
        <span className={styles.label}>
          <i className={styles.dotGreen} /> Biometric Scan Active
        </span>
        <span className={styles.mono}>CAL-GK1-2025</span>
      </div>
      <div className={styles.screen}>
        <svg viewBox="0 0 380 220" fill="none" className={styles.svg} aria-hidden="true">
          <defs>
            <pattern id="hair-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" stroke={GOLD} strokeOpacity="0.3" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="380" height="220" fill="url(#hair-grid)" />
          <path d="M 20 180 C 120 50, 240 50, 360 180" stroke="#10b981" strokeDasharray="4 4" strokeWidth="2.5" />
          <circle cx="190" cy="85" r="5" fill={BLUE} />
          <circle cx="110" cy="110" r="4" fill={BLUE} />
          <circle cx="270" cy="110" r="4" fill={BLUE} />
          <text x="12" y="20" fill="#94a3b8" fontSize="10" fontFamily="monospace">ANGLE: 32.4° EXIT</text>
          <text x="280" y="20" fill="#94a3b8" fontSize="10" fontFamily="monospace">RATIO: 1:1.618</text>
        </svg>
        <div className={styles.zones}>
          <span><b className={styles.zoneA}>ZONE A:</b> Feathered Singles</span>
          <span><b className={styles.zoneB}>ZONE B:</b> Multi-Graft Core</span>
        </div>
      </div>
      <dl className={styles.readout}>
        <div>
          <dt>Donor Zone Density Available</dt>
          <dd>88 FU / cm²</dd>
        </div>
        <div>
          <dt>Calculated Follicle Requisite</dt>
          <dd className={styles.zoneA}>3,250 Grafts</dd>
        </div>
        <div>
          <dt>Expected 12-Month Coverage</dt>
          <dd className={styles.zoneB}>98.2% Natural Lock</dd>
        </div>
      </dl>
    </div>
  );
}
