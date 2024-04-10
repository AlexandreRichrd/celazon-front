import './styles.scss'
import SquareButton from '@components/buttons/square-btn/SquareButton'

const SearchBar = () => {

    return (
        <div id="search-bar">
            <input type="text" placeholder="Search" />
            <SquareButton />
        </div>
    )
}

export default SearchBar