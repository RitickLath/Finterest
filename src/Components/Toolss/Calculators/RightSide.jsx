import React, { useContext, useEffect } from "react";
import { ArrayContext } from "../../../Layout";
import NewsCard from "../NewsCard";

const RightSide = () => {
  const { array } = useContext(ArrayContext);
  useEffect(() => {}, [array]);
  return (
    <div className="hidden lg:block text-white mt-4">
      {array.length ? (
        <div>
          <NewsCard
            title={array[Math.floor(Math.random() * 10)].title}
            description={array[Math.floor(Math.random() * 10)].description}
            content={array[Math.floor(Math.random() * 10)].content}
            url={array[Math.floor(Math.random() * 10)].url}
            image={array[Math.floor(Math.random() * 10)].image}
            publishedAt={array[Math.floor(Math.random() * 10)].publishedAt}
            source={array[Math.floor(Math.random() * 10)].source}
          />
          <NewsCard
            title={array[Math.floor(Math.random() * 10)].title}
            description={array[Math.floor(Math.random() * 10)].description}
            content={array[Math.floor(Math.random() * 10)].content}
            url={array[Math.floor(Math.random() * 10)].url}
            image={array[Math.floor(Math.random() * 10)].image}
            publishedAt={array[Math.floor(Math.random() * 10)].publishedAt}
            source={array[Math.floor(Math.random() * 10)].source}
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
