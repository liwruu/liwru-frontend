import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BackIcon from '../../assets/icons/BackIcon';
import ForwardIcon from '../../assets/icons/ForwardIcon';
import './Slider.css';

export default function Slider({ images = [], items = [] }) {
    const slides = items.length > 0 ? items : images.map((image, index) => ({ image, id: index }));
    const [activeIndex, setActiveIndex] = useState(0);

    function handleBack() {
        setActiveIndex(prevIndex => (prevIndex === 0) ? slides.length - 1 : prevIndex - 1);
    }

    function handleForward() {
        setActiveIndex(prevIndex => (prevIndex === slides.length - 1) ? 0 : prevIndex + 1);
    }

    useEffect(() => {
        const interval = setInterval(handleForward, 6000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className='slider'>
            {slides.map((slide, index) => (
                <Link to={`/details/${slide.id}`} key={index} className={index === activeIndex ? 'slider__slide slider__slide--active' : 'slider__slide'}>
                    <img className='slider__slide__image' src={slide.image} alt={slide.title || `Slide ${index}`} />
                </Link>
            ))}

            <button
                className='slider__button slider__button--back'
                onClick={handleBack}
            >
                <div className='slider__button__gradient slider__button__gradient--left' />
                <BackIcon className='slider__button__icon' />
            </button>

            <button
                className='slider__button slider__button--forward'
                onClick={handleForward}
            >
                <div className='slider__button__gradient slider__button__gradient--right' />
                <ForwardIcon className='slider__button__icon' />
            </button>
        </div>
    );
}