import React, {useState} from 'react';
import ImageLoader from "./components/ImageLoader";
import ImageProperties from "./components/ImageProperties";
import TransformControl from "./components/TransformControl";

import "./MainApp.css";

const MainApp = props => {

  const [imageUrl, setImageUrl] = useState("https://i.imgur.com/3a0qwRe.jpeg");

  const imageLoadHandler = event => {

    setImageUrl(event.target.value)
  };

  return (
    <React.Fragment>
      <ImageLoader selectedImageUrl={imageUrl} onImageLoad={imageLoadHandler} />
      <div className='rowC'>
        <ImageProperties ImageURL={imageUrl} />
        <TransformControl ImageURL={imageUrl} />
      </div>
    </React.Fragment>
  );
};
  
export default MainApp;
