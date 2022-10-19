import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

export default function Nav() {
    function myFunction() {
        var burgerMenu = document.getElementById('burger-container')
        if (burgerMenu.style.display === 'block') {
            burgerMenu.style.display = 'none';
        } else {
            burgerMenu.style.display = 'block'
        }
    }

    const handleClick = () => {
        // console.log('open cart')
        const shoppingCart = document.getElementById('cart')
        shoppingCart.style.display = "block"
    }

    return (
        <div id='menu-container'>
            <div id='logo-container'>
                <Link href='/'>
                    <img src='/logo-wide-2.png' alt='logo' />
                </Link>
            </div>

            {/* Navbar for 768+ */}
            <nav id='menu'>
                {/* <Link href='/'>
                    <a>Home</a>
                </Link> */}
                <div className='hover-menu'>
                    <Link href='/about'>
                        <a className='a'>About Us &#9662;</a>
                    </Link>
                    <div className='dropdown'>
                        <Link href='/team'>
                            <a className='a center-link'>Our Team</a>
                        </Link>
                        <Link href='/volunteer'>
                            <a className='a center-link'>Volunteer</a>
                        </Link>
                    </div>
                </div>
                <Link href='/boobtique'>
                    <a>Shop</a>
                </Link>
                <div className='hover-menu'>
                    <Link href='/donate'>
                        <a className='a'>Donate &#9662;</a>
                    </Link>
                    <div className='dropdown'>
                        <Link href='/memory'>
                            <a className='a center-link'>In Memory Of</a>
                        </Link>
                        <Link href='/sponsors'>
                            <a className='a center-link'>Sponsors</a>
                        </Link>
                        <Link href='/share'>
                            <a className='a center-link'>Share Your Story</a>
                        </Link>
                    </div>
                </div>
                {/* <div className='hover-menu'>
                    <Link href='/volunteer'>
                        <a className='a'>Volunteer &#9662;</a>
                    </Link>
                    <div className='dropdown'>
                        <Link href='/share'>
                            <a className='a center-link'>Share Your Story</a>
                        </Link>
                    </div>
                </div> */}
                <Link href='/news'>
                    <a>News</a>
                </Link>
                {/* TEMPORARILY REMOVED SHOPPING CART BUTTON FROM WIDE VIEW HERE */}
                {/* <a className='shopping-cart' onClick={handleClick}>
                    <FontAwesomeIcon icon={faCartShopping} style={{ fontsize: "1.5rem"}} />
                </a> */}
            </nav>

            {/* Hamburger menu for < 768 */}
            <div id='burger-container'>
                <nav id='burger'>
                    <a className='redline' href='/about'>About Us &#9662;</a>
                    <a href='/team'>Our Team</a>
                    <a href='/volunteer'>Volunteer</a>
                    <a className='redline' href='/boobtique'>Shop</a>
                    <a className='redline' href='/donate'>Donate &#9662;</a>
                    <a href='/memory'>In Memory Of</a>
                    <a href='/sponsors'>Sponsors</a>
                    <a href='/share'>Share Your Story</a>
                    <a className='redline' href='/news'>News</a>
                </nav>
            </div>

            <div id='mobile-buttons'>
                {/* TEMPORARILY REMOVED SHOPPING CART BUTTON FROM MOBILE VIEW HERE */}
                {/* <a className='shopping-cart' id='burger-cart' onClick={handleClick}>
                    <FontAwesomeIcon icon={faCartShopping} style={{ fontsize: "1.5rem"}} />
                </a> */}

                <button onClick={myFunction}>☰</button>
            </div>

            <style jsx>
            {`
                #menu-container {
                    display: flex;
                    justify-content: space-between;
                    padding: .5rem;
                    background: #292c2f;
                    position: fixed;
                    top: 0;
                    right: 0;
                    left: 0;
                    height: 3.5rem;
                    z-index: 1;
                }

                #logo-container {
                    width: 70%;
                    max-width: 300px;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }

                #logo-container img {
                    width: 100%;
                }

                #mobile-buttons {
                    display: flex;
                    align-items: center;
                }

                button {
                    font-size: 1.5rem;
                    color: gainsboro;
                    background: #292c2f;
                    border: none;
                    cursor: pointer;
                }

                button:focus {
                    outline: none;
                }

                #burger-container {
                    display: none;
                }

                #burger {
                    display: flex;
                    flex-direction: column;
                    color: gainsboro;
                    background: #292c2f;
                    position: absolute;
                    right: 0;
                    top: calc(3rem + .5vw);
                    z-index: 1;
                    width: 100%;
                    padding-bottom: 1rem;
                }

                #burger a {
                    padding: .75rem 0;
                    width: 100%;
                    text-align: center;
                }

                #burger a:hover, #burger-cart:hover {
                    color: black;
                    background: gainsboro;
                }

                .redline {
                    border-top: 1px solid #b01e65;
                }

                #menu {
                    display: none;
                }

                #burger-cart {
                    color: gainsboro;
                    padding: .5rem;
                    margin-right: 1rem;
                }

                .shopping-cart {
                    width: 2rem;
                }

                .shopping-cart:hover {
                    cursor: pointer;
                }

                /* 768 PX */

                @media only screen and (min-width: 768px) {
                    button, #burger, #burger-cart, #mobile-buttons {
                        display: none;
                    }

                    #menu {
                        display: flex;
                        align-items: center;
                        color: gainsboro;
                    }
    
                    a {
                        font-size: .8rem;
                        width: 4.5rem;
                        padding: .5rem;
                        text-align: center;
                        border: 1px solid #292c2f;
                    }
    
                    a:hover {
                        color: black;
                        background: gainsboro;
                    }
    
                    .hover-menu {
                        width: 6rem;
                        position: relative;
                        display: inline-block;
                        text-align: center;
                    }
    
                    .a {
                        display: block;
                        width: 100%;
                    }
    
                    .dropdown {
                        display: none;
                        position: absolute;
                        width: 8rem;
                        z-index: 1;
                    }
    
                    .center-link {
                        transform: translateX(-.75rem);
                        background: #292c2f;
                    }
    
                    .hover-menu:hover .dropdown {
                        display: block;
                    }

                    #logo-container {
                        width: 40%;
                        max-width: 400px;
                    }
                }
            `}
            </style>
        </div>
    )
}