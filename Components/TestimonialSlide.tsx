import React from 'react'
import ClientReview from './ClientReview';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const TestimonialSlide = () => {
  return (
    <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass='item'
        >
        <ClientReview image="/images/c1.jpg" name="Duy Phuong" role="Web Developer"/>
        <ClientReview image="/images/c2.jpg" name="Phuong Duy" role="MERN Stack Developer"/>
        <ClientReview image="/images/c1.jpg" name="Duy" role="Reactjs Developer"/>
        <ClientReview image="/images/c2.jpg" name="Phuong" role="Nextjs Developer"/>
    </Carousel>
  )
}

export default TestimonialSlide