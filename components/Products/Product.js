import Link from "next/link";

const Product = ({ product }) => {

    const { id, name, image, price, description } = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mb-5">
            <figure><img src={image} className='img-full' alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link href={`/${id}`} className="btn btn-outline btn-secondary">Show Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;