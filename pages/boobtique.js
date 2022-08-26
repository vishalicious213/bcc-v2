import Head from 'next/head'
// import Shop from '../components/shop'
import useCart from '../hooks/useCart'
import { gifts } from '../content/gifts'
import ShopGifts from '../components/shop_gifts'
import styles from '../styles/Home.module.css'

export default function Boobtique() {
  const { cart, addItemToCart, removeItemFromCart } = useCart()
  // console.log('boobtique cart:', cart)

  return (
    <div className={styles.container}>
      <Head>
        <title>Shop | Breast Cancer Comfort Foundation</title>
        <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-32x32.png" sizes="32x32" />
        <link rel="icon" href="/cropped-BCCF-basket-logo-white-5001-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon-precomposed" href="/cropped-BCCF-basket-logo-white-5001-180x180.png" />
        <script src="https://sdks.shopifycdn.com/buy-button/2.1.7/buybutton.js"></script>
      </Head>

      <main className={styles.main}>
          <div className='img-container'>
            {/* <img src='/boobtique/boobtique.jpg' alt='' /> */}
            <img src='/gifts/chemo-comfort-bag-10.jpg' alt='' />
            <img className='middle-pic' src='/boobtique/boobtique-4.jpg' alt='' />
            <img src='/gifts/chemo-comfort-bag-11.jpg' alt='' />
          </div>

          <section className='pink-container gift-container'>
            <div className='gift-img-container'>
                <img className='gift-img' src='gift.png' alt='wrapped gift' />
            </div>
            <div className='gift-text-container'>
                <h2 className='h2'>Welcome to our Shop!</h2>
                <p className='no-space-above'>Our doors are now open to the public! If you know someone who is undergoing treatment for breast cancer and you don’t know what to give, then let us help you.</p>
                <p>Handmade hearts, comfort bags, and custom gift baskets are now available for a small donation. Select any one of our specialty items and we will ship to you, or anyone you choose, within 48 hours.</p>
            </div>
          </section>

          {/* <div className='button-container'>
            <button className='button'>VISIT OUR STORE</button>
          </div> */}

          <section className='grey-container gift-container'>
            <div className='gift-img-container-top'>
                <img className='gift-img' src='gift.png' alt='wrapped gift' />
            </div>
            <div className='gift-text-container'>
            <h2 className='h2'>Have a Comfort Basket delivered</h2>
            <p>Demand for our <b>Comfort Baskets</b> have been increasing as our program is getting more popular. This makes us very proud of what we do. If you would like a basket we ask for a donation of $25 to help cover the costs of the baskets, delivery and keeping our program going.</p>
            <p>Each basket is specially-created with items hand-selected to provide comfort to individuals undergoing breast cancer treatment. These items can include a journal, pen, unflavored lip balm, tissues, mints, hand sanitizer, pocket calendar, stuffed animal, thank you cards, and handmade heart with hot/cold pack. The style of the contents may vary.</p>
            </div>
          </section>

          <section className='pink-container gift-container'>
            <div className='gift-img-container'>
                <img className='gift-img' src='gift.png' alt='wrapped gift' />
            </div>
            <div className='gift-text-container'>
                <h2 className='h2'>Chemotherapy</h2>
                <p className='no-space-above' id='shop-jump'><b>Chemo Comfort Bags</b> can include a puzzle or coloring book, pen, unflavored lip balm, tissues, mints,  pocket calendar, thank you cards, and blanket. </p>
            </div>
          </section>

          {/* Hiding the shop until shipping is rebuilt. Going to display gifts and pricing/ordering info here temporarily. */}
          {/* Copy of shop is archived in boobtique_old */}
          {/* <Shop addItem={addItemToCart} removeItem={removeItemFromCart} gifts={gifts} cart={cart} /> */}

          <ShopGifts gifts={gifts} />
          
          {/* <div className='img-container-2'>
            <img src='/boobtique/boobtique-2.jpg' alt='' />
          </div> */}
      </main>

      <style jsx>
        {`
        .img-container {
            display: flex;
            justify-content: space-between;
        }

        .img-container img {
          width: 33.3%;
        }

        .middle-pic {
          // border-radius: 50%;
        }

        .button-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            background-image: linear-gradient(#b01e65 50%, #292c2f 50%);
        }

        .button {
            color: gainsboro;
            background-color: #b01e65;
            font-family: "Lato", "Helvetica Neue", Helvetica, sans-serif;
            font-size: 1rem;
            font-weight: 700;
            letter-spacing: .1rem;
            text-transform: uppercase;
            border: 2px solid gainsboro;
            border-radius: 1rem;
            text-align: center;
            padding: .75rem;
            width: 9rem;
            height: 4rem;
        }

        .button:hover {
            color: white;
            background-color: deeppink;
            border: 2px solid white;
            cursor: pointer;
        }

        .button:focus {
            outline: none;
        }
        `}            
        </style>
    </div>
  )
}
