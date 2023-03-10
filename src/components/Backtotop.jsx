import React, { useEffect, useState } from "react";

function Backtotop() {
  const [backtop, setBackToTop] = useState(false);
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 200) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  return (
    <>
      {backtop && (
        <div className="">
          {" "}
          <button
            onClick={() => top()}
            className="px-3 back-to-top py-2 animation_loding "
          >
            <svg
              width="20"
              height="20"
              fill="white"
              class="bi bi-chevron-double-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
              ></path>
              <path
                fill-rule="evenodd"
                d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

export default Backtotop;
