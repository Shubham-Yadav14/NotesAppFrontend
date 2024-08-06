import React, { useState, useEffect } from "react";
import Narrow from "./Common/Narrow";
import image1 from "../components/Images/image 2.png";
import image2 from "../components/Images/image 3.png";

export default function Testimonials() {
  const [current, setCurrent] = useState(1);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
        setCurrent((prev) => (prev === 2 ? 1 : 2));
      }, 500); // Duration of the slide-out animation
    }, 3000);

    return () => clearTimeout(timeout);
  }, [current]);

  return (
    <Narrow class="my-10 ">
      <div>
        <div>
          {current === 1 && (
            <div className="flex max-lg:flex-col">
              <div className="w-4/12 max-lg:w-full my-auto">
                <div
                  className={` border rounded-lg p-5 ${
                    animate ? "slide-out-left" : "slide-in-right"
                  }`}
                >
                  Hello
                </div>
               
              </div>

              <div className="w-8/12 max-lg:w-full mx-3">
                <img src={image1} className={`${animate ? "" : "slide-in-testimonials"}`} />
              </div>
            </div>
          )}
          {current === 2 && (
            <div className="flex max-lg:flex-col">
              <div className="w-4/12 max-lg:w-full my-auto">
                <div
                  className={` border rounded-lg p-5 ${
                    animate ? "slide-out-left" : "slide-in-right"
                  }`}
                >
                  Hi
                </div>
                
              </div>

              <div className="w-8/12 max-lg:w-full mx-3">
                <img src={image2} className={`${animate ? "" : "slide-in-testimonials"}`} />
              </div>
            </div>
          )}
        </div>
      </div>
    </Narrow>
  );
}
