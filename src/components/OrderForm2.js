import React from "react";
import { useForm } from "react-hook-form";






const OrderForm2 = () => {
  const { register, errors, watch } = useForm();
  const watchAllFields = watch();
//  const onSubmit = (data) => console.log(data);
//const handleSubmit = (e) => {
//  e.preventDefault()
//  const form = e.target
//  fetch("/success", {
//    method: "POST",
//    headers: { "Content-Type": "application/x-www-form-urlencoded" },
//    body: encode({
//      "form-name": form.getAttribute("name"),
//      ...state,
//    }),
//  })
//    .then(() => navigate(form.getAttribute("action")))
//    .catch((error) => alert(error))
//}
  console.log(errors);



  return (
    <>
      <form
        name="orderForm"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
        /*className="flex-col w-full p-6 rounded md:px-8 md:py-4 md:w-3/4 lg:w-full md:flex md:mx-auto lg:mr-0 "*/
        className="flex-col w-full py-6 rounded md:py-4 md:w-3/4 lg:w-full md:flex md:mx-auto lg:mr-0 "
        /*onSubmit={handleSubmit(onSubmit)}*/
      >
        
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="orderForm" />

        <div className="flex flex-row w-full mb-4 justify-evenly md:mb-2">
          <div className="relative w-1/2 pr-2 mb-1">
            <label
              htmlFor="full-name"
              className="text-sm leading-7 text-gray-600"
            >
              Name*
            
            <input
              type="text"
              id="full-name"
              name="full-name"
              required
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Name/Nombre"
              ref={register({ required: true, maxLength: 80 })}
              
            />
            </label>
          </div>
          {/*<div className="relative mb-1">
              <label htmlFor="email" className="text-sm leading-7 text-gray-600">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>*/}
          <div className="relative w-1/2 pl-2 mb-1">
            <label htmlFor="phone" className="text-sm leading-7 text-gray-600">
              Phone*
           
            <input
              type="tel"
              id="tel"
              name="phone"
              required
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="760-555-5555"
              ref={register({ required: true, maxLength: 12 })}
            />
             </label>
          </div>
        </div>
        <div className="flex flex-row w-full justify-evenly">
          <div className="relative w-1/2 pr-2 mb-3">
            <label htmlFor="number" className="text-sm leading-7 text-gray-600">
              Number of Tamales
            
            <input
              type="number"
              id="tamales"
              name="tamales"
              required
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="0"
              ref={register({ required: true, min: 1, max: 100 })}
            />
            </label>
          </div>
          <div className="relative w-1/2 pl-2 mb-3">
            <label htmlFor="number" className="text-sm leading-7 text-gray-600">
              Number of Tortas
            
            <input
              type="number"
              id="tortas"
              name="tortas"
              required
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="0"
              ref={register({ required: true, min: 1, max: 100 })}
            />
            </label>
          </div>
        </div>
        <div className="flex flex-col justify-center mb-4 text-center">
          
          <label htmlFor="text" className="text-sm leading-7 text-gray-600">
            Price
          </label>
          <div className="flex flex-row justify-evenly">
          <div className="mx-auto text-xl text-center text-black">
            {watchAllFields.tamales ? (<p>${[watchAllFields.tamales * 2]}</p>) : ("")}
          </div>
          <div className="mx-auto text-xl text-center text-black">
            {watchAllFields.tortas ? (<p> ${[watchAllFields.tortas * 5]}</p>) : ("")}
          </div>
          </div>
        </div>


        <input
          type="submit"
          className="w-full px-8 py-2 text-lg text-white bg-red-800 border-0 rounded cursor-pointer focus:outline-none hover:bg-green-600"
          value="Submit"
        ></input>
      </form>
    </>
  );
};

export default OrderForm2;
