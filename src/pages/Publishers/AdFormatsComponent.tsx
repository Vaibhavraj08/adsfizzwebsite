import React, { useState, useEffect } from 'react';
import { 
  Monitor,
  Bell,
  FileText,
  Play,
  Image,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Star,
  TrendingUp
} from 'lucide-react';

interface AdFormat {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  image: string;
  icon: React.ComponentType<any>;
  features: string[];
  cpm: string;
}

const adFormats: AdFormat[] = [
  {
    id: 'socialbar',
    title: 'SocialBar Ads',
    shortTitle: 'Social Bar',
    description: 'Social Bar offers publishers the ability to embed a floating bar on their website, allowing them to promote products, increase engagement, and drive social media conversions. Publishers achieve higher CPMs while advertising with Adsfizz in comparison with web push ads.',
    shortDescription: 'Floating social bars with rich content, videos, and countdown timers to boost conversions and engagement.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: Monitor,
    features: ['Higher CPMs', 'Rich Media', 'Social Integration'],
    cpm: '$2.50'
  },
  {
    id: 'push',
    title: 'Push Notifications',
    shortTitle: 'Push Ads',
    description: 'Push ads are delivered directly to users\' devices as notifications, appearing on screens regardless of whether they are actively visiting your website. No opt-ins required - they are an excellent monetization solution.',
    shortDescription: 'Direct device notifications with animated templates and custom designs for maximum reach.',
    image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: Bell,
    features: ['No Opt-ins', 'Animated Templates', 'Direct Reach'],
    cpm: '$1.80'
  },
  {
    id: 'native',
    title: 'Native Ads',
    shortTitle: 'Native',
    description: 'Native ads seamlessly blend into websites providing a non-disruptive user experience. With over 1 billion impressions daily, our native banners have a 10x higher click-through rate compared to classic display ads.',
    shortDescription: 'Seamlessly integrated ads that blend naturally with your content for better user experience.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: FileText,
    features: ['AdBlock Resistant', '10x Higher CTR', '1B+ Daily Impressions'],
    cpm: '$3.20'
  },
  {
    id: 'video',
    title: 'Video Ads',
    shortTitle: 'Video',
    description: 'Video ads use captivating videos to deliver marketing messages through audiovisual storytelling. Support for VAST/VPAID tags and video hosting. Video ads have the greatest online impact.',
    shortDescription: 'Engaging video content with VAST/VPAID support for maximum impact and storytelling.',
    image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: Play,
    features: ['VAST/VPAID', 'Video Hosting', 'High Impact'],
    cpm: '$4.50'
  },
  {
    id: 'banner',
    title: 'Banner Ads',
    shortTitle: 'Banners',
    description: 'Traditional banner ads with unprecedented performance. Access to 18K publishers daily with 800M impressions. Publishers earn 100% of banner impressions, leading to higher payouts.',
    shortDescription: 'High-performance banner ads with access to massive traffic sources and 100% impression payouts.',
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: Image,
    features: ['18K Publishers', '800M Impressions', '100% Payouts'],
    cpm: '$2.10'
  },
  {
    id: 'popunder',
    title: 'Popunder Ads',
    shortTitle: 'Popunder',
    description: 'Pop-under ads appear behind the current window, allowing uninterrupted browsing. The Adsfizz pop-under script delivers 100% visible ads - perfect for promoting apps, landing pages, or websites.',
    shortDescription: 'Background ads that don\'t interrupt user experience, with 100% visibility guarantee.',
    image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: ExternalLink,
    features: ['100% Visible', 'Non-Intrusive', 'Perfect for Apps'],
    cpm: '$1.95'
  }
];

export const AdFormatsComponent: React.FC = () => {
  const [activeFormat, setActiveFormat] = useState<string>('socialbar');
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const currentFormat = adFormats.find(format => format.id === activeFormat) || adFormats[0];
  const currentIndex = adFormats.findIndex(format => format.id === activeFormat);

  const nextFormat = () => {
    const nextIndex = (currentIndex + 1) % adFormats.length;
    setActiveFormat(adFormats[nextIndex].id);
  };

  const prevFormat = () => {
    const prevIndex = (currentIndex - 1 + adFormats.length) % adFormats.length;
    setActiveFormat(adFormats[prevIndex].id);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextFormat();
    }
    if (isRightSwipe) {
      prevFormat();
    }
  };

  return (
    <section className="ad-formats-section">
      <div className="container">
        <h2 className="section-title">Ad Formats</h2>
        <p className="section-subtitle">
          Explore our comprehensive range of high-performance ad formats designed to maximize your revenue 
          while providing excellent user experience across all devices and platforms.
        </p>
        
        <div className="ad-formats-container">
          {/* Mobile Navigation */}
          {isMobile && (
            <div className="mobile-nav-container">
              <div className="mobile-header">
                <div className="format-indicator">
                  <currentFormat.icon size={24} />
                  <div className="format-info">
                    <span className="current-format">{currentFormat.shortTitle}</span>
                    <span className="format-counter">{currentIndex + 1} of {adFormats.length}</span>
                  </div>
                  <div className="cpm-badge">{currentFormat.cpm} CPM</div>
                </div>
              </div>
              
              <div className="mobile-nav-arrows">
                <button 
                  className="nav-arrow left" 
                  onClick={prevFormat}
                  aria-label="Previous ad format"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="mobile-dots">
                  {adFormats.map((format, index) => (
                    <button
                      key={format.id}
                      className={`dot ${activeFormat === format.id ? 'active' : ''}`}
                      onClick={() => setActiveFormat(format.id)}
                      aria-label={`Switch to ${format.title}`}
                    />
                  ))}
                </div>
                
                <button 
                  className="nav-arrow right" 
                  onClick={nextFormat}
                  aria-label="Next ad format"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}

          {/* Desktop/Tablet Navigation */}
          {!isMobile && (
            <div className="tab-navigation">
              {adFormats.map((format) => (
                <button
                  key={format.id}
                  className={`tab-button ${activeFormat === format.id ? 'active' : ''}`}
                  onClick={() => setActiveFormat(format.id)}
                  type="button"
                >
                  <format.icon size={28} />
                  <span>{format.title}</span>
                </button>
              ))}
            </div>
          )}

          <div 
            className="tab-content"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="tab-content-layout">
              <div className="tab-image-section">
                <img 
                  src={currentFormat.image}
                  alt={`${currentFormat.title} illustration`}
                  className="tab-image"
                />
                <div className="image-overlay">
                  <div className="overlay-badge">
                    <Star size={16} />
                    <span>Popular</span>
                  </div>
                </div>
              </div>
              
              <div className="tab-text-section">
                {isMobile && (
                  <div className="format-badge">
                    <TrendingUp size={16} />
                    <span>High Performance</span>
                  </div>
                )}
                
                <h3 className="tab-title">{currentFormat.title}</h3>
                
                <p className="tab-description">
                  {isMobile ? currentFormat.shortDescription : currentFormat.description}
                </p>
                
                <div className="features-list">
                  {currentFormat.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <div className="feature-dot"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                {isMobile && (
                  <div className="mobile-actions">
                    <button className="mobile-cta-button primary">
                      Get Started
                    </button>
                    <button className="mobile-cta-button secondary">
                      Learn More
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {isMobile && (
              <div className="swipe-indicator">
                <div className="swipe-dots">
                  <ChevronLeft size={16} />
                  <span>Swipe to explore</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .ad-formats-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
          overflow: hidden;
        }
        
        .ad-formats-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25px 25px, rgba(102, 126, 234, 0.03) 2px, transparent 2px);
          background-size: 50px 50px;
          opacity: 0.8;
        }
        
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
        }
        
        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 20px;
          text-align: center;
          letter-spacing: -0.01em;
          line-height: 1.2;
          position: relative;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 2px;
        }
        
        .section-subtitle {
          font-size: clamp(1.125rem, 2.5vw, 1.375rem);
          color: #4a5568;
          max-width: 900px;
          margin: 0 auto 60px;
          text-align: center;
          line-height: 1.7;
          font-weight: 400;
        }
        
        .ad-formats-container {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9));
          backdrop-filter: blur(20px);
          border-radius: 32px;
          padding: 60px 40px;
          margin: 0 auto;
          max-width: 1200px;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.08),
            0 12px 24px rgba(0, 0, 0, 0.04),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .ad-formats-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, #667eea, #764ba2, #667eea);
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: calc(200px + 100%) 0; }
        }
        
        /* Mobile Navigation Styles */
        .mobile-nav-container {
          margin-bottom: 30px;
        }
        
        .mobile-header {
          margin-bottom: 20px;
        }
        
        .format-indicator {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          padding: 16px 20px;
          border-radius: 16px;
          border: 1px solid rgba(102, 126, 234, 0.2);
        }
        
        .format-info {
          flex: 1;
          margin-left: 12px;
        }
        
        .current-format {
          display: block;
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a202c;
          margin-bottom: 2px;
        }
        
        .format-counter {
          display: block;
          font-size: 0.8rem;
          color: #6b7280;
          font-weight: 500;
        }
        
        .cpm-badge {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .mobile-nav-arrows {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        
        .nav-arrow {
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .nav-arrow:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
        }
        
        .nav-arrow:active {
          transform: scale(0.95);
        }
        
        .mobile-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          flex: 1;
          margin: 0 20px;
        }
        
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #cbd5e0;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .dot.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          transform: scale(1.3);
        }
        
        .dot:hover {
          background: #9ca3af;
          transform: scale(1.1);
        }
        
        .dot.active:hover {
          background: linear-gradient(135deg, #667eea, #764ba2);
          transform: scale(1.3);
        }
        
        /* Desktop Navigation Styles */
        .tab-navigation {
          display: flex;
          justify-content: space-between;
          align-items: stretch;
          gap: 8px;
          margin-bottom: 40px;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 0;
          overflow-x: auto;
        }
        
        .tab-button {
          flex: 1;
          min-width: 140px;
          padding: 20px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: transparent;
          border: none;
          border-radius: 16px 16px 0 0;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
          font-weight: 600;
          font-size: 0.9rem;
          color: #4a5568;
          border-bottom: 4px solid transparent;
        }
        
        .tab-button.active {
          background: linear-gradient(145deg, #ffffff, #f8fafc);
          color: #1a202c;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04);
          border-bottom: 4px solid #667eea;
        }
        
        .tab-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .tab-button.active::before {
          opacity: 1;
        }
        
        .tab-button:hover {
          transform: translateY(-6px);
          background: linear-gradient(145deg, #ffffff, #f8fafc);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1), 0 6px 16px rgba(0, 0, 0, 0.06);
          color: #1a202c;
        }
        
        .tab-button:hover::before {
          opacity: 0.7;
        }
        
        .tab-button svg {
          margin-bottom: 8px;
          transition: all 0.3s ease;
          color: #6b7280;
        }
        
        .tab-button.active svg,
        .tab-button:hover svg {
          color: #667eea;
          transform: scale(1.1);
        }
        
        /* Content Styles */
        .tab-content {
          padding: 40px 0;
          background: linear-gradient(145deg, #f8fafc, #ffffff);
          border-radius: 24px;
          margin-top: 20px;
          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.06);
          position: relative;
        }
        
        .tab-content-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: center;
        }
        
        .tab-image-section {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
          transition: transform 0.4s ease;
        }
        
        .tab-image-section:hover {
          transform: scale(1.03);
        }
        
        .tab-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        
        .tab-image-section:hover .tab-image {
          transform: scale(1.1);
        }
        
        .image-overlay {
          position: absolute;
          top: 16px;
          right: 16px;
        }
        
        .overlay-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }
        
        .tab-text-section {
          padding: 20px 0;
        }
        
        .format-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 16px;
        }
        
        .tab-title {
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
          line-height: 1.2;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .tab-description {
          font-size: clamp(1rem, 2vw, 1.125rem);
          color: #4a5568;
          line-height: 1.8;
          font-weight: 400;
          margin: 0 0 24px 0;
        }
        
        .features-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }
        
        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.95rem;
          color: #4a5568;
          font-weight: 500;
        }
        
        .feature-dot {
          width: 6px;
          height: 6px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          flex-shrink: 0;
        }
        
        .mobile-actions {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }
        
        .mobile-cta-button {
          flex: 1;
          padding: 14px 20px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          min-height: 48px;
        }
        
        .mobile-cta-button.primary {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .mobile-cta-button.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
        }
        
        .mobile-cta-button.secondary {
          background: transparent;
          color: #667eea;
          border: 2px solid #667eea;
        }
        
        .mobile-cta-button.secondary:hover {
          background: #667eea;
          color: white;
          transform: translateY(-2px);
        }
        
        .mobile-cta-button:active {
          transform: translateY(0);
        }
        
        .swipe-indicator {
          display: flex;
          justify-content: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(102, 126, 234, 0.1);
        }
        
        .swipe-dots {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #9ca3af;
          font-size: 0.8rem;
          font-weight: 500;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .ad-formats-section {
            padding: 80px 0;
          }
          
          .container {
            padding: 0 16px;
          }
          
          .section-subtitle {
            margin-bottom: 40px;
          }
          
          .ad-formats-container {
            padding: 30px 20px;
            border-radius: 20px;
            margin: 0 0;
          }
          
          .tab-content {
            padding: 30px 20px;
            border-radius: 16px;
            margin-top: 0;
          }
          
          .tab-content-layout {
            grid-template-columns: 1fr;
            gap: 24px;
            text-align: center;
          }
          
          .tab-image-section {
            order: -1;
          }
          
          .tab-image {
            height: 220px;
            border-radius: 12px;
          }
          
          .tab-text-section {
            padding: 24px 0;
          }
          
          .tab-description {
            line-height: 1.6;
            margin-bottom: 20px;
          }
          
          .features-list {
            justify-content: center;
            align-items: center;
          }
          
          .feature-item {
            justify-content: center;
          }
        }
        
        @media (max-width: 968px) {
          .tab-navigation {
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
          }
          
          .tab-button {
            min-width: 120px;
            padding: 16px 12px;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AdFormatsComponent;