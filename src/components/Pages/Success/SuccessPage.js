import React from "react";
//import OrderForm2 from "../components/Pages/Home/OrderForm2"
import Social from "../Home/socialIcons"

import TamalesLady from "../../../images/tamales-lady.jpg"

function SuccessPage(props){

  return (
    <>



      <section
      className="flex flex-wrap items-center h-auto max-w-4xl py-32 mx-auto lg:h-screen lg:my-0"
      
      >
        {/*Main Col*/}
        <div
          id="profile"
          className="w-full mx-6 bg-white rounded-lg shadow-2xl opacity-75 lg:w-3/5 lg:rounded-lg lg:mx-0 animate-fade-in-fwd"
        >
          <div className="p-4 text-center md:p-12 lg:text-left">
            {/* Image for mobile view*/}
            <div
              className="block w-48 h-48 mx-auto -mt-16 bg-center bg-cover rounded-full shadow-xl lg:hidden bgProfilePic"

            />
            <h1 className="pt-8 text-3xl font-bold lg:pt-0">{props.name}</h1>
            <div className="w-4/5 pt-3 mx-auto border-b-2 border-green-500 opacity-25 lg:mx-0" />
            <p className="flex items-center justify-center pt-4 text-base font-bold lg:justify-start">
              <svg
                className="h-4 pr-4 text-green-700 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>{" "}
              {props.description}
              
            </p>
            <p className="flex items-center justify-center pt-2 text-xs text-gray-600 lg:text-sm lg:justify-start">
              <svg
                className="h-4 pr-4 text-green-700 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>{" "}
              {props.location}
             
            </p>
            <p className="pt-8 text-sm">
              
              {props.optionalBio}
            </p>
            <div className="p-0 text-center">
            <span className="text-4xl font-bold text-center text-green-700">
Order Successful!
</span>
 

      {/*<OrderForm2 />*/}
            </div>
            <Social />
          </div>
        </div>
        {/*Img Col*/}
        <div className="w-full lg:w-2/5">
          {/* Big profile image for side bar (desktop) */}
          <img
            src={TamalesLady}
            className="hidden rounded-none shadow-2xl lg:rounded-lg lg:rounded-r-lg lg:rounded-l-none lg:block animate-fade-in-fwd"
          />
        </div>

      </section>

    </>
  );
}


export default SuccessPage;