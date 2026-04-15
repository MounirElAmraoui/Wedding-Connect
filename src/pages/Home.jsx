import React from 'react';
import { ArrowRight, Sparkles, Heart, MapPin, Star, TrendingUp } from 'lucide-react';
import SearchBar from '../components/common/SearchBar';
import { VendorCard } from '../components/ui/Card';
import ExperienceCard from '../components/experiences/ExperienceCard';
import './Home.css';

const featuredVendors = [
  {
    id: 1,
    name: "The Royal Garden Estate",
    category: "Venues",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
    rating: 4.9,
    reviews: 128,
    location: "Tuscany, Italy",
    price: "$15,000",
    priceUnit: "event"
  },
  {
    id: 2,
    name: "Elegant Affairs Catering",
    category: "Catering",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800",
    rating: 4.8,
    reviews: 96,
    location: "Paris, France",
    price: "$8,500",
    priceUnit: "service"
  },
  {
    id: 3,
    name: "Lumière Photography",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800",
    rating: 5.0,
    reviews: 234,
    location: "Santorini, Greece",
    price: "$5,500",
    priceUnit: "package"
  },
  {
    id: 4,
    name: "Harmony DJs & Entertainment",
    category: "Music",
    image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=800",
    rating: 4.7,
    reviews: 89,
    location: "Miami, USA",
    price: "$3,200",
    priceUnit: "event"
  }
];

const experiences = [
  {
    id: 1,
    title: "Traditional Moroccan Wedding Festival",
    description: "Experience the magic of a 3-day traditional Moroccan celebration with henna ceremonies, traditional music, and authentic cuisine.",
    date: "June 15-17, 2024",
    location: "Marrakech, Morocco",
    price: "$2,500",
    category: "Cultural Festival",
    spots: 12,
    image: "https://images.unsplash.com/photo-1542259681-d4cd403bc352?w=800"
  },
  {
    id: 2,
    title: "Luxury Beach Wedding Experience",
    description: "Join an exclusive beachfront wedding celebration in Bali with sunset ceremonies and tropical reception.",
    date: "July 22, 2024",
    location: "Bali, Indonesia",
    price: "$1,800",
    category: "Beach Wedding",
    spots: 8,
    image: "https://images.unsplash.com/photo-1544592744-5c9003d5a714?w=800"
  },
  {
    id: 3,
    title: "Vineyard Wedding Celebration",
    description: "Taste fine wines and celebrate love in the rolling hills of Tuscany with a traditional Italian wedding feast.",
    date: "August 10, 2024",
    location: "Tuscany, Italy",
    price: "$3,200",
    category: "Vineyard Wedding",
    spots: 15,
    image: "https://images.unsplash.com/photo-1519225421980-715cb0202128?w=800"
  }
];

const stats = [
  { icon: Heart, value: "10,000+", label: "Happy Couples" },
  { icon: MapPin, value: "150+", label: "Destinations" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: TrendingUp, value: "98%", label: "Success Rate" }
];

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920" 
            alt="Luxury Wedding" 
          />
          <div className="hero-overlay" />
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Premium Wedding Marketplace</span>
          </div>
          
          <h1 className="hero-title">
            Experience Unforgettable<br />
            <span className="gold-text">Weddings Around the World</span>
          </h1>
          
          <p className="hero-subtitle">
            Connect with premium vendors, discover unique cultural celebrations, 
            and create memories that last a lifetime.
          </p>
          
          <div className="hero-search">
            <SearchBar variant="hero" />
          </div>
          
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <stat.icon size={24} className="stat-icon" />
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vendors Section */}
      <section className="section vendors-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Popular Vendors</h2>
              <p className="section-subtitle">Trusted by thousands of couples worldwide</p>
            </div>
            <a href="/vendors" className="view-all-link">
              View All <ArrowRight size={20} />
            </a>
          </div>
          
          <div className="vendors-grid">
            {featuredVendors.map((vendor) => (
              <VendorCard key={vendor.id} {...vendor} />
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="section experiences-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Wedding Experiences</h2>
              <p className="section-subtitle">Join cultural celebrations and festivals</p>
            </div>
            <a href="/experiences" className="view-all-link">
              Explore All <ArrowRight size={20} />
            </a>
          </div>
          
          <div className="experiences-grid">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Become a Vendor */}
      <section className="section cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <div className="cta-badge">For Vendors</div>
            <h2 className="cta-title">Grow Your Wedding Business</h2>
            <p className="cta-description">
              Join thousands of premium vendors and reach couples planning their dream weddings worldwide.
            </p>
            <ul className="cta-features">
              <li><Star size={16} /> Showcase your services to global audience</li>
              <li><Star size={16} /> Get verified bookings and secure payments</li>
              <li><Star size={16} /> Build your reputation with reviews</li>
            </ul>
            <button className="cta-button">
              Become a Vendor <ArrowRight size={20} />
            </button>
          </div>
          <div className="cta-image">
            <img src="https://images.unsplash.com/photo-1520854221256-17451cc330e7?w=800" alt="Wedding Vendor" />
          </div>
        </div>
      </section>

      {/* Festivals CTA Section */}
      <section className="section festival-section">
        <div className="festival-container">
          <div className="festival-image">
            <img src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800" alt="Wedding Festival" />
          </div>
          <div className="festival-content">
            <div className="festival-badge">For Tourists</div>
            <h2 className="festival-title">Attend Cultural Wedding Festivals</h2>
            <p className="festival-description">
              Immerse yourself in traditional wedding celebrations across different cultures. 
              From Indian Sangeet ceremonies to Moroccan Henna nights.
            </p>
            <button className="festival-button">
              Browse Festivals <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;