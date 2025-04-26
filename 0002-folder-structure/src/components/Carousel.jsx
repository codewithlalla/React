import React from 'react'

const Carousel = ({data=[]}) => {
  return (
    <div className="carousel w-full">
      {data.map((item,index,array) => (
        <div id={`slide${index+1}`} className="carousel-item relative w-full">
          <img
            src={item.img}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href={`#slide${index==0?array.length:index}`} className="btn btn-circle">
              ❮
            </a>
            <a href={`#slide${index+1==array.length?+1:index+2}`} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Carousel