import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechFlow",
    avatar: "https://i.pravatar.cc/96?img=12",
    quote: "Chirp transformed how our team collaborates. The interface is intuitive and the performance is outstanding. We shipped our product 2 weeks ahead of schedule.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CTO",
    company: "StartupXYZ",
    avatar: "https://i.pravatar.cc/96?img=8",
    quote: "The developer experience is incredible. Clean APIs, great documentation, and stellar support. Our engineering team adopted it in just one day.",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Kowalski",
    role: "Design Lead",
    company: "Creative Co.",
    avatar: "https://i.pravatar.cc/96?img=15",
    quote: "Beautiful design meets powerful functionality. Chirp fits perfectly into our workflow and our users love the seamless experience.",
    rating: 5
  }
];

export default function ResponsiveTestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  const totalSlides = testimonials.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches.clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="mx-auto max-w-4xl px-4 py-8">
      <div 
        className="relative"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div 
          className="overflow-hidden rounded-2xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0">
                <article className="mx-auto max-w-2xl rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover" 
                    />
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-neutral-900">{testimonial.name}</h3>
                      <p className="text-sm text-neutral-500">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <blockquote className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-800">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-4 sm:mt-6 flex items-center gap-1">
                    <span className="text-amber-500">★★★★★</span>
                    <span className="ml-2 text-sm text-neutral-500">{testimonial.rating}.0</span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation - hidden on mobile */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 hidden sm:flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 hidden sm:flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-6 sm:w-8 rounded-full transition-colors ${
              index === currentSlide 
                ? 'bg-sky-600' 
                : 'bg-neutral-300 hover:bg-neutral-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
