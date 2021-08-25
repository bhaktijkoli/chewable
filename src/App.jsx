import * as React from 'react';
import ScratchCard from 'react-scratchcard';
import Slider from "react-slick";

const sliderOptions = {
  autoplay: false,
  dots: false,
  arrows: false,
  fade: true,
  infinite: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  speed: 1500,
  autoplaySpeed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'card-slider'
};


const IMAGES = [
  'card1.png',
  'card2.png',
  'card3.png',
  'card4.png',
  'card5.png',
  'final.jpg',
]


function App() {
  const sliderRef = React.useRef(null);
  const settings = React.useMemo(() => {
    return {
      width: 800,
      height: 450,
      image: 'images/cover.png',
      finishPercent: 40,
      onComplete: () => {
        sliderRef.current.slickPlay()
      },
    }
  }, [])

  return (
    <React.Fragment>
      <div className="container">
        <h1 style={{ marginBottom: 0 }}>Hello Doctor</h1>
        <p style={{ marginBottom: 0 }}>An easy & tasty way to up your calcium requirement</p>
        <p style={{ marginBottom: 5 }}>Scratch to Discover</p>
        <ScratchCard {...settings}>
          <Slider {...sliderOptions} ref={sliderRef}>
            {
              IMAGES.map((image, key) => {
                return (
                  <div className="card" key={key}>
                    <img src={`/images/${image}`} alt="Card" />
                  </div>
                )
              })
            }
          </Slider>
        </ScratchCard>
      </div>
    </React.Fragment>
  );
}

export default App;
