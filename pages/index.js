import Layout from "@/components/Layout";
export default function Home() {
  return (
    <Layout title="Seller">
      <div className="w-full mb-10">
        <div className="w-[1168px] mx-auto">
          <div className="w-full bg-white py-4">
            <div className="flex xl:flex-row flex-col-reverse xl:space-x-11">
              <div className="xl:w-[824px]">
                <div className="title w-full mb-4">
                  <h1 className="text-[22px] font-semibold mb-1">
                    Seller Information
                  </h1>
                  <p className="text-[15px]">
                    Fill the form below or write us .We will help you as soon as
                    possible.
                  </p>
                </div>
                <div className="input-area">
                  <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                    <div className="input-com w-full h-full">
                      <label
                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                        for="fname"
                      >
                        First Name*
                      </label>
                      <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                        <input
                          placeholder="Demo Name"
                          className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                          type="text"
                          id="fname"
                        />
                      </div>
                    </div>

                    <div className="input-com w-full h-full">
                      <label
                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                        for="lname"
                      >
                        Last Name*
                      </label>
                      <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                        <input
                          placeholder="Demo Name"
                          className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                          type="text"
                          id="lname"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                    <div className="input-com w-full h-full">
                      <label
                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                        for="fname"
                      >
                        Email Address*
                      </label>
                      <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                        <input
                          placeholder="Demo@gmail.com"
                          className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                          type="text"
                          id="fname"
                        />
                      </div>
                    </div>

                    <div className="input-com w-full h-full">
                      <label
                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                        for="lname"
                      >
                        Phone*
                      </label>
                      <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                        <input
                          placeholder="0213 *********"
                          className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                          type="text"
                          id="lname"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-item mb-5">
                    <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">
                      Country*
                    </h6>
                    <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center mb-2">
                      <span className="text-[13px]">Select Country</span>
                      <span>
                        <svg
                          width="11"
                          height="7"
                          viewBox="0 0 11 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z"
                            fill="#222222"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="input-item mb-5">
                    <div className="input-com w-full h-full">
                      <label
                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                        for="address"
                      >
                        Address*
                      </label>
                      <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                        <input
                          placeholder="Your address Here"
                          className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                          type="text"
                          id="address"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="title w-full mb-4">
                  <h1 className="text-[22px] font-semibold mb-1">
                    Shop Information
                  </h1>
                  <p className="text-[15px]">
                    Fill the form below or write us .We will help you as soon as
                    possible.
                  </p>
                </div>
                <div className="input-area">
                  <div className="mb-5">
                    <div className="input-com w-full h-full">
                      <label
                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                        for="shopname"
                      >
                        Shop Name*
                      </label>
                      <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                        <input
                          placeholder="Demo Name"
                          className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                          type="text"
                          id="shopname"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="input-com w-full h-full">
                      <label
                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                        for="shopaddress"
                      >
                        Address*
                      </label>
                      <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                        <input
                          placeholder="Your address Here"
                          className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                          type="text"
                          id="shopaddress"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-[30px]">
                    <div className="input-com w-full h-full">
                      <label
                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                        for="password"
                      >
                        Password*
                      </label>
                      <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                        <input
                          placeholder="● ● ● ● ● ●"
                          className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                          type="password"
                          id="password"
                        />
                      </div>
                    </div>
                    <div className="input-com w-full h-full">
                      <label
                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                        for="repassword"
                      >
                        Re-enter Password*
                      </label>
                      <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                        <input
                          placeholder="● ● ● ● ● ●"
                          className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                          type="password"
                          id="repassword"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 mb-10 xl:mb-0">{/* Azhar */}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
