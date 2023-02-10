import { useState } from "react";

const QuantityBar = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="items-start flex py-3">
    <div className="grid grid-flow-col grid-rows-2">
      <div className="text-gray-600 text-sm">Quantity</div>
      <div className="flex items-center justify-center border-[1.5px] border-gray-700">
      <button
        className="text-gray-700 px-3 py-2 mr-2"
        onClick={handleDecrement}
      >
        -
      </button>
      <div className="px-3">{quantity}</div>
      <button
        className="text-gray-700 px-3 py-2 ml-2"
        onClick={handleIncrement}
      >
        +
      </button>
      </div>
      </div>
    </div>
  );
};

export default QuantityBar;
