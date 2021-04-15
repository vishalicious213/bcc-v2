import axios from 'axios'
import styles from '../styles/Home.module.css'

export default function Shopify() {
    axios.get('https://breast-cancer-comfort-foundation.myshopify.com/admin/api/2021-04/storefront_access_tokens.json')
    .then(response => {
        // deal with the response data in here
        console.log(response)
    })
    .catch( err => {
        // deal with the error in here
        console.log(err)
    })


    const client = ShopifyBuy.buildClient({
        domain: 'breast-cancer-comfort-foundation.my-shop.myshopify.com',
        storefrontAccessToken: 'your-storefront-access-token', // previously apiKey, now deprecated
    });

    return (
        <>
        <h2 className={styles.title}>SHOPIFY</h2>
        </>
    )
}