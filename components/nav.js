import Link from 'next/link'

export default function Nav() {
    return (
        <>
            <nav id='menu'>
                <Link href='/'><a>Home</a></Link>
                <Link href='/boobtique'><a>Boobtique</a></Link>
                <Link href='/about'><a>About Us</a></Link>
                <Link href='/donate'><a>Donate</a></Link>
                <Link href='/volunteer'><a>Volunteer</a></Link>
            </nav>

            <style jsx>
            {`
                #menu {
                width: 50%;
                display: flex;
                justify-content: space-between;
                margin: 1rem auto;
                }
            `}
            </style>
        </>
    )
}