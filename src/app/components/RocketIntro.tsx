
"use client";

import { useEffect, useState } from "react";

export default function RocketIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 6200);

    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="cinematic-launch">

      {/* SKY */}
      <div className="launch-sky">
        <div className="sky-glow" />
        <div className="sky-stars">
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
        </div>
      </div>

      {/* LAUNCH TEXT */}
      <div className="launch-heading">
        <p>MISSION 001 / PERSONAL PORTFOLIO</p>
        <h1>
          READY
          <br />
          FOR
          <br />
          TAKEOFF<span>.</span>
        </h1>
        <p className="launch-name">
          KUNAL YELGATE — CREATIVE DEVELOPER
        </p>
      </div>

      {/* SMOKE */}
      <div className="launch-smoke">
        <span className="smoke-puff puff-1" />
        <span className="smoke-puff puff-2" />
        <span className="smoke-puff puff-3" />
        <span className="smoke-puff puff-4" />
        <span className="smoke-puff puff-5" />
        <span className="smoke-puff puff-6" />
      </div>

      {/* ROCKET */}
      <div className="cinematic-rocket">

        {/* Exhaust */}
        <div className="rocket-exhaust">
          <div className="exhaust-core" />
          <div className="exhaust-fire" />
          <div className="exhaust-glow" />
        </div>

        {/* Rocket SVG */}
        <svg
          className="rocket-svg"
          viewBox="0 0 160 320"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Rocket launching"
        >
          <defs>
            <linearGradient id="rocketMetal" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8b929b" />
              <stop offset="25%" stopColor="#f4f4f4" />
              <stop offset="55%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#747c86" />
            </linearGradient>

            <linearGradient id="rocketNose" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#a7adb5" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#6f7780" />
            </linearGradient>

            <linearGradient id="rocketFire" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff5a0" />
              <stop offset="40%" stopColor="#ff9d20" />
              <stop offset="100%" stopColor="#ff3d00" />
            </linearGradient>
          </defs>

          {/* Nose */}
          <path
            d="M80 5 C45 45 35 90 35 130 L125 130 C125 90 115 45 80 5Z"
            fill="url(#rocketNose)"
            stroke="#272b31"
            strokeWidth="3"
          />

          {/* Main body */}
          <path
            d="M35 115 L125 115 L125 250 L35 250 Z"
            fill="url(#rocketMetal)"
            stroke="#272b31"
            strokeWidth="3"
          />

          {/* Body panels */}
          <path
            d="M48 125 L48 235"
            stroke="#7b828b"
            strokeWidth="3"
          />

          <path
            d="M112 125 L112 235"
            stroke="#7b828b"
            strokeWidth="3"
          />

          {/* Window */}
          <circle
            cx="80"
            cy="155"
            r="19"
            fill="#152c44"
            stroke="#d9e7f3"
            strokeWidth="6"
          />

          <circle
            cx="74"
            cy="149"
            r="6"
            fill="#a9e5ff"
          />

          {/* Rocket logo */}
          <text
            x="80"
            y="205"
            textAnchor="middle"
            fontSize="15"
            fontWeight="900"
            fill="#111"
          >
            KY
          </text>

          {/* Left fin */}
          <path
            d="M35 200 L8 270 L35 250 Z"
            fill="#ff5c35"
            stroke="#272b31"
            strokeWidth="3"
          />

          {/* Right fin */}
          <path
            d="M125 200 L152 270 L125 250 Z"
            fill="#ff5c35"
            stroke="#272b31"
            strokeWidth="3"
          />

          {/* Engine */}
          <path
            d="M50 250 L50 275 L110 275 L110 250"
            fill="#555c65"
            stroke="#272b31"
            strokeWidth="3"
          />

          <path
            d="M60 275 L60 292 L100 292 L100 275"
            fill="#272b31"
          />
        </svg>
      </div>

      {/* LAUNCH PAD */}
      <div className="rocket-launch-pad">
        <div className="pad-tower">
          <span />
          <span />
          <span />
        </div>

        <div className="pad-platform" />

        <div className="pad-base" />
      </div>

      {/* CLOUD LAYER — splits apart */}
      <div className="launch-clouds">
        <div className="cloud cloud-left">
          <div className="cloud-shape cloud-shape-1" />
          <div className="cloud-shape cloud-shape-2" />
          <div className="cloud-shape cloud-shape-3" />
          <div className="cloud-shape cloud-shape-4" />
        </div>

        <div className="cloud cloud-right">
          <div className="cloud-shape cloud-shape-1" />
          <div className="cloud-shape cloud-shape-2" />
          <div className="cloud-shape cloud-shape-3" />
          <div className="cloud-shape cloud-shape-4" />
        </div>
      </div>

      {/* SKIP */}
      <button
        type="button"
        className="cinematic-skip"
        onClick={() => setVisible(false)}
      >
        SKIP INTRO →
      </button>
    </div>
  );
}
