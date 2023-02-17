function FeedBack(props) {
  const { name, imgSrc, feedbackStars, feedbackText } = props;

  return (
    <div className="w-[245px] h-[394px] bg-white rounded-md drop-shadow-xl relative transition duration-500 transform hover:-translate-y-1 mx-2">
      <div className="w-[245px] h-[176px] relative">
        <img
          className="w-full h-full object-cover object-center rounded-t-md"
          src={imgSrc}
          alt={name}
        />
        <div className="w-[142px] h-[46px] absolute translate-x-[51.5px] -translate-y-1/2 flex items-center justify-center bg-white rounded-lg drop-shadow-lg">
          <p className="text-[23px]">{feedbackStars}</p>
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-1 py-10">
        <p className="text-center font-semibold">{name}</p>
        <p className="mx-5 text-center">{feedbackText}</p>
      </div>
    </div>
  );
}

export default FeedBack;
