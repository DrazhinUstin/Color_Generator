import { React, useState, useEffect } from 'react';
import invert from 'invert-color';

const SingleColor = ({ rgb, hex, weight }) => {
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        let timerID = setTimeout(() => setAlert(false), 3000);
        return () => clearTimeout(timerID);
    }, [alert]);

    const clickHandler = () => {
        navigator.clipboard.writeText(hex);
        setAlert(true);
    };

    return (
        <article style={{ backgroundColor: hex, color: invert(rgb, true) }} onClick={clickHandler}>
            <p>{weight}%</p>
            <p>{hex}</p>
            <p className={`copy ${alert && 'show'}`}>copied!</p>
        </article>
    );
};

export default SingleColor;
