import React from "react";
import { NavLink } from "react-router-dom";

export const Card = ({ post }) => {
  return (
    <div>
      <div>
        <NavLink to={`/blog/${post.id}`}>
          <p className=" font-bold text-xl pt-5 ">{post.title}</p>
        </NavLink>

        <p className=" text-sm pt-1 italic ">
          By <span>{post.author}</span> on
          <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
            <span className="font-bold"> {post.category}</span>
          </NavLink>
        </p>
        <p className="text-sm">Posted On {post.date}</p>
        <p className=" text-base pt-4 ">{post.content}</p>
        <div>
          {post.tags.map((tag, index) => {
            return (
              <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                <span className=" text-blue-700 pr-3 text-sm pt-2 underline ">{`#${tag}`}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};
