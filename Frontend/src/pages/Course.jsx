import React, { useEffect, useState } from "react";
// import list from "../../public/list.json";
import Cart from "../components/Cart";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
function Course() {
  const [authUserInfo, setAuthUserInfo] = useAuth();
  console.log(authUserInfo.name)
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    try {
      const response = await axios("http://127.0.0.1:4000/book/books");
      console.log(response.data);
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container md:px-20 px-4 pt-6 dark:text-white dark:bg-slate-950 mx-auto">
        <div className="items-center text-center justify-center mt-16">
          {/* Heading */}
          <h1 className="text-2xl font-semibold md:text-4xl text-center dark:text-gray-200">
            Welcome,{" "}<span className="text-violet-500">{authUserInfo.name}</span> We are Happy to Serve{" "}
          
          </h1>

          {/* Paragraph */}
          <p className="mt-12 text-lg dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            quibusdam repellat aut nesciunt impedit perferendis ipsum,
            praesentium nobis ut, reiciendis a error ex laudantium quis atque
            aspernatur. Assumenda dolorem quibusdam perspiciatis veniam error,
            temporibus obcaecati ut esse, corrupti cumque consequuntur fugit
            dolore aliquid voluptatem quo.
          </p>

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mt-6 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-500 duration-300"
          >
            Back
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
          {books.map((item) => (
            <Cart key={item._id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
