import { IoIosCheckbox } from "react-icons/io";
import { FaRegTrashCan } from "react-icons/fa6";

function TodoItem({ text }) {
  return (
    <li className="flex items-center px-4 py-2 mt-5 mb-5 ">
      <span className=" w-50 bg-white text-black h-8 font-bold text-2xl">
        {text}
      </span>
      <IoIosCheckbox className="bg-green-500 size-8" />
      <FaRegTrashCan className="bg-red-600 size-8" />
    </li>
  );
}

export default TodoItem;
