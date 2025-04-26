import { twMerge } from "tailwind-merge";

// eslint-disable-next-line react/prop-types
const MainDiv = ({ children,className }) => {
  return (
    <div className={twMerge("max-w-[1600px] h-full w-full bg-gray-50",className)}>
      {children}
    </div>
  );
}   

export default MainDiv;