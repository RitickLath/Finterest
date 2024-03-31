import React, { useContext, useEffect } from "react";
import { ArrayContext } from "../../../Layout";
import NewsCard from "../NewsCard";

const RightSide = () => {
  const { array } = useContext(ArrayContext);
  useEffect(() => {}, [array]);
  return (
    <div className="hidden lg:block text-white mt-4">
      {array && array.length ? (
        <div>
          <NewsCard
            title={array[Math.floor(Math.random() * 9)].title}
            description={array[Math.floor(Math.random() * 9)].description}
            content={array[Math.floor(Math.random() * 9)].content}
            url={array[Math.floor(Math.random() * 9)].url}
            image={array[Math.floor(Math.random() * 9)].image}
            publishedAt={array[Math.floor(Math.random() * 9)].publishedAt}
            source={array[Math.floor(Math.random() * 9)].source}
          />
          <NewsCard
            title={array[Math.floor(Math.random() * 9)].title}
            description={array[Math.floor(Math.random() * 9)].description}
            content={array[Math.floor(Math.random() * 9)].content}
            url={array[Math.floor(Math.random() * 9)].url}
            image={array[Math.floor(Math.random() * 9)].image}
            publishedAt={array[Math.floor(Math.random() * 9)].publishedAt}
            source={array[Math.floor(Math.random() * 9)].source}
          />
        </div>
      ) : (
        <div>
          <NewsCard />
          <NewsCard />
        </div>
      )}
    </div>
  );
};

export default RightSide;
