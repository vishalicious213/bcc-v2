import Link from 'next/link'

export default function Nav() {
    return (
        <div id='menu-container'>
            <nav id='menu'>
                <Link href='/'><a>Home</a></Link>
                <Link href='/boobtique'><a>Boobtique</a></Link>
                <Link href='/about'><a>About Us</a></Link>
                <Link href='/donate'><a>Donate</a></Link>
                <Link href='/volunteer'><a>Volunteer</a></Link>
                <Link href='/'><a>News</a></Link>
            </nav>

            <style jsx>
            {`
                #menu-container {
                    background: #292c2f;
                }

                #menu {
                // width: 50%;
                display: flex;
                justify-content: flex-end;
                margin: 1rem auto;
                color: gainsboro;
                }

                a {
                    // outline: 1px solid red;
                    font-size: .9rem;
                    width: 5.5rem;
                    padding: .5rem;
                    text-align: center;
                }

                a:hover {
                    color: black;
                    background: gainsboro;
                }
            `}
            </style>
        </div>
    )
}