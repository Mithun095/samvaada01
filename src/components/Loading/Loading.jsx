const Loading = () => {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-ground/95 backdrop-blur-sm">
      {/* spinning aperture */}
      <div className="relative w-16 h-16 animate-aperture-spin" style={{ animationDuration: "3s" }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="46" fill="none" stroke="#243E51" strokeWidth="2" />
          {Array.from({ length: 6 }).map((_, i) => {
            const a = (i * 60 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={50 + 18 * Math.cos(a)}
                y1={50 + 18 * Math.sin(a)}
                x2={50 + 44 * Math.cos(a + 1.0)}
                y2={50 + 44 * Math.sin(a + 1.0)}
                stroke="#86AECB"
                strokeWidth="2"
                strokeLinecap="round"
              />
            );
          })}
        </svg>
      </div>
      <span className="cam-label text-ink-dim animate-glow-pulse">Focusing…</span>
    </div>
  );
};

export default Loading;
