import {useState, useEffect} from 'react';

const Carousel = ({usersImg}) => {
  const [image, setImage] = useState(0);
  if(image === usersImg.length) setImage(0);

  useEffect(() => {
    setTimeout(() => { 
      setImage(image + 1);
    }, 3000);
  }, [image])

  return (
    <div className="Carousel">
      <img src={usersImg[image]} alt="userAvatar" width="200px" />
      <span style={{display: 'block', marginLeft: "70px"}}>Image {image+1}</span>
    </div>
  );
};

export default Carousel;
