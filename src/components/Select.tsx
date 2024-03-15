import { useEffect, useState } from "react";
interface props {
  placeholder?: string;
  options : string[];
  onChange? : (item : string) => void;
  selected? : string
}
const Select = ({ placeholder = "Select", options , onChange, selected = ""}: props) => {
  const [selectedOpt, setSelectedOpt] = useState(selected);

  const [isOpen, setIsopen] = useState<boolean>(false);


  useEffect(()=>{
    onChange && onChange(selectedOpt)
  },[selectedOpt])

  return (
    <div className="relative w-full h-full">
      <input
        className={`absolute h-full w-full border-0 outline-0 rounded-none text-[20px] ps-3 caret-white cursor-pointer select-none`}
        value={selectedOpt}
        readOnly
        placeholder={placeholder}
        onFocus={() => {
          setIsopen(true);
        }}
        onBlur={() => {
          setIsopen(false);
        }}
      />
      <div
        className={`absolute top-[100%] right-0 w-full bg-white z-[20] duration-500 max-h-[200px] rounded-b-md overflow-y-scroll thin-scrollbar ${
          !isOpen && "!max-h-0"
        }`}
      >
        {options?.map((item: string) => (
          <div
            className="py-3 px-3 hover:bg-gray-200 duration-300 cursor-pointer"
            key={item}
            onClick={() => {
              setSelectedOpt(item);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
