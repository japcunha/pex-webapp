import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black/90 text-white text-center py-4 mt-200">
      <div className="max-w-6xl mx-auto text-center">
        <p> &copy; {new Date().getFullYear()}</p>
          <p>Cafeteria fino grão.</p>
        <div className="mt-4 space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
