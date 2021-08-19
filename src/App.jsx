import * as React from 'react';
import ScratchCard from 'react-scratchcard';

const IMAGES = [
  'card1.png',
  'card2.png',
  'card3.png',
  'card4.png',
  'card5.png',
  'final.png',
]


function App() {
  React.useState(() => {
    IMAGES.forEach((image) => {
      new Image().src = `/images/${image}`;
    });
  }, [])

  const [cardIndex, setcardIndex] = React.useState(0);

  const onComplete = React.useCallback(() => {
    let number = 0;
    setInterval(() => {
      if (number <= IMAGES.length - 1) {
        setcardIndex(number++)
      }
    }, 3000)
  }, [])

  const settings = React.useMemo(() => {
    return {
      width: 600,
      height: 325,
      image: 'images/cover.png',
      finishPercent: 40,
      onComplete,
    }
  }, [onComplete])

  return (
    <React.Fragment>
      <div className="container">
        <ScratchCard {...settings}>
          <div className="card" style={{ backgroundImage: `url("/images/${IMAGES[cardIndex]}")` }}>

          </div>
        </ScratchCard>
      </div>
    </React.Fragment>
  );
}

export default App;
