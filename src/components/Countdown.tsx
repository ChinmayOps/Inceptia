"use client";

import React, { useEffect, useState } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-06-28T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="backdrop-blur-md rounded-2xl shadow-lg p-6 w-full max-w-xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-4">
        Countdown to <span className="text-primary">Inceptia 2025</span>
      </h2>
      <div className="grid grid-cols-4 gap-4 text-center">
        <div>
          <p className="text-4xl md:text-5xl font-extrabold text-white">{timeLeft.days}</p>
          <p className="text-sm text-white/70">Days</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-extrabold text-white">{timeLeft.hours}</p>
          <p className="text-sm text-white/70">Hours</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-extrabold text-white">{timeLeft.minutes}</p>
          <p className="text-sm text-white/70">Minutes</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-extrabold text-white">{timeLeft.seconds}</p>
          <p className="text-sm text-white/70">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
