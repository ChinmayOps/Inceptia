import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Schedule = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2025-06-28T00:00:00');
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0, completed: true };
    }

    const totalSeconds = Math.floor(difference / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { hours, minutes, seconds, completed: false };
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  return (
    <section id="schedule" className="py-20 px-6 relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1623039405147-547794f92e9e')] bg-cover opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/5 filter blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full border border-primary/10 shield-pulse opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Calendar className="w-7 h-7 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Event <span className="text-primary">Timeline</span></h2>
          </div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Mark your calendars! Here's the complete schedule for the INCEPTIA HACKATHON 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Event Schedule */}
          <div>
            <Card className="bg-white/5 backdrop-blur-sm border-primary/20 hover:border-primary/30 transition-all p-6">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Event Schedule
                </h3>
                <ul className="space-y-6">
                  <li className="relative pl-8 pb-6 border-l-2 border-primary/30">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="font-bold text-lg text-white">15<sup>th</sup> May 2025</div>
                    <div className="text-white/70">Event live on Unstop</div>
                  </li>
                  <li className="relative pl-8 pb-6 border-l-2 border-primary/30">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="font-bold text-lg text-white">25<sup>th</sup> May 2025 to 5<sup>th</sup> June 2025</div>
                    <div className="text-white/70">Online Presentation Registrations</div>
                  </li>
                  <li className="relative pl-8 pb-6 border-l-2 border-primary/30">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="font-bold text-lg text-white">10<sup>th</sup> June 2025</div>
                    <div className="text-white/70">Results Announcement</div>
                  </li>
                  <li className="relative pl-8">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="font-bold text-lg text-white">First week of July 2025</div>
                    <div className="text-white/70">Offline Hackathon in college campus</div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Countdown */}
          <div>
            <Card className="bg-white/5 backdrop-blur-sm border-primary/20 hover:border-primary/30 transition-all p-6">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Hackathon Countdown
                </h3>
                <div className="flex justify-center my-8">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-card/80 backdrop-blur-md rounded-lg p-4 w-24">
                      <div className="text-3xl font-bold text-white">{formatTime(time.hours)}</div>
                      <div className="text-xs text-white/60 uppercase">Hours</div>
                    </div>
                    <div className="bg-card/80 backdrop-blur-md rounded-lg p-4 w-24">
                      <div className="text-3xl font-bold text-white">{formatTime(time.minutes)}</div>
                      <div className="text-xs text-white/60 uppercase">Minutes</div>
                    </div>
                    <div className="bg-card/80 backdrop-blur-md rounded-lg p-4 w-24">
                      <div className="text-3xl font-bold text-white">{formatTime(time.seconds)}</div>
                      <div className="text-xs text-white/60 uppercase">Seconds</div>
                    </div>
                  </div>
                </div>

                {time.completed && (
                  <div className="text-center mt-4 p-3 bg-primary/20 rounded-md border border-primary/30">
                    <p className="text-white font-medium">Hackathon time is up! Time to submit your projects.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
