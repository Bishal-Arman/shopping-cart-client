import Swal from "sweetalert2";
import useCart from "../../../hooks/UseCart";

const ServiceCard = ({ service }) => {
  const [, refetch] = useCart();
  const { name, img, price, _id } = service;
  const handleAddToCart = (pd) => {
    console.log(pd);
    const cartItem = {
      name,
      img,
      price,
      service_id: _id,
    };
    fetch("https://shopping-cart-server-khaki.vercel.app/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartItem),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          refetch();
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Successfully add to the cart",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-red-500 text-xl">Price: $ {price}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(service)}
            className="btn btn-outline btn-success"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
