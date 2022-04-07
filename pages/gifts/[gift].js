import { products } from "../../components/shop"

const Gift = (props) => {
    console.log(props)
    return (
        <p>Product</p>
    )
}

export const getStaticPaths = () => {
    const filenames = products.slug
    console.log(filenames)
    
    const paths = filenames.map(filename => {
        return {
            params: {
                gift: `/gifts/${filename}`
            }
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const giftName = context.params.gift
    return {
        props: {
            products
        }
    }
}

export default Gift