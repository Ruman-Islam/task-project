import Layout from "@/components/Layout";

export default function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    // const profileImage = form.profile_img.files[0];
    // const logoImage = form.logo_img.files[0];
    // const coverImage = form.cover_img.files[0];

    // const image1 = profileImage;
    // const image2 = logoImage;
    // const image3 = coverImage;

    // const formData = new FormData();
    // formData.append('images', image1, image2, image3);
    // const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

    const firstName = form.fname.value;
    console.log(
      "🚀 ~ file: index.js:26 ~ handleSubmit ~ firstName:",
      firstName
    );
    const lastName = form.lname.value;
    console.log("🚀 ~ file: index.js:28 ~ handleSubmit ~ lastName:", lastName);
    // const productName = form.product_name.value;
    // const email = user?.email;
    // const sellerName = form.seller_name.value;
    // const sellerLocation = form.location.value;
    // const originalPrice = form.original_price.value;
    // const resalePrice = form.resale_price.value;
    // const description = form.description.value;
    // const yearUsed = form.year_used.value;

    // fetch(url, {
    //   method: 'POST',
    //   body: formData
    // })
    //   .then(res => res.json())

    //   .then(imgData => {
    //     console.log(imgData);
    //     if (imgData.success) {

    //       const formDetails = {
    //

    //       }

    //       fetch(`https://server.vercel.app/addProduct`, {
    //         method: 'POST',
    //         headers: {
    //           'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(formDetails)
    //       })
    //         .then(res => res.json())
    //         .then(result => {
    //           console.log(result);
    //         })
    //     }
    //   })
  };

  return (
    <Layout title="Seller">
      <div className="w-full mb-10">
        <div className="w-[1168px] mx-auto">
          <div className="w-full bg-white py-4">
            <form
              className="flex xl:flex-row flex-col-reverse xl:space-x-11"
              onSubmit={handleSubmit}
            >
              <div className="xl:w-[824px]">
                <div className="title w-full mb-4">
                  <h1 className="text-[22px] font-semibold text-black mb-1">
                    Seller Information
                  </h1>
                  <p className="text-[15px] text-gray">
                    Fill the form below or write us .We will help you as soon as
                    possible.
                  </p>
                </div>
                <div className="input-area">
                  <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                    <div className="input-com w-full h-full">
                      <label
                        className="input-label capitalize block  mb-2 text-gray text-[13px] font-normal"
                        for="fname"
                      >
                        First Name*
                      </label>
                      <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                        <div className="input-wrapper border border-gray-border w-full h-full overflow-hidden relative ">
                          <input
                            id="fname"
                            type="text"
                            name="fname"
                            placeholder="Demo Name"
                            className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                          />
                        </div>
                      </div>

                      <div className="input-com w-full h-full">
                        <label
                          className="input-label capitalize block  mb-2 text-gray text-[13px] font-normal"
                          for="lname"
                        >
                          Last Name*
                        </label>
                        <div className="input-wrapper border border-gray-border w-full h-full overflow-hidden relative ">
                          <input
                            placeholder="Demo Name"
                            className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                            type="text"
                            id="lname"
                            name="lname"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                      <div className="input-com w-full h-full">
                        <label
                          className="input-label capitalize block  mb-2 text-gray text-[13px] font-normal"
                          for="fname"
                        >
                          Email Address*
                        </label>
                        <div className="input-wrapper border border-gray-border w-full h-full overflow-hidden relative ">
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
                          className="input-label capitalize block  mb-2 text-gray text-[13px] font-normal"
                          for="lname"
                        >
                          Phone*
                        </label>
                        <div className="input-wrapper border border-gray-border w-full h-full overflow-hidden relative ">
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
                      <h6 className="input-label text-gray capitalize text-[13px] font-normal block mb-2 ">
                        Country*
                      </h6>
                      <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center mb-2">
                        <span className="text-[13px] text-graytwo">
                          Select Country
                        </span>
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
                          className="input-label capitalize block  mb-2 text-gray text-[13px] font-normal"
                          for="address"
                        >
                          Address*
                        </label>
                        <div className="input-wrapper border border-gray-border w-full h-full overflow-hidden relative ">
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
                    <p className="text-[15px] text-graytwo">
                      Fill the form below or write us .We will help you as soon
                      as possible.
                    </p>
                  </div>
                  <div className="input-area">
                    <div className="mb-5">
                      <div className="input-com w-full h-full">
                        <label
                          className="input-label capitalize block  mb-2 text-gray text-[13px] font-normal"
                          for="shopname"
                        >
                          Shop Name*
                        </label>
                        <div className="input-wrapper border border-gray-border w-full h-full overflow-hidden relative ">
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
                          className="input-label capitalize block  mb-2 text-gray text-[13px] font-normal"
                          for="shopaddress"
                        >
                          Address*
                        </label>
                        <div className="input-wrapper border border-gray-border w-full h-full overflow-hidden relative ">
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
                          className="input-label capitalize block  mb-2 text-gray text-[13px] font-normal"
                          for="password"
                        >
                          Password*
                        </label>
                        <div className="input-wrapper border border-gray-border w-full h-full overflow-hidden relative ">
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
                          className="input-label capitalize block  mb-2 text-gray text-[13px] font-normal"
                          for="repassword"
                        >
                          Re-enter Password*
                        </label>
                        <div className="input-wrapper border border-gray-border w-full h-full overflow-hidden relative ">
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
                  <div className="signin-area mb-3">
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="btn-primary bg-black text-sm text-white w-[490px] h-[50px] font-semibold flex justify-center bg-purple items-center"
                      >
                        <span>Create Seller Account</span>
                      </button>
                    </div>
                  </div>
                  <div className="signup-area flex justify-center">
                    <p className="text-sm text-graytwo font-normal">
                      Alrady have an Account?
                      <a href="/login" className="ml-2 text-qblack">
                        Log In
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
