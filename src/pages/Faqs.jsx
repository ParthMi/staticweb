import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Faqs = () => {
    const [faqs, setFaqs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/faqs.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setFaqs(data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            <div className='mx-auto text-center faq-bg p-4 md:p-10'>
                <center><h2 className="text-3xl max-w-xl py-6 text-center font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2></center>
                {/* <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do</p> */}
            </div>
            <section className="py-4 !pb-16 !md:pb-16 bg-gray-50 sm:py-1 lg:py-1">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                        {faqs.map((faq, index) => (
                            <div key={index} className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                                <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => setOpenIndex(index === openIndex ? null : index)}>
                                    <span className="flex text-lg font-semibold text-black text-start">{faq.question}</span>
                                    <span>
                                        <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>
                                {index === openIndex && (
                                    <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-gray-600 textbase mt-9">Didn’t find the answer you are looking for? <a href="#" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"><NavLink to="/contactus">Contact Us</NavLink></a></p>
                </div>
            </section>
        </div>
    );
}

export default Faqs;