import React, { useState, useEffect } from 'react';
import { Globe, TrendingUp, Building2, ChevronDown } from 'lucide-react';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/* ── Hero slides: alternating Vietnam / India imagery ── */
const slides = [
  {
    id: 'vn-1',
    country: 'Vietnam',
    flag: '🇻🇳',
    label: 'Ha Long Bay, Vietnam',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1600&q=80&auto=format&fit=crop',
    accent: 'from-red-950/80 via-red-900/50',
    tag: 'bg-red-600',
  },
  {
    id: 'in-1',
    country: 'India',
    flag: '🇮🇳',
    label: 'Taj Mahal, Agra',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80&auto=format&fit=crop',
    accent: 'from-orange-950/80 via-orange-900/50',
    tag: 'bg-orange-500',
  },
  {
    id: 'vn-2',
    country: 'Vietnam',
    flag: '🇻🇳',
    label: 'Hoi An Ancient Town',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1600&q=80&auto=format&fit=crop',
    accent: 'from-yellow-950/80 via-yellow-900/50',
    tag: 'bg-red-600',
  },
  {
    id: 'in-2',
    country: 'India',
    flag: '🇮🇳',
    label: 'Mumbai Skyline',
    image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=1600&q=80&auto=format&fit=crop',
    accent: 'from-blue-950/80 via-blue-900/50',
    tag: 'bg-orange-500',
  },
];

const highlights = [
  { icon: Globe,      label: 'Global Partnership' },
  { icon: TrendingUp, label: 'Growth Focused' },
  { icon: Building2,  label: 'Professional Services' },
];

const countryData = [
  {
    flag: '🇻🇳',
    name: 'Vietnam',
    headingClass: 'text-rose-700',
    cardClass: 'card-vietnam',
    facts: [
      { label: 'Population',       value: '~98 million' },
      { label: 'Capital',          value: 'Hanoi' },
      { label: 'Economy',          value: 'Rapidly growing manufacturing hub — strong in electronics, textiles, and agriculture' },
      { label: 'Key Sectors',      value: 'Electronics, garments, seafood, agriculture, tourism' },
      { label: 'Business Climate', value: 'FDI-friendly, strategic ASEAN location, young workforce' },
    ],
  },
  {
    flag: '🇮🇳',
    name: 'India',
    headingClass: 'text-fuchsia-700',
    cardClass: 'card-india',
    facts: [
      { label: 'Population',       value: '~1.4 billion' },
      { label: 'Capital',          value: 'New Delhi' },
      { label: 'Economy',          value: "World's fastest-growing major economy and IT services powerhouse" },
      { label: 'Key Sectors',      value: 'IT services, pharmaceuticals, automotive, textiles, agriculture' },
      { label: 'Business Climate', value: 'Large domestic market, skilled workforce, growing digital economy' },
    ],
  },
];

/* ── Animated About Us card ── */
function AboutCard() {
  const [ref, visible] = useScrollReveal(0.12);
  return (
    <div
      ref={ref}
      className={`card-about ${visible ? 'card-about-in' : ''}`}
    >
      <p className="text-gray-700 leading-relaxed text-lg">
        Vietnam India Services, Investment, and Trading is a premier bridge connecting the vibrant economies
        of Vietnam and India. We specialize in facilitating seamless business operations, investment
        opportunities, and trade relationships between these two rapidly growing markets.
      </p>
      <p className="text-gray-700 leading-relaxed text-lg">
        With deep understanding of both markets, regulatory environments, and cultural nuances, we provide
        comprehensive solutions for businesses looking to expand, invest, or trade across borders. Our mission
        is to empower companies with the tools, knowledge, and support they need to succeed.
      </p>
    </div>
  );
}

/* ── Animated country card ── */
function CountryCard({ flag, name, headingClass, cardClass, facts, slideFrom }) {
  const [ref, visible] = useScrollReveal(0.12);
  const enterClass = slideFrom === 'left'
    ? `country-card-left  ${visible ? 'country-card-left-in'  : ''}`
    : `country-card-right ${visible ? 'country-card-right-in' : ''}`;

  return (
    <div ref={ref} className={`${cardClass} ${enterClass}`}>
      {/* z-index 2 wrapper keeps content above ::before border + ::after bg image */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Heading */}
        <h3
          className={`text-2xl font-bold mb-5 ${headingClass} card-heading ${visible ? 'card-heading-in' : ''}`}
          style={{ animationDelay: '0.15s' }}
        >
          {flag} {name}
        </h3>

        {/* Fact rows — each staggers in after the card */}
        <dl className="space-y-3">
          {facts.map(({ label, value }, i) => (
            <div
              key={label}
              className={`flex gap-2 text-gray-700 fact-row ${visible ? 'fact-row-in' : ''}`}
              style={{ animationDelay: `${0.25 + i * 0.07}s` }}
            >
              <dt className="font-semibold shrink-0">{label}:</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
function Hero() {
  const [current, setCurrent]         = useState(0);
  const [prev, setPrev]               = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  /* Auto-advance every 5 s */
  useEffect(() => {
    const id = setInterval(() => goTo(), 5000);
    return () => clearInterval(id);
  }, [current, transitioning]);

  function goTo(target) {
    if (transitioning) return;
    setTransitioning(true);
    setTextVisible(false);

    setTimeout(() => {
      setPrev(current);
      const next = target !== undefined ? target : (current + 1) % slides.length;
      setCurrent(next);
      setTextVisible(true);
      setTimeout(() => {
        setPrev(null);
        setTransitioning(false);
      }, 900);
    }, 350);
  }

  const slide     = slides[current];
  const prevSlide = prev !== null ? slides[prev] : null;

  return (
    <section className="hero-root">

      {/* ── Background image layers ── */}
      {prevSlide && (
        <div
          key={`prev-${prevSlide.id}`}
          className="hero-bg hero-bg-exit"
          style={{ backgroundImage: `url(${prevSlide.image})` }}
        />
      )}
      <div
        key={`curr-${slide.id}`}
        className={`hero-bg hero-bg-enter ${prev !== null ? 'hero-bg-enter-active' : ''}`}
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      {/* Dark + colour overlay */}
      <div className={`hero-overlay bg-gradient-to-r ${slide.accent} to-black/70`} />

      {/* Floating particles */}
      <div className="hero-particles" aria-hidden="true">
        {[...Array(14)].map((_, i) => (
          <span key={i} className="hero-particle" style={{
            left:             `${5 + i * 6.5}%`,
            animationDelay:   `${i * 0.35}s`,
            animationDuration:`${3.5 + (i % 4) * 0.8}s`,
            width:            `${3 + (i % 4) * 2}px`,
            height:           `${3 + (i % 4) * 2}px`,
          }} />
        ))}
      </div>

      {/* ── Content ── */}
      <div className={`hero-content ${textVisible ? 'hero-text-in' : 'hero-text-out'}`}>

        {/* Country badge */}
        <div className="flex justify-center mb-6">
          <span className={`hero-badge ${slide.tag}`}>
            <span className="text-xl leading-none">{slide.flag}</span>
            {slide.country}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white text-center leading-none mb-3 drop-shadow-xl">
          Vietnam <span className="hero-ampersand text-yellow-400">&amp;</span> India
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-white/80 text-center mb-3 tracking-wide">
          Services, Investment &amp; Trading
        </p>
        <p className="text-base md:text-lg text-white/60 text-center mb-10 font-light tracking-widest uppercase">
          Bridging Two Dynamic Economies
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {highlights.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className="hero-chip"
              style={{ animationDelay: `${0.1 + i * 0.12}s` }}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </div>
          ))}
        </div>

        {/* Location label */}
        <p className="text-white/40 text-xs text-center tracking-widest uppercase font-medium">
          📍 {slide.label}
        </p>
      </div>

      {/* ── Dot / thumbnail indicators ── */}
      <div className="hero-dots">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Slide: ${s.label}`}
            className={`hero-dot ${i === current ? 'hero-dot-active' : ''}`}
          >
            <span className={`hero-dot-flag ${i === current ? 'opacity-100' : 'opacity-0'}`}>
              {s.flag}
            </span>
          </button>
        ))}
      </div>

      {/* ── Progress bar ── */}
      <div className="hero-progress-track">
        <div key={current} className="hero-progress-bar" />
      </div>

      {/* Scroll chevron */}
      <div className="hero-scroll-cue">
        <ChevronDown className="w-6 h-6 text-white/50 animate-bounce" />
      </div>

    </section>
  );
}

/* ── Page ── */
export default function Home() {
  return (
    <div className="space-y-14">
      <Hero />

      {/* About */}
      <section>
        <SectionHeader
          title="About Us"
          subtitle="Who we are and what drives us"
          accent="bg-sky-500"
          waveSubtitle={true}
          subtitleColor="text-sky-600"
        />
        <AboutCard />
      </section>

      {/* Country Info */}
      <section>
        <SectionHeader
          title="Country Information"
          subtitle="Key facts about our home markets"
          accent="bg-pink-500"
          waveSubtitle={true}
          subtitleColor="text-pink-600"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {countryData.map(({ flag, name, headingClass, cardClass, facts }, idx) => (
            <CountryCard
              key={name}
              flag={flag}
              name={name}
              headingClass={headingClass}
              cardClass={cardClass}
              facts={facts}
              slideFrom={idx === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
