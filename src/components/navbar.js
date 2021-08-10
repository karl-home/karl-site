import React from 'react';

export default function Navbar() {
  return (
    <div id="top" className="flex items-center justify-left h-auto border-b border-white border-opacity-40 bg-cardinal z-40">
      <h1 className="text-2xl font-bold py-3 pl-4">Karl Website</h1>
      <div className="absolute right-0 pr-4 py-3">
        <div className="flex">
          <a href="/">
            <p className="nav-link">
              Home
            </p>
          </a>
          <a href="/people">
            <p className="nav-link">
              People
            </p>
          </a>
          <a href="/modules">
            <p className="nav-link">
              Modules
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}



