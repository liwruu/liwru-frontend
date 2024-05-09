import {useState} from 'react';
import {useParams} from 'react-router-dom';
import callsData from '../../assets/data/callsData';
import './CallPage.css';

export default function CallPage() {
    const [data, setData] = useState(callsData[1]);
    const params = useParams();
    const {category, title, description, deadline, available, image} = data.find(call => call.id == params.callId);

    return (
        <div className='call-page'>
            <div className={available ?
                'call-page__call' :
                'call-page__call call-page__call--state-unavailable'
            }>
                <img className='call-page__call__image' src={image} />
                <p className='call-page__call__category'>{category.toUpperCase()}</p>
                <h3 className='call-page__call__title'>{title.toUpperCase()}</h3>
                <p className='call-page__call__description'>{description}</p>
                <p className='call-page__call__deadline'>FECHA DE CIERRE: {deadline.toUpperCase()}</p>
            </div>
        </div>
    );
}