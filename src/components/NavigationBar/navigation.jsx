import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { BsCalendar2EventFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";
import { TbActivity } from "react-icons/tb";
import { PiChatsFill } from "react-icons/pi";
import "./nav.css";
import "../../pages/pages.css";

const navigation = () => {
  return (
    <>
      <div className="nav">
        <div className="elements">
          <div className="logo">
          <a href="/" target="">
              <span className="desc_icon_logo"> <MdSpaceDashboard /> </span>
              <span className="desc_name_logo">DJOKWA</span>
            </a>
          </div>
          <div className="item">
            <a href="/" target="">
              <span className="desc_icon"> <MdSpaceDashboard /> </span>
              <span className="desc_name">Dashboard</span>
            </a>
          </div>
          <div className="item">
            <a href="/events">
              <span className="desc_icon"> <BsCalendar2EventFill />  </span>
              <span className='desc_name'> Events</span>
            </a>
          </div>
          <div className="item">
            <a href="/my-account">
              <span className="desc_icon"> <RiAccountCircleFill /> </span>
              <span className='desc_name'> My Account</span>
            </a>
          </div>
          <div className="item">
            <a href="/users-accounts">
              <span className="desc_icon"><RiAccountCircleFill /> </span>
              <span className='desc_name'> Accounts</span>
            </a>
          </div>
          <div className="item">
            <a href="/activity">
              <span className="desc_icon"> <TbActivity /></span>
              <span className='desc_name'> Latest Activity</span>
            </a>
          </div>
          <div className="item">
            <a href="/chats">
              <span className="desc_icon"><PiChatsFill /></span>
              <span className='desc_name'> Chat</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default navigation;
