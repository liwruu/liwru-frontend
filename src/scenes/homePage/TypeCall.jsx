import { Link } from 'react-router-dom';

export default function TypeCall(props) {
    const { id, image, title } = props.data; // Necesitamos el ID, la imagen y el título

    return (
        <Link className='type-call' to={`/callPage/${id}`}>
            <div className='type-call__container'>
                <div className='type-call__container__card'>
                    <div className='type-call__container__card__left'>
                        <img className='type-call__container__card__left__image' src={image} alt='' />
                        <h3 className='type-call__container__card__title'>{title}</h3> {/* Agregamos el título aquí */}
                    </div>
                </div>
            </div>
        </Link>
    );
}