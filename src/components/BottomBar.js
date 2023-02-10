function BottomBar(){
    return (
        <div>
        <div className="flex items-center justify-center">
        ...
        </div>
        <div className="flex items-center justify-center space-x-8">
        <a href='#' className="no-underline hover:underline py-[10.5px] text-gray-700 hover:text-black text-sm">Contact Us</a>
        <a href='#' className="no-underline hover:underline py-[10.5px] text-gray-700 hover:text-black text-sm">Privacy Policy</a>
        <a href='#' className="no-underline hover:underline py-[10.5px] text-gray-700 hover:text-black text-sm">Terms of Service</a>
        <a href='#' className="no-underline hover:underline py-[10.5px] text-gray-700 hover:text-black text-sm">Shipping Policy</a>
        <a href='#' className="no-underline hover:underline py-[10.5px] text-gray-700 hover:text-black text-sm">Returns and Refund Policy</a>
        <a href='#' className="no-underline hover:underline py-[10.5px] text-gray-700 hover:text-black text-sm">Sell To Us</a>
        <a href='#' className="no-underline hover:underline py-[10.5px] text-gray-700 hover:text-black text-sm">Products</a>
        </div>
        </div>
    )
}

export default BottomBar;