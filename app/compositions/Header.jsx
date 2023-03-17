import React from "react";
import logo from "~/assets/images/logo.png";
import instagram from "~/assets/images/instagram.svg";
import youtube from "~/assets/images/youtube.svg";
import twitter from "~/assets/images/twitter.svg";
// import styled from "styled-components";

export const Header = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-8 xl:px-0">
      <header className="py-6 flex">
        <div className="flex-1">
          <a href="/">
            <img src={logo} className="h-16" />
          </a>
        </div>
        <div className="flex items-stretch">
          <a
            href="https://instagram.com/eco.house"
            className="p-2 align-middle self-center h-8 w-8 rounded-full mx-1"
          >
            <img src={instagram} className="h-4" />
          </a>
          <a
            href="https://twitter.com/ecohouseok"
            className="p-2 align-middle self-center bg-blue h-8 w-8 rounded-full mx-1"
          >
            <img src={twitter} className="h-4" />
          </a>
          <a
            href="https://youtube.com/ecohouse"
            className="p-2 align-middle self-center bg-red h-8 w-8 rounded-full mx-1"
          >
            <img src={youtube} className="h-4" />
          </a>
        </div>
      </header>
    </div>
  );
};

// const Instagram = styled.a`
//   background: #f09433;
//   background: -moz-linear-gradient(
//     45deg,
//     #f09433 0%,
//     #e6683c 25%,
//     #dc2743 50%,
//     #cc2366 75%,
//     #bc1888 100%
//   );
//   background: -webkit-linear-gradient(
//     45deg,
//     #f09433 0%,
//     #e6683c 25%,
//     #dc2743 50%,
//     #cc2366 75%,
//     #bc1888 100%
//   );
//   background: linear-gradient(
//     45deg,
//     #f09433 0%,
//     #e6683c 25%,
//     #dc2743 50%,
//     #cc2366 75%,
//     #bc1888 100%
//   );
// `;
