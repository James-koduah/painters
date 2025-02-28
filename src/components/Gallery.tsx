import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Beautiful deck space",
      category: "Exterior",
      imageUrl: "https://lh3.googleusercontent.com/p/AF1QipPkAmIXluhbVmdvH4MasNHsvHWeMwWdFugpBqmz=s2732-w2732-h1302-rw"
    },
    {
      id: 2,
      title: "Contemporary Home Exterior",
      category: "Exterior",
      imageUrl: "https://lh3.googleusercontent.com/p/AF1QipO1K3cwx_5jCYDaTp-dPCfr7lsRrneK-QyWGdPT=s2732-w2732-h1302-rw"
    },
    {
      id: 3,
      title: "Kitchen Cabinet Refinishing",
      category: "Cabinets",
      imageUrl: "https://lh3.googleusercontent.com/p/AF1QipPQOqQ4QeiGdnVpbGdMZJCLVa28IchrTl6B10yB=s2732-w2732-h1302-rw"
    },
    {
      id: 4,
      title: "Office Space Renovation",
      category: "Commercial",
      imageUrl: "https://lh3.googleusercontent.com/p/AF1QipOee1Hw0xnltbD2-7F64iTZ4suEi9o9RrScmagB=s2732-w2732-h1302-rw"
    },
    {
      id: 5,
      title: "Bedroom Transformation",
      category: "Interior",
      imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Home Exterior",
      category: "Exterior",
      imageUrl: "https://lh3.googleusercontent.com/p/AF1QipM5CIh-ea7nA2VAf-GxWDvi_YkI468Lg5XnY_fu=s2732-w2732-h1302-rw"
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Recent Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse through our portfolio of completed projects to see the quality of our work and get inspiration for your own space.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => setSelectedImage(project)}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-200">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="h-8 w-8" />
            </button>
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.title} 
              className="w-full rounded-lg"
            />
            <div className="bg-white p-4 rounded-b-lg">
              <h3 className="text-xl font-semibold text-gray-900">{selectedImage.title}</h3>
              <p className="text-gray-600">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;