import { Link } from 'react-router-dom';

export default function TypeCall(props) {
    const { id, image, title } = props.data; 

    return (
        <Link className='type-call' to={`/details/${id}`}>
            <div className='type-call__container'>
                <div className='type-call__container__card'>
                    <div className='type-call__container__card__left'>
                        <img className='type-call__container__card__left__image' src={image} alt={title} />
                    </div>
                </div>
            </div>
        </Link>
    );
}