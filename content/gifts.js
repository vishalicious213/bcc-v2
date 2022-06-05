// weight is in oz / other dimensions are in inches

const gifts = [
    {
        id: 0,
        name: 'Comfort basket',
        price: 2700,
        short: 'It is hard to know what to send or to say to someone who is going through the hard battle of cancer. This gift basket is the perfect way to let them know that you are thinking of them. With a personalized message on the back of the card, it is sure to mean the world to anyone who receives it.',
        desc: <>
            <p>Best used after surgery both as inpatient and at home</p>
            <p>Items include:</p>
            <ul>
                <li>Journal, to write down thoughts and feelings</li>
                <li>Calendar to remember appointments, times, and names</li>
                <li>Thank you, cards (8), for all the kind gestures offered to you from friends and family or hospital staff</li>
                <li>Handmade heart with cold pact insert</li>
                <li>Post-it for questions and thoughts</li>
                <li>Hug card for your wallet just in case you need one</li>
                <li>Pen</li>
                <li>Three individually wrapped mints for dry throat</li>
                <li>Lip balm for dry lips</li>
                <li>Tissues on case you cry</li>
                <li>Compact to see the beauty that everyone else sees</li>
                <li>Thrive eye brightener</li>
                <li>A small stuffed animal OR a reusable grocery bag</li>
            </ul>
        </>,
        img: '/gifts/comfort-basket-01.jpg',
        alt: 'comfort basket with animal',
        weight: 24.0,
        length: null,
        width: null,
        height: null,
        slug: 'comfort-basket',
    },
    {
        id: 1,
        name: 'Chemo comfort bag',
        price: 2700,
        short: 'Show your love and support with this handmade chemo comfort bag. This item is sure to make someone feel special. Pick from our available patterns - there is no better way to say I care for you than to send a comfort package.',
        desc: <>
            <p>Best used for recovery</p>
            <p>Items include:</p>
            <ul>
                <li>Handmade cloth makeup bag</li>
                <li>Pashmina</li>
                <li>Word search</li>
                <li>Pen</li>
                <li>Tissues</li>
                <li>Notepad</li>
                <li>Three mints</li>
                <li>Handmade change purse</li>
                <li>Hug card</li>
            </ul>            
        </>,
        img: '/gifts/chemo-comfort-bag-11.jpg',
        alt: 'chemo comfort bag',
        weight: 16.0,
        length: null,
        width: null,
        height: null,
        slug: 'chemo-comfort-bag',
    },
    // {
    //     id: 2,
    //     name: 'Chemo comfort bag w/blanket',
    //     price: 2500,
    //     short: 'Nulla sodales sem in odio pretium, sit amet vestibulum neque vulputate. Vivamus vel quam justo. Nullam cursus convallis ligula, vitae dapibus neque vulputate eu. Integer rutrum tortor felis, sit amet fringilla tellus dictum vitae.',
    //     desc: <>
    //         <p>Best used at chemo treatment</p>
    //         <p>Items include:</p>
    //         <ul>
    //             <li>Mandala or adult coloring book or word search</li>
    //             <li>Colored pencils</li>
    //             <li>Throw or small blanket</li>
    //             <li>Water bottle</li>
    //             <li>Three mints or ginger candies for nausea</li>
    //             <li>Pen</li>
    //             <li>Tissues</li>
    //             <li>Handmade port protector or pillow for use with seatbelt</li>
    //             <li>Handmade pocket heart hug</li>
    //         </ul>            
    //     </>,
    //     img: '/gifts/chemo-bag-blanket-03.jpg',
    //     alt: 'chemo bag with blanket',
    //     weight: 32.0,
    //     length: null,
    //     width: null,
    //     height: null,
    //     slug: 'comfort-bag-with-blanket',
    // },
]

module.exports = { gifts }