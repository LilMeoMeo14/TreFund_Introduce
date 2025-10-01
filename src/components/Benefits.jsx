import React from 'react';
import { Lock, Activity, Users, Gift, Wallet, Shield } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Lock,
      tag: 'TRANSPARENT INVESTMENTS',
      title: 'Direct on blockchain',
      description: 'Invest directly in startup projects. Every transaction is recorded automatically on Cedra, ensuring transparency and security.',
    },
    {
      icon: Activity,
      tag: 'REAL-TIME TRACKING',
      title: 'Monitor progress',
      description: 'Track project milestones, total funds raised, and receive alerts if a project is at risk of failing.',
    },
    {
      icon: Users,
      tag: 'COMMUNITY POWER',
      title: 'Vote & prioritize',
      description: 'Contributors can vote on projects\' potential, helping the fund highlight high-quality startups.',
    },
    {
      icon: Gift,
      tag: 'INSIGHTFUL REWARDS',
      title: 'Exclusive insights & benefits',
      description: 'Contributors receive early updates on new projects, detailed reports, and access to webinars/AMAs with founders, enhancing informed decision-making and long-term engagement.',
    },
    {
      icon: Wallet,
      tag: 'WALLET',
      title: 'Connect & contribute',
      description: 'Connect your wallet, contribute funds, and automatically receive rewards without complicated procedures.',
    },
    {
      icon: Shield,
      tag: 'TRANSPARENT CAPITAL PROTECTION',
      title: 'Safe capital',
      description: 'All project transactions are fully transparent on the blockchain, ensuring your funds are tracked and secure even if a project does not reach its target.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-float"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-dark-lighter border border-gray-800 rounded-2xl p-8 hover:border-primary/50 card-hover group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-transparent transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 group-hover:animate-glow">
                    <benefit.icon className="w-6 h-6 text-primary group-hover:animate-pulse" />
                  </div>
                  <span className="text-xs text-primary font-semibold tracking-wider">
                    {benefit.tag}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
