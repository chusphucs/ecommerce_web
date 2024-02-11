import { IoMdSearch } from "react-icons/io";

export default function Search() {
  return (
    <div className="py-0 md:py-1 flex items-center justify-center bg-white px-4 rounded-md gap-1">
      <input
        type="search"
        className="focus:outline-none rounded-lg text-base"
      />
      <div className="cursor-pointer">
        <IoMdSearch size={20} />
      </div>
    </div>
  );
}
