import React, { Component } from 'react';
import "./ChatHome.css";

class TypeArea extends Component {
    render() {
        return (
            <div>
                <div className="flex-2 w-full">
                    <div className="write bg-white shadow flex rounded-lg">
                        <div className="flex-3 flex content-center items-center text-center p-4 pr-0">
                            <span className="block text-center text-gray-400 hover:text-gray-800">
                                <div className="dropup">
                                    <button className="dropbtn w-full bg-white"><i className="fa fa-plus-circle" style={{ color: "grey", fontSize: "30px" }}></i></button>
                                    <div className="dropup-content w-full bg-white pl-4">
                                        <a href="#" className="font-bold"><i className="fa fa fa-file-picture-o" style={{ fontSize: "48px;", color: "orange", marginRight: "5px" }}></i> Photos & Videos</a>
                                        <a href="#" className="font-bold"><i className='fas fa-file' style={{ fontSize: "48px;", color: "blue", marginRight: "10px" }}></i> Document</a>
                                        <a href="#" className="font-bold"><i className='fas fa-headphones' style={{ fontSize: "48px;", color: "red", marginRight: "10px" }}></i> Audio</a>
                                        <a href="#" className="font-bold"><i className="fa fa-map-marker" aria-hidden="true" style={{ fontSize: "48px;", color: "green", marginRight: "10px" }}></i> Location</a>
                                        <a href="#" className="font-bold"><i className="fa fa-user" aria-hidden="true" style={{ fontSize: "48px;", color: "purple", marginRight: "10px" }}></i> Contact</a>
                                    </div>
                                </div>
                            </span>
                        </div>
                        <div className="flex-1">
                            <textarea name="message" className="w-full block outline-none py-4 px-4 bg-transparent" rows="1" placeholder="Type a message..." autofocus></textarea>
                        </div>
                        <div className="flex-2 w-32 p-2 flex content-center items-center">
                            <div className="flex-1 text-center">
                                <span className="text-gray-400 hover:text-gray-800">
                                    <span className="inline-block align-text-bottom">
                                    </span>
                                </span>
                            </div>
                            <div className="flex-1">
                                <button className="inline-block object-right-top bg-pink-600 w-8 h-8 rounded-full">
                                    <span className="inline-block align-text-bottom">
                                        <i className="fa fa-send" style={{ color: "white" }}></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default TypeArea;