import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchResult from '../SearchResult';
import detail from '../../../assets/data/detail';
import './SearchPage.css';

export default function SearchPage() {
    const [data, setData] = useState(detail[1]);
    const [filteredData, setFilteredData] = useState(detail[1]);
    const [filter, setFilter] = useState('');
    const [availabilityFilter, setAvailabilityFilter] = useState('');
    const [fromYear, setFromYear] = useState('');
    const [toYear, setToYear] = useState('');
    const params = useParams();

    const filters = detail[0];  
    const availabilityFilters = ['Available', 'Unavailable'];

    useEffect(() => {
        let filteredResults = data;

        if (filter) {
            filteredResults = filteredResults.filter(call => call.type === filter);
        }

        if (availabilityFilter) {
            const availableStatus = availabilityFilter === 'Available';
            filteredResults = filteredResults.filter(call => call.available === availableStatus);
        }

        filteredResults = filteredResults.filter(call =>
            call.title.toLowerCase().includes(params.searchQuery.toLowerCase())
        );

        if (fromYear && toYear) {
            const from = parseInt(fromYear);
            const to = parseInt(toYear);
            filteredResults = filteredResults.filter(call => {
                const bookYear = new Date().getFullYear(); 
                return bookYear >= from && bookYear <= to;
            });
        }

        setFilteredData(filteredResults);
    }, [filter, availabilityFilter, params.searchQuery, fromYear, toYear, data]);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const handleAvailabilityFilterChange = (newFilter) => {
        setAvailabilityFilter(newFilter);
    };

    const handleFromYearChange = (event) => {
        const value = event.target.value;
        if (value.length <= 4) {
            setFromYear(value);
        }
    };

    const handleToYearChange = (event) => {
        const value = event.target.value;
        if (value.length <= 4) {
            setToYear(value);
        }
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
                Showing {results.length} results for "{params.searchQuery}"
            </p>
            <div className='filter-buttons'>
                <div className='filter-buttons-left'>
                    <button
                        onClick={() => {
                            handleFilterChange('');
                            handleAvailabilityFilterChange('');
                            setFromYear('');
                            setToYear('');
                        }}
                        className={filter === '' && availabilityFilter === '' && fromYear === '' && toYear === '' ? 'active' : ''}
                    >
                        All
                    </button>
                    {filters.map((filt, index) => (
                        <button
                            key={index}
                            onClick={() => handleFilterChange(filt)}
                            className={filter === filt ? 'active' : ''}
                        >
                            {filt}
                        </button>
                    ))}
                    {availabilityFilters.map((availFilter, index) => (
                        <button
                            key={index}
                            onClick={() => handleAvailabilityFilterChange(availFilter)}
                            className={availabilityFilter === availFilter ? 'active' : ''}
                        >
                            {availFilter}
                        </button>
                    ))}
                </div>
                <div className='year-range-inputs'>
                    <input
                        type="number"
                        max={new Date().getFullYear()}
                        placeholder="From"
                        value={fromYear}
                        onChange={handleFromYearChange}
                        className='year-input'
                    />
                    <span> - </span>
                    <input
                        type="number"
                        max={new Date().getFullYear()}
                        placeholder="To"
                        value={toYear}
                        onChange={handleToYearChange}
                        className='year-input'
                    />
                </div>
            </div>
            <section className='search-page__results'>
                {results}
            </section>
        </div>
    );
}