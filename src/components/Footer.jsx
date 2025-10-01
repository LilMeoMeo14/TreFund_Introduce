import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-gray-800">
      {/* Call to Action Banner */}
      <div className="bg-white text-black py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg font-semibold">
              Need help? Join us{' '}
            <a href="#" className="underline hover:text-primary transition-colors">
              Telegram
            </a>
          </p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="py-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1 - TreFund */}
            <div>
              <h4 className="text-white font-semibold mb-4">Project Info</h4>
              <ul className="space-y-2">
                <li><a className="text-gray-400 hover:text-primary transition-colors text-sm">© 2025 TreFund – A Decentralized Fundraising Platform</a></li>
                <li><a className="text-gray-400 hover:text-primary transition-colors text-sm">"Building on Cedra network"</a></li>
              </ul>
            </div>

            {/* Column 2 - Platforms */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">About TreFund</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact</a></li>
              </ul>
            </div>

            {/* Column 3 - Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">Community Channels</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Twitter / X</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Discord</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Telegram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">GitHub</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">LinkedIn</a></li>
              </ul>
            </div>

            {/* Column 4 - Markets */}
            <div>
              <h4 className="text-white font-semibold mb-4">Disclaimer</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">“TreFund does not provide financial services. All transactions are executed directly through smart contracts. Users are solely responsible for their participation in fundraising.”</a></li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-primary/30">
                <img 
                  src="/logo.jpg" 
                  alt="TreFund Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-bold text-primary">TreFund</span>
            </div>
            
            <p className="text-gray-500 text-sm text-center">
              © 2025 TreFund. All rights reserved. Transparent fundraising platform powered by Cedra network.
            </p>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-500 text-xs leading-relaxed">
          TreFund is a transparent blockchain-based fundraising platform. Investment accounts are risky and you should do your own due diligence before participating.
          We are not responsible for errors arising from your investment decisions. Please read the terms and conditions carefully before using the service.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
