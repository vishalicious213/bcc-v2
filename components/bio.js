import styles from '../styles/Home.module.css'

const team = [
    {id: '01', name: 'Alaha Nasari', title: 'Volunteer', pic: 'alaha-thumb.jpg', url: '/volunteer/alaha-nasari'},
    {id: '02', name: 'Zahel Nasari', title: 'Volunteer', pic: 'zahel-thumb.jpg', url: '/volunteer/zahel-nasari'},
    // {id: '', name: '', title: '', pic: '', linkedIn: '', url: ''},
]

export default function Bio() {
  return (
    <div>
        <section className='team pink-container'>
            {team.map(person =>
                <div key={person.id} className='person'>
                    <a className='person-link' href={person.url}>
                        <img className='person-img' src={`/volunteer/${person.pic}`} alt={`${person.name}, ${person.title}`} />
                    </a>
                    <h2 className='no-space-below'>{person.name}</h2>
                    <p className='no-space-above person-title'>{person.title}</p>
                </div>
            )}
        </section>

        <style jsx>
            {`
            .team {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
            }

            .person {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 85%;
                margin-bottom: 1rem;
                padding-top: 1rem;
                border-radius: 1rem;
            }

            .person:hover {
                background: linear-gradient(#b01e65 50%, #292c2f 50%);
            }

            .person:hover .person-img {
                outline: 2px solid white;
            }

            .person-title {
                width: 88%;
                text-align: center;
            }

            .person-link {
                width: 75%;
            }

            .person-img {
                width: 100%;
                border-radius: 50%;
            }

            @media only screen and (min-width: 768px) {
                .person {
                    width: 48%;
                }
            }

            @media only screen and (min-width: 992px) {
                .person {
                    width: 32%;
                }
            }

            @media only screen and (min-width: 1200px) {
                .person {
                    width: 24%;
                }
            }
            `}
        </style>
    </div>
  )
}
