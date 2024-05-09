import {useState} from 'react';
import {useParams} from 'react-router-dom';
import SearchResult from '../SearchResult';
import callsData from '../../../assets/data/callsData';
import './SearchPage.css';

export default function SearchPage() {
    const [data, setData] = useState(callsData[1]);
    const params = useParams();

    const results = data.map(call => (
        <SearchResult
            key={call.id}
            data={call}
        />
    ));

    return (
        <div className='search-page'>
            <p className='search-page__search-query'>
                Mostrando {results.length} resultados para {params.searchQuery}
            </p>
            <section className='search-page__results'>
                {results}
            </section>
        </div>
    );
}