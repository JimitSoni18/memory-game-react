import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const imgArr = [
    {
      ind: 1,
      src: "images/1.jpeg",
      open: false,
    },
    {
      ind: 2,
      src: "images/2.jpeg",
      open: false,
    },
    {
      ind: 3,
      src: "images/3.jpeg",
      open: false,
    },
    {
      ind: 4,
      src: "images/4.jpeg",
      open: false,
    },
    {
      ind: 5,
      src: "images/5.jpeg",
      open: false,
    },
    {
      ind: 6,
      src: "images/6.jpeg",
      open: false,
    },
    {
      ind: 7,
      src: "images/7.jpeg",
      open: false,
    },
    {
      ind: 8,
      src: "images/8.jpeg",
      open: false,
    },
    {
      ind: 11,
      src: "images/1.jpeg",
      open: false,
    },
    {
      ind: 21,
      src: "images/2.jpeg",
      open: false,
    },
    {
      ind: 31,
      src: "images/3.jpeg",
      open: false,
    },
    {
      ind: 41,
      src: "images/4.jpeg",
      open: false,
    },
    {
      ind: 51,
      src: "images/5.jpeg",
      open: false,
    },
    {
      ind: 61,
      src: "images/6.jpeg",
      open: false,
    },
    {
      ind: 71,
      src: "images/7.jpeg",
      open: false,
    },
    {
      ind: 81,
      src: "images/8.jpeg",
      open: false,
    },
  ];

  useEffect(() => {
    shuffle(imgArr);
  }, []);

  const [arr, setArr] = useState([]);

  const [openImage, setOpenImage] = useState([]);

  function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    setArr(array);
  }


  function handleClick(item) {
    if (openImage.length!==2) {
      setOpenImage([...openImage, item]);
      let result = arr.map((e) => {
        return e.ind===item.ind ? {...e, open: true} : {...e};
      })
      setArr(result);
    }
  }

  useEffect(() => {
    if (openImage.length <= 2) {
      if (openImage.length===2) {
        console.log('length === 2')
        if (openImage[0]['src'] === openImage[1]['src']) {
          console.log("same src");
          setOpenImage([]);
        } else {
          setTimeout(() => {
            console.log("src not same");
            let result = arr.map((e) => {
              if (e.ind===openImage[0]['ind'] || e.ind===openImage[1]['ind']) {
                return {...e, open: false}
              }
              return {...e}
            })
            setOpenImage([]);
            setArr(result);}, 1000)
        }
      } else if (openImage.length===0) {
        console.log("length === 0");
      }
    }
  }, [openImage])

  return (
    <div className="App">
      <div className="box-card">
        {arr &&
          arr.map((item) => {
            return (
              <div className="flip-card" key={item.ind} >
                <div
                  className={`flip-card-inner ${item.open ? "is-Flipped" : ""}`}
                  onClick={() => handleClick(item)}
                >
                  <div className="flip-card-front">
                    <img src={item.src} />
                  </div>
                  <div className="flip-card-back"></div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
