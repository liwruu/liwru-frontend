function filterResults(data, filter, availabilityFilter, searchQuery, fromYear, toYear) {
    let filteredResults = data;

    if (filter) {
        filteredResults = filteredResults.filter(call => call.type === filter);
    }

    if (availabilityFilter) {
        const availableStatus = availabilityFilter === 'Available';
        filteredResults = filteredResults.filter(call => call.available === availableStatus);
    }

    if (searchQuery) {
        filteredResults = filteredResults.filter(call =>
            call.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    if (fromYear && toYear) {
        const from = parseInt(fromYear);
        const to = parseInt(toYear);
        filteredResults = filteredResults.filter(call => {
            const bookYear = new Date(call.date).getFullYear();
            return bookYear >= from && bookYear <= to;
        });
    }

    return filteredResults;
}

module.exports = filterResults;