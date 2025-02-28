import React from 'react';
import './Testimonials.css';
import Image3 from '../../assets/avatar-3.svg'
import Image4 from '../../assets/avatar-4.svg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

	const data = [
		{
			id: 1,
			image: Image4,
			title: "Mrs. Ashwani Bhudke",
			subtitle: "Design Head @ Adore Global",
			comment: "Greg worked at Entrostat as a full-stack developer. He was excellent and had a real eye for design. If there was ever a time where we had a complicated frontend or needed to know what the best CSS approach was for something - Greg was our goto man!",
		},
		{
			id: 2,
			image: Image3,
			title: "Mr. Wasif",
			subtitle: "Team Lead @ Adore Global",
			comment: "I had the pleasure of working with Chirayu during his internship, and I was thoroughly impressed with his creativity, professionalism, and design skills. His ability to think outside the box and translate concepts into visually stunning graphics truly elevated the projects we worked on. Chirayu met deadlines, communicated effectively, and brought fresh ideas to the table. He was a valuable asset to the team, and his contributions made a lasting impact on the final designs. I have no doubt that Chriayu will continue to excel and make a positive impact in any creative endeavor they pursue.",
		},
		{
			id: 3,
			image: Image3,
			title: "Mr. Byts",
			subtitle: "Team Lead @ EazyByts Infotech",
			comment: "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
		},
	];

	return (
		<section className="testimonials container section">

			<h2 className="section__title">Testimonials</h2>

			<Swiper className="testimonial__container grid"
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}>
				{data.map(({ id, image, title, subtitle, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} alt="" />
							</div>
							<h3 className="testimonial__title">{title}</h3>
							<span className="subtitle">{subtitle}</span>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials