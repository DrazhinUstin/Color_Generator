import { React, useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollBtn = () => {
    const [showBtn, setShowBtn] = useState(false);

    const checkScroll = () => {
        const windowHeight = document.documentElement.clientHeight;
        window.pageYOffset > windowHeight ? setShowBtn(true) : setShowBtn(false);
    };

    useEffect(() => window.addEventListener('scroll', checkScroll), []);

    return (
        <button
            className={`scroll-top-btn ${showBtn && 'show'}`}
            onClick={() => window.scrollTo(0, 0)}
        >
            <FaArrowUp />
        </button>
    );
};

export default ScrollBtn;
