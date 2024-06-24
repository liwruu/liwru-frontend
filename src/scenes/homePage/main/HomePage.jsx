import { useState, useEffect } from 'react';
import axiosInstance from '../../../api/axios';
import Slider from '../../../components/Slider/Slider';
import Type from '../Type';
import callsData from '../../../assets/data/callsData';
import image_1 from '../../../assets/images/slider/image_1.jpg';
import image_2 from '../../../assets/images/slider/image_2.jpg';
import image_3 from '../../../assets/images/slider/image_3.jpg';
import './HomePage.css';

export default function HomePage() {
    const [user, setUser] = useState(null);
    const [Data, setData] = useState(callsData);
    const images = [image_1, image_2, image_3];

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axiosInstance.get('/user'). then(response => {
                // Manejar los datos de respuesta
                const userData = response.data;
                console.log(userData);
            })} catch (error) {
                // Manejar errores
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchUser();
    }, []);

    const types = Data[0].map(type => (
        <Type
            key={type}
            title={type}
            calls={Data[1].filter(call => call.type === type)}
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
