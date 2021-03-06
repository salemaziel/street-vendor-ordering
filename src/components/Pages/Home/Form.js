import React, { useRef }  from "react";



const Form = () => {
    let form = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form_data = new FormData(form.current);
        let payload = {};
        form_data.forEach(function (value, key) {
            payload[key] = value;
        });
        // console.log("payload", payload);
        // Place your API call here to submit your payload.
    };
    return (
        <div>
            <form ref={form} onSubmit={handleSubmit}>
                <div className="container mx-auto bg-white rounded shadow dark:bg-gray-800">
                    <div className="py-5 border-b border-gray-300 xl:w-full dark:border-gray-700">
                        <div className="flex items-center w-11/12 mx-auto">
                            <p className="text-lg font-bold text-gray-800 dark:text-gray-100">Profile</p>
                            <div className="ml-2 text-gray-600 cursor-pointer dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                    <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-11/12 mx-auto">
                        <div className="mx-auto xl:w-9/12 xl:mx-0">
                            <div className="relative h-48 mt-8 bg-center bg-no-repeat bg-cover rounded">
                                <img src="https://cdn.tuk.dev/assets/photo-1519252161722-1d52d47ac7df.jpg" alt className="object-cover w-full h-full overflow-hidden rounded shadow" />
                                <div className="absolute top-0 right-0 flex items-center px-3 py-2 mt-4 mr-4 bg-white rounded shadow cursor-pointer dark:bg-gray-800">
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Change Cover Photo</p>
                                    <div className="ml-2 text-gray-600 dark:text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                            <line x1={16} y1={5} x2={19} y2={8} />
                                        </svg>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 w-20 h-20 ml-12 -mb-10 bg-center bg-no-repeat bg-cover rounded-full shadow">
                                    <img src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg" alt className="absolute z-0 object-cover w-full h-full overflow-hidden rounded-full shadow" />
                                    <div className="absolute right-0 flex items-center justify-center w-6 h-6 text-gray-600 bg-white rounded-full cursor-pointer dark:bg-gray-800 dark:text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                            <line x1={16} y1={5} x2={19} y2={8} />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full mt-16 xl:w-2/6 lg:w-2/6">
                                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Username
                                </label>
                                <input type="text" id="username" name="username" className="py-3 pl-3 text-sm text-gray-800 bg-transparent border border-gray-300 rounded shadow-sm dark:border-gray-700 focus:outline-none focus:border-indigo-700 dark:text-gray-100" placeholder="@example" required />
                            </div>
                            <div className="flex flex-col w-full mt-8 xl:w-3/5 lg:w-3/5">
                                <label htmlFor="about" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    About
                                </label>
                                <textarea id="about" name="about" className="py-2 pl-3 text-sm text-gray-800 bg-transparent border border-gray-300 rounded shadow-sm resize-none dark:border-gray-700 focus:outline-none focus:border-indigo-700 dark:text-gray-100" placeholder="Let the world know who you are" rows={5} required defaultValue={""} />
                                <p className="w-full pt-1 text-xs text-right text-gray-500">Character Limit: 200</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end w-full px-4 py-4 mt-6 bg-gray-100 rounded-bl rounded-br sm:px-12 dark:bg-gray-700">
                        <button className="px-6 py-2 mr-4 text-sm text-gray-600 transition duration-150 ease-in-out border border-gray-300 rounded btn focus:outline-none dark:text-gray-400 dark:hover:border-gray-500 hover:bg-gray-200">Restore</button>
                        <button className="px-8 py-2 text-sm text-white transition duration-150 ease-in-out bg-indigo-700 rounded hover:bg-indigo-600 focus:outline-none" type="submit">
                            Save
                        </button>
                    </div>
                </div>
            </form>
            ;
        </div>
    );
};
export default Form;
