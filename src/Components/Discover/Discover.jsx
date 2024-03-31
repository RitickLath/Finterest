import React, { useContext, useEffect } from "react";

import { ArrayContext } from "../../Layout";
import DNewsCard from "./DNewsCard";

const Discover = () => {
  const { array } = useContext(ArrayContext);
  useEffect(() => {}, [array]);

  return (
    <div className="bg-gradient-to-r from-[#111111] to-[#0c0c0c] text-white px-2 sm:px-20 pt-8 w-[100%] pb-10">
      <div className="lg:flex flex-wrap">
        {array && array.length ? (
          array.map((element, index) => (
            <DNewsCard
              key={index}
              title={element.title}
              description={element.description}
              content={element.content}
              url={element.url}
              image={element.image}
              publishedAt={element.publishedAt}
              source={element.source}
            />
          ))
        ) : (
          <div>
            <DNewsCard />
            <DNewsCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default Discover;
