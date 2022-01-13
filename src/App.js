import { React, useState, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import Values from 'values.js';
import SingleColor from './SingleColor';
import ScrollBtn from './ScrollBtn';

const App = () => {
    const [error, setError] = useState(false);
    const [color, setColor] = useState('');
    const [weight, setWeight] = useState(10);
    const [colors, setColors] = useState(new Values('#ed213a').all(10));
    const inputDOM = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(false);
        try {
            const newColor = new Values(color);
            !weight ? setColors([newColor]) : setColors(newColor.all(weight));
        } catch (error) {
            console.log(error);
            setError(true);
            inputDOM.current.focus();
        }
    };

    return (
        <>
            <nav>
                <div className='navbar section-center'>
                    <h1>color generator</h1>
                    <a
                        href='https://github.com/DrazhinUstin/Color_Generator'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FaGithub className='icon' />
                    </a>
                </div>
            </nav>
            <div className='section-center'>
                <form className='search-form' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='#ed213a'
                        className={error ? 'error' : ''}
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        ref={inputDOM}
                    />
                    <select value={weight} onChange={(e) => setWeight(+e.target.value)}>
                        {[0, 1, 2, 4, 5, 10, 20, 25, 50, 100].map((item, index) => {
                            return (
                                <option key={index} value={item}>
                                    {!item ? 'w/o weight' : `${item}%`}
                                </option>
                            );
                        })}
                    </select>
                    <button type='submit'>go</button>
                </form>
                <div className='colors-wrapper'>
                    {colors.map((item, index) => {
                        return <SingleColor key={index} {...item} hex={item.hexString()} />;
                    })}
                </div>
            </div>
            <ScrollBtn />
        </>
    );
};

export default App;
