import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/70 to-dark z-10"></div>
        <video 
          src="https://videos.pexels.com/video-files/4389377/4389377-uhd_2732_1440_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          // alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          Explore the Future with{' '}
          <span className="text-gradient-animated">TreFund</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
          <span className="text-green-500 font-semibold">TreFund</span> Protocol — Decentralized fundraising for startups, Building on{' '}
          <span className="text-blue-500 font-semibold">Cedra</span>.
          <br />
          A secure, efficient, and community-driven platform.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12 animate-scale-in">
          <button className="btn-primary glow-blue">
            Get Started
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      </div>
    </section>
  );
};

export default Hero;
