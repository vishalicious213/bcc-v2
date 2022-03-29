import { products } from "../../components/shop"

const Gift = (props) => {
    console.log(props)
    return (
        <p>Product</p>
    )
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