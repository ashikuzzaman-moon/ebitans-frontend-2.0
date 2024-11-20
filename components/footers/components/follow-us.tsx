import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const FollowUs = ({ cls, headersetting, design }: any) => {
  const bgColor = design?.header_color;

  return (
    <>
      {headersetting?.facebook_link && (
        <a
          href={`${headersetting?.facebook_link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare style={{ color: bgColor }} className={cls} />
        </a>
      )}
      {headersetting?.youtube_link && (
        <a
          href={`${headersetting?.youtube_link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutubeSquare style={{ color: bgColor }} className={cls} />
        </a>
      )}
      {headersetting?.instagram_link && (
        <a
          href={`${headersetting?.instagram_link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare style={{ color: bgColor }} className={cls} />
        </a>
      )}
      {headersetting?.whatsapp_phone && (
        <a
          href={`https://api.whatsapp.com/send?phone=${headersetting?.whatsapp_phone}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsappSquare style={{ color: bgColor }} className={cls} />
        </a>
      )}
      {headersetting?.lined_in_link && (
        <a
          href={`${headersetting?.lined_in_link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin style={{ color: bgColor }} className={cls} />
        </a>
      )}
    </>
  );
};

export default FollowUs;
