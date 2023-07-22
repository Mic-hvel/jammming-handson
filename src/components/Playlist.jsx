import React, {useState} from 'react'
    

const Playlist = () => {
    const [toggle, setToggle] = useState(false)
    const [isSave, setIsSave] = useState(false)

    function handleToggle() {
        setToggle(!toggle)
    }

    function handleSave() {
        setIsSave(!isSave)
    }

  return (
    <>
    <div className='new-playlist'>
        <h3>New Playlist</h3>
        <hr />
        <section>
            <h4>Stronger</h4>
            <h5>Britney Spears | Oops!... I Did It Again</h5>
            <button onClick={handleToggle}>-</button>
            <hr />
        </section>
        <section>
            <h4>So Emotional</h4>
            <h5>Whitney Houston | Whitney</h5>
            <button onClick={handleToggle}>-</button>
            <hr />
        </section>
        <section>
            <h4>It's Not Right But It's Okay</h4>
            <h5>Whitney Houston | My Love Is Your Love</h5>
            <button onClick={handleToggle}>-</button>
            <hr />
        </section>
    </div>
    <div className='save'>
        <button onClick={handleSave}>SAVE TO SPOTIFY</button>
    </div>
    </>
  )
}

export default Playlist