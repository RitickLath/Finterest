/* eslint-disable react/prop-types */
import React from "react";

const DNewsCard = ({
  title = "Default Title",
  description = "Default Description",
  url = "#",
  publishedAt = new Date().toISOString(),
  source = { name: "Default Source" },
  image,
}) => {
  return (
    <div className="max-w-[500px] rounded overflow-hidden shadow-lg  border-[1px] border-gray-700 text-white m-4">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 pt-4 pb-0">
        <div className="font-bold text-white text-normal mb-2">
          {title}{" "}
          <span className="inline-block text-blue-500 rounded-full px-3 py-0 text-sm font-semibold  mr-2">
            {source.name}
          </span>
          <span className="inline-block text-blue-500 rounded-full px-0 py-0 text-sm font-semibold  mr-2">
            {new Date(publishedAt).toLocaleDateString()}
          </span>
        </div>

        <p className="text-white text-base">{description}</p>
      </div>

      <div className="px-6 py-4">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default DNewsCard;
