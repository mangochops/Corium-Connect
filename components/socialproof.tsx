import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper.min.css'; // Import Swiper styles
import 'swiper/modules/navigation/navigation.min.css'; // Import navigation styles if needed
import 'swiper/modules/pagination/pagination.min.css'; // Import pagination styles if needed
import Image from 'next/image';

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  // Add more reviews as needed
];

const ReviewCard = ({ img, name, username, body }: { img: string; name: string; username: string; body: string; }) => (
  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <Image className="rounded-full" width={50} height={50} alt={name} src={img} />
      <div className="ml-4">
        <p className="text-lg font-semibold text-gray-800 dark:text-white">{name}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{username}</p>
      </div>
    </div>
    <p className="text-gray-700 dark:text-gray-300">{body}</p>
  </div>
);

export function Carousel() {
  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">What Our Users Say</h2>
      <Swiper
        modules={[Navigation, Pagination]} // Specify modules used
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 1,
          },
        }}
        pagination={{ clickable: true }}
        navigation
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.username}>
            <ReviewCard {...review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
