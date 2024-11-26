import React from 'react'

const Contact = () => {
  return (
    <footer className="bg-black-300">
      <div className=" max-w-screen-lg mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-20">
          <div className="">
            <h1 className="text-white text-2xl font-semibold mb-5">
              Farrel Alvidi
            </h1>
            <p className="text-neutral-300">
              I’m a passionate high school student learning and growing in web
              development. If you’d like to connect, collaborate, or just share
              ideas, feel free to reach out!
            </p>
          </div>
          <div className="">
            <h1 className="text-white text-xl">Get In Touch</h1>
            <div className="mt-5 space-y-8">
              <input
                type="text"
                className="border-0 border-b-2 border-b-white bg-transparent w-full pb-3  placeholder:text-sm text-sm placeholder:text-gray-200 text-gray-200 focus:outline-none"
                placeholder="Name"
              />
              <input
                type="Email"
                className="border-0 border-b-2 border-b-white bg-transparent w-full pb-3  placeholder:text-sm text-sm placeholder:text-gray-200 text-gray-200 focus:outline-none"
                placeholder="Email"
              />
              <textarea
                rows={6}
                className="border-0 border-b-2 border-b-white bg-transparent w-full  placeholder:text-sm text-sm placeholder:text-gray-200 text-gray-200 focus:outline-none"
                placeholder="Message"
              />
              <button className="mt-10 font-semibold hover:bg-black-100 hover:ring-black-200 hover:ring-2 hover:text-white/80 px-8 py-2 bg-white text-black-200 rounded-sm rounded-tr-lg rounded-bl-lg transition duration-200 ease-linear">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact