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
                  className={` border rounded-lg p-5 text-2xl leading-normal ${
                    animate ? "slide-out-left" : "slide-in-right"
                  }`}
                >
                  <p className="mb-2">
                    Users can toggle dark mode and light mode as per their convenience.
                  </p>
                  <p className="mb-2">
                    Users can add notes under various groups and colors with a drag and drop feature
                    to easily create clusters.
                  </p>
                  <p>
                    Users can filter notes based on group or color to quickly find relevant
                    information.
                  </p>
                </div>
              </div>

              <div className="w-8/12 max-lg:w-full mx-3">
                <img
                  src={image1}
                  className={`h-[70vh] ${animate ? "" : "slide-in-testimonials"}`}
                />
              </div>
            </div>
          )}
          {current === 2 && (
            <div className="flex max-lg:flex-col">
              <div className="w-4/12 max-lg:w-full my-auto">
                <div
                  className={` border rounded-lg p-5 text-2xl ${
                    animate ? "slide-out-left" : "slide-in-right"
                  }`}
                >
                  <p className="mb-2">
                    Users can select any card and can edit the group, color to which they belong
                  </p>
                  <p>
                    User can also edit the content of the selected note.
                  </p>
                  <p className="mb-2">
                    On deleting notes will move to the trash where they can be viewed for the next 30 days.
                  </p>
                </div>
              </div>

              <div className="w-8/12 max-lg:w-full mx-3">
                <img
                  src={image2}
                  className={`h-[70vh] ${animate ? "" : "slide-in-testimonials"}`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Narrow>
  );
}
