import React from 'react'
import {StyledCarousel} from './StyledComponents'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from './CarouselItem';

const MyCarousel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    mobileFirst: true,
    responsive: [{
      breakpoint: 1536,
      settings: {
        slidesToShow: 4,
        infinite: true,
        autoplay: true,
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
        autoplay: true,
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        dots: false,
        arrows: false
      }
    }]
    



  };
  return (
    <div style={{padding: '20px 50px'}}>
    <StyledCarousel {...settings}>
      <CarouselItem shoeName="Air Force 1 '07" src='./e-commerce/>img/air-force-1.png' price="110" />
      <CarouselItem shoeName="Air Jordan 1 Low" src='./e-commerce/img/air-jordan-1.png' price="110" />
      <CarouselItem shoeName="Air Jordan 13 Retro " src='./e-commerce/img/air-jordan-13.png' price="200" />
      <CarouselItem shoeName="Air Max 1" src='./e-commerce/img/air-max-1-mens-slides.png' price="75" />
      <CarouselItem shoeName="Air Zoom Alphafly 2" src='./e-commerce/img/alphafly-2-racing-.png' price="275" />
      <CarouselItem shoeName="Blazer Mid 77" src='./e-commerce/img/blazer-mid-77.png' price="110" />
      <CarouselItem shoeName="Calm Slides" src='./e-commerce/img/calm-mens-slides.png' price="50" />
      <CarouselItem shoeName="Freak 4 'Greek Coastline'" src='./e-commerce/img/freak-4-greek-coastline.png' price="130" />
      <CarouselItem shoeName="Nike Go Flyease" src='./e-commerce/img/go-flyease.png' price="125" />
      <CarouselItem shoeName="Jordan Play" src='./e-commerce/img/jordan-play-mens-slides-.png' price="40" />
      <CarouselItem shoeName="LeBron XX" src='./e-commerce/img/lebron-xx.png' price="200" />
      <CarouselItem shoeName="Luka 1" src='./e-commerce/img/luka-1.png' price="110" />
      <CarouselItem shoeName="Nike Pegasus 40" src='./e-commerce/img/pegasus-40-mens-running.png' price="140" />
      <CarouselItem shoeName='Sabrina 1 "Spark"' src='./e-commerce/img/sabrina-1.png' price="130" />
      <CarouselItem shoeName="Nike Tempo" src='./e-commerce/img/tempo-mens-running.png' price="200" />
    </StyledCarousel>
    </div>
  )
}

export default MyCarousel