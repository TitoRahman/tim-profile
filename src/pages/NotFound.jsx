import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

export default function NotFound() {
  return (
    <div className="layout bg-main-dark h-auto lg:h-screen py-60 lg:my-0">
      <div className="lg:mt-60 text-5xl text-white">Page Not Found</div>
      <Link to="/">
        <Button
          color="white"
          className="mt-8 border-2 border-white text-white w-40 button-slider"
        >
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
