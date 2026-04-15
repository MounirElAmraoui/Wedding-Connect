import React from 'react';
import ExperienceCard from '../components/experiences/ExperienceCard';
import './Experiences.css';

const experiencesData = [
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
  },
  {
    id: 4,
    title: "Royal Indian Wedding Celebration",
    description: "Witness the grandeur of a traditional Indian wedding with colorful ceremonies, traditional dances, and feast.",
    date: "September 5, 2024",
    location: "Jaipur, India",
    price: "$4,500",
    category: "Royal Wedding",
    spots: 20,
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800"
  },
  {
    id: 5,
    title: "Japanese Garden Wedding Ceremony",
    description: "Experience the tranquility of a traditional Japanese wedding in a beautiful garden setting with tea ceremony.",
    date: "October 12, 2024",
    location: "Kyoto, Japan",
    price: "$3,800",
    category: "Traditional Ceremony",
    spots: 10,
    image: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800"
  },
  {
    id: 6,
    title: "Desert Luxury Wedding Experience",
    description: "Celebrate under the stars in the Dubai desert with luxury camping, camel rides, and traditional entertainment.",
    date: "November 20, 2024",
    location: "Dubai, UAE",
    price: "$5,500",
    category: "Luxury Experience",
    spots: 6,
    image: "https://images.unsplash.com/photo-1542259681-d4cd403bc352?w=800"
  }
];

const Experiences = () => {
  return (
    <div className="experiences-page">
      <div className="experiences-hero">
        <div className="container">
          <h1>Wedding Experiences & Festivals</h1>
          <p>Immerse yourself in cultural celebrations and unique wedding traditions around the world</p>
        </div>
      </div>
      
      <div className="container">
        <div className="experiences-filter">
          <button className="filter-btn active">All Experiences</button>
          <button className="filter-btn">Cultural Festivals</button>
          <button className="filter-btn">Beach Weddings</button>
          <button className="filter-btn">Traditional Ceremonies</button>
          <button className="filter-btn">Luxury Events</button>
        </div>
        
        <div className="experiences-grid">
          {experiencesData.map((exp) => (
            <ExperienceCard key={exp.id} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;