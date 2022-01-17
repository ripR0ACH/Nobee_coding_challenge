import React from "react";
import { node, func } from "prop-types";

const CTAWithModal = () => {
  /**
   * Your implementation here
   *
   * The goal is to create a re-useable Modal component that takes in 2 props:
   * - ctaComponent: any button component
   * - modalContent: a function that returns any modal content component. The
   * content component needs to ba able to close the modal from the inside
   */
};

CTAWithModal.propTypes = {
  ctaComponent: node.isRequired,
  modalContent: func.isRequired
};

export default CTAWithModal;
