import { Link } from 'react-router-dom';
import './styles.scss'

interface CategoriesItemProps {
    id: number
    title: string,
    image: string
}


const CategoriesItem = ({title, image, id}: CategoriesItemProps) => {
    return (
        <Link to={'/category/' + id} id="categories-item">
            <img src={image} alt={title} />
        </Link>
    );
}

export default CategoriesItem