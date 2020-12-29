import React, {useState, useEffect} from 'react';
import API from '../helpers/api'
import "./TransformControl.css";


const TransformControl = props => {

    const [transformImage, setTransformImage] = useState("");
    const [cropImage, setCropImage] = useState(false);
    const [imageFormat, setImageFormat] = useState("webp");
    const [imageQuality, setimageQuality] = useState("80");
    const [cropGravity, setCropGravity] = useState("center");
    const [imageHeight, setImageHeight] = useState(200);
    const [imageWidth, setImageWidth] = useState(200);
    
    const formats = ["webp", "png", "jpeg"];
    const gravities = ["center", "north", "northeast", "east", "southeast", "south", "southwest", "west", "northwest"];
    const qualities = ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"];

    useEffect(() => {
        setTransformImage('')
        let url = "/sharp/resize/" + imageHeight
       
        if (cropImage) {
            if (imageWidth !== "") {
                url = url + "/" + imageWidth
            }
        }

        url = url + "?url=" + props.ImageURL
        url = url + "&format=" + imageFormat
        url = url + "&quality=" + imageQuality

        if (cropImage) {
            url = url + "&crop=" + cropImage
            url = url + "&gravity=" + cropGravity
        }

        API.get(url, {
            responseType: 'arraybuffer' 
        }).then(res => {
            let image = btoa(
                new Uint8Array(res.data)
                  .reduce((data, byte) => data + String.fromCharCode(byte), '')
              );
            const src = 'data:' + res.headers['content-type'].toLowerCase() + ";base64," + image
            setTransformImage(src)
        })
    }, [props.ImageURL, cropImage, imageFormat, cropGravity, imageQuality, imageHeight, imageWidth]);


    const handleCropImage = event => {
        setCropImage(event.target.checked)
    }

    const handleImageFormat = event => {
        setImageFormat(event.target.value)
    }

    const handleCropImageGravity = event => {
        setCropGravity(event.target.value)
    }

    const handleImageQuality = event => {
        setimageQuality(event.target.value)
    }

    const handleImageHeight = event => {
        setImageHeight(event.target.value)
    }

    const handleImageWidth = event => {
        setImageWidth(event.target.value)
    }

    return (
        <div className="transform">
            <h1>Transform</h1>
            <p>
                Height:
                <input defaultValue="200" onChange={handleImageHeight} />
            </p>
            
            <p>
                Format:
                <select onChange={handleImageFormat} >
                    {formats.map(format => (
                        <option>
                            {format}
                        </option>
                        ))}
                </select>
            </p>
            <p>
                Quality:
                <select onChange={handleImageQuality} defaultValue="80" >
                    {qualities.map(quality => (
                        <option>
                            {quality}
                        </option>
                        ))}
                </select>
            </p>
            <p>
                Crop?
                <input type="checkbox" onChange={handleCropImage} />
            </p>
            <p>
                Crop Width:
                <input defaultValue="200" onChange={handleImageWidth} />
            </p>
            <p>
                Gravity:
                <select onChange={handleCropImageGravity}>
                    {gravities.map(gravity => (
                        <option>
                            {gravity}
                        </option>
                        ))}
                </select>
            </p>
            <p>
            <img src={transformImage}></img>
            </p>
        </div>
    );
}

export default TransformControl;