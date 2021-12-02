import Head from 'next/head'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import styles from '../../styles/Home.module.css'

export default function Post() {
  return (
    <div className={styles.container}>
        <Head>
            <title>News | Breast Cancer Comfort Foundation</title>
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-32x32.png" sizes="32x32" />
            <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-192x192.png" sizes="192x192" />
            <link rel="apple-touch-icon-precomposed" href="/cropped-BCCF-basket-logo-white-5001-180x180.png" />
        </Head>

        {/* <Nav /> */}

        <main className={styles.main}>
            <div className='post'>
                <h2 className='no-space-below'>BCC Collaboration with Memorial Sloan Kettering</h2>
                <p className='no-space-above'>by <span>Maeryam Nasari & Zahel Nasari</span> | Dec 1, 2021</p>
                <p>The Breast Cancer Comfort Foundation is proud to announce its most recent collaboration with Memoral Sloan Kettering, NYC’s largest cancer treatment center. CUNY School of Medicine students who are members of the American Medical Women’s Association delivered around 20 bags and 5 baskets to breast cancer patients who are currently undergoing chemotherapy.</p>
                <p>Pictured:</p>
                <p>Meaghan Lane, Assistant Manager at Memorial Sloan Kettering</p>
                <p>CUNY School of Medicine Students:</p>
                <p>Rachelle Monteau</p>
                <p>Udeme Udom</p>
                <p>Layla Morgan</p>
                <p>Amina Nasari</p>
                <p>Mariam Qureishi</p>




                <p>#cans4cancerNY #togetherwemakeadifference #recycling4acure</p>
                <p><a className='link' target="_blank" rel="noopener" href='https://recycling4acure.org/'>Pink Cans 4 Cancer</a> is a Garden City NY non-profit organization, and movement of hope & sustainability to help people with cancer while saving the planet!</p>
                <p>Check out our FaceBook page <a className='link' target="_blank" rel="noopener" href='https://www.facebook.com/breastcancercomfort/'>Breast Cancer Comfort</a> and the FaceBook page for <a className='link' target="_blank" rel="noopener" href='https://www.facebook.com/Cans4CancerNY'>Pink Cans 4 Cancer</a> to find out how you can #makeadifference</p>

                <div className='img-container'>
                    <img src='/news/2021-11-12.jpg' alt='' />
                </div>
            </div>
        </main>

        {/* <Footer /> */}

        <style jsx>
          {`
          .post {
            width: 80%;
            margin: 3rem auto;
            color: white;
          }

          h2 {
            font-weight: 500;
            color: #ff99cc;
          }

          p {
            color: gainsboro;
          }

          span {
            color: #b83574;
          }

          .link {
            text-decoration: underline;
            font-weight: bold;
          }

          .img-container {
              width: 50%;
              margin: 2rem auto;
          }

          img {
              width: 100%;
          }
          `}
        </style>
    </div>
  )
}
