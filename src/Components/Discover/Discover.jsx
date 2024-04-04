import React, { useContext, useEffect } from "react";

import { ArrayContext } from "../../Layout";
import DNewsCard from "./DNewsCard";

const Discover = () => {
  const { array, setArray } = useContext(ArrayContext);
  useEffect(() => {
    const APICall = async () => {
      try {
        const url =
          "https://gnews.io/api/v4/search?q=stocks&lang=en&country=in&max=20&apikey=7a2023e067d4868c79baccd13cfcb3e2";
        const response = await fetch(url);
        if (!response.ok) {
          console.log("Error i getting response");
        }
        const jsondata = await response.json();
        setArray(jsondata.articles);
        //console.log(jsondata.articles);
      } catch (e) {
        console.log("Error Occured: " + e);
      }
    };
    APICall();
  }, []);

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
