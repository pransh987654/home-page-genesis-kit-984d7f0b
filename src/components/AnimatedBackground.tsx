
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-teal-300/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-yellow-300/20 rounded-lg rotate-45 animate-float"></div>
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border-2 border-purple-300/30 rotate-12 animate-wiggle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-r from-teal-300/20 to-yellow-300/20 rounded-full animate-pulse"></div>
      
      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path 
          d="M10,50 Q50,10 90,50 T90,90" 
          stroke="url(#gradient)" 
          strokeWidth="0.5" 
          fill="none"
          className="animate-pulse"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Particle effect simulation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-teal-400 rounded-full animate-ping opacity-30"
            style={{
              left: `${Math.cos(i * 45 * Math.PI / 180) * 100}px`,
              top: `${Math.sin(i * 45 * Math.PI / 180) * 100}px`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
