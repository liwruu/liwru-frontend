// para realizar pruebas unitarias ejecutar => npx jest src/components/SearchPage/main/filterResults.test.jsx
const filterResults = require('./filterResults');

const data = [
    {
        id: 1,
        type: 'Classics of literature',
        category: 'historia',
        isbn: "120839712903",
        pages: "200",
        title: 'El arte de la guerra',
        author: "Sun Tzu",
        description: "Un antiguo tratado militar chino lleno de sabiduría sobre estrategia y táctica que ha influido en diversos campos durante siglos.",
        additionalDescription: "Una novela de aventuras...",
        available: true,
        date: '2022-01-01',
        image: "https://www.planetadelibros.com.pe/usuaris/libros/fotos/293/m_libros/292053_portada_el-arte-de-la-guerra_sun-tzu_202310231045.jpg",
    },
    {
        id: 2,
        type: 'Classics of literature',
        category: "historia",
        isbn: "120839712903",
        pages: "200",
        title: 'La Odisea',
        author: "Homero",
        description: "Una epopeya clásica griega que narra el viaje de Ulises de vuelta a casa después de la Guerra de Troya, llena de aventuras y peligros.",
        additionalDescription: "Lorem ipsum dolor sit amet...",
        available: false,
        date: '2021-12-31',
        image: "https://tienda.acropolisperu.org/wp-content/uploads/2023/07/LA-ODISEA-TiendaV.jpg",
    },
    {
        id: 3,
        type: 'Classics of literature',
        category: "literatura",
        isbn: "120839712903",
        pages: "200",
        title: 'Paco Yunque',
        author: "Rosa Maria Bedoya",
        description: "Un niño nuevo en la escuela enfrenta dificultades debido a su situación económica y su falta de habilidades deportivas. A pesar de esto, demuestra valentía y bondad.",
        additionalDescription: "Lorem ipsum dolor sit amet...",
        available: true,
        date: '2022-01-02',
        image: "https://www.loqueleo.com/pe/uploads/2017/10/resized/800_9786124039287.jpg",
    }
];

describe('filterResults', () => {
    test('sin filtros aplicados', () => {
        const result = filterResults(data, null, null, null, null, null);
        expect(result).toEqual(data);
    });

    test('filtrar por tipo', () => {
        const result = filterResults(data, 'Classics of literature', null, null, null, null);
        expect(result).toEqual(data);
    });

    test('filtrar por disponibilidad', () => {
        const result = filterResults(data, null, 'Available', null, null, null);
        expect(result).toEqual([data[0], data[2]]);
    });

    test('filtrar por término de búsqueda en el título', () => {
        const result = filterResults(data, null, null, 'Guerra', null, null);
        expect(result).toEqual([data[0]]);
    });

    test('filtrar por rango de fechas', () => {
        const result = filterResults(data, null, null, null, '2021', '2022');
        expect(result).toEqual([data[0], data[1], data[2]]);
    });

    test('combinación de filtros', () => {
        const result = filterResults(data, 'Classics of literature', 'Unavailable', 'a', '2011', '2022');
        expect(result).toEqual([data[1]]);
    });

    test('combinación de filtros', () => {
        const result = filterResults(data, null, 'Available', 'Yunque', '2020', '2023');
        expect(result).toEqual([data[2]]);
    });
});