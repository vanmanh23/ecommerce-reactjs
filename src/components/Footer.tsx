import paypal_logo from "./../assets/images/paypal-logo.png"
import maetro_logo from "./../assets/images/maestro-logo.png"
import mastercard_logo from "./../assets/images/mastercard-logo.png"
import visa_logo from "./../assets/images/visa-logo.png"
import * as icons from "./../assets/icons";

export default function Footer() {
  return (
    <footer className="bg-bg-footer">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12">
            <div className="text-gray-700 md:px-0 px-4">
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm text-text-footer">
                Fusce at nisi arcu. Quisque sed dolor nec dui
                scelerisque dapibus. Sed at purus at sem aliquet
                luctus. Sed non massa sit amet sapien porttitor
                ornare. Vivamus pretium, tortor at tempus
                ullamcorper, diam ligula lobortis quam, at
                scelerisque libero lectus ut risus.
              </p>
            </div>

            <div className="text-gray-700 md:px-0 px-4">
              <h3 className="text-lg font-semibold mb-4">HELP & SUPPORT</h3>
              <ul className="text-sm text-text-footer">
                <li className="mb-2"><a href="#">Shipping Info</a></li>
                <li className="mb-2"><a href="#">Free Return - 45 Days</a></li>
                <li className="mb-2"><a href="#">Refund</a></li>
                <li className="mb-2"><a href="#">How To Order</a></li>
                <li className="mb-2"><a href="#">How To Track</a></li>
                <li className="mb-2"><a href="#">Size Guide</a></li>
                <li className="mb-2"><a href="#">SHEAN CLUB</a></li>
                <li className="mb-2"><a href="#">SHEAN VIP</a></li>
                <li className="mb-2"><a href="#">TAX STRATEGY</a></li>
                <li className="mb-2"><a href="#">SHEAN Affiliate</a></li>
                <li className="mb-2"><a href="#">Ranking Policy</a></li>
              </ul>
            </div>

            <div className="text-gray-700 md:px-0 px-4">
              <h3 className="text-lg font-semibold mb-4">Shean Info</h3>
              <ul className="text-sm text-text-footer">
                <li className="mb-2"><a href="#">About SHEAN</a></li>
                <li className="mb-2"><a href="#">Fashion Magazine</a></li>
                <li className="mb-2"><a href="#">Modern Style</a></li>
                <li className="mb-2"><a href="#">Sustainability</a></li>
                <li className="mb-2"><a href="#">Student Discount</a></li>
                <li className="mb-2"><a href="#">Newsroom</a></li>
                <li className="mb-2"><a href="#">Support Community</a></li>
                <li className="mb-2"><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="text-gray-700 md:px-0 px-4">
              <h3 className="text-lg font-semibold mb-4">FIND US ON</h3>
              <div className="flex space-x-4 mb-4 text-text-footer">
                <a href="#" className="hover:text-gray-500">
                    <img src={icons.fb_icon} alt="facebook-Logo" />
                </a>
                <a href="#" className="hover:text-gray-500">
                    <img src={icons.instagram_icon} alt="instagram_icon-Logo" />
                </a>
                <a href="#" className="hover:text-gray-500">
                    <img src={icons.x} alt="x-Logo" />
                </a>
                <a href="#" className="hover:text-gray-500">
                    <img src={icons.snapchat_icon} alt="snapchat_icon-Logo" />
                </a>
                <a href="#" className="hover:text-gray-500">
                    <img src={icons.youtobe_icon} alt="youtobe_icon-Logo" />
                </a>
                <a href="#" className="hover:text-gray-500">
                    <img src={icons.p_icon} alt="youtobe_icon-Logo" />
                </a>
                <a href="#" className="hover:text-gray-500">
                    <img src={icons.tiktok_icon} alt="tiktok_icon-Logo" />
                </a>
                <a href="#" className="hover:text-gray-500">
                    <img src={icons.linkedin_icon} alt="linkedin_icon-Logo" />
                </a>
                <a href="#" className="hover:text-gray-500">
                    <img src={icons.viber_icon} alt="viber_icon-Logo" />
                </a>
                
              </div>
              <p className="text-sm mb-2">Ngu hanh son, Da Nang</p>
              <p className="text-sm mb-4">Contact Us: +1800-996-3210</p>
              <div className="flex space-x-4">
                <img src={paypal_logo} alt="Paypal logo" className="w-10 h-7"/>
                <img src={mastercard_logo} alt="Mastercard logo" className="w-10 h-7"/>
                <img src={visa_logo} alt="Visa logo" className="w-10 h-7"/>
                <img src={maetro_logo} alt="Maestro logo" className="w-10 h-7"/>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-700 text-base font-medium border-t border-gray-200 py-4">
            Copyright | Th Shop Mania | Developed by ThemeHunk
          </div>
        </footer>
  )
}
