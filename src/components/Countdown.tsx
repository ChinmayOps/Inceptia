import { useEffect, useState } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-06-28T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) return null;

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

  if (!timeLeft) {
    return (
      <div className="text-center text-white py-12">
        <h2 className="text-4xl font-bold animate-pulse">🎉 It's Event Day!</h2>
      </div>
    );
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 bg-black text-white text-center relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wider">
        Countdown to Inceptia 2025
      </h2>

      <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
        {timeUnits.map((unit, idx) => (
          <div
            key={idx}
            className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl p-6 md:p-8 min-w-[80px] md:min-w-[100px] shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="text-3xl md:text-4xl font-bold text-accent">{unit.value}</div>
            <div className="uppercase text-sm md:text-base tracking-wide mt-2 text-white/70">{unit.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;
