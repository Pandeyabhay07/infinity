import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
const BackButton = ({ destination = "/" }) => {
  return (
    <div>
      <Link to={destination}>
        <FaArrowAltCircleLeft className="text-2xl" />
      </Link>
    </div>
  );
};
export default BackButton;
