import React, {useState} from 'react'

const SearchResults = () => {
    const [toggle, setToggle] = useState(false)

    function handleToggle() {
        setToggle(!toggle)
    }

  return (
    <div className='results'>
        <h3>Results</h3>
        <hr />
        <section>
            <h4>Tiny Dancer</h4>
            <h5>Elton John | Madman Across The Water</h5>
            <button onClick={handleToggle}>+</button>
            <hr />
        </section>
        <section>
            <h4>Tiny Dancer</h4>
            <h5>Tim McGraw | Love Story</h5>
            <button onClick={handleToggle}>+</button>
            <hr />
        </section>
        <section>
            <h4>Tiny Dancer</h4>
            <h5>Rockabye Baby! | Lullaby Renditions of Elton John</h5>
            <button onClick={handleToggle}>+</button>
            <hr />
        </section>
        <section>
            <h4>Tiny Dancer</h4>
            <h5>The White Raven | Tiny Dancer</h5>
            <button onClick={handleToggle}>+</button>
            <hr />
        </section>
    </div>
  )
}

export default SearchResults