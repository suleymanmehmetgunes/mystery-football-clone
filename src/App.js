import BottomBar from "./components/BottomBar";
import TopBar from "./components/TopBar";
import Content from "./components/Content";
import SideBar from "./components/SideBar";
import QuantityBar from "./components/QuantityBar"

function App() {
  return (
    <div className="h-screen overflow-y-scroll font-serif">
      <TopBar />
      <Content />
      <div className="h-[520px] w-[full] relative">
        <img src="https://cdn.shopify.com/s/files/1/0513/6164/4711/files/MysteryFootball_New_Year_Banner_v3.jpg?v=1672997833&width=max" />
        <div className="w-full h-full absolute inset-0 flex items-center justify-center">
          <button className="w-[128px] h-[49px] outline-none outline-white outline-[1px] hover:outline-[2.5px] text-white">
            <a href="#">Shop all</a>
          </button>
        </div>
      </div>
      <div className="w-[1512px] h-[545px]">
        <div className="flex items-center justify-center">
          <div className="w-[1260px] h-[52px]">
            <div className="text-[36px] py-5">Mystery Shirt Boxes</div>
            <ul className="items-center justify-center text-start grid grid-rows-1 grid-flow-col gap-4 py-5">
              <li className="text-[14px]">
                <div>
                  <a className="hover:underline" href="#">
                    <img src="https://cdn.shopify.com/s/files/1/0513/6164/4711/products/MysteryBox2_07a65112-6135-426d-86d5-f4da8908c430.png?v=1665140228&width=360" />
                    Mystery Football Shirt Box
                  </a>
                </div>
                <div className="text-base py-2">★★★★★(398)</div>
                <div className="text-base">£35.99 GBP</div>
              </li>
              <li className="text-[14px]">
                <div>
                  <a className="hover:underline" href="#">
                    <img src="https://cdn.shopify.com/s/files/1/0513/6164/4711/products/MysteryBox2_07a65112-6135-426d-86d5-f4da8908c430.png?v=1665140228&width=360" />
                    Mystery Football Shirt Box
                  </a>
                </div>
                <div className="text-base py-2">★★★★★(24)</div>
                <div className="text-base">£39.99 GBP</div>
              </li>
              <li className="text-[14px]">
                <div>
                  <a className="hover:underline" href="#">
                    <img src="https://cdn.shopify.com/s/files/1/0513/6164/4711/products/MysteryBox2_07a65112-6135-426d-86d5-f4da8908c430.png?v=1665140228&width=360" />
                    Mystery Football Shirt Box
                  </a>
                </div>
                <div className="text-base py-2">★★★★★(70)</div>
                <div className="text-base">From £24.99 GBP</div>
              </li>
              <li className="text-[14px]">
                <div>
                  <a className="hover:underline" href="#">
                    <img src="https://cdn.shopify.com/s/files/1/0513/6164/4711/products/MysteryBox2_07a65112-6135-426d-86d5-f4da8908c430.png?v=1665140228&width=360" />
                    Mystery Football Shirt Box
                  </a>
                </div>
                <div className="text-base py-2">★★★★★(13)</div>
                <div className="text-base">£59.99 GBP</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-[1512px] h-[545px] py-10">
        <div className="flex items-center justify-center">
          <div className="w-[1260px] h-[52px]">
            <div className="text-[36px] py-10">
              How Our Mystery Shirts Work...
            </div>
            <ul className="flex items-center justify-center gap-x-8 py-5">
              <li>
                <img src="https://cdn.shopify.com/s/files/1/0513/6164/4711/files/Select-Your-Size-LARGE.png?v=1667402034&width=275" />
              </li>
              <li>
                <img src="https://cdn.shopify.com/s/files/1/0513/6164/4711/files/Place-your-order-LARGE.png?v=1667402059&width=275" />
              </li>
              <li>
                <img src="https://cdn.shopify.com/s/files/1/0513/6164/4711/files/Receive-your-shirt-LARGE.png?v=1667402073&width=275" />
              </li>
            </ul>
            <div className="py-5 flex items-center justify-center pt-5">
              <div className="w-[139px] h-[49px]">
                <button className="w-full h-full hover:w-[141px] hover:h-[51px] bg-black text-white">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1512px] h-[854px] flex items-center justify-center">
        <div className="w-[1260px] h-[854px] py-20 flex justify-center content-center">
          <div className="flex gap-x-12">
            <div className="w-full h-full border-gray-100 border-2">
              <img
                src="https://cdn.shopify.com/s/files/1/0513/6164/4711/products/MysteryBox2_07a65112-6135-426d-86d5-f4da8908c430.png?v=1665140228&width=580"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="w-full h-full">
              <div className="text-[36px] mb-3">Mystery Football Shirt Box</div>
              <div className="text-[20.8px] mb-2">£35.99 GBP</div>
              <div className="text-[11.2px] mb-3">
                Tax included. Shipping calculated at checkout.
              </div>
              <div className="text-[18px]">
                Select this box and receive a Mystery Football Shirt from any
                club, in any league, in any country. The shirts inside the
                Mystery Shirt Boxes vary from season to season as part of the
                mystery, but there is a chance you could receive a shirt from
                the current 2022/23 season.
              </div>
              <SideBar />
              <QuantityBar />
              <div className="w-[431px] h-[49px] my-4">
              <button type="button" className="hover:w-[434px] hover:h-[51px] hover:border-black w-full h-full bg-black text-white flex items-center justify-center text-[18px]">Add to cart
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
