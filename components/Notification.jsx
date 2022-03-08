import React from 'react'
const Notification = ({ show, setShow }) => {
  return (
    <div>
      <div
        className="absolute top-0 right-0 bottom-0 left-0 z-10 bg-gray-700 py-12 transition duration-150 ease-in-out"
        id="modal"
      >
        <div
          role="alert"
          className="container mx-auto w-11/12 max-w-lg md:w-2/3"
        >
          <div className="relative rounded border border-gray-400 bg-white py-8 px-5 shadow-md md:px-10">
            <div className="mb-3 flex w-full items-center text-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-circle-check"
                width={40}
                height={40}
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx={12} cy={12} r={9} />
                <path d="M9 12l2 2l4 -4" />
              </svg>
              <h1 className="font-lg ml-2 font-bold leading-tight tracking-normal text-gray-800">
                Registration Complete
              </h1>
            </div>
            <p className="mb-5 text-sm font-normal text-gray-600">
              Thank you for completing the registration form, you will receive
              an email with the Zoom link to attend the seminar virtually
            </p>
            <div className="flex w-full items-center">
              <button
                className="ml-3 rounded border bg-gray-100 px-4 py-2 text-xs text-gray-600 transition duration-150 ease-in-out hover:border-gray-400 hover:bg-gray-300 focus:outline-none sm:px-8 sm:text-sm"
                onClick={() => setShow(false)}
              >
                Close
              </button>
            </div>
            <div
              className="absolute top-0 right-0 mt-4 mr-5 cursor-pointer text-gray-400 transition duration-150 ease-in-out hover:text-gray-600"
              onClick={() => setShow(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Close"
                className="icon icon-tabler icon-tabler-x"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Notification
