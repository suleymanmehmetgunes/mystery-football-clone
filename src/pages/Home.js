import TopBar from '../components/TopBar';
import BottomBar from "../components/BottomBar";
import SideBar from "../components/SideBar";
import QuantityBar from "../components/QuantityBar";
import FeedBack from "../components/FeedBack";

function Home() {
  return (
    <div className="h-screen overflow-y-scroll font-serif">
      <div className="h-[520px] w-full relative">
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
                    National Mystery Football Shirt Box
                  </a>
                </div>
                <div className="text-base py-2">★★★★★(24)</div>
                <div className="text-base">£39.99 GBP</div>
              </li>
              <li className="text-[14px]">
                <div>
                  <a className="hover:underline" href="#">
                    <img src="https://cdn.shopify.com/s/files/1/0513/6164/4711/products/MysteryBox2_07a65112-6135-426d-86d5-f4da8908c430.png?v=1665140228&width=360" />
                    Kids Mystery Football Shirt Box
                  </a>
                </div>
                <div className="text-base py-2">★★★★★(70)</div>
                <div className="text-base">From £24.99 GBP</div>
              </li>
              <li className="text-[14px]">
                <div>
                  <a className="hover:underline" href="#">
                    <img src="https://cdn.shopify.com/s/files/1/0513/6164/4711/products/MysteryBox2_07a65112-6135-426d-86d5-f4da8908c430.png?v=1665140228&width=360" />
                    2022/23 Mystery Football Shirt Box
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
              <div className="w-[431px] h-auto">
                <div className="w-[431px] h-[49px] my-4">
                  <button
                    type="button"
                    className="hover:w-[434px] hover:h-[51px] hover:border-black w-full h-full bg-black text-white flex items-center justify-center text-[18px]"
                  >
                    Add to cart
                  </button>
                </div>
                <div className="flex items-center justify-center py-4">
                  <a
                    href="#"
                    className="underline underline-offset-4 text-[14px]"
                  >
                    More payment options
                  </a>
                </div>
                <div className="grid grid-flow-col grid-rows-1 py-4">
                  <div className="flex items-start justify-start">
                    <a
                      href="#"
                      className="hover:underline hover:underline-offset-4"
                    >
                      {" "}
                      Share{" "}
                    </a>{" "}
                  </div>
                  <div className="flex items-end justify-end">
                    <a
                      href="#"
                      className="hover:underline hover:underline-offset-4"
                    >
                      View full details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[299px] py-2">
        <ul className="flex items-center justify-center gap-x-1">
          <li>
            <img
              className="h-[298px] w-[298px] object-cover object-center"
              src="https://static.zegsu.com/user-data/instagenie/70f06a3e2854ed59517821e95e588a8a9545c586.webp"
            />
          </li>
          <li>
            <img
              className="h-[298px] w-[298px] object-cover object-center"
              src="https://static.zegsu.com/user-data/instagenie/2a5d893fc775985c977d08260e0bfe456bd26895.webp"
            />
          </li>
          <li>
            <img
              class="h-[298px] w-[298px] object-cover object-center"
              src="https://static.zegsu.com/user-data/instagenie/777acf2d5cce71a0461ba8bb1c05cfdac08aeb0d.webp"
            />
          </li>
          <li>
            <img
              className="h-[298px] w-[298px] object-cover object-center"
              src="https://static.zegsu.com/user-data/instagenie/94203f3a44162be11a1239571a6e1a97effbb56c.webp"
            />
          </li>
          <li>
            <img
              className="h-[298px] w-[298px] object-cover object-center"
              src="https://static.zegsu.com/user-data/instagenie/7fd411296b66d0f30082543c43b7e990a6d46f55.webp"
            />
          </li>
        </ul>
      </div>
      <div className="py-4">
        <div className="relative">
          <img
            className="h-[756px] w-[1520px] object-cover object-center"
            src="https://cdn.shopify.com/s/files/1/0513/6164/4711/files/Warehouse.png?v=1675168682&width=max"
          />
          <div className="w-full h-full absolute inset-0 flex items-center justify-center">
            <div className="grid grid-flow-row grid-cols-1 gap-y-4">
              <p className="text-white text-[24px]">
                THE MOST EXCITING WAY TO BUILD A
              </p>
              <p className="text-center text-white text-[24px]">
                FOOTBALL SHIRT COLLECTION
              </p>
              <div className="flex items-center justify-center">
                <button className="text-white text-[18px] w-[128px] h-[49px] outline-none outline-white outline-[1px] hover:outline-[2.5px]">
                  SHOP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-[34px] py-4">
        What do our customers think?
      </div>
      <div className="text-center text-[16px] py-4 text-gray-500">
        <p>
          Explore all of our customer reviews and take a glimpse at the types of
          shirts you will be receiving in your
        </p>
        <p>very own Mystery Football Shirt box...</p>
      </div>
      <div className="flex tems-center justify-center py-10">
        <FeedBack
          name="Mehmet G."
          imgSrc="https://pbs.twimg.com/profile_images/1623637524173189120/cgkgKnbG_400x400.jpg"
          feedbackStars="★★★★★"
          feedbackText="Great product, would recommend to anyone!"
        />
        <FeedBack
          name="Steve S."
          imgSrc="https://images.loox.io/uploads/2022/7/3/E1OjQbs9n_mid.jpg"
          feedbackStars="★★★★☆"
          feedbackText="First time purchase for son’s 13th birthday. Before he opened the box, he already wanted to order another one!"
        />
        <FeedBack
          name="Ben H."
          imgSrc="https://images.loox.io/uploads/2022/6/25/V1Zl7Vl9n_mid.jpg"
          feedbackStars="★★★★★"
          feedbackText="Excellent service, prices, and delivery. Very impressed. Have recommended to plenty of mates"
        />
        <FeedBack
          name="Joseph M."
          imgSrc="https://images.loox.io/uploads/2022/5/20/NJdLbtlw3_mid.jpg"
          feedbackStars="★★★★★"
          feedbackText="Excellent service, prices, and delivery. Very impressed. Have recommended to plenty of mates"
        />
      </div>
      <BottomBar />
    </div>
  );
}

export default Home;