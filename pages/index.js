// our-domain.com/

import ProductsList from "@/components/Products/ProductsList";

const dummyData = [
    {
        id: 'p1',
        name: 'Toyota Car',
        image: 'https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Toyota-Glanza-060520221539.jpg&w=872&h=578&q=75&c=1',
        price: 3400,
        description: 'This is a car'
    },
    {
        id: 'p2',
        name: 'Audi Car',
        image: 'https://imgd.aeplcdn.com/0x0/cw/ec/31252/Audi-A5-Right-Front-Three-Quarter-165509.jpg?wm=0',
        price: 4400,
        description: 'This is a car'
    },
    {
        id: 'p3',
        name: 'Range Rover Car',
        image: 'https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/F-PaceModelImage.jpg',
        price: 3400,
        description: 'This is a car'
    },
    {
        id: 'p4',
        name: 'Yamaha Bike',
        image: 'https://cdn.powergo.ca/media/catalog/2021/42/8a33534f10dd4eaf993c65ed95ac8b6c_site/2022-yamaha-yzf-r1-performance-black-1.jpg',
        price: 3500,
        description: 'This is a bike'
    },
    {
        id: 'p5',
        name: 'MV Agusta Bike',
        image: 'https://mvagusta.com.au/wp-content/uploads/2020/02/B4-1000MY21-Hero-1180x849.png',
        price: 3500,
        description: 'This is a bike'
    },
    {
        id: 'p6',
        name: 'Ducati Bike',
        image: 'https://ducati.com.sg/wp-content/uploads/2021/05/MY23-Streetfighter-V4-Model-Blocks-630x390-1.png',
        price: 3500,
        description: 'This is a Bike'
    },

]
const HomePage = () => {

    return <div>
        <h2 className="text-center text-xl font-semibold">All Products</h2>

        <ProductsList dummyData={dummyData}></ProductsList>

    </div>
}

export default HomePage;