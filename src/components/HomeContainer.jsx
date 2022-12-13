import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg1 from "../img/heroBg1.png";
import { heroData } from "../utils/data";
import Footer  from "./fotter";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-amber-800 font-semibold">
            Delivery available 
          </p>
          <div className="w-8 h-8 bg-orange-400 rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[5.5rem] lg:text-[4.5rem] font-bold tracking-wide text-amber-900">
          Tuna & the Crab
          <span className="text-black text-[3rem] lg:text-[3rem]">
            Galle
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-justify md:w-[80%]">
          Situated in the Galle Dutch Hospital within the Galle Fort, The Tuna & The Crab, a Dharshan Munidasa creation, combines the best of Nihonbashi and Ministry of Crab. With indoor seating for 40 people, this hybrid Seafood and Japanese restaurant serves a selection of sushi, seafood and steak dishes.
        </p>

        <button type="button " className=" bg-gradient-to-br  from-amber-500 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg1}
          className=" ml-auto h-500 w-full lg:w-auto lg:h-400"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-5 flex-wrap">
                   <div className=" text-[2.5rem] gp-4 font-bold tracking-wide text-black justify-center">Today's Special</div> 

          
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="  lg:w- min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-5 lg:-mt-20 "
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[10px] lg:text-sm text-black font-semibold my-1 lg:my-0">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">Rs.</span> {n.price}
                </p>

                      

              </div>
              
            ))}
        </div>
      </div>
    </section>
    
  );
};

export default HomeContainer;
