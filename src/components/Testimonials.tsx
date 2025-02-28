import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, location, rating, text, date }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="flex mr-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
        </div>
        <span className="text-gray-600 text-sm">{date}</span>
      </div>
      <p className="text-gray-700 mb-4 italic">"{text}"</p>
      <div>
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-gray-600 text-sm">{location}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer L.",
      location: "Las Vegas, NV",
      rating: 5,
      text: "Nevada Pro Painting transformed our outdated kitchen cabinets into a modern masterpiece. The team was professional, punctual, and their attention to detail was impressive. Highly recommend!",
      date: "3 months ago"
    },
    {
      name: "Michael T.",
      location: "Reno, NV",
      rating: 5,
      text: "We hired Nevada Pro Painting for our exterior home painting project and couldn't be happier with the results. They provided excellent color recommendations and the paint job has held up beautifully through our harsh Nevada summer.",
      date: "6 months ago"
    },
    {
      name: "Sarah K.",
      location: "Henderson, NV",
      rating: 5,
      text: "The team at Nevada Pro Painting was fantastic from start to finish. They painted our entire interior and were meticulous about protecting our furniture and floors. The finished product exceeded our expectations!",
      date: "1 month ago"
    },
    {
      name: "David R.",
      location: "Carson City, NV",
      rating: 4,
      text: "Very satisfied with the commercial painting services provided for our office space. The crew worked after hours to minimize disruption to our business, and the quality of work was excellent.",
      date: "2 months ago"
    },
    {
      name: "Amanda J.",
      location: "Sparks, NV",
      rating: 5,
      text: "I can't say enough good things about Nevada Pro Painting. They painted our living room and dining room, and the results are stunning. Their color consultant helped us choose the perfect palette for our space.",
      date: "4 months ago"
    },
    {
      name: "Robert M.",
      location: "North Las Vegas, NV",
      rating: 5,
      text: "Professional, reliable, and quality work. Nevada Pro Painting refinished our deck and painted our exterior trim. Everything looks brand new, and they completed the job on time and on budget.",
      date: "5 months ago"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our painting services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              rating={testimonial.rating}
              text={testimonial.text}
              date={testimonial.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;