"use client";

import { useEffect, useState } from "react";

export function NeonOrbs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top-left orb */}
      <div
        className={`absolute transition-all duration-1000 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
        style={{
          top: "-40%",
          left: "-20%",
          width: "80vw",
          height: "80vw",
          maxWidth: "800px",
          maxHeight: "800px",
        }}
      >
        <div className="w-full h-full rounded-full relative orb-light-relite">
          <div className="beam-container beam-spin-8">
            <div className="beam-light-relite" />
          </div>
        </div>
      </div>

      {/* Bottom-center orb */}
      <div
        className={`absolute transition-all duration-1000 ease-out delay-300 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          bottom: "-50%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100vw",
          height: "100vw",
          maxWidth: "1000px",
          maxHeight: "1000px",
        }}
      >
        <div className="w-full h-full rounded-full relative orb-light-relite">
          <div className="beam-container beam-spin-10-reverse">
            <div className="beam-light-relite" />
          </div>
        </div>
      </div>

      {/* Top-right orb */}
      <div
        className={`absolute transition-all duration-1000 ease-out delay-500 ${
          mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
        style={{
          top: "-30%",
          right: "-25%",
          width: "70vw",
          height: "70vw",
          maxWidth: "700px",
          maxHeight: "700px",
        }}
      >
        <div className="w-full h-full rounded-full relative orb-light-relite">
          <div className="beam-container beam-spin-6">
            <div className="beam-light-relite" />
          </div>
        </div>
      </div>

      {/* Bottom-right orb */}
      <div
        className={`absolute transition-all duration-1000 ease-out delay-700 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          bottom: "-35%",
          right: "-15%",
          width: "75vw",
          height: "75vw",
          maxWidth: "750px",
          maxHeight: "750px",
        }}
      >
        <div className="w-full h-full rounded-full relative orb-light-relite">
          <div className="beam-container beam-spin-7-reverse">
            <div className="beam-light-relite" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .beam-container {
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          will-change: transform;
        }

        .beam-light-relite {
          position: absolute;
          top: 0;
          left: 50%;
          width: 60px;
          height: 4px;
          margin-left: -30px;
          border-radius: 2px;
          transform: translateY(-50%);
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(59, 111, 194, 0.35) 30%,
            rgba(59, 111, 194, 0.7) 70%,
            rgba(30, 58, 95, 0.9) 100%
          );
          box-shadow:
            0 0 20px 4px rgba(59, 111, 194, 0.3),
            0 0 40px 8px rgba(30, 58, 95, 0.12);
        }

        .orb-light-relite {
          background: radial-gradient(
            circle at 50% 50%,
            #fafaf8 0%,
            #fafaf8 85%,
            transparent 100%
          );
          box-shadow:
            0 0 80px 4px rgba(59, 111, 194, 0.12),
            0 0 140px 8px rgba(30, 58, 95, 0.06),
            inset 0 0 60px 2px rgba(59, 111, 194, 0.04);
          border: 1px solid rgba(59, 111, 194, 0.15);
        }

        .beam-spin-6 {
          animation: orb-spin 6s linear infinite;
        }

        .beam-spin-7-reverse {
          animation: orb-spin-reverse 7s linear infinite;
        }

        .beam-spin-8 {
          animation: orb-spin 8s linear infinite;
        }

        .beam-spin-10-reverse {
          animation: orb-spin-reverse 10s linear infinite;
        }

        @keyframes orb-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orb-spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
