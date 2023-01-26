import Product from "./Product";

const ProductsList = ({dummyData}) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-2 my-10 mx-auto">
            {
                dummyData.map(product => <Product
                    key={product.id}
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default ProductsList;