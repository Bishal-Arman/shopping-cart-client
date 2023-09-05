import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden mt-20"
        >
          Click for cart details
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content ">
          {/* Sidebar content here */}
          <li>
            <Link
              to="/dashboard/myCart"
              className="flex  items-center text-red-600 font-bold "
            >
              <FaShoppingCart></FaShoppingCart>{" "}
              <div className="ms-1">MyCart</div>
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="/" className="ms-2 text-sky-800 font-bold">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
