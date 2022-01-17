import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";

const MyModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Button
        color="primary"
        variant="contained"
        fullWidth
        disableElevation
        classes={{ root: "mt-4 normal-case" }}
        onClick={handleOpenModal}
      >
        Open Modal
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="flex items-center justify-center"
        open={isModalOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={isModalOpen}>
          <div
            style={{ maxHeight: "90vh" }}
            className="bg-white p-5 w-10/12 rounded-lg shadow overflow-hidden overflow-y-scroll outline-none"
            tabIndex={-1}
          >
            <header className="font-bold text-4xl">Modal Content</header>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium et optio corrupti ipsam, velit illum? Placeat sed
              accusantium libero eos ad atque praesentium. Nisi sunt,
              necessitatibus commodi explicabo odio incidunt!
            </p>

            <Button
              color="primary"
              variant="contained"
              fullWidth
              disableElevation
              classes={{ root: "mt-4 normal-case" }}
              onClick={handleCloseModal}
            >
              Close Modal
            </Button>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default MyModal;
