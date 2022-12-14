import React from "react";

type Props = {
  text: string;
  onClick: () => void;
  fontSize?: string;
  width?: string;
  height?: string;
  className: string;
};

const UniButton = (props: Props) => {
  return (
    <div className={props.className}>
      <button
        onClick={props.onClick}
        className="flex items-center justify-center rounded-full bg-lightGreen text-white h-[40px] w-[250px] px-[24px] py-[12px] fontSize-[16px]"
        style={{
          fontSize: props.fontSize,
          width: props.width,
          height: props.height,
        }}
      >
        {props.text}
      </button>
    </div>
  );
};

export default UniButton;
