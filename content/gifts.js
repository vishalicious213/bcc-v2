// weight is in oz / other dimensions are in inches

const gifts = [
    {
        id: 0,
        name: 'Comfort basket',
        price: 2500,
        short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed enim at mi aliquam egestas. Maecenas accumsan commodo turpis, consequat efficitur metus interdum eget. Donec fermentum massa massa.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed enim at mi aliquam egestas. Maecenas accumsan commodo turpis, consequat efficitur metus interdum eget. Donec fermentum massa massa. Donec viverra nisl id consectetur vestibulum. Maecenas ac dapibus justo, nec commodo quam. Praesent commodo mi ut rutrum bibendum. Donec eu ultricies urna. Cras scelerisque massa leo, sed pharetra ligula egestas quis. Etiam enim nisl, pulvinar vitae lacus sed, fringilla maximus arcu. Integer vitae lectus porttitor, facilisis leo eget, aliquet leo. Suspendisse malesuada ut mauris eu scelerisque. Ut vitae mauris id tellus hendrerit molestie vel vitae libero.',
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
        name: 'Chemo comfort bag (pattern varies)',
        price: 2700,
        short: 'Integer et sapien lobortis, eleifend quam ut, pellentesque quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ullamcorper odio ac diam fringilla, ac vulputate elit dignissim.',
        desc: 'Integer et sapien lobortis, eleifend quam ut, pellentesque quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ullamcorper odio ac diam fringilla, ac vulputate elit dignissim. Pellentesque non metus nisl. Nam placerat libero vitae rhoncus facilisis. Praesent posuere, arcu rhoncus tristique ullamcorper, magna diam tincidunt nisi, sit amet porta erat tortor sit amet nisi. Suspendisse quis blandit ligula, nec molestie purus.',
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
    //     desc: 'Nulla sodales sem in odio pretium, sit amet vestibulum neque vulputate. Vivamus vel quam justo. Nullam cursus convallis ligula, vitae dapibus neque vulputate eu. Integer rutrum tortor felis, sit amet fringilla tellus dictum vitae. Nam tempus lorem sapien, quis blandit nulla dignissim sit amet. Quisque ac suscipit ligula. Nam sollicitudin varius dui, vitae ullamcorper magna sagittis ut. Sed ac ultrices sapien. Pellentesque non orci massa. Proin rhoncus euismod metus vitae scelerisque. Proin non tempus ipsum, tincidunt lacinia urna.',
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