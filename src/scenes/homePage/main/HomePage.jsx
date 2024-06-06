import {useState} from 'react';
import Slider from '../../../components/Slider/Slider';
import Type from '../Type';
import callsData from '../../../assets/data/callsData';
import image_1 from '../../../assets/images/slider/image_1.jpg';
import image_2 from '../../../assets/images/slider/image_2.jpg';
import image_3 from '../../../assets/images/slider/image_3.jpg';
import './HomePage.css';
import SomeComponent from '../../../components/SomeComponent/SomeComponent';

export default function HomePage() {
    const [data, setData] = useState(callsData);
    const images = [image_1, image_2, image_3];

    const types = data[0].map(type => (
        <Type
            key={type}
            title={type}
            calls={data[1].filter(call => call.type === type)}
        />
    ));

    return (
        <main className='home-page'>
            <Slider images={images} />
            <section className='home-page__types'>
                {types}
            </section>
        </main>
    );
}