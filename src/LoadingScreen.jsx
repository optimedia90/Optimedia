import { useEffect, useState } from "react";

const letters = [
  { char: "O", className: "optimedia-loader__letter--navy" },
  { char: "p", className: "optimedia-loader__letter--navy" },
  { char: "t", className: "optimedia-loader__letter--navy" },
  { char: "i", className: "optimedia-loader__letter--navy" },
  { char: "M", className: "optimedia-loader__letter--green" },
  { char: "e", className: "optimedia-loader__letter--green" },
  { char: "d", className: "optimedia-loader__letter--green" },
  { char: "i", className: "optimedia-loader__letter--green" },
  { char: "a", className: "optimedia-loader__letter--green" },
];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="optimedia-loader" role="status" aria-label="Loading OptiMedia">
      <div className="optimedia-loader__glow" />
      <div className="optimedia-loader__brand">
        <span className="optimedia-loader__mark" aria-hidden="true"><span /></span>
        <span className="optimedia-loader__word" aria-label="OptiMedia">
          {letters.map((letter, index) => (
            <span
              key={letter.char + index}
              className={`optimedia-loader__letter ${letter.className}`}
              style={{ animationDelay: `${index * 0.09}s` }}
              aria-hidden="true"
            >
              {letter.char}
            </span>
          ))}
        </span>
      </div>
      <div className="optimedia-loader__reflection" aria-hidden="true">
        <span className="optimedia-loader__reflection-mark" />
        <span className="optimedia-loader__reflection-word">OptiMedia</span>
      </div>
      <style>{`
        .optimedia-loader {
          position: fixed; inset: 0; z-index: 99999; display: flex; align-items: center; justify-content: center;
          overflow: hidden; background: radial-gradient(ellipse at 50% 48%, #ffffff 0%, #f5fff9 48%, #e5fbf1 100%);
          animation: optimedia-loader-fade 1.5s ease forwards;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        .optimedia-loader::before, .optimedia-loader::after {
          content: ""; position: absolute; width: min(58vw, 700px); aspect-ratio: 1;
          border: 1px solid rgba(15, 180, 139, .13); border-radius: 50%; pointer-events: none;
        }
        .optimedia-loader::before { top: -42%; left: -20%; box-shadow: 0 0 0 54px rgba(15,180,139,.035), 0 0 0 110px rgba(15,180,139,.025); }
        .optimedia-loader::after { bottom: -55%; right: -23%; box-shadow: 0 0 0 55px rgba(15,180,139,.035), 0 0 0 110px rgba(15,180,139,.025); }
        .optimedia-loader__glow { position: absolute; width: min(60vw, 650px); height: 260px; border-radius: 50%; background: rgba(255,255,255,.75); filter: blur(45px); }
        .optimedia-loader__brand {
          position: relative; z-index: 1; display: flex; align-items: center;
          letter-spacing: -.055em; font-size: clamp(30px, 5vw, 62px); font-weight: 850; line-height: 1;
        }
        .optimedia-loader__mark {
          width: .95em; height: .95em; border: .16em solid #101b68; border-radius: 50%;
          display: inline-flex; align-items: center; justify-content: center; margin-right: .06em; flex: 0 0 auto; box-sizing: border-box;
        }
        .optimedia-loader__mark > span { width: .28em; height: .28em; border-radius: 50%; background: #10b981; }
        .optimedia-loader__word { display: inline-flex; align-items: center; }
        .optimedia-loader__letter { display: inline-block; animation: optimedia-letter-wave 1.15s ease-in-out infinite; }
        .optimedia-loader__letter--navy { color: #101b68; }
        .optimedia-loader__letter--green { color: #10a981; }
        .optimedia-loader__reflection {
          position: absolute; z-index: 0; top: calc(50% + 34px); display: flex; align-items: center;
          font-size: clamp(30px, 5vw, 62px); font-weight: 850; letter-spacing: -.055em;
          transform: scaleY(-.62); opacity: .075; filter: blur(1px); pointer-events: none;
        }
        .optimedia-loader__reflection-mark {
          width: .95em; height: .95em; border: .16em solid #101b68; border-radius: 50%;
          margin-right: .06em; box-sizing: border-box;
        }
        .optimedia-loader__reflection-word {
          background: linear-gradient(90deg, #101b68 0 43%, #10a981 43% 100%);
          color: transparent; background-clip: text;
        }
        @keyframes optimedia-letter-wave {
          0%, 100% { transform: translateY(0); }
          35% { transform: translateY(-9px); }
          65% { transform: translateY(2px); }
        }
        @keyframes optimedia-loader-fade {
          0%, 78% { opacity: 1; visibility: visible; }
          100% { opacity: 0; visibility: hidden; pointer-events: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .optimedia-loader, .optimedia-loader__letter { animation-duration: .01ms; animation-iteration-count: 1; }
        }
      `}</style>
    </div>
  );
}
