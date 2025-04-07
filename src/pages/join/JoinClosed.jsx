import { FaWhatsapp, FaHandPointDown } from "react-icons/fa";

const JoinClosed = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#121212] text-white">
      <div className="text-center">
        {/* <FaExclamationTriangle className="mx-auto text-9xl text-yellow-500" /> */}
        {/* <h1 className="text-5xl font-bold mt-4">Oops</h1> */}
        <p className="text-3xl mt-4">Registration for Cohort 3.0 is closed, watch out fo the next cohort...</p>
        <p className="text-2xl mt-2">Join our community to stay updated</p>
        <div className="flex justify-center mt-4 space-x-2">
          <FaHandPointDown className="text-3xl text-yellow-500 animate-bounce" />
          <FaHandPointDown className="text-3xl text-yellow-500 animate-bounce" />
        </div>
        <div className="mt-4">
          <a
            href="https://chat.whatsapp.com/CiPpXYyhtTxLVRkr2zZxlP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-3 bg-green-500 rounded-full hover:bg-green-600"
          >
            <FaWhatsapp className="text-2xl text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinClosed;
