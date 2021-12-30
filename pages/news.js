import Head from 'next/head'
import styles from '../styles/Home.module.css'

const posts = [
  // {id: '', date: '', url: '/news/', title: '', author: '', excerpt: ''},
  {id: '009', date: 'Dec 30, 2021', url: '/news/2021-12-30', title: 'BCC Collaboration with Memorial Sloan Kettering', author: 'Amina Nasari & Zahel Nasari', excerpt: 'The Breast Cancer Comfort Foundation is proud to announce its most recent collaboration with Memoral Sloan Kettering, NYC’s largest cancer treatment center. CUNY School of Medicine students who are members of the American Medical Women’s Association...'},
  {id: '008', date: 'Nov 12, 2021', url: '/news/2021-11-12', title: '9th Annual Pink Cans 4 Cancer Fundraising Event', author: 'Ann M Rose Guarascio', excerpt: 'Treasurer Ann Guarascio and Volunteer Sara Guarascio attended the 9th Annual Pink Cans 4 Cancer fundraising event on November 8 at Bar Grazie Cantina, Massapequa NY. We welcome the opportunity to forge relationships with like regional organizations...'},
  {id: '007', date: 'Sep 01, 2021', url: '/news/2021-09-01', title: 'Making Strides Against Breast Cancer 2021', author: 'Maeryam Nasari & Zahel Nasari', excerpt: 'On October 17th, 2021, the Breast Cancer Comfort Foundation (BCCF) will be joining the American Cancer Society in Making Strides Against Breast Cancer. The event will take place at Jones Beach Field 5 from 7:00 A.M. to 11:00 A.M. Due to the coronavirus pandemic...'},
  {id: '006', date: 'Jan 17, 2021', url: '/news/2021-01-17', title: 'How We Started and What We Do', author: 'Alaha Nasari', excerpt: 'Nearly five years ago, Breast Cancer Comfort was founded by survivor Deborah Cavolo. Like many other women, Debi felt there was an absence of community and conversation about breast cancer. Women diagnosed with breast cancer face issues that significantly impact their...'},
  {id: '005', date: 'May 25, 2020', url: '/news/2020-05-25', title: 'The Road to Recovery', author: 'Alaha Nasari', excerpt: 'Ever since the declaration of a national emergency in March, daily life in the United States has been changing rapidly with the spread of the coronavirus. States have mandated strict guidelines including orders to stay home and the cancellation of activities and large...'},
  {id: '004', date: 'Apr 6, 2020', url: '/news/2020-04-06', title: 'A Recipe for Successful Coping', author: 'Alaha Nasari', excerpt: 'Schools have closed, the economy is in decline, and health-care professionals are struggling to deal with the shortage of medical supplies. For anyone reading the news, these facts are just a grim reminder of the unfortunate situation our world is currently in. The...'},
  {id: '003', date: 'Dec 31, 2019', url: '/news/2019-12-31', title: "It's Not Too Late To Donate!!!", author: 'Debi Cavolo', excerpt: 'It is never too late to give and now would be a great time! Help us to continue our work with women and men undergoing treatment for breast cancer. With your donation we will provide someone with a “comfort basket, bag or chemo comfort” and can even put...'},
  {id: '002', date: 'Dec 15, 2019', url: '/news/2019-12-15', title: 'What to do when the end of the year is here and you are not ready', author: 'Debi Cavolo', excerpt: '2019 will be leaving us soon and I for one am not ready!! I just got used to the fact that New Years Day was over and I would now have to correct every date by putting a 9 instead of an 8. Valentines day has passed? When exactly was that because I must have blinked. I...'},
  {id: '001', date: 'Oct 24, 2019', url: '/news/2019-10-24', title: 'Hicksville High School senior raises awareness for breast cancer', author: 'Ann M Rose Guarascio', excerpt: 'A big big thank you! With a new school year having officially started in September, Breast Cancer Comfort Foundation is looking forward to the wonderful endeavors that will be taken by students who dedicate their time as volunteers to support our cause. Located in the...'},
]

export default function News() {
  return (
    <div className={styles.container}>
        <Head>
            <title>News | Breast Cancer Comfort Foundation</title>
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-32x32.png" sizes="32x32" />
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-192x192.png" sizes="192x192" />
            <link rel="apple-touch-icon-precomposed" href="/cropped-BCCF-basket-logo-white-5001-180x180.png" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>NEWS</h1>

            <div className='main-container'>
                <section className='posts'>
                    {posts.map(post =>
                      <div key={post.id} className='post'>
                        <h2 className='no-space-below'><a href={post.url}>{post.title}</a></h2>
                        <p className='no-space-above'>by <span>{post.author}</span> | {post.date}</p>
                        <p>{post.excerpt}</p>

                      </div>
                    )}
                </section>

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

            </div>
        </main>

        <style jsx>
          {`
          .main-container {
            // border: 1px solid red;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: 3rem;
          }

          .social {
            // border: 1px solid blue;
          }

          .social-media-title {
            font-weight: 700;
          }

          .feed {
            overflow: hidden;
          }

          .post {
            margin-bottom: 2rem;
            color: white;
          }

          h2 {
            font-weight: 500;
            color: #ff99cc;
          }

          h2:hover {
            text-decoration: underline;
          }

          p {
            color: gainsboro;
          }

          span {
            color: #b83574;
          }

          @media only screen and (min-width: 1024px) {
            .main-container {
              justify-content: space-between;
            }

            .posts {
              width: calc(100% - 380px);
            }
          }
          `}
        </style>
    </div>
  )
}
