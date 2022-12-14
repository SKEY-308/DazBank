import React, { useState } from 'react'
import Link from 'next/link';
// import { Link } from 'react-scroll'


import images from './images'
import Image from 'next/image';
// close, logo, menu



const NavBar = () => {

    const navlinks = ['Home', 'Features', 'Products', 'Clients']


    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);


    const handleClick = () => {
        setToggle(false)
    }



    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">

            <Link href='/'>
                <h2 className="text-white cursor-pointer text-[30px]">
                    <span className="text-gradient font-bold">Daz</span>Bank
                </h2>
            </Link>

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                { navlinks.map((nav, index) => (

                    <li
                        className={ `font-normal cursor-pointer text-[16px] ${active === nav ? "text-white" : "text-dimWhite"
                            } ${index === navlinks.length - 1 ? "mr-0" : "mr-10"}` }
                        key={ index }
                        onClick={ () => setActive(nav) }
                    >

                        <Link href={ `#${nav}` }
                        // activeClass={ active }
                        // to={ nav.path }
                        // spy={ true }
                        // smooth={ true }
                        // offset={ -70 }
                        // duration={ 500 }
                        // key={ index }
                        >
                            { nav }
                        </Link>

                    </li>


                )) }
            </ul>

            {/*Menu Hamburger*/ }
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <Image
                    src={ toggle ? images.close : images.menu }
                    alt="menu"
                    width="28px"
                    height="28px"
                    className="object-contain"
                    onClick={ () => setToggle(!toggle) }
                />


                <div
                    className={ `${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar` }
                >

                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        { navlinks.map((nav, index) => (
                            <li
                                onClick={ () => handleClick() }
                                key={ index }
                                className={ `font-medium cursor-pointer text-[16px] ${index === navlinks.length - 1 ? "mb-0" : "mb-4"} ${active === nav ? "text-white" : "text-dimWhite"
                                    }` }
                            >
                                <Link href={ `#${nav}` }>
                                    { nav }
                                </Link>

                            </li>
                        )) }
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default NavBar