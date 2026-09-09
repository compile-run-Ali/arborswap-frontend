import React from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import SlideContent from './SlideContent'
import './slider.css';

const slideImagesMobile = [
  'images/home/imgnew/slider/banner1.jpeg',
  'images/home/imgnew//slider/banner2.jpeg',
  'images/home/imgnew//slider/banner3.jpeg',
  'images/home/imgnew//slider/banner1.jpeg',
  'images/home/imgnew//slider/banner2.jpeg',
  'images/home/imgnew//slider/banner3.jpeg',
  'images/home/imgnew//slider/banner1.jpeg',
  'images/home/imgnew//slider/banner2.jpeg',
  'images/home/imgnew//slider/banner3.jpeg',
]

const slideImages = [
  {
    img1: 'images/home/imgnew//slider/banner1.jpeg',
    img2: 'images/home/imgnew//slider/banner2.jpeg',
    img3: 'images/home/imgnew//slider/banner3.jpeg',
  },
  {
    img1: 'images/home/imgnew//slider/banner1.jpeg',
    img2: 'images/home/imgnew//slider/banner2.jpeg',
    img3: 'images/home/imgnew//slider/banner3.jpeg',
  },
  {
    img1: 'images/home/imgnew//slider/banner1.jpeg',
    img2: 'images/home/imgnew//slider/banner2.jpeg',
    img3: 'images/home/imgnew//slider/banner3.jpeg',
  },
]

export default function Carousel({ mobileView='' }) {
  if (mobileView) {
    return (
      <CarouselProvider
        naturalSlideWidth={70}
        naturalSlideHeight={200}
        totalSlides={3}
        isPlaying
        interval={3000}
        visibleSlides={1.3}
      >
        <Slider >
          {slideImagesMobile.map((slide, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Slide key={index} index={index}>
              <SlideContent img1={slide} />
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    )
  }

  return (
    
    <CarouselProvider naturalSlideWidth={70} naturalSlideHeight={15} totalSlides={3} isPlaying interval={3000}>
      <Slider className='Slider' >
        {slideImages.map((slide, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Slide key={index} index={index}>
            <SlideContent img1={slide.img1} img2={slide.img2} img3={slide.img3} />
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
    
  )
}
