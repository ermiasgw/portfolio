import { IoMdArrowDropdown } from "react-icons/io";

export default function Projects() {
  return (
    <div className="grid grid-cols-12 h-full w-full divide-x">
      <div className=" col-span-2 flex flex-col">
        <div className="flex pl-2 items-center border-b mb-2 h-8">
          <IoMdArrowDropdown /> <span>contacts</span>
        </div>
      </div>
      <div className=" col-span-10">fddgs</div>
    </div>
  );
}
