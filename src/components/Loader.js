import React from 'react';

//Gif
import Spinner from "../gif/spinner.gif"

const Loader = () => {
    return (
        <div>
            <img src={Spinner} alt="Loading" />
            <h2>Loading . . .</h2>
        </div>
    );
};

export default Loader;