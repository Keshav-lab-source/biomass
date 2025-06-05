import React from 'react';
import { Link } from 'react-router-dom';
import ImageCarousel from '../components/home/ImageCarousel';
import ProductsGrid from '../components/home/ProductsGrid';
import StatsBanner from '../components/home/StatsBanner';
import PartnersCarousel from '../components/home/PartnersCarousel';
import NewsletterForm from '../components/forms/NewsletterForm';

const HomePage: React.FC = () => {
  const stats = [
    {
      number: "46%",
      label: "Biofuel Production ↑",
      description: "Increase in sustainable biofuel production through our solutions"
    },
    {
      number: "$117B",
      label: "Market Value",
      description: "Projected biomass market value by 2030"
    },
    {
      number: "3.5%",
      label: "Transport Energy Share",
      description: "Biomass contribution to global transport energy"
    },
    {
      number: "72%",
      label: "Emission Reduction",
      description: "Average CO2 reduction achieved with our systems"
    }
  ];

  const testimonials = [
    {
      quote: "Nature Biomass Solutions has transformed our energy infrastructure, reducing our carbon footprint while saving us money.",
      author: "Sarah Chen",
      role: "Operations Director, GreenTech Industries",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      quote: "Their innovative approach to biomass solutions has set new standards in sustainable energy production.",
      author: "Michael Rodriguez",
      role: "CEO, EcoSystems Global",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      quote: "The expertise and dedication of their team made our transition to biomass energy seamless and efficient.",
      author: "Emma Thompson",
      role: "Sustainability Manager, CleanEnergy Alliance",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg"
    }
  ];

  return (
    <>
      <ImageCarousel />
      
      <section className="section bg-primary-50">
        <div className="container-custom">
          <h2 className="section-title">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Nature Biomass</h2>
              <p className="text-lg text-gray-600 mb-6">
                Since 2010, we've been at the forefront of sustainable energy solutions, 
                helping businesses transition to cleaner, more efficient biomass technologies. 
                Our innovative approach combines cutting-edge engineering with environmental 
                responsibility.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg"
                alt="About Nature Biomass"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <ProductsGrid />
      
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">{testimonial.author}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <PartnersCarousel />
      
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter to get the latest updates on biomass solutions, industry news, and exclusive offers.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;