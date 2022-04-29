import React from 'react';

//Styles
import Styles from "./Coin.module.css"

const Coin = ({name, image, symbol, price, marketCap, priceChange}) => {

    return (
        <div className={Styles.container}>
            <div className={Styles.deviceMobail}>
                <img  className={Styles.image} src={image} alt={name} /> 
                <div>
                    <span className={Styles.name}>{name}</span>
                    <span className={Styles.symbol}>{symbol.toUpperCase()}</span>
                </div>
            </div>
            <span className={Styles.currentPrice}>$ {price.toLocaleString()}</span>
            <span className={priceChange > 0 ? Styles.greenPriceChange : Styles.redPriceChange}>{priceChange.toFixed(2)}%</span>
            <span className={Styles.marketCap}>$ {marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;