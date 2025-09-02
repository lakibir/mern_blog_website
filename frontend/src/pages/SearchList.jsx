import BlogCard from '@/components/BlogCard';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const SearchList = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('q')?.toLowerCase() || "";  // normalize query
  const { blog } = useSelector((store) => store.blog);

  console.log(blog);

  // safely filter blogs
  const filteredBlogs = blog.filter((b) => {
    const title = b?.title?.toLowerCase() || "";
    const subtitle = b?.subtitle?.toLowerCase() || "";
    const category = b?.category?.toLowerCase() || "";

    return (
      title.includes(query) ||
      subtitle.includes(query) ||
      category === query
    );
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-5">Search Results for: "{query}"</h2>

        <div className="grid grid-cols-1 my-10 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <BlogCard key={blog._id || index} blog={blog} />
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              No results found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchList;
