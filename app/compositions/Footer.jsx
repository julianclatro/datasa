import React from "react";
import logo from "~/assets/images/logo_ecohouse.png";
import instagram from "~/assets/images/instagram_white.svg";
import youtube from "~/assets/images/youtube_white.svg";
import twitter from "~/assets/images/twitter_white.svg";

export const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-screen-xl mx-auto px-8 xl:px-0">
        <footer className="py-6 flex">
          <a href="https://ecohouse.org.ar" className="flex-1">
            <img src={logo} className="h-12" />
          </a>
          <div className="flex items-stretch">
            <a
              href="https://instagram.com/eco.house"
              className="p-2 align-middle self-center"
            >
              <img src={instagram} className="h-4" />
            </a>
            <a
              href="https://twitter.com/ecohouseok"
              className="p-2 align-middle self-center"
            >
              <img src={twitter} className="h-4" />
            </a>
            <a
              href="https://youtube.com/ecohouse"
              className="p-2 align-middle self-center"
            >
              <img src={youtube} className="h-4" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};
