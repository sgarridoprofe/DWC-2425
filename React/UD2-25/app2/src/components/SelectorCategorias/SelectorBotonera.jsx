import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function SelectorBotonera() {
  return (
    <>
      <button
        onClick={() => {
          console.log("derecha");
        }}
      >
        <MdKeyboardArrowRight size={15} />
      </button>
      <br />
      <button>
        <MdKeyboardDoubleArrowRight size={15} />
      </button>
    </>
  );
}
