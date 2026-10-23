import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="optimedia-loader" role="status" aria-label="Loading OptiMedia">
      <div className="optimedia-loader__glow" />
      <div className="optimedia-loader__brand">
        <span className="optimedia-loader__mark" aria-hidden="true"><span /></span>
        <span className="optimedia-loader__opti">pti</span><span className="optimedia-loader__media">Media</span>
        <span className="optimedia-loader__ellipsis" aria-hidden="true">••••</span>
      </div>
      <div className="optimedia-loader__reflection" aria-hidden="true">
        <span className="optimedia-loader__mark"><span /></span><span>ptiMedia</span>
      </div>
      <div className="optimedia-loader__dots" aria-hidden="true"><i /><i /><i /><i /></div>
      <style>{`
        .optimedia-loader {
          position: fixed; inset: 0; z-index: 99999; display: flex; align-items: center; justify-content: center;
          overflow: hidden; background: radial-gradient(ellipse at 50% 48%, #ffffff 0%, #f5fff9 48%, #e5fbf1 100%);
          animation: optimedia-loader-fade 1.2s ease forwards; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        .optimedia-loader::before, .optimedia-loader::after {
          content: ""; position: absolute; width: min(58vw, 700px); aspect-ratio: 1; border: 1px solid rgba(15, 180, 139, .13); border-radius: 50%; pointer-events: none;
        }
        .optimedia-loader::before { top: -42%; left: -20%; box-shadow: 0 0 0 54px rgba(15,180,139,.035), 0 0 0 110px rgba(15,180,139,.025); }
        .optimedia-loader::after { bottom: -55%; right: -23%; box-shadow: 0 0 0 55px rgba(15,180,139,.035), 0 0 0 110px rgba(15,180,139,.025); }
        .optimedia-loader__glow { position: absolute; width: min(60vw, 650px); height: 260px; border-radius: 50%; background: rgba(255,255,255,.75); filter: blur(45px); }
        .optimedia-loader__brand { position: relative; z-index: 1; display: flex; align-items: center; letter-spacing: -.055em; font-size: clamp(30px, 5vw, 62px); font-weight: 850; line-height: 1; }
        .optimedia-loader__mark { width: .95em; height: .95em; border: .16em solid #101b68; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-right: .06em; flex: 0 0 auto; box-sizing: border-box; }
        .optimedia-loader__mark > span { width: .28em; height: .28em; border-radius: 50%; background: #10b981; }
        .optimedia-loader__opti { color: #101b68; }
        .optimedia-loader__media { color: #10a981; }
        .optimedia-loader__ellipsis { color: #10a981; font-size: .62em; letter-spacing: .08em; align-self: flex-end; padding: 0 0 .04em .08em; animation: optimedia-loader-pulse 1s ease-in-out infinite; }
        .optimedia-loader__reflection { position: absolute; z-index: 0; top: calc(50% + 34px); display: flex; align-items: center; gap: 0; font-size: clamp(30px, 5vw, 62px); font-weight: 850; letter-spacing: -.055em; color: #101b68; transform: scaleY(-.62); opacity: .08; filter: blur(1px); pointer-events: none; }
        .optimedia-loader__reflection .optimedia-loader__mark { border-color: #101b68; margin-right: .06em; }
        .optimedia-loader__reflection > span:last-child { background: linear-gradient(90deg, #101b68 0 42%, #10a981 42% 100%); color: transparent; background-clip: text; }
        .optimedia-loader__dots { position: absolute; top: calc(50% + 61px); display: flex; gap: 7px; }
        .optimedia-loader__dots i { width: 6px; height: 6px; border-radius: 50%; background: #10b981; animation: optimedia-loader-bounce .8s ease-in-out infinite; }
        .optimedia-loader__dots i:nth-child(2) { animation-delay: .12s; }
        .optimedia-loader__dots i:nth-child(3) { animation-delay: .24s; }
        .optimedia-loader__dots i:nth-child(4) { animation-delay: .36s; }
        @keyframes optimedia-loader-bounce { 0%, 60%, 100% { transform: translateY(0); opacity: .45; } 30% { transform: translateY(-6px); opacity: 1; } }
        @keyframes optimedia-loader-pulse { 0%, 100% { opacity: .65; } 50% { opacity: 1; } }
        @keyframes optimedia-loader-fade { 0%, 78% { opacity: 1; visibility: visible; } 100% { opacity: 0; visibility: hidden; pointer-events: none; } }
        @media (prefers-reduced-motion: reduce) { .optimedia-loader, .optimedia-loader__ellipsis, .optimedia-loader__dots i { animation-duration: .01ms; animation-iteration-count: 1; } }
      `}</style>
    </div>
  );
}
