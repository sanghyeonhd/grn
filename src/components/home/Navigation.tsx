
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex justify-between px-6 py-4 border-b border-gray-200">
      <Link to="/journal" className="text-sm font-medium">JOURNAL</Link>
      <Link to="/event" className="text-sm font-medium">EVENT</Link>
      <Link to="/awards" className="text-sm font-medium">AWARDS</Link>
      <Link to="/stores" className="text-sm font-medium">STORES</Link>
    </nav>
  );
};

export default Navigation;
