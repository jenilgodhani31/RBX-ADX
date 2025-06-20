import React, { Fragment } from "react";
import { useRouter } from "next/router";

function NavBar({ title, className }) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const pageName = router.pathname.split('/').pop();
  const characterName = router.query.item;

  const formatPageName = (name) => {
    if (name) {
      return name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    return "Page Title";
  };

  const finalTitle = title || (characterName ? formatPageName(characterName) : formatPageName(pageName));

  return (
    <Fragment>
      <nav className="relative top-0 left-1/2 transform -translate-x-1/2 w-[390px] sm:w-[360px] z-50">
        <div className="z-50 py-4 px-6 pt-6 flex items-center justify-between top-0 backdrop-blur relative">
          
          {/* Back Arrow */}
          <div className="left-6 flex items-center">
            <svg
              onClick={handleBack}
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.57 5.92969L3.5 11.9997L9.57 18.0697"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5019 12H3.67188"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Title */}
          <div className={`absolute text-center left-1/2 transform -translate-x-1/2 text-white uppercase font-semibold ${className || 'text-[25px]'}`}>
            {finalTitle}
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default NavBar;
