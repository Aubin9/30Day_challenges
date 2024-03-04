import React from 'react'
import './pages.css'
import { IoSearch } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { BiEditAlt } from "react-icons/bi";
import { IoPersonRemoveOutline } from "react-icons/io5";

const dashboard = () => {
    const data = [
        {
            date: "12/09/2023",
            student: "Ange Angoh",
            classs: "F3",
            statuss: "Current"
        },
        {
            date: "25/02/2024",
            student: "Djomo Brown",
            classs: "F5",
            statuss: "Former"
        },
        {
            date: "23/05/2024",
            student: "Tsopmedio",
            classs: "F2",
            statuss: "Current"
        },
        {
            date: "01/06/2024",
            student: "Kouam Daniel",
            classs: "F1",
            statuss: "Former"
        }
    ];
  return (
    <div className='dashboard element'>
        <div className="head">
            <strong>Accounts</strong>
            <div className='search'><span className='icon'><IoSearch/></span> <strong>search here</strong></div>
            <div className='notifications'><span className='icon'><IoNotifications/></span></div>
            <div className='setting'><span className='icon'><IoSettingsOutline/></span></div>
        </div>
        <div className="table_info">
            <strong>Students</strong>
            <div className="table_elements">
            <div className='header_col'>
                <ul className="header_row">
                    <li>Date</li>
                    <li>Students</li>
                    <li>Class</li>
                    <li>Status</li>
                    <li>Action</li>
                </ul>
            </div>
            <div className="table_ele">
            {
            data.map(({date, student, classs, statuss}) => {
                return(
                    <div className='col'>
                        <ul className="row">
                            <li>{date}</li>
                            <li>{student}</li>
                            <li>{classs}</li>
                            <li>{statuss}</li>
                            <ul className='btnAction'>
                                <li><IoEyeSharp/></li>
                                <li><BiEditAlt/></li>
                                <li><IoPersonRemoveOutline/></li>
                            </ul>
                        </ul>
                    </div>
                );
            })
            }</div>
            </div>
        </div>

        <div className="table_info">
            <strong>Teachers</strong>
            <div className="table_elements">
            <div className='header_col'>
                <ul className="header_row">
                    <li>Date</li>
                    <li>Students</li>
                    <li>Class</li>
                    <li>Status</li>
                    <li>Action</li>
                </ul>
            </div>
            <div className="table_ele">
            {
            data.map(({date, student, classs, statuss}) => {
                return(
                    <div className='col'>
                        <ul className="row">
                            <li>{date}</li>
                            <li>{student}</li>
                            <li>{classs}</li>
                            <li>{statuss}</li>
                            <ul className='btnAction'>
                                <li><IoEyeSharp/></li>
                                <li><BiEditAlt/></li>
                                <li><IoPersonRemoveOutline/></li>
                            </ul>
                        </ul>
                    </div>
                );
            })
            }</div>
            </div>
        </div>

        <div className="table_info">
            <strong>Parents</strong>
            <div className="table_elements">
            <div className='header_col'>
                <ul className="header_row">
                    <li>Date</li>
                    <li>Students</li>
                    <li>Class</li>
                    <li>Status</li>
                    <li>Action</li>
                </ul>
            </div>
            <div className="table_ele">
            {
            data.map(({date, student, classs, statuss}) => {
                return(
                    <div className='col'>
                        <ul className="row">
                            <li>{date}</li>
                            <li>{student}</li>
                            <li>{classs}</li>
                            <li>{statuss}</li>
                            <ul className='btnAction'>
                                <li><IoEyeSharp/></li>
                                <li><BiEditAlt/></li>
                                <li><IoPersonRemoveOutline/></li>
                            </ul>
                        </ul>
                    </div>
                );
            })
            }</div>
            </div>
        </div>

    </div>
    )}
export default dashboard