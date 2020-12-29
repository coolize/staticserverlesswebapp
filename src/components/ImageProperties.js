import React, { useState, useEffect} from 'react';

import "./ImageProperties.css"

const ImageProperties = props => {

    const [loadedImage, setLoadedImage] = useState({});
    const [loadedImageHeight, setLoadedImageHeight] = useState(0);  
    const [loadedImageWidth, setLoadedImageWidth] = useState(0);  

    const imgElement = React.useRef(null);

    const handleImgLoad = () => {
        setLoadedImage(imgElement.current);
        setLoadedImageHeight(imgElement.current.naturalHeight);
        setLoadedImageWidth(imgElement.current.naturalWidth);
        
    }

    return (
        <div className="imgbox">
          <img src={props.ImageURL}  ref={imgElement} onLoad={handleImgLoad} />
          <p>
            Height: <span className="summary__output">{loadedImageHeight}</span> pixel
          </p>
          <p>
            Width: <span className="summary__output">{loadedImageWidth}</span> pixel
          </p>
        </div>
      );
}

export default ImageProperties;