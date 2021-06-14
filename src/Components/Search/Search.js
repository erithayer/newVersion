import {useState} from 'react';



function Search()  {
    const [state, setState] = useState({
        searchQuery: '',
        searchResults: []
    })

    const handleChange = (event) => {
        setState(prevState => ({...prevState,searchQuery:event.target.value}))
    }
    const {searchQuery, searchResults} = state
    
    return (
        <div>
            <input 
                type="text" 
                placeholder="hayk"
                value={searchQuery}
                onChange={handleChange}
            />
        </div>
    )
}


export default Search;