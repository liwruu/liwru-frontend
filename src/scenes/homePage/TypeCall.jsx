import {Link} from 'react-router-dom';

export default function TypeCall(props) {
    const {id, category, title, description, deadline, available, image} = props.data;

    return (
        <Link className='type-call' to={`/callPage/${id}`}>
            <div className='type-call__container'>
                <div className={available ?
                    'type-call__container__card' :
                    'type-call__container__card type-call__container__card--state-unavailable'
                }>
                    <div className='type-call__container__card__left'>
                        <img className='type-call__container__card__left__image' src={image} />
                        <p className='type-call__container__card__left__category'>{category.toUpperCase()}</p>
                    </div>
                    <div className='type-call__container__card__right'>
                        <h3 className='type-call__container__card__right__title'>{title.toUpperCase()}</h3>
                        <p className='type-call__container__card__right__description'>{description}</p>
                        <p className='type-call__container__card__right__deadline'>FECHA DE CIERRE: {deadline.toUpperCase()}</p>
                    </div>
                </div>
                {!available && <div className='type-call__container__tag'>Cerrada</div>}
            </div>
        </Link>
    );
}