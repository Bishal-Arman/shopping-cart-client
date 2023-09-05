import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useCart from "../../hooks/UseCart";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, pd) => pd.price + sum, 0);
  //   delete to the cart
  const handleDelete = (pd) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete the product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://shopping-cart-server-topaz.vercel.app/carts/${pd._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount === 1) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Shopping-Cart | MyCart</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center h-[60px] sm:flex-row sm:justify-between sm:items-center">
        <h3 className="text-xl ">
          Total Product:{" "}
          <span className="text-red-500 font-semibold">{cart?.length}</span>
        </h3>
        <h3 className="text-xl ">
          Total Price:{" "}
          <span className="text-red-500 font-semibold">${total}</span>
        </h3>
      </div>
      <div className="max-w-screen-md mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="hidden sm:table-cell">S.No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((pd, index) => (
              <tr key={pd._id}>
                <td className="hidden sm:table-cell">{index + 1}</td>
                <td>
                  <div className="flex items-center justify-center">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={pd?.img} alt="cart-product" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold text-center">{pd.name}</div>
                </td>
                <td>{pd.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(pd)}
                    className="btn btn-outline btn-error btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
