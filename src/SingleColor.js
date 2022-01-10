import React from 'react';
import invert from 'invert-color';

const SingleColor = ({ rgb, hex, weight }) => {
    return (
        <article style={{ backgroundColor: hex, color: invert(rgb, true) }}>
            <p>{weight}%</p>
            <p>{hex}</p>
        </article>
    );
};

export default SingleColor;
