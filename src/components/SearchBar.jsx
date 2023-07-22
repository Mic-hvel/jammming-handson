import React, {useState} from 'react'


const SearchBar = () => {
    const [isTyping, setIsTyping] = useState('');
    const [isSearch, SetIsSearch] = useState(false);


    function handleChange(e) {
        setIsTyping(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    function handleClick(e) {
        e.stopPropagation()
        SetIsSearch(isSearch)
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className='form'>
            <div className='input' id='input'>
                <input value={isTyping} onChange={handleChange} ></input>
            </div>
            <div className='search'>
                <button onClick={handleClick}>SEARCH</button>
            </div>
        </form>
        
    </div>
  )
}

export default SearchBar