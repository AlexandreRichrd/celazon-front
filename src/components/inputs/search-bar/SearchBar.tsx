import { useState } from 'react'
import './styles.scss'

const SearchBar = () => {

    const [search, setSearch] = useState('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
        console.log(event.target.value)
    }

    return (
        <>
            <input type="text" id="searchbar" placeholder='Cappuccino' value={search} onChange={handleChange}/>
        </>
    )
}

export default SearchBar