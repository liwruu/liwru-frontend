import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchResult from '../SearchResult';
import detail from '../../../assets/data/detail';
import './SearchPage.css';

export default function SearchPage() {
    const [data, setData] = useState(detail[1]);
    const [filteredData, setFilteredData] = useState(detail[1]);
    const [filter, setFilter] = useState('');
    const params = useParams();

    const filters = ['Clásicos de la Literatura', 'Más Solicitados'];

    useEffect(() => {
        if (filter) {
            const filteredResults = data.filter(call => 
                call.type === filter && call.title.toLowerCase().includes(params.searchQuery.toLowerCase())
            );
            setFilteredData(filteredResults);
        } else {
            const filteredResults = data.filter(call => 
                call.title.toLowerCase().includes(params.searchQuery.toLowerCase())
            );
            setFilteredData(filteredResults);
        }
    }, [filter, params.searchQuery, data]);

    useEffect(() => {
        setFilteredData(data.filter(call =>
            call.title.toLowerCase().includes(params.searchQuery.toLowerCase())
        ));
    }, [params.searchQuery, data]);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const results = filteredData.map(call => (
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
            <div className='filter-buttons'>
                {filters.map((filterType, index) => (
                    <button
                        key={index}
                        onClick={() => handleFilterChange(filterType)}
                        className={filter === filterType ? 'active' : ''}
                    >
                        {filterType}
                    </button>
                ))}
                <button
                    onClick={() => handleFilterChange('')}
                    className={filter === '' ? 'active' : ''}
                >
                    Todos
                </button>
            </div>
            <section className='search-page__results'>
                {results}
            </section>
        </div>
    );
}