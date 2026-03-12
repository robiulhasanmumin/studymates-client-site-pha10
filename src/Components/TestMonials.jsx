import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Anika Rahman",
      role: "Web Dev Student",
      img: "https://i.pravatar.cc/150?u=1",
      review: "I found an amazing coding partner through Study Mate. Our project productivity has increased significantly, and we learn much faster together!"
    },
    {
      id: 2,
      name: "Sajid Hasan",
      role: "Mathematics Major",
      img: "https://i.pravatar.cc/150?u=2",
      review: "The best platform to find study buddies for complex subjects. Solving calculus problems has never been this much fun and easy!"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Data Science Aspirant",
      img: "https://i.pravatar.cc/150?u=5",
      review: "Finally, a place where I can find like-minded people to practice machine learning algorithms. Highly recommended for serious learners."
    },
    {
      id: 4,
      name: "Rahat Kabir",
      role: "IELTS Candidate",
      img: "https://i.pravatar.cc/150?u=8",
      review: "Finding a speaking partner for IELTS was a challenge until I joined Study Mate. It's a game-changer for language learners!"
    }
  ];

  return (
    <section className="py-24 bg-base-200/50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            User <span className="text-[#4F959D]">Feedback</span>
          </h2>
          <p className="opacity-70 max-w-xl mx-auto">
            Discover how Study Mate is helping students worldwide to collaborate and achieve their academic goals.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper !pb-14"
        >
          {reviews.map((r) => (
            <SwiperSlide key={r.id}>
              <div className="bg-base-100 p-10 rounded-[2rem] shadow-sm border border-base-200 relative group h-full flex flex-col justify-between transition-all hover:shadow-xl">
                <FaQuoteLeft className="absolute top-8 right-8 text-5xl text-[#4F959D]/10 group-hover:text-[#4F959D]/20 transition-colors" />
                
                <div>
                  <div className="flex gap-1 text-amber-500 mb-6">
                    {[...Array(5)].map((_, i) => <FaStar key={i} size={14} />)}
                  </div>
                  <p className="text-lg leading-relaxed opacity-80 mb-8 italic">
                    "{r.review}"
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-base-200 pt-6">
                  <div className="avatar">
                    <div className="w-14 h-14 rounded-full ring ring-[#4F959D] ring-offset-base-100 ring-offset-2">
                      <img src={r.img} alt={r.name} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">{r.name}</h4>
                    <p className="text-sm opacity-60 font-medium">{r.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Global Styles for Swiper Pagination */}
      <style jsx="true">{`
        .swiper-pagination-bullet-active {
          background-color: #4F959D !important;
          width: 25px !important;
          border-radius: 5px !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;