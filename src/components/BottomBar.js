import { Icon } from "../Icons";
import { PaymentIcon } from "../PaymentIcons";

function BottomBar() {
  return (
    <div>
      <div className="border-b border-gray-200 border-1 py-2"></div>
      <div className="flex items-center justify-center py-2">...</div>
      <div className="flex items-center justify-center space-x-8">
        <a
          href="#"
          className="hover:underline hover:underline-offset-4 py-[10.5px] text-gray-700 hover:text-black text-sm"
        >
          Contact Us
        </a>
        <a
          href="#"
          className="hover:underline hover:underline-offset-4 py-[10.5px] text-gray-700 hover:text-black text-sm"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="hover:underline hover:underline-offset-4 py-[10.5px] text-gray-700 hover:text-black text-sm"
        >
          Terms of Service
        </a>
        <a
          href="#"
          className="hover:underline hover:underline-offset-4 py-[10.5px] text-gray-700 hover:text-black text-sm"
        >
          Shipping Policy
        </a>
        <a
          href="#"
          className="hover:underline hover:underline-offset-4 py-[10.5px] text-gray-700 hover:text-black text-sm"
        >
          Returns and Refund Policy
        </a>
        <a
          href="#"
          className="hover:underline hover:underline-offset-4 py-[10.5px] text-gray-700 hover:text-black text-sm"
        >
          Sell To Us
        </a>
        <a
          href="#"
          className="hover:underline hover:underline-offset-4 py-[10.5px] text-gray-700 hover:text-black text-sm"
        >
          Products
        </a>
      </div>
      <div className="flex items-center justify-center py-10"></div>
      <ul className="flex items-center justify-center">
        <li className="px-3">
          <a href="https://twitter.com/mysteryfootba11">
            <Icon name="twitter" />
          </a>
        </li>
        <li className="px-3">
          <a href="https://www.instagram.com/mysteryfootball/">
            <Icon name="instagram" />
          </a>
        </li>
        <li className="px-3">
          <a href="https://tiktok.com/@mysteryfootball">
            <Icon name="tiktok" />
          </a>
        </li>
      </ul>
      <div className="flex items-center justify-center text-[14px] pt-12">
        <a href="https://www.trustpilot.com/review/mysteryfootball.co.uk?utm_medium=trustbox&utm_source=MicroReviewCount">
          <p>
            See our <span className="font-bold">130</span> reviews on Trustpilot
          </p>
        </a>
      </div>
      <div className="border-b border-gray-200 border-1"></div>
      <div className="flex items-center justify-center pt-10">
      <ul className="flex items-center justify-center">
      <li className="px-2">
      <PaymentIcon name="amexpay" />
      </li>
      <li className="px-2">
      <PaymentIcon name="applepay" />
      </li>
      <li className="px-2">
      <PaymentIcon name="dinerspay" />
      </li>
      <li className="px-2">
      <PaymentIcon name="discoverpay" />
      </li>
      <li className="px-2">
      <PaymentIcon name="googlepay" />
      </li>
      <li>
      <PaymentIcon name="maestropay" />
      </li>
      <li className="px-2">
      <PaymentIcon name="masterpay" />
      </li>
      <li className="px-2">
      <PaymentIcon name="paypalpay" />
      </li>
      <li className="px-2">
      <PaymentIcon name="shopifypay" />
      </li>
      <li className="px-2">
      <PaymentIcon name="visapay" />
      </li>
      <li className="px-2">
      <PaymentIcon name="somepay" />
      </li>
      </ul>
      </div>
      <div className="flex items-center justify-center py-3">
      <small className="text-gray-600 text-[10px]">© 2023, Mystery Football Powered by Shopify</small>
      </div>
        
      
    </div>
  );
}

export default BottomBar;
