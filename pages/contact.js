import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-h-full my-20">
      <div className="flex flex-col p-10  ">
        <h1 className="font-montserrat font-extrabold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gray-600 hover:scale-110 transition-all duration-500">
          Contact Me!
        </h1>
        <p className="font-montserrat my-10 text-xl">
          If you have a question for me, i would like to contact! Mail me,
          please.
        </p>
        <Link href="mailto:ibrahimsimsek01@gmail.com">
          <button className="font-montserrat bg-gradient-to-r from-blue-500 to-blue-400 text-white px-5  transition-all duration-500 text-4xl rounded-xl ">
            {" "}
            Email
            <i class="fas fa-envelope font-bold hover:font-thin mx-4"></i>
          </button>
        </Link>
        <div className="flex items-center justify-center my-1">
          <a
            target="_blank"
            href="https://scholar.google.com/citations?user=nlupscIAAAAJ&hl=tr&oi=ao"
          >
            <i className="ai ai-google-scholar cursor-pointer font-bold text-4xl mx-4 my-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 hover:scale-110 transition-all duration-500"></i>
          </a>
          <a
            target="_blank"
            href="https://www.researchgate.net/profile/Hueseyin-Icen-2"
          >
            <i className="ai ai-researchgate font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 my-2 hover:scale-110 transition-all duration-500 mx-4"></i>
          </a>

          <a
            target="_blank"
            href="https://publons.com/researcher/3378927/huseyin-icen/"
          >
            <i className="ai ai-publons font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900 my-2 hover:scale-110 transition-all duration-500 mx-4"></i>
          </a>
          <a target="_blank" href="https://orcid.org/0000-0002-8982-8386">
            <i className="ai ai-orcid font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 my-2 hover:scale-110 transition-all duration-500 mx-4"></i>
          </a>

          <a target="_blank" href="https://orcid.org/0000-0002-8982-8386">
            <i className="fa fa-linkedin font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600 my-2 hover:scale-110 transition-all duration-500 mx-4"></i>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center my-0 content-center p-10 shadow-2xl">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJj0_nfo65yhQRSfjVyBGKRgU&key=AIzaSyDPz5n2YW41nc-N36s2eJ8Rf5vobe0OdIo"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          className="max-w-full my-5"
        />
        <span className="font-montserrat">
          Süleymaniye Mahallesi, Prof. Sıddık Sami Onar Cd. İstanbul
          Üniversitesi Merkez Yerleşkesi No:1, 34116 Fatih/İstanbul
        </span>
      </div>
    </div>
  );
};

export default Contact;
