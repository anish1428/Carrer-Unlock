
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 95vw;
  margin: auto;
  overflow: hidden;
  height: 100%; /* Set a fixed height for the carousel */
`;

const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) => `translateX(-${props.currentSlide * 100}%)`};
  height: 100%;
`;

const CarouselItem = styled.div`
  min-width: 100%;
  box-sizing: border-box;
  height: 100%;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ensures the image covers the container */
  display: block;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 5;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;

const Carousel2 = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 10000); // Auto-slide every 10 seconds
    return () => clearInterval(slideInterval.current);
  }, []);

  const handleMouseEnter = () => {
    clearInterval(slideInterval.current);
  };

  const handleMouseLeave = () => {
    slideInterval.current = setInterval(nextSlide, 10000);
  };

  return (
    <CarouselContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <PrevButton onClick={prevSlide}>&#10094;</PrevButton>
      <NextButton onClick={nextSlide}>&#10095;</NextButton>
      <CarouselInner currentSlide={currentSlide}>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <CarouselImage src={slide.src} alt={slide.alt} />
          </CarouselItem>
        ))}
      </CarouselInner>
    </CarouselContainer>
  );
};

export default Carousel2;
