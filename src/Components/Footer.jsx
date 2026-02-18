import React from 'react';

export default function Footer({ navigation, onNavigate }) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🇻🇳🇮🇳</span>
              <h3 className="text-lg font-bold">Vietnam India Services</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bridging Vietnam and India through comprehensive business services,
              investment support, and international trade.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {navigation.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => onNavigate(id)}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <div className="space-y-1 text-gray-400 text-sm">
              <p>📧 info@vietnamindiaservices.com</p>
              <p>📞 [Your Phone Number]</p>
              <div className="pt-3 flex gap-3">
                {['LinkedIn', 'Facebook', 'Twitter'].map((s) => (
                  <span key={s}
                    className="badge bg-gray-700 text-gray-300 cursor-pointer hover:bg-gray-600 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} Vietnam India Services, Investment, and Trading. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
