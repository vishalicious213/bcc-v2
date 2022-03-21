import styles from '../styles/Home.module.css'

export default function Video(props) {
    return (
        <>
        <div className='media-container'>
            <div className='video'>
                <div className='videoContainer'>
                    <iframe width="560" height="315" src={props.vid} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <style jsx>
            {`
            .media-container {
                display: flex;
                justify-content: center;
                background-color: #292c2f;
            }

            .video {
                padding-top: 2rem;
                padding-bottom: 2rem;
                width: 75%;
            }

            .videoContainer {
                position: relative;
                padding-top: 56.25%;
                width: 100%;
            }

            iframe {
                position: absolute;
                top: 0;
                border-radius: 1rem;
                border: 3px solid gainsboro;
                width: 100%;
                height: 100%;
            }
            `}
        </style>
        </>
    )
}