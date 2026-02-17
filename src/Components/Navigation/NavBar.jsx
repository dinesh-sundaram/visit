import React from 'react';
import { Globe, Building2, TrendingUp, Package, Mail, Menu, X } from 'lucide-react';

const icons = {
  home:       Globe,
  services:   Building2,
  investment: TrendingUp,
  trading:    Package,
  contact:    Mail,
};

export default function NavBar({ navigation, currentPage, onNavigate, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">

        {/* Top bar */}
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <button onClick={() => onNavigate('home')} className="flex items-center gap-3">
            <div className="flex text-2xl">
              <span>🇻🇳</span>
              <span>🇮🇳</span>
            </div>
            <div className="text-left">
              <p className="text-lg font-bold text-gray-800 leading-tight">Vietnam India Services</p>
              <p className="text-xs text-gray-500 hidden sm:block">Investment &amp; Trading</p>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map(({ id, label }) => {
              const Icon = icons[id];
              const isActive = currentPage === id;
              return (
                <button
                  key={id}
                  onClick={() => onNavigate(id)}
                  className={isActive ? 'nav-link-active' : 'nav-link'}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-1 border-t border-gray-100 pt-3">
            {navigation.map(({ id, label }) => {
              const Icon = icons[id];
              const isActive = currentPage === id;
              return (
                <button
                  key={id}
                  onClick={() => onNavigate(id)}
                  className={isActive ? 'nav-link-mobile-active' : 'nav-link-mobile'}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              );
            })}
          </nav>
        )}

      </div>
    </header>
  );
}
