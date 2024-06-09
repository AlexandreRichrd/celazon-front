import './styles.scss'
import SquareButton from '@components/buttons/square-btn/SquareButton'
import FormDropDown from '@components/drop-down/form-drop/FormDropDown'
import { FC, useState } from 'react'

const SearchBar: FC = () => {
    const [searchText, setSearchText] = useState<string>('')
    const updateText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchText(value)
        
    }

    return (
        <div id="search-bar">
            <input type="text" placeholder="Rechercher Celazon.fr" onChange={updateText} value={searchText} />
            <FormDropDown />
            <SquareButton />
        </div>
    )
}

export default SearchBar