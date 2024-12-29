import { useEffect, useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { getCartData, removeFromCart } from "./utilities/addStorage";
import { SlEqualizer } from "react-icons/sl";
import Icon from "../assets/Group.png"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CartList = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/')
  }
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCartItems(JSON.parse(cartData));
    }
  }, []);
  const handleDelete = (id) => {
    removeFromCart(id);
    const postDelete = getCartData();
    setCartItems(postDelete);
  };

  const handlePurchase = () => {
    
    if(cartItems.length > 0) {
      localStorage.removeItem("cart");
      setCartItems([])
      console.log("button clicked");
      document.getElementById("my_modal_3").showModal()
    }
    else{
      toast.error('Your cart is empty', {position : 'top-center'})
    }
  };


  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

    const handleSort = () => {
      const sortedItems = [...cartItems].sort((a, b) => b.price - a.price); 
      setCartItems(sortedItems);
      setIsSorted(true); 
    }
  return (
    <div className=" bg-[#D9D9D9] pt-12 px-3 pb-[304px]">
             <Helmet>
                <title>Cart List</title>
              </Helmet>
      <div className="lg:flex items-center justify-between mb-8 ">
        <h2 className="text-2xl font-bold">Cart</h2>
        <div className="flex items-center">
          <p className="font-bold lg:text-2xl">
            Total Cost : {totalPrice}{" "}
          </p>
          <button onClick={handleSort} className=" flex  items-center gap-1 lg:gap-3  font-semibold text-[#9538E2] border border-[#9538E2] lg:py-3 lg:px-6 px-3 py-1 rounded-lg lg:rounded-full mr-4 ml-6">
            Sort By Price <SlEqualizer />
          </button>
          <button
            onClick={handlePurchase}
            className="font-medium bg-[#9538E2] py-3 px-6 rounded-full text-white"
          >
            Purchase
          </button>
        </div>
      </div>
      {cartItems.length === 0 ? (
        <div className="flex justify-center items-center h-52">
          <p className="font-bold text-4xl">No items in your cart.</p>
        </div>
      ) : (
        cartItems.map((item) => (
          <div className="mb-4 " key={item.id}>
            <div
              
              className="flex justify-between  bg-white  p-8 rounded-xl  "
            >
              <div className="flex gap-3">
                <div className="max-w-[200px] max-h-[124px] overflow-hidden ">
                  <img
                    className="object-contain h-full w-full"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div>
                  <p className="font-semibold text-2xl">{item.title}</p>

                  <p className="pt-3 pb-4 ">{item.description}</p>
                  <p className="font-semibold text-xl">
                    Price : $ {item.price}
                  </p>
                </div>
              </div>
              <div>
                <FaRegCircleXmark
                  className="text-2xl text-[#ff0000] cursor-pointer "
                  onClick={() => handleDelete(item.id)}
                />
              </div>
            </div>
          </div>
        ))
      )}

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
  
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={goHome} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="flex justify-center">

          <img src={Icon} alt="" />
          </div>
          <h3 className="font-bold text-xl text-center mt-3">Payment Successful</h3>
          <p className="py-4 font-semibold text-center">Thanks For Purchasing.  </p>
        </div>
      </dialog>
      
    </div>
  );
};

export default CartList;
