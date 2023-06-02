/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import { useState } from "react";

export default function Home() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [shopName, setShopName] = useState("");
  const [shopAddress, setShopAddress] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState(null);
  const [shopLogoURL, setShopLogoURL] = useState(null);
  const [shopCoverURL, setShopCoverURL] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const profileImage = form.profile_img.files[0];
    const logoImage = form.logo_img.files[0];
    const coverImage = form.cover_img.files[0];

    // const image1 = profileImage;
    // const image2 = logoImage;
    // const image3 = coverImage;

    // const formData = new FormData();
    // formData.append("images", image1, image2, image3);
    // const url = `https://api.imgbb.com/1/upload?key=0fd253a0ab31ae997654689deba2da86`;

    const post = {
      firstName: fName,
      lastName: lName,
      email: email,
      phone: phone,
      country: country,
      address: address,
      password: password,
      shopName: shopName,
      shopAddress: shopAddress,
      // photoURL: url,
      // shopLogoURL: url,
      // shopCoverURL: url,
    };

    // fetch(url, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())

    //   .then((imgData) => {
    //     console.log(imgData);
    //     if (imgData.success) {
    //       (post.photoURL = imgData),
    //         (post.shopLogoURL = imgData),
    //         (post.shopCoverURL = imgData),
    //         fetch(`https://server.vercel.app/addProduct`, {
    //           method: "POST",
    //           headers: {
    //             "content-type": "application/json",
    //           },
    //           body: JSON.stringify(post),
    //         })
    //           .then((res) => res.json())
    //           .then((result) => {
    //             // do something here show modal
    //             console.log(result);
    //           });
    //     }
    //   });
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
                      <div className="input-wrapper border border-gray-border w-full h-full overflow-hidden relative ">
                        <input
                          onChange={(e) => setFname(e.target.value)}
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
                          onChange={(e) => setLname(e.target.value)}
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
                          onChange={(e) => setEmail(e.target.value)}
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
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="0213 ***"
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
                    <div className="input-wrapper border border-gray-border w-full h-full overflow-hidden relative ">
                      <input
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Your country Here"
                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                        type="text"
                        id="address"
                      />
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
                          onChange={(e) => setAddress(e.target.value)}
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
                  <h1 className="text-[22px] font-semibold text-qblack mb-1">
                    Shop Information
                  </h1>
                  <p className="text-[15px] text-graytwo">
                    Fill the form below or write us .We will help you as soon as
                    possible.
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
                          onChange={(e) => setShopName(e.target.value)}
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
                          onChange={(e) => setShopAddress(e.target.value)}
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
                          onChange={(e) => setPassword(e.target.value)}
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

              <div className="flex-1 mb-10 xl:mb-0">
                <div className="update-profile w-full mb-9">
                  <h1 className="text-xl tracking-wide font-bold text-qblack flex items-center mb-2">
                    Update Profile
                    <span className="ml-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 0C4.47457 0 0 4.47791 0 10C0 15.5221 4.47791 20 10 20C15.5221 20 20 15.5221 20 10C19.9967 4.48126 15.5221 0.00669344 10 0ZM10 16.67C9.53815 16.67 9.16667 16.2985 9.16667 15.8367C9.16667 15.3748 9.53815 15.0033 10 15.0033C10.4618 15.0033 10.8333 15.3748 10.8333 15.8367C10.8333 16.2952 10.4618 16.67 10 16.67ZM11.6098 10.425C11.1078 10.7396 10.8132 11.2952 10.8333 11.8842V12.5033C10.8333 12.9652 10.4618 13.3367 10 13.3367C9.53815 13.3367 9.16667 12.9652 9.16667 12.5033V11.8842C9.14324 10.6861 9.76907 9.56827 10.8032 8.96586C11.4357 8.61781 11.7704 7.90161 11.6366 7.19545C11.5027 6.52276 10.9772 5.99732 10.3046 5.8668C9.40094 5.69946 8.5308 6.29853 8.36346 7.20214C8.34673 7.30254 8.33668 7.40295 8.33668 7.50335C8.33668 7.96519 7.9652 8.33668 7.50335 8.33668C7.0415 8.33668 6.67002 7.96519 6.67002 7.50335C6.67002 5.66265 8.16265 4.17001 10.0067 4.17001C11.8474 4.17001 13.34 5.66265 13.34 7.50669C13.3333 8.71821 12.674 9.83601 11.6098 10.425Z"
                          fill="#374557"
                          fill-opacity="0.6"
                        ></path>
                      </svg>
                    </span>
                  </h1>
                  <p className="text-sm text-graytwo mb-5">
                    Profile of at least Size
                    <span className="ml-1 text-qblack">300x300</span>. Gifs work
                    too.<span className="ml-1 text-qblack">Max 5mb</span>.
                  </p>
                  <div className="flex xl:justify-center justify-start">
                    <div className="relative">
                      <img
                        src="https://i.ibb.co/ySTzYv4/edit-profileimg.jpg"
                        alt=""
                        className="sm:w-[198px] sm:h-[198px] w-[199px] h-[199px] rounded-full overflow-hidden object-cover"
                      />
                      <input type="file" className="hidden" id="photo-url" />
                      <label
                        htmlFor="photo-url"
                        className="w-[32px] h-[32px] absolute bottom-7 sm:right-0 right-[105px]  hover:bg-[#F539F8] bg-[#F539F8] rounded-full cursor-pointer"
                      >
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.5147 11.5C17.7284 12.7137 18.9234 13.9087 20.1296 15.115C19.9798 15.2611 19.8187 15.4109 19.6651 15.5683C17.4699 17.7635 15.271 19.9587 13.0758 22.1539C12.9334 22.2962 12.7948 22.4386 12.6524 22.5735C12.6187 22.6034 12.5663 22.6296 12.5213 22.6296C11.3788 22.6334 10.2362 22.6297 9.09365 22.6334C9.01498 22.6334 9 22.6034 9 22.536C9 21.4009 9 20.2621 9.00375 19.1271C9.00375 19.0746 9.02997 19.0109 9.06368 18.9772C10.4123 17.6249 11.7609 16.2763 13.1095 14.9277C14.2295 13.8076 15.3459 12.6913 16.466 11.5712C16.4884 11.5487 16.4997 11.5187 16.5147 11.5Z"
                            fill="white"
                          ></path>
                          <path
                            d="M20.9499 14.2904C19.7436 13.0842 18.5449 11.8854 17.3499 10.6904C17.5634 10.4694 17.7844 10.2446 18.0054 10.0199C18.2639 9.76139 18.5261 9.50291 18.7884 9.24443C19.118 8.91852 19.5713 8.91852 19.8972 9.24443C20.7251 10.0611 21.5492 10.8815 22.3771 11.6981C22.6993 12.0165 22.7105 12.4698 22.3996 12.792C21.9238 13.2865 21.4443 13.7772 20.9686 14.2717C20.9648 14.2792 20.9536 14.2867 20.9499 14.2904Z"
                            fill="white"
                          ></path>
                        </svg>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="update-logo w-full mb-9">
                  <h1 className="text-xl tracking-wide font-bold text-qblack flex items-center mb-2">
                    Update Logo
                    <span className="ml-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 0C4.47457 0 0 4.47791 0 10C0 15.5221 4.47791 20 10 20C15.5221 20 20 15.5221 20 10C19.9967 4.48126 15.5221 0.00669344 10 0ZM10 16.67C9.53815 16.67 9.16667 16.2985 9.16667 15.8367C9.16667 15.3748 9.53815 15.0033 10 15.0033C10.4618 15.0033 10.8333 15.3748 10.8333 15.8367C10.8333 16.2952 10.4618 16.67 10 16.67ZM11.6098 10.425C11.1078 10.7396 10.8132 11.2952 10.8333 11.8842V12.5033C10.8333 12.9652 10.4618 13.3367 10 13.3367C9.53815 13.3367 9.16667 12.9652 9.16667 12.5033V11.8842C9.14324 10.6861 9.76907 9.56827 10.8032 8.96586C11.4357 8.61781 11.7704 7.90161 11.6366 7.19545C11.5027 6.52276 10.9772 5.99732 10.3046 5.8668C9.40094 5.69946 8.5308 6.29853 8.36346 7.20214C8.34673 7.30254 8.33668 7.40295 8.33668 7.50335C8.33668 7.96519 7.9652 8.33668 7.50335 8.33668C7.0415 8.33668 6.67002 7.96519 6.67002 7.50335C6.67002 5.66265 8.16265 4.17001 10.0067 4.17001C11.8474 4.17001 13.34 5.66265 13.34 7.50669C13.3333 8.71821 12.674 9.83601 11.6098 10.425Z"
                          fill="#374557"
                          fill-opacity="0.6"
                        ></path>
                      </svg>
                    </span>
                  </h1>
                  <p className="text-sm text-graytwo mb-5">
                    Profile of at least Size
                    <span className="ml-1 text-qblack">300x300</span>. Gifs work
                    too.<span className="ml-1 text-qblack">Max 5mb</span>.
                  </p>
                  <div className="flex xl:justify-center justify-start">
                    <div className="relative">
                      <img
                        src="https://i.ibb.co/P6VDt4q/edit-logoimg.jpg"
                        alt=""
                        className="sm:w-[198px] sm:h-[198px] w-[199px] h-[199px] rounded-full overflow-hidden object-cover"
                      />
                      <input
                        type="file"
                        className="hidden"
                        id="shop-logo-url"
                      />
                      <label
                        htmlFor="shop-logo-url"
                        className="w-[32px] h-[32px] absolute bottom-7 sm:right-0 right-[105px]  hover:bg-[#F539F8] bg-[#F539F8] rounded-full cursor-pointer"
                      >
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.5147 11.5C17.7284 12.7137 18.9234 13.9087 20.1296 15.115C19.9798 15.2611 19.8187 15.4109 19.6651 15.5683C17.4699 17.7635 15.271 19.9587 13.0758 22.1539C12.9334 22.2962 12.7948 22.4386 12.6524 22.5735C12.6187 22.6034 12.5663 22.6296 12.5213 22.6296C11.3788 22.6334 10.2362 22.6297 9.09365 22.6334C9.01498 22.6334 9 22.6034 9 22.536C9 21.4009 9 20.2621 9.00375 19.1271C9.00375 19.0746 9.02997 19.0109 9.06368 18.9772C10.4123 17.6249 11.7609 16.2763 13.1095 14.9277C14.2295 13.8076 15.3459 12.6913 16.466 11.5712C16.4884 11.5487 16.4997 11.5187 16.5147 11.5Z"
                            fill="white"
                          ></path>
                          <path
                            d="M20.9499 14.2904C19.7436 13.0842 18.5449 11.8854 17.3499 10.6904C17.5634 10.4694 17.7844 10.2446 18.0054 10.0199C18.2639 9.76139 18.5261 9.50291 18.7884 9.24443C19.118 8.91852 19.5713 8.91852 19.8972 9.24443C20.7251 10.0611 21.5492 10.8815 22.3771 11.6981C22.6993 12.0165 22.7105 12.4698 22.3996 12.792C21.9238 13.2865 21.4443 13.7772 20.9686 14.2717C20.9648 14.2792 20.9536 14.2867 20.9499 14.2904Z"
                            fill="white"
                          ></path>
                        </svg>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="update-cover w-full">
                  <h1 className="text-xl tracking-wide font-bold text-qblack flex items-center mb-2">
                    Update Cover
                    <span className="ml-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 0C4.47457 0 0 4.47791 0 10C0 15.5221 4.47791 20 10 20C15.5221 20 20 15.5221 20 10C19.9967 4.48126 15.5221 0.00669344 10 0ZM10 16.67C9.53815 16.67 9.16667 16.2985 9.16667 15.8367C9.16667 15.3748 9.53815 15.0033 10 15.0033C10.4618 15.0033 10.8333 15.3748 10.8333 15.8367C10.8333 16.2952 10.4618 16.67 10 16.67ZM11.6098 10.425C11.1078 10.7396 10.8132 11.2952 10.8333 11.8842V12.5033C10.8333 12.9652 10.4618 13.3367 10 13.3367C9.53815 13.3367 9.16667 12.9652 9.16667 12.5033V11.8842C9.14324 10.6861 9.76907 9.56827 10.8032 8.96586C11.4357 8.61781 11.7704 7.90161 11.6366 7.19545C11.5027 6.52276 10.9772 5.99732 10.3046 5.8668C9.40094 5.69946 8.5308 6.29853 8.36346 7.20214C8.34673 7.30254 8.33668 7.40295 8.33668 7.50335C8.33668 7.96519 7.9652 8.33668 7.50335 8.33668C7.0415 8.33668 6.67002 7.96519 6.67002 7.50335C6.67002 5.66265 8.16265 4.17001 10.0067 4.17001C11.8474 4.17001 13.34 5.66265 13.34 7.50669C13.3333 8.71821 12.674 9.83601 11.6098 10.425Z"
                          fill="#374557"
                          fill-opacity="0.6"
                        ></path>
                      </svg>
                    </span>
                  </h1>
                  <p className="text-sm text-graytwo mb-5">
                    Cover of at least Size
                    <span className="ml-1 text-qblack">1170x920</span>.
                  </p>
                  <div className="flex justify-center">
                    <div className="w-full relative">
                      <img
                        src="https://i.ibb.co/KyQ7ggm/edit-coverimg.jpg"
                        alt=""
                        className=" w-full h-[120px] rounded-lg overflow-hidden object-cover"
                      />
                      <input
                        type="file"
                        className="hidden"
                        id="shop-cover-url"
                      />
                      <label
                        htmlFor="shop-cover-url"
                        className="w-[32px] h-[32px] absolute -bottom-4 right-4 bg-[#F539F8] hover:bg-[#F539F8] rounded-full cursor-pointer"
                      >
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.5147 11.5C17.7284 12.7137 18.9234 13.9087 20.1296 15.115C19.9798 15.2611 19.8187 15.4109 19.6651 15.5683C17.4699 17.7635 15.271 19.9587 13.0758 22.1539C12.9334 22.2962 12.7948 22.4386 12.6524 22.5735C12.6187 22.6034 12.5663 22.6296 12.5213 22.6296C11.3788 22.6334 10.2362 22.6297 9.09365 22.6334C9.01498 22.6334 9 22.6034 9 22.536C9 21.4009 9 20.2621 9.00375 19.1271C9.00375 19.0746 9.02997 19.0109 9.06368 18.9772C10.4123 17.6249 11.7609 16.2763 13.1095 14.9277C14.2295 13.8076 15.3459 12.6913 16.466 11.5712C16.4884 11.5487 16.4997 11.5187 16.5147 11.5Z"
                            fill="white"
                          ></path>
                          <path
                            d="M20.9499 14.2904C19.7436 13.0842 18.5449 11.8854 17.3499 10.6904C17.5634 10.4694 17.7844 10.2446 18.0054 10.0199C18.2639 9.76139 18.5261 9.50291 18.7884 9.24443C19.118 8.91852 19.5713 8.91852 19.8972 9.24443C20.7251 10.0611 21.5492 10.8815 22.3771 11.6981C22.6993 12.0165 22.7105 12.4698 22.3996 12.792C21.9238 13.2865 21.4443 13.7772 20.9686 14.2717C20.9648 14.2792 20.9536 14.2867 20.9499 14.2904Z"
                            fill="white"
                          ></path>
                        </svg>
                      </label>
                    </div>
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
