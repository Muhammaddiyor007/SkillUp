import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";


function Notification() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-6">
      <h3 className="flex font-bold mb-4 items-center gap-2">
        <Link to="/" className="text-[#97989a] hover:underline">
          Dashboard
        </Link>
        <FaChevronRight className="text-[#97989a]" />
        <span>Bildrishnomalar</span>
      </h3>
    </div>
  );
}

export default Notification;
