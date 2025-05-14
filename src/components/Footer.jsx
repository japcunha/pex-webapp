import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black/90  p-5 bottom-0 left-0 w-full text-white text-center ">
      <div className="max-w-4xl mx-auto text-center">
        <p> &copy; {new Date().getFullYear()}</p>
          <p>Cafeteria Fino Grão</p>
        <div className="mt-4 space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
