import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import loader from '../../images/loader/loader.gif';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/blog.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setBlogs(data.slice(0, 3)); // Slice the first three blogs
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>
       <img src={loader} className="h-[60px]" alt="loader"/>
    </p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="max-w-[65rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">The Blog</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <span key={blog.id} className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-2">
            <div className="aspect-w-16 aspect-h-11">
              <img className="w-full object-cover rounded-xl" src={blog.image} alt="" />
            </div>
            <div className="my-4">
              <h3 className="text-md font-semibold text-gray-800">{blog.title}</h3>
              <p className="mt-5 text-gray-600 truncate-3-lines">
                {blog.description}
              </p>
            </div>
          </span>
        ))}
      </div>

      <div className="mt-12 text-center">
        <span className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
          <NavLink to="/blog">Read more</NavLink>
          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </span>
      </div>
    </div>
  );
};

export default BlogSection;
