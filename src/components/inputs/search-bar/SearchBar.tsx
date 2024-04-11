import './styles.scss'
import SquareButton from '@components/buttons/square-btn/SquareButton'
import FormDropDown from '@components/drop-down/form-drop/FormDropDown'

const SearchBar = () => {

    return (
        <div id="search-bar">
            <FormDropDown />
            <input type="text" placeholder="Rechercher Amazon.fr" />
            <SquareButton />
        </div>
    )
}

export default SearchBar