import { Box, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
export function MoreProduct(props) {
  const [State, setState] = useState([])
  let data = props.data
  
let setID=props.setID
  useEffect(() => {
    fetch(`http://localhost:3001/products`).then((res) => {
      res.json().then((res) => {
        setState(res)
      })
    })
  }, [])
  State.length > 0 ? console.log(State, "moredata") : console.log("nodata here")
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div style={{ alignItems: 'center' }}>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        

      >
        {State.map((el) => {
          if (el.category == data.category) {
            return <Box key={el} onClick={()=>{
              console.log("hiiiiiiiiiiii")
              setID(el.id)}}>
              <Image m={'auto'} src={el.img.item1} alt='Dan Abramov' />
              <Text>{el.name}</Text>
              <Text>{el.price}</Text>
            </Box>
          }
        })}
      </Carousel>;
    </div>
  );
}
