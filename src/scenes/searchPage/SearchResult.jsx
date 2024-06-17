import { Link } from 'react-router-dom';

export default function SearchResult(props) {
    const { id, category, title, description, available, image } = props.data;

    return (
        <Link className='search-result' to={`/details/${id}`}>
            <div className='search-result__container'>
                <div className={available ?
                    'search-result__container__card' :
                    'search-result__container__card search-result__container__card--state-unavailable'
                }>
                    <div className='search-result__container__card__left'>
                        <img className='search-result__container__card__left__image' src={image} alt={title} />
                        <p className='search-result__container__card__left__category'>{category.toUpperCase()}</p>
                    </div>
                    <div className='search-result__container__card__right'>
                        <h3 className='search-result__container__card__right__title'>{title.toUpperCase()}</h3>
                        <p className='search-result__container__card__right__description'>{description}</p>
                        <p className='search-result__container__card__right__availability'>{available ? 'Disponible' : 'No Disponible'}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}