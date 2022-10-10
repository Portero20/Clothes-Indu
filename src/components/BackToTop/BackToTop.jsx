import React from 'react'
import { useEffect, useState } from 'react'

const BackToTop = () => {

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 100) {

                setBackToTopButton(true)

            } else {

                setBackToTopButton(false)

            }

        })

    }, [])

    const scrollUp = () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"


        })

    }

    return (
        <div>

            {backToTopButton && (

                <button style={{

                    position: "fixed",
                    bottom: "50px",
                    right: "50px",
                    height: "50px",
                    width: "50px",
                    color: "black",
                    borderRadius: "30px",


                }}onClick={scrollUp} className="dark:bg-slate-500 bg-zinc-900"><i className="fa-solid fa-arrow-up text-lg text-white"></i></button>


            )}

        </div>
    )
}

export default BackToTop