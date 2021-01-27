import React, { Component } from 'react';
import TypeArea from "./TypeArea";
import {Link} from "react-router-dom";

class Chats extends Component {
    render() {
        return (
            <div>
                <div className="main-body container m-auto w-full h-full flex flex-col">
                    <div className="w-full h-screen">
                        <div className="flex h-full">
                            <div className="flex-1 bg-gray-100 w-full h-full">
                                <div className="main-body container m-auto w-full h-full flex flex-col">
                                    <div className="mt-4 p-2 pl-2 flex-2 flex flex-row">
                                        <div class="flex">
                                            <Link to="/">
                                            <i className='fas fa-arrow-left p-2 pt-2'></i>
                                            </Link>
                                            <div className="w-12 h-12 relative">
                                                <img className="w-12 h-12 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIbXiFSs6bFoTbWt2tlmzOUuntjbnmJfjgg&usqp=CAU" alt="chat-user" />
                                            </div>
                                            <div className="pt-2">
                                                <div className="truncate w-32"><span className="text-black font-bold">Ryann Remo</span></div>
                                                <div><small className="text-green-600 font-bold">Online</small></div>
                                            </div>
                                        </div>
                                        <div>
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </div>
                                    </div>


                                    <div className="main flex-1 flex flex-col">

                                        <div className="flex-1 flex h-full">

                                            <div className="chat-area flex-1 flex flex-col">

                                                <div className="messages flex-1 overflow-auto bg-gray-200">
                                                    <div className="text-center pl-4 m-2"><small className="text-gray-500">TODAY - 12 APR</small></div>
                                                    <div className="message mb-4 flex">
                                                        <div className="flex-1 px-2">
                                                            <div className="inline-block bg-white rounded-full p-2 text-gray-600 font-bold">
                                                                <span>Hey there. We would like to invite you over to our office for a visit. How about it?</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="message mb-4 flex">
                                                        <div className="flex-2">

                                                        </div>
                                                        <div className="flex-1 px-2">
                                                            <div className="inline-block bg-white rounded-full p-2 text-gray-600 font-bold">
                                                                <span>All travel expenses are covered by us of course :D</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="message me mb-4 flex text-right">
                                                        <div className="flex-1 px-2">
                                                            <div className="bg-gray-300 inline-block rounded-full p-2 text-gray-600 clearfix font-bold">
                                                                <span>It's like a dream come true</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="message me mb-4 flex text-right">
                                                        <div className="flex-1 px-2">
                                                            <div className="bg-gray-300 inline-block rounded-full p-2 text-gray-600 clearfix font-bold">
                                                                <span>I accept. Thank you very much.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="message mb-4 flex">
                                                        <div className="flex-2">

                                                        </div>
                                                        <div className="flex-1 px-2">
                                                            <div className="inline-block bg-white rounded-full p-2 text-gray-600 font-bold">
                                                                <span>You are welome. We will stay in touch.</span>
                                                            </div>
                                                        </div>
                                                        <br />
                                                    </div>
                                                    <div className="message me mb-4 flex text-right">
                                                        <div className="flex-1 px-2">
                                                            <div className="rounded-full p-2 text-gray-600 clearfix">
                                                                <span><img className="inline-block rounded-lg w-1/2 object-right" src="https://thumbs.dreamstime.com/b/beautiful-sunset-over-water-tree-silhouette-nature-landscape-amazing-orange-yellow-sky-night-scene-wallpaper-birds-flying-154424473.jpg" /></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="message mb-4 flex">
                                                        <div className="flex-1 px-2">
                                                            <div className="inline-block bg-white rounded-full p-2 text-gray-600 font-bold">
                                                                <span>We would like to invite you over to our office for a visit.</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="message mb-4 flex">
                                                        <div className="flex-1 px-2">
                                                            <div className="inline-block bg-white rounded-full p-2 text-gray-600 font-bold">
                                                                <span>Awesome</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="mb-20 pl-2 italic text-left inline-block absolute bottom-0 left-0 "><small className="text-gray-500">Ryan is typing...</small></div>
                                                </div>
                                                <TypeArea />
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

export default Chats;