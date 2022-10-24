import React from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1509420316987-d27b02f81864?dpr=1&auto=format&fit=crop&w=1500&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    width: 450,
    height: 500,
  },
  {
    src: "https://images.unsplash.com/photo-1509641498745-13c26fd1ed89?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    width: 450,
    height: 500,
  },
  {
    src: "https://images.unsplash.com/photo-1491146179969-d674118945ff?dpr=1&auto=format&fit=crop&w=1500&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    width: 450,
    height: 500,
  },
  {
    src: "https://images.unsplash.com/photo-1509420316987-d27b02f81864?dpr=1&auto=format&fit=crop&w=1500&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    width: 450,
    height: 500,
  },
  {
    src: "https://images.unsplash.com/photo-1509641498745-13c26fd1ed89?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    width: 450,
    height: 500,
  },
];
const ImageGridDemo = () => {
  return (
    <div>
      <h1>ImageGridDemo</h1>
      <br/>
      <hr/>
      <div id="img-wrapper">
        {images.map((image,index) => {
          return (
            <div key={index}>
              <img
                src={image.src}
                height='200px'
                width='300px'
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGridDemo;