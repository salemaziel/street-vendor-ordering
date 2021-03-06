import React from "react";
import { useForm } from "react-hook-form";

const EstimateForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <>
      <form
        name="estimateform"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/#"
        /*className="flex-col w-full p-6 rounded md:px-8 md:py-4 md:w-3/4 lg:w-full md:flex md:mx-auto lg:mr-0 "*/
        className="flex-col w-full py-6 rounded md:py-4 md:w-3/4 lg:w-full md:flex md:mx-auto lg:mr-0 "
        onSubmit={handleSubmit(onSubmit)}
      >
        {/*<h2 className="mb-5 text-lg font-medium text-center text-gray-900 title-font">Get A Free Estimate</h2>*/}
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="estimateform" />

        <div className="flex flex-row w-full mb-4 justify-evenly md:mb-2">
          <div className="relative w-1/2 pr-2 mb-1">
            <label
              htmlFor="full-name"
              className="text-sm leading-7 text-gray-600"
            >
              Name*
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              required
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Name/Nombre"
              ref={register({ required: true, maxLength: 80 })}
            />
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
            </label>
            <input
              type="tel"
              id="tel"
              name="phone"
              required
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="760-555-5555"
              ref={register({ required: true, maxLength: 12 })}
            />
          </div>
        </div>
        <div className="flex flex-row w-full justify-evenly">
          <div className="relative w-1/2 pr-2 mb-3">
            <label htmlFor="number" className="text-sm leading-7 text-gray-600">
              Number of Tamales
            </label>
            {/*<textarea 
            id="message" 
            name="message" 
            className="w-full h-32 px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
            defaultValue={""} />*/}
            <input
              type="number"
              id="tamales"
              name="tamales"
              required
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="0"
              ref={register({ required: true, min: 1, max: 100 })}
            />
          </div>
          <div className="relative w-1/2 pl-2 mb-3">
            <label htmlFor="number" className="text-sm leading-7 text-gray-600">
              Number of Tortas
            </label>
            {/*<textarea 
            id="message" 
            name="message" 
            className="w-full h-32 px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
            defaultValue={""} />*/}
            <input
              type="number"
              id="tortas"
              name="tortas"
              required
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="0"
              ref={register({ required: true, min: 1, max: 100 })}
            />
          </div>
        </div>
        <div className="flex justify-center mx-auto mb-4 text-center">
          <div className="flex flex-col">
          <label htmlFor="text" className="text-sm leading-7 text-gray-600">
            Price
          </label>
          <div className="text-xl text-center text-black">
            $9.99
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

export default EstimateForm;
