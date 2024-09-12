import React from "react";
import { useAuth } from "./context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
    const [authUserInfo, setAuthUserInfo] = useAuth();
    const handleLogout = () => {
        try {
            setAuthUserInfo(
                null
            );
            localStorage.removeItem("UserInfo");
            toast.success("Logout successfully");
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="bg-gray-300 dark:bg-gray-800 text-black dark:text-white">
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box  bg-white dark:bg-gray-800">
          <p className="py-4 text-black dark:text-white text-lg font-semibold ">
            Are you sure you want to logout?
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
              onClick={() => handleLogout()}
              className="bg-green-500 px-3 py-2 rounded-lg dark:bg-green-800 text-white ">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Logout;
