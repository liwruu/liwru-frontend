import { useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchResult from '../SearchResult';
import detail from '../../../assets/data/detail';
import './SearchPage.css';

export default function SearchPage() {
    const [data, setData] = useState(detail[1]);
    const params = useParams();

    const filteredResults = data.filter(call => 
        call.title.toLowerCase().includes(params.searchQuery.toLowerCase())
    );

    const results = filteredResults.map(call => (
        <SearchResult
            key={call.id}
            data={call}
        />
    ));

    return (
        <div className='search-page'>
            <p className='search-page__search-query'>
                Mostrando {results.length} resultados para "{params.searchQuery}"
            </p>
            <section className='search-page__results'>
                {results}
            </section>
        </div>
    );
}