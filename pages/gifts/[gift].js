import { gifts } from "../../components/shop"

const Gift = (props) => {
    console.log(props)
    return (
        <>
        <p>Gift</p>

        <style jsx>
            {`
            p {
                color: white;
            }
            `}
        </style>
        </>
    )
}

// export const getStaticPaths = () => {
//     const filenames = gifts.slug
//     console.log(filenames)
    
//     const paths = filenames.map(filename => {
//         return {
//             params: {
//                 gift: `/gifts/${filename}`
//             }
//         }
//     })

//     return {
//         paths,
//         fallback: false,
//     }
// }

// export const getStaticProps = async (context) => {
//     const giftName = context.params.gift
//     return {
//         props: {
//             gift
//         }
//     }
// }

export default Gift