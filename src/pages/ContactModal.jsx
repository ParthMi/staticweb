// src/components/Modal.js
import React from 'react';
import './Modal.css'; // Import CSS for styling
import { IoCloseOutline } from "react-icons/io5";

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className=''>
                    <span>&nbsp;</span>
                    <button className="modal-close mr-2" onClick={onClose}><IoCloseOutline size={25} /></button>
                </div>
                <form>
                    <ContactInputBox
                        type="text"
                        name="name"
                        placeholder="Your Name"
                    />
                    <ContactInputBox
                        type="text"
                        name="email"
                        placeholder="Your Email"
                    />
                    <ContactInputBox
                        type="text"
                        name="phone"
                        placeholder="Your Phone"
                    />
                    <ContactTextArea
                        row="6"
                        placeholder="Your Message"
                        name="details"
                        defaultValue=""
                    />
                    <div>
                        <button
                            type="submit"
                            className="w-full rounded border border-primary bg-emerald-400 p-3 text-white transition"
                        >
                            Enquire Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;


const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
    return (
        <>
            <div className="mb-6">
                <textarea
                    rows={row}
                    placeholder={placeholder}
                    name={name}
                    className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                    defaultValue={defaultValue}
                />
            </div>
        </>
    );
};

const ContactInputBox = ({ type, placeholder, name }) => {
    return (
        <>
            <div className="mb-6">
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                />
            </div>
        </>
    );
};

