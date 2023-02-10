function TopBar(){
    return (
        <div>
        <a href='./pages/Products'>
        <span className="bg-yellow-400 flex justify-center items-center py-[10.5px] px-[21px] hover:bg-yellow-500">
        <small className="text-sm"> Free UK delivery on all orders over £75 </small>
        </span>
        </a>
        <span className="bg-black text-white text-sm flex justify-center items-center py-[10.5px] px-[21px]"> 
         Shop Now, Pay Later with Klarna, Clearpay & More 
        </span>
        
        </div>
    )
}

export default TopBar;