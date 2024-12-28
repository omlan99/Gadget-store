import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="   text-center border-base-300 border-b px-10 py-4">
        <p className="font-bold text-3xl p-3">Gadget Heaven</p>
        <p className="font-medium  text-[#09080F] text-opacity-60">Leading the way in cutting-edge technolgy and innovation</p>
      </footer>
      <footer className="footer justify-center gap-[166px] p-10">
        <nav>
          <h6 className="font-bold text-xl">Services</h6>
          <a className="text-[#09080F] text-opacity-6">Product Support</a>
          <a className="text-[#09080F] text-opacity-6">Order Tracking</a>
          <a className="text-[#09080F] text-opacity-6">Shipping & Delivery</a>
          <a className="text-[#09080F] text-opacity-6">Returns</a>
        </nav>
        <nav>
          <h6 className="font-bold text-xl">Company</h6>
          <a className="link link-hover text-[#09080F] text-opacity-6">About Us</a>
          <a className="link link-hover text-[#09080F] text-opacity-6">Careers</a>
          <a className="link link-hover text-[#09080F] text-opacity-6">Contact</a>
        </nav>
        <nav>
          <h6 className="font-bold text-xl">Legal</h6>
          <a className="link link-hover text-[#09080F] text-opacity-6">Terms of Service</a>
          <a className="link link-hover text-[#09080F] text-opacity-6">Privacy Policy</a>
          <a className="link link-hover text-[#09080F] text-opacity-6">Cookie Policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
