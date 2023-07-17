"use client"
import React, { useRef, useEffect } from 'react';
import Gauge from 'gaugeJS';
import dynamic from 'next/dynamic';


export default function ScoreGauge ({ score }) {
    const gaugeRef = useRef(null);

  useEffect(() => {
    const initializeGauge = async () => {
      const Gauge = dynamic(() => import('gaugeJS'), {
        ssr: false // Ensure Gauge.js is only loaded on the client-side
      });

      const gaugeElement = gaugeRef.current;
      const gaugeOptions = {
        value: score,
        min: 0,
        max: 100,
        color: '#ff0000',
        strokeColor: '#000000',
        animationSpeed: 32,
        type: 'full',
        label: function (value) {
          return Math.round(value) + ' %';
        }
      };

      const scoreGauge = new Gauge(gaugeElement, gaugeOptions);

      // Manually update the gauge value
      scoreGauge.value = score;
      scoreGauge.update();
    };

    // Check if the code is running on the client-side
    if (typeof window !== 'undefined') {
      initializeGauge();
    }
  }, [score]);

  return <canvas ref={gaugeRef} />;
};
