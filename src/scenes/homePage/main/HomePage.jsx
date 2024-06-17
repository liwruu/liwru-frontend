import { useState } from 'react';
import Slider from '../../../components/Slider/Slider';
import Type from '../Type';
import detail from '../../../assets/data/detail'; 
import image_1 from '../../../assets/images/slider/image_1.jpg';
import image_2 from '../../../assets/images/slider/image_2.jpg';
import image_3 from '../../../assets/images/slider/image_3.jpg';
import './HomePage.css';

export default function HomePage() {
    const [data, setData] = useState(detail); 
    const staticImages = [image_1, image_2, image_3];
    const bookItems = data[1];

    const types = data[0].map(type => (
        <Type
            key={type}
            title={type}
            calls={data[1].filter(call => call.type === type)}
        />
    ));

    return (
        <main className='home-page'>
            <Slider images={staticImages} />
            <section className='home-page__types'>
                {types}
            </section>
        </main>
    );
}