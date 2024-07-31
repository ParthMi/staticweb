// src/components/Modal.js
import React, { useState, useEffect } from 'react';
import './Modal.css'; // Import CSS for styling
import { IoCloseOutline } from "react-icons/io5";
import { toast } from 'react-toastify';

const ContactModal = ({ isOpen, onClose, selected }) => {
    // Hooks should be called unconditionally
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        details: "",
        subject: "",
        product: {},
    });

    useEffect(() => {
        if (selected) {
            setFormData(prevFormData => ({
                ...prevFormData,
                subject: `Product Enquiry for ${selected.name} (${selected.category})`,
                product: selected,
            }));
        }
    }, [selected]);

    const [loading, setLoading] = useState(false);

    // Early return for when the modal is not open
    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/contact.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success === 1) {
                toast.success("Thank you for contacting us. We will get back to you soon.");
                setFormData({ name: "", email: "", phone: "", details: "", subject: "" });
            } else {
                toast.error("Failed to send the message.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className=''>
                    <span>&nbsp;</span>
                    <button className="modal-close mr-2" onClick={onClose}>
                        <IoCloseOutline size={25} />
                    </button>
                </div>
                <form onSubmit={e => handleSubmit(e)}>
                    <div className="mb-6">
                        <input
                            onChange={e => handleChange(e)}
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            required
                            className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            onChange={e => handleChange(e)}
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            required
                            className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            onChange={e => handleChange(e)}
                            type="text"
                            name="phone"
                            placeholder="Your Phone"
                            value={formData.phone}
                            required
                            className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                        />
                    </div>
                    <div className="mb-6">
                        <textarea
                            rows={6}
                            value={formData.details}
                            onChange={e => handleChange(e)}
                            placeholder={"Your Message"}
                            name={"details"}
                            className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                            defaultValue={""}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className={`w-full flex justify-center rounded border !border-emerald-400 !bg-emerald-400 p-3 text-white transition hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed ${loading ? "bg-blue-400" : ""
                                }`}
                            disabled={loading}
                        >
                            {loading ? (

                                <div role="status flex justify-center">
                                    <svg aria-hidden="true" class="w-6 h-6 text-white-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="white" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="white" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span class="sr-only">Loading...</span>
                                </div>

                            ) : (
                                "Enquire Now"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const ContactTextArea = ({ rows, placeholder, name, value, onChange }) => {
    return (
        <div className="mb-6">
            <textarea
                rows={rows}
                placeholder={placeholder}
                name={name}
                className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

const ContactInputBox = ({ type, placeholder, name, value, onChange }) => {
    return (
        <div className="mb-6">
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default ContactModal;
