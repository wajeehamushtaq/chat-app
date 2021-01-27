import React, { Component } from 'react';
import "./ChatHome.css";
import {Link} from "react-router-dom";

class ChatHome extends Component {
    render() {
        return (
            <div>
                <div className="w-full h-screen">
                    <div className="flex w-full h-full">
                        <div className="flex-1 bg-gray-100 w-full h-full">
                            <div className="main-body container m-auto w-full h-full flex flex-col">
                                <div className="main flex-1 flex flex-col">
                                    <div className="flex-1 w-full flex h-full">
                                        <div className="flex w-full flex-2 flex-col">
                                            <div className="pt-10 block heading flex-2">
                                                <div className="flex pb-2 px-2 m-6">
                                                    <strong>
                                                        <h1 className="flex text-3xl text-black mb-4 mr-40">Chats</h1>

                                                    </strong>
                                                    <button className="flex rounded-full py-3 px-6 text-pink-600 bg-pink-100 font-bold"><i className="text-pink-600 fa fa-plus mr-2"></i> New</button>
                                                </div>
                                            </div>
                                            <div className="search flex-2 pb-2 px-2 m-6">
                                                <div class="flex rounded-full border-grey-light border bg-gray-200 text-gray-600">
                                                    <button>
                                                        <span class="w-auto flex justify-end items-center text-grey p-2">
                                                            <i class="fa fa-search"></i>
                                                        </span>
                                                    </button>
                                                    <input class="w-full rounded mr-4 bg-gray-200" type="text" placeholder="Search..." />
                                                </div>
                                            </div>

                                            <div className="flex-1 h-full overflow-auto">
                                            <Link to="/chat">
                                                <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white rounded p-4 flex">
                                                    <div className="flex-2">
                                                        <div className="w-12 h-12 relative">
                                                            <img className="w-12 h-12 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMYM1L5mhozxw00I644Ve3CSCxF2vg8tJoA&usqp=CAU" alt="chat-user" />
                                                            <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 px-2">
                                                        <div className="truncate w-32"><span className="text-black font-bold">Karp Bonolo</span></div>
                                                        <div><small className="text-gray-600">Yea, Sure!</small></div>
                                                    </div>
                                                    <div className="flex-2 text-right">
                                                        <div><small className="text-pink-600 font-bold">Now</small></div>
                                                        <div>
                                                            <small className="text-xs bg-pink-600 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
                                                                10
                                                </small>
                                                        </div>
                                                    </div>
                                                </div>
                                                </Link>
                                                <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white rounded p-4 flex">
                                                    <div className="flex-2">
                                                        <div className="w-12 h-12 relative">
                                                            <img className="w-12 h-12 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMYM1L5mhozxw00I644Ve3CSCxF2vg8tJoA&usqp=CAU" alt="chat-user" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 px-2">
                                                        <div className="truncate w-32"><span className="text-black font-bold">Mercedes Yemelyan</span></div>
                                                        <div><small className="text-gray-600">Yea, Sure!</small></div>
                                                    </div>
                                                    <div className="flex-2 text-right">
                                                        <div><small className="text-gray-500">15 April</small></div>
                                                    </div>
                                                </div>
                                                <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white rounded p-4 flex">
                                                    <div className="flex-2">
                                                        <div className="w-12 h-12 relative">
                                                            <img className="w-12 h-12 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMYM1L5mhozxw00I644Ve3CSCxF2vg8tJoA&usqp=CAU" alt="chat-user" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 px-2">
                                                        <div className="truncate w-32"><span className="text-black font-bold">Cadi Kajetán</span></div>
                                                        <div><small className="text-gray-600">Yea, Sure!</small></div>
                                                    </div>
                                                    <div className="flex-2 text-right">
                                                        <div><small className="text-gray-500">15 April</small></div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="ml-12 flex">
                                                <div class="flex-1 ...">
                                                    <button><i className='fas fa-comment-dots btn'></i></button>
                                                </div>
                                                <div class="flex-1 ...">
                                                    <button><i className="fa fa-users btn" aria-hidden="true"></i></button>
                                                </div>
                                                <div class="flex-1 ...">
                                                    <button><i className='fas fa-user-alt btn'></i></button>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="mb-2 ml-12 flex">
                                                <div class="flex-1 ...">
                                                    <p>Chats</p>
                                                </div>
                                                <div class="flex-1 ...">
                                                    <p>Groups</p>
                                                </div>
                                                <div class="flex-1 ...">
                                                    <p>Profile</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatHome;