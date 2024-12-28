import { Link } from "react-router-dom";

const Product = ({product}) => {
  const {id, image, title, price} = product
  return (
    <div className="mx-auto p-6">

      <div className="card w-[318px] card-compact bg-base-100  h-full border">
        <figure className="py-8 ">
          <img
            className="h-[166px]"
            src={image}
            alt="Shoes"
               />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Price : {price}</p>
          <div className="card-actions justify-start ">
            <button className="px-5 py-2 bg-white text-[#9538E2 border rounded-full border-[#9538E2]">
              <Link to={`/product_details/${id}`} onClick={()=> handleDetails(product)}>View Details</Link> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
