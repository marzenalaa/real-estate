import React from "react";

const Title = (props) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-bitBlack">
        {props.heading}{" "}
        <span className="underline underline-offset-4 decoration-1 font-semibold text-bonusBlue">
          {props.subHeading}
        </span>
      </h1>
      <p className="text-bitBlack max-w-80 mb-8 mx-auto">{props.text}.</p>
    </div>
  );
};

export default Title;
