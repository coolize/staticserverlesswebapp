
import React, { useState, useEffect } from 'react';
// import API from "../helpers/api";


const ImageLoader = props => {
    return (
        <div className="imageloader">
            <form>
                <label>
                Image URL:
                <input type="text" value={props.selectedImageUrl} onChange={props.onImageLoad} />
                </label>
            </form>
        </div>
    );
}

export default ImageLoader;