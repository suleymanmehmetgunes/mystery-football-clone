import FeedBack from "./FeedBack";

function CustomerThinks() {
  return (
    <div>
      <div className="border-b border-gray-200 border-1 py-2"></div>
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
    </div>
  );
}

export default CustomerThinks;
