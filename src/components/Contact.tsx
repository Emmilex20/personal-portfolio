import React from 'react';
import Image from "next/image";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";

const Contact = () => {
    return (
        <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-4 md:p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8" id="contact">
            {/* Contact Info Section */}
            <div className="flex justify-center items-center">
                <ul className="space-y-4">
                    <li className="flex items-center">
                        <Image src={phone} alt="phone" className="h-[80px] md:h-[110px] w-auto mr-4 md:mr-6" />
                        <p className="text-sm md:text-lg lg:text-xl break-words">+234 913 206 2212</p>
                    </li>
                    <li className="flex items-center">
                        <Image src={mail} alt="mail" className="h-[80px] md:h-[110px] w-auto mr-4 md:mr-6" />
                        <p className="text-sm md:text-lg lg:text-xl break-words">aginaemmanuel6@gmail.com</p>
                    </li>
                </ul>
            </div>

            {/* Form Section */}
            <div className="bg-white/10 p-4 md:p-6 rounded-xl max-w-full lg:max-w-[550px]">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400 mb-4">Let&apos;s connect</h2>
                <p className="text-white/70 mb-6 text-sm md:text-base">Send me a message and let&apos;s schedule a call!</p>
                <form action="https://getform.io/f/ajjjxzra" method="POST" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="firstName"
                            className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm md:text-base"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            name="lastName"
                            className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm md:text-base"
                            placeholder="Last Name"
                        />
                        <input
                            type="email"
                            name="email"
                            className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm md:text-base"
                            placeholder="Email"
                        />
                        <input
                            type="phone"
                            name="phone"
                            className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm md:text-base"
                            placeholder="Phone"
                        />
                    </div>
                    <textarea
                        className="bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm md:text-base"
                        placeholder="Your Message"
                    />
                    <button className="bg-orange-700 hover:bg-orange-500 text-white px-4 py-2 md:px-6 md:py-3 w-full font-semibold text-lg md:text-xl rounded-xl">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
