"use client";

import { motion } from "framer-motion";

export default function WireframeGeometry() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 3D Isometric Wireframe Cube 1 - Top Left */}
      <motion.div
        animate={{
          y: [-15, 15, -15],
          rotateX: [0, 25, 0],
          rotateY: [0, 45, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-[5%] opacity-35 hidden md:block"
      >
        <svg width="130" height="130" viewBox="0 0 100 100" fill="none" stroke="#C5A880" strokeWidth="1.2">
          <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" />
          <line x1="50" y1="10" x2="50" y2="50" />
          <line x1="90" y1="30" x2="50" y2="50" />
          <line x1="10" y1="30" x2="50" y2="50" />
          <line x1="50" y1="50" x2="50" y2="90" />
          <line x1="50" y1="50" x2="10" y2="70" strokeDasharray="2 2" opacity="0.6" />
          <line x1="50" y1="50" x2="90" y2="70" strokeDasharray="2 2" opacity="0.6" />
        </svg>
      </motion.div>

      {/* 3D Isometric Wireframe Cube 2 - Bottom Center */}
      <motion.div
        animate={{
          y: [12, -18, 12],
          rotate: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-16 left-[45%] opacity-30 hidden lg:block"
      >
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="#059669" strokeWidth="1.1">
          <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" />
          <line x1="50" y1="15" x2="50" y2="55" />
          <line x1="85" y1="35" x2="50" y2="55" />
          <line x1="15" y1="35" x2="50" y2="55" />
          <line x1="50" y1="55" x2="50" y2="95" />
        </svg>
      </motion.div>

      {/* Floating Architectural Axis & Compass Crosshair */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/3 right-[8%] opacity-25 hidden xl:block"
      >
        <svg width="190" height="190" viewBox="0 0 200 200" fill="none" stroke="#C5A880" strokeWidth="1">
          <circle cx="100" cy="100" r="80" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="40" />
          <circle cx="100" cy="100" r="4" fill="#C5A880" />
          <line x1="100" y1="10" x2="100" y2="190" />
          <line x1="10" y1="100" x2="190" y2="100" />
          <path d="M70 70 L130 130" strokeDasharray="2 2" />
          <path d="M130 70 L70 130" strokeDasharray="2 2" />
        </svg>
      </motion.div>

      {/* Subtle Gold Drafting Gradient Glow */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-gradient-radial from-[#C5A880]/20 via-transparent to-transparent opacity-40 rounded-full blur-3xl" />
    </div>
  );
}
