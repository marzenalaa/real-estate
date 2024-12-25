import { twMerge } from "tailwind-merge";
const Button = (props) => {
  return (
    <a
      href={props.href}
      className={twMerge(
        `bg-white px-8 py-2 rounded-full font-medium border`,
        props.className
      )}
    >
      {props.title}
    </a>
  );
};

export default Button;
