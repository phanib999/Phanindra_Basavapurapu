// src/components/WaveText.js
import React from 'react';

const WaveText = () => {
  return (
    <svg viewBox="0 0 600 100" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs mx-auto">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" color="#FF6347" />
          <stop offset="100%" color="#D9B08C" />
        </linearGradient>
        <pattern id="wave" x="0" y="0" width="100%" height="100%" patternUnits="userSpaceOnUse">
          <path
            d="M-40 30 Q-30 20 -20 30 T0 30 T20 30 T40 30 T60 30 T80 30 T100 30 T120 30 V40 H-40z"
            fill="url(#gradient)"
          >
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="1.5s"
              type="translate"
              from="0,0"
              to="40,0"
              repeatCount="indefinite"
            />
          </path>
        </pattern>
      </defs>
      <text x="50%" y="50%" textAnchor="middle" fontSize="24" fill="white" fillOpacity="0.1" dominantBaseline="middle">
        Phanindra Basavapurapu
      </text>
      <text x="50%" y="50%" textAnchor="middle" fontSize="24" fill="url(#wave)" fillOpacity="1" dominantBaseline="middle">
        Phanindra Basavapurapu
      </text>
    </svg>
  );
};

export default WaveText;
