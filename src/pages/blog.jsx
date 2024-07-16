import React, { useEffect, useState } from "react";

const Blog = () => {
    const [blog, setblog]=useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [error, seterror] = useState(null);

    useEffect(() => {
      const fetchData = async () =>{
        try {
         const response = await fetch('/data/blog.json');
         if (!response.ok) {
            throw new Error('Failed to fetch data');
         } 
         const data = await response.json();
         setblog(data);
         setisLoading(false)
        } catch (error) {
            seterror(error);
            setisLoading(false);
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
    <>
      <div className="mx-auto text-center faq-bg p-4 md:p-10">
        <center>
          <h2 className="text-3xl max-w-xl py-6 text-center font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Blog
          </h2>
        </center>
        </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blog.map((blog) => (
        <div>
          <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-2"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full  object-cover rounded-xl"
                src={blog.image}
                alt=""
              />
            </div>
            <div className="my-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {blog.title}
              </h3>
              <p className="mt-5 text-gray-600">
                {blog.discription}
              </p>
            </div>
            {/* <div className="mt-auto flex items-center gap-x-3">
              <img
                className="size-8 rounded-full"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt=""
              />
              <div>
                <h5 className="text-sm text-gray-800">By Aaron Larsson</h5>
              </div>
            </div> */}
          </a>
        </div>
      ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
