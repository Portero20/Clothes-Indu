import React from 'react'

const DarkMode = () => {

    const handleClick = () => {

        document.documentElement.classList.toggle('dark')

    }

    return (
        <div>

            <input type="checkbox" className='toggle toggle-xl xs:toggle-sm' onClick={handleClick} />

        </div>
    )
}

export default DarkMode