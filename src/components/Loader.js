import React from 'react';

//Gif
import Styles from "./Loader.module.css"

const Loader = () => {
    return (
        <div className={Styles.container}>
            <div class={Styles.loader}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

        </div>
    );
};

export default Loader;