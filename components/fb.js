export default function FB() {
    return (
        <>
        <section className='social'>
            <a target='_blank' rel='noopener' href="https://www.facebook.com/breastcancercomfort/">
                <h2 className='social-media-title'>BCC Facebook Feed:</h2>
            </a>

            <iframe 
                className='feed'
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbreastcancercomfort%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                width="340" 
                height="500" 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
        </section>

        <style jsx>
            {`
            .social {
            // border: 1px solid blue;
            }

            .social-media-title {
            font-weight: 700;
            }

            .feed {
            overflow: hidden;
            }
            `}
        </style>
        </>
    )
}