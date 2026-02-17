import React, { useState } from "react";
import Modal from "./ModalHome";
import HeroSection from "../Components/HeroSection";


const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="h-[550px] relative">
      <img
        src="https://img.freepik.com/free-photo/abstract-flowing-neon-wave-background_53876-101942.jpg?semt=ais_hybrid&w=740&q=80"
        alt="no background"
        className="h-full w-full object-cover"
      />
      <HeroSection/>

      <div className="absolute inset-0 flex items-center text-center justify-center">
        <h1 className="text-white text-4xl text-center font-bold h-96">
          Welcome to Eduversity
          <p className="text-white text-sm mt-4 font-semibold items-center justify-center">
            This is online learning platform.It is provides distance learning.
            <br></br>
            From guiding students to the Right University and Right Course.
          </p>
        </h1>

        <div className="absolute inset-0 flex justify-center items-center mt-80">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={openModal}
          >
            Click me!
          </button>
          <Modal show={showModal} handleClose={closeModal}>
            <h2>Eduversity</h2>
            <p>Hii This is online learning platform!</p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Home;
