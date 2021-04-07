import Link from 'next/link'

export default function Nav() {
    function dropdown(menu) {
        document.getElementById(menu).classList.toggle('show')
    }

    return (
        <div id='menu-container'>
            <div id='logo-container'>
                <img src='/logo.png' alt='logo' />
            </div>

            <nav id='menu'>
                <Link href='/'><a>Home</a></Link>
                <Link href='/about'><a>About Us</a></Link>
                <Link href='/boobtique'><a>Boobtique</a></Link>
                <div className='hover-item'>
                    <Link href='/donate'><a className='a'>Donate</a></Link>
                    <div className='dropdown'>
                        <Link href='/'><a className='a center-link'>In Memory Of</a></Link>
                        <Link href='/'><a className='a center-link'>Supporters</a></Link>
                    </div>
                </div>
                <Link href='/volunteer'><a>Volunteer</a></Link>
                <Link href='/news'><a>News</a></Link>
            </nav>

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

                #menu {
                    display: flex;
                    align-items: center;
                    color: gainsboro;
                }

                a {
                    outline: 1px solid red;
                    font-size: .9rem;
                    width: 5.5rem;
                    padding: .5rem;
                    text-align: center;
                }

                a:hover {
                    color: black;
                    background: gainsboro;
                }

                .hover-item {
                    outline: 1px solid orange;
                    width: 5.5rem;
                    position: relative;
                    display: inline-block;
                    text-align: center;
                }

                .a {
                    display: block;
                    width: 100%;
                }

                .dropdown {
                    // display: none;
                    display: flex;
                    flex-direction: column;
                    position: absolute;
                    width: 7rem;
                    // z-index: 1;
                }

                .center-link {
                    transform: translateX(-.75rem);
                    background: #292c2f;
                }
            `}
            </style>
        </div>
    )
}