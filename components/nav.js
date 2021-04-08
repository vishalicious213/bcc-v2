import Link from 'next/link'

export default function Nav() {
    function myFunction() {
        var burgerMenu = document.getElementById('burger-container')
        if (burgerMenu.style.display === 'block') {
            burgerMenu.style.display = 'none';
        } else {
            burgerMenu.style.display = 'block'
        }
    }

    return (
        <div id='menu-container'>
            <div id='logo-container'>
                <img src='/logo.png' alt='logo' />
            </div>

            {/* Navbar for 768+ */}
            <nav id='menu'>
                <Link href='/'><a>Home</a></Link>
                <Link href='/about'><a>About Us</a></Link>
                <Link href='/boobtique'><a>Boobtique</a></Link>
                <div className='hover-menu'>
                    <Link href='/donate'><a className='a'>Donate &#9662;</a></Link>
                    <div className='dropdown'>
                        <Link href='/memory'><a className='a center-link'>In Memory Of</a></Link>
                        <Link href='/supporters'><a className='a center-link'>Supporters</a></Link>
                    </div>
                </div>
                <div className='hover-menu'>
                    <Link href='/volunteer'><a className='a'>Volunteer &#9662;</a></Link>
                    <div className='dropdown'>
                        <Link href='/share'><a className='a center-link'>Share Your Story</a></Link>
                    </div>
                </div>
                <Link href='/news'><a>News</a></Link>
            </nav>

            {/* Hamburger menu for < 768 */}
            <div id='burger-container'>
                <nav id='burger'>
                    <a href='/'>Home</a>
                    <a href='/about'>About Us</a>
                    <a href='/boobtique'>Boobtique</a>
                    <a href='/donate'>Donate</a>
                    <a href='/volunteer'>Volunteer</a>
                    <a href='/news'>News</a>
                </nav>
            </div>

            <button onClick={myFunction}>☰</button>

            <style jsx>
            {`
                #menu-container {
                    display: flex;
                    justify-content: space-between;
                    padding: .5rem;
                    background: #292c2f;
                }

                #logo-container {
                    width: 25%;
                }

                #logo-container img {
                    width: 100%;
                }

                button {
                    font-size: 2rem;
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
                    outline: 1px solid red;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    color: gainsboro;
                    position: absolute;
                }

                #menu {
                    display: none;
                }

                /* 768 PX */

                @media only screen and (min-width: 768px) {
                    #menu {
                        display: flex;
                        align-items: center;
                        color: gainsboro;
                    }
    
                    a {
                        font-size: .9rem;
                        width: 6rem;
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
                }
            `}
            </style>
        </div>
    )
}