import React from "react";
import { Link } from "react-router-dom";
import {
  BsLinkedin,
  BsGithub,
  BsYoutube,
  BsInstagram,
  BsTiktok,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Email Subscribe"
                  aria-label="Email Subscribe"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mc-4">Contects Us</h4>
              <div>
                <address className="text-white fs-5">
                  Demo Store <br />
                  277 Linier way, <br /> Sunnyvale, California <br />
                  94087
                </address>
                <a
                  href="tel:(408)996 1010"
                  className="text-white mt-3 d-block mb-1"
                >
                  (408)996 1010
                </a>
                <a
                  href="Demo@email.com"
                  className="text-white mt-2 d-block mb-0"
                >
                  Demo@email.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="index">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="index">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="index">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="index">
                    <BsYoutube className="fs-4" />
                  </a>
                  <a className="text-white" href="index">
                    <BsTiktok className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mc-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1 ">Refund Policy</Link>
                <Link className="text-white py-2 mb-1 ">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms Of Service</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mc-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1 ">About Us</Link>
                <Link className="text-white py-2 mb-1 ">Faq</Link>
                <Link className="text-white py-2 mb-1">Content</Link>
                <Link className="text-white py-2 mb-1">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mc-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Nathan Li
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
