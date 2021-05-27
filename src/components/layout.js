import PropTypes from "prop-types";
import React from "react";

//import Header from "./header";

function Layout({ children }) {
  return (
    <>

      <main className="w-full h-full" /*className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16"*/>
        {children}
      </main>

  <footer className="bg-black">
    <div className="flex justify-center p-4 mx-auto">
      <p className="text-base text-center text-white">
        Created By <a href="https://viadelweb.com" target="_blank" rel="follow noopener noreferrer">Via Del Web</a>
      </p>
    </div>
  </footer>

    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
