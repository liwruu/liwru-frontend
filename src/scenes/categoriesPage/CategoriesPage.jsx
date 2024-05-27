import LinkButton from '../../components/LinkButton/LinkButton';
import './CategoriesPage.css';

export default function categoriesPage() {
    return (
        <div className="book-category">
          {/* Enlace a la página de la categoría de libros */}
          <Link to={`/categories/${category.id}`} className="book-category__link">
            {/* Visualización de la categoría de libros */}
            <div className="book-category__content">
              {/* Imagen de la categoría de libros */}
              <img src={category.imageUrl} alt={category.name} className="book-category__image" />
              {/* Nombre de la categoría */}
              <h2 className="book-category__name">{category.name}</h2>
            </div>
          </Link>
        </div>
      );
}