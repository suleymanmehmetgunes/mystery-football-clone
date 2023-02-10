function Content() {
  return (
    <div>
      <div className="flex justify-between items-center py-8">
        <div className="pl-44">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
        <div>
          <a href="#">
            <img src="https://cdn.shopify.com/s/files/1/0513/6164/4711/files/X3_copy_2_c76aad17-e5bc-4245-910e-b3aca6bad2ed.png?v=1652606350&width=90" />
          </a>
        </div>
        <div className="flex items-center justify-center pr-48 space-x-5">
          <div>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
              </svg>
            </button>
          </div>
          <div>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                fill="currentColor"
                class="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex items-center justify-center space-x-4 py-3">
          <li className="no-underline hover:underline text-[14px] px-2">
            <a href="#">Home</a>
          </li>
          <li className="no-underline hover:underline text-[14px] px-2">
            <a href="#">How It Works</a>
          </li>
          <li className="no-underline hover:underline text-[14px] px-2">
            <a href="#">Products</a>
          </li>
          <li className="no-underline hover:underline text-[14px] px-2">
            <a href="#">About Us</a>
          </li>
          <li className="no-underline hover:underline text-[14px] px-2">
            <a href="#">Delivery</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Content;
