const products = [
    { 
        id: 1,
        name: "El arte de la guerra", 
        category: "historia", 
        author: "Sun Tzu",
        image: "https://www.planetadelibros.com.pe/usuaris/libros/fotos/293/m_libros/292053_portada_el-arte-de-la-guerra_sun-tzu_202310231045.jpg", 
        description: "Un antiguo tratado militar chino lleno de sabiduría sobre estrategia y táctica que ha influido en diversos campos durante siglos." ,
        additionalDescription: " Una obra maestra del estratega militar Sun Tzu, se suma a una colección de valiosos libros, cada uno cargado de su propio poder e influencia. Este antiguo tratado chino, lleno de sabiduría sobre estrategia y táctica, ha resonado a lo largo de los siglos, trascendiendo el ámbito militar para convertirse en una guía fundamental en la toma de decisiones estratégicas en diversos aspectos de la vida. Su enfoque meticuloso y perspicaz en la planificación, la adaptación y el conocimiento del enemigo y de uno mismo, brinda lecciones atemporales que trascienden las batallas físicas para aplicarse en los desafíos cotidianos y las empresas más importantes.Sun Tzu, con su profunda comprensión de los principios fundamentales de la estrategia, nos invita a reflexionar sobre la naturaleza  de la competencia y la confrontación, y nos muestra el camino hacia la victoria con sabiduría y claridad.",
        available: true
    },
    { 
        id: 2,
        name: "La Odisea", 
        category: "historia", 
        author: "Homero",
        image: "https://images.cdn1.buscalibre.com/fit-in/360x360/3b/7e/3b7ee2ebcdc03bedc4cc58a617f8a86b.jpg", 
        description: "Una epopeya clásica griega que narra el viaje de Ulises de vuelta a casa después de la Guerra de Troya, llena de aventuras y peligros." ,
        available: false
    },
    { 
        id: 3,
        name: "Paco Yunque", 
        category: "literatura", 
        author: "César Vallejo",
        image: "https://www.loqueleo.com/pe/uploads/2017/10/resized/800_9786124039287.jpg", 
        description: "Un niño nuevo en la escuela enfrenta dificultades debido a su situación económica y su falta de habilidades deportivas. A pesar de esto, demuestra valentía y bondad." ,
        available: true
    },
    { 
        id: 4,
        name: "La ciudad y los perros", 
        category: "literatura", 
        author: "Mario Vargas Llosa",
        image: "https://images.cdn1.buscalibre.com/fit-in/360x360/46/0c/460cf768bec27103e3d93791c2770ba5.jpg", 
        description: "Una novela del premio Nobel peruano Mario Vargas Llosa que explora la vida en un internado militar y la violencia en la sociedad peruana.",
        available: true
    },
    { 
        id: 5,
        name: "Metamorfosis", 
        category: "cienciaficcion", 
        author: "Franz Kafka",
        image: "https://images.cdn2.buscalibre.com/fit-in/360x360/be/e9/bee9773ea6aa90c80b9f0f5e1d99f648.jpg", 
        description: "La obra maestra del escritor alemán Franz Kafka que narra la transformación de un hombre en un insecto y explora temas existenciales y alienación." ,
        available: true
    },
    {
        id: 6,
        name: "Guerra mundial Z", 
        category: "cienciaficcion",
        author: "Max Brooks",
        image: "https://images.cdn1.buscalibre.com/fit-in/360x360/42/0c/420cee763c2bab48635b5cd5f4ae2501.jpg", 
        description: "Una novela apocalíptica de Max Brooks que relata una guerra global contra los zombis y sus consecuencias en la sociedad humana.",
        available: false
    },
    {
        id: 7,
        name: "El Capitan Fush", 
        category: "clasicos", 
        author: "Rosa Maria Bedoya",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzckyEgXgZ4-QwBuOyzfsFFZMfoVMhrzPX35i8a06VKA&s", 
        description: "Una novela clásica de aventuras escrita por el autor francés Jules Verne, que sigue las hazañas del Capitán Fush y su tripulación en el mar.",
        available: false
    },
    {
        id: 8,
        name: "El Pollo Pepe", 
        category: "clasicos", 
        author: "Nick Denchfield",
        image: "https://images.cdn2.buscalibre.com/fit-in/360x360/19/60/1960d146cdfa6083d93d9dc8724bb772.jpg", 
        description: "Un libro infantil clásico escrito por Nick Denchfield e ilustrado por Ant Parker, que sigue las divertidas aventuras del Pollo Pepe y sus amigos.",
        available: true
    },
    {
        id: 9,
        name: "Baldor", 
        category: "materialuniversitario", 
        author: "Aurelio Baldor",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Baldor.jpg", 
        description: "Un libro de álgebra escrito por el matemático cubano Aurelio Baldor, que ha sido una herramienta fundamental en la enseñanza de las matemáticas en América Latina.",
        available: false
    },
    {
        id: 10,
        name: "Programación ATS", 
        category: "materialuniversitario",
        author: "Alejandro Taboada", 
        image: "https://i.blogs.es/4a8c41/cpp-logo-dribbble/1366_2000.png", 
        description: "Un libro de programación orientada a objetos que cubre los fundamentos de la programación y el desarrollo de software utilizando el lenguaje ATS.",
        available: true
    },
  ];
  
  export default products;