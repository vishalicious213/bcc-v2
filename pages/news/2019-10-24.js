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

        <main className={styles.main}>
            <div className='post'>
                <h2 className='no-space-below'>Hicksville High School senior raises awareness for breast cancer</h2>
                <p className='no-space-above'>by <span>Ann M Rose Guarascio</span> | Oct 24, 2019</p>
                <p className='center'>A big big thank you!</p>
                <p>With a new school year having officially started in September, Breast Cancer Comfort Foundation is looking forward to the wonderful endeavors that will be taken by students who dedicate their time as volunteers to support our cause. Located in the town of Hicksville, BCCF is an organization founded by survivor Debi Cavolo that aims to offer emotional support and encouragement to individuals undergoing cancer treatment. This is done by delivering unique “Comfort Baskets” containing thoughtfully chosen gifts and personal care items.</p>
                <p>In an effort to serve her community, Alaha Nasari, a senior at Hicksville High School, arranged a special fundraiser project for BCCF during her school’s Homecoming Fair. A long held tradition at many high schools, Homecoming is an event held to welcome back alumni to the community. This is often followed by the first football game of the season, where the community gathers to cheer on the home team. At Hicksville, the Homecoming Fair was held on October 12th, prior to the football game. This was an opportunity for school-based clubs and teams to raise money in creative ways. As a current officer of the National Honor Society, Alaha and the other members of the board decided to host an obstacle course, in which the participant to complete it at the lowest time received a grand prize.</p>
                <p>One of the many objectives of the National Honor Society is commitment to the value of service. With this in mind, Alaha proposed donating the NHS profits to BCCF, reminding members that October was also Breast Cancer Awareness Month. Members of the organization agreed enthusiastically, and Alaha used this fundraiser project as a means to spread awareness of our organization throughout her school and the local community. She recalls, “Realizing that this was the perfect time to fundraise money for breast cancer, I knew the community would be more than willing to contribute to our cause! And it turned out, I was right – during the Fair, parents and their children were drawn to our booth, thrilled to learn that our profits would be supporting breast cancer awareness.” With an extremely successful turnout, the NHS ultimately raised $164 through their fundraiser event. These profits will be donated to BCCF.</p>
                <p>Alaha has been volunteering for BCCF for nearly three years. In her junior year, she organized a collection drive at her high school to gather donations for our comfort baskets. She recounts her first time meeting Debi, at our annual summer barbeque event. Here, she became acquainted with other members of the team and also became involved in coordinating our social media, publishing articles on our website, and assisting in planning fundraiser events. Alaha explains that her past experience with breast cancer in her family inspired her to get involved in our organization. She highlights the importance of Breast Cancer Awareness Month, noting that communities and organizations all over the world are unified during this time in their quest to increase attention and support for breast cancer. With this goal in mind, Alaha aspired to make her own contribution, starting in her local community. She recounts the Homecoming Fair with excitement, delighted by the fact that community members were just as motivated to do their part in this project.</p>
                <p>As a senior, Alaha intends to continue volunteering at BCCF and plans on organizing other service projects during the upcoming year. As a leader of several clubs and a distinct member of other honor societies, she hopes to further spread awareness of BCCF to the student body at her school.</p>
                <p>BCCF encourages all individuals to contribute to our cause, whether it be through volunteering at our events or taking one step further to collect donations for our organization. To find a passion for service and to dedicate time and effort towards transforming an idea into reality is what Alaha Nasari did and we hope to inspire others in doing the same.</p>
                <p>One of the many objectives of the National Honor Society is a commitment to the value of service. With this in mind, Alaha proposed donating the NHS profits to BCCF, reminding members that October was also Breast Cancer Awareness Month. Members of the organization agreed enthusiastically, and Alaha used this fundraiser project as a means to spread awareness of our organization throughout her school and the local community. She recalls, “Realizing that this was the perfect time to fundraise money for breast cancer, I knew the community would be more than willing to contribute to our cause! And it turned out, I was right – during the Fair, parents and their children were drawn to our booth, thrilled to learn that our profits would be supporting breast cancer awareness.” With an extremely successful turnout, the NHS ultimately raised $164 through their fundraiser event. These profits will be donated to BCCF.</p>
                <p>Alaha has been volunteering for BCCF for nearly three years. In her junior year, she organized a collection drive at her high school to gather donations for our comfort baskets. She recounts her first time meeting Debi, at our annual summer barbeque event. Here, she became acquainted with other members of the team and also became involved in coordinating our social media, publishing articles on our website, and assisting in planning fundraiser events. Alaha explains that her past experience with breast cancer in her family inspired her to get involved in our organization. She highlights the importance of Breast Cancer Awareness Month, noting that communities and organizations all over the world are unified during this time in their quest to increase attention and support for breast cancer. With this goal in mind, Alaha aspired to make her own contribution, starting in her local community. She recounts the Homecoming Fair with excitement, delighted by the fact that community members were just as motivated to do their part in this project.</p>
                <p>As a senior, Alaha intends to continue volunteering at BCCF and plans on organizing other service projects during the upcoming year. As a leader of several clubs and a distinct member of other honor societies, she hopes to further spread awareness of BCCF to the student body at her school.</p>
                <p>BCCF encourages all individuals to contribute to our cause, whether it be through volunteering at our events or taking one step further to collect donations for our organization. To find a passion for service and to dedicate time and effort towards transforming an idea into reality is what Alaha Nasari did and we hope to inspire others in doing the same.</p>
            </div>
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
            color: #ff99cc;
          }

          p {
            color: gainsboro;
          }

          span {
            color: #b83574;
          }

          .center {
            text-align: center;
          }
          `}
        </style>
    </div>
  )
}
