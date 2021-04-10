import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

const posts = [
  {id: '001', date: 'Jan 17, 2021', url: '', title: 'How We Started and What We Do', author: 'Alaha Nasari', excerpt: 'Nearly five years ago, Breast Cancer Comfort was founded by survivor Deborah Cavolo. Like many other women, Debi felt there was an absence of community and conversation about breast cancer. Women diagnosed with breast cancer face issues that significantly impact their...'},
  {id: '002', date: 'Apr 6, 2020', url: '', title: 'A Recipe for Successful Coping', author: 'Alaha Nasari', excerpt: 'Schools have closed, the economy is in decline, and health-care professionals are struggling to deal with the shortage of medical supplies. For anyone reading the news, these facts are just a grim reminder of the unfortunate situation our world is currently in. The...'},
  // {id: '', date: '', url: '', title: '', author: '', excerpt: ''},
]

export default function News() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Breast Cancer Comfort Foundation</title>
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-32x32.png" sizes="32x32" />
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-192x192.png" sizes="192x192" />
            <link rel="apple-touch-icon-precomposed" href="/cropped-BCCF-basket-logo-white-5001-180x180.png" />
        </Head>

        <Nav />

        <main className={styles.main}>
            <h1 className={styles.title}>NEWS</h1>

            {posts.map(post =>
              <div key={post.id} className='post'>
                <h2 className='no-space-below'><a href={post.url}>{post.title}</a></h2>
                <p className='no-space-above'>by {post.author} | {post.date}</p>
                <p>{post.excerpt}</p>

              </div>
            )}
        </main>
        <Footer />

        <style jsx>
          {`
          .post {
            width: 80%;
            margin: 3rem auto;
            color: white;
          }

          h2 {
            font-weight: 500;
          }

          p {
            color: gainsboro;
          }
          `}
        </style>
    </div>
  )
}
