import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../serverUrl";
import Spinner from "../components/Spinner";
import { MdOutlineAddBox } from "react-icons/md";
import { CiSquareInfo } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBook = async () => {
    try {
      setLoading(true);
      const resp = await axios.get(`${SERVER_URL}/book`);
      setBooks(resp.data.data);
      setLoading(false);
      console.log(resp.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <div className="">
        <div className="text-3xl text-center bg-blue-300 p-2">Book Store</div>
        <Link to="/books/create" className="text-sky-800 text-4xl">
          <MdOutlineAddBox />
        </Link>
        {loading ? (
          <Spinner />
        ) : (
          <table className="w-full border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md">Sno</th>
                <th className="border border-slate-600 rounded-md">Title</th>
                <th className="border border-slate-600 rounded-md max-md:hidden">
                  Author
                </th>
                <th className="border border-slate-600 rounded-md max-md:hidden">
                  Year
                </th>
                <th className="border border-slate-600 rounded-md">
                  Operation
                </th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => {
                return (
                  <tr key={book._id} className="h-8">
                    <td className="border border-slate-700 rounded-md text-center">
                      {index + 1}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center">
                      {book.title}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                      {book.author}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                      {book.year}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center">
                      <div className="flex justify-center gap-x-4">
                        <Link to={`/books/${book._id}`}>
                          <CiSquareInfo className="text-4xl text-green-800" />
                        </Link>
                        <Link to={`/books/update/${book._id}`}>
                          <FaEdit className="text-2xl text-blue-800" />
                        </Link>
                        <Link to={`/books/delete/${book._id}`}>
                          <AiOutlineDelete className="text-3xl text-red-800" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};
export default Home;
