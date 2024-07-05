/*---------------------------------------------------------------------------------------
  Modal Component
  This component represents a modal dialog for connecting wallets in the Jebat AI application.

  Purpose:
  - Displays a modal dialog when isOpen is true, allowing users to connect their wallets.
  - Provides options to connect MetaMask or other wallets, and a close button.

  Dependencies:
  - React: Frontend JavaScript library for building user interfaces.

  Props:
  - isOpen: Boolean flag to determine if the modal should be displayed.
  - onClose: Function to close the modal.
  - onConnectMetaMask: Function to handle the connect with MetaMask action.
  - onConnectOtherWallet: Function to handle the connect with other wallet action.

  Design:
  - Uses Tailwind CSS for styling, with a fixed overlay and centered modal box.
  - Styled with rounded corners and padding for a clean user interface.

  Content:
  - Modal title "Connect Wallet".
  - Buttons for connecting with MetaMask and other wallets.
  - Close button to dismiss the modal.

  Designed to facilitate user interaction for wallet connection within Jebat AI,
  enhancing usability and user experience.

---------------------------------------------------------------------------------------*/
import React from 'react';

const Modal = ({ isOpen, onClose, onConnectMetaMask, onConnectOtherWallet }) => {
  // Render null if modal is not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        {/* Modal title */}
        <h2 className="text-xl mb-4">Connect Wallet</h2>
        {/* Button to connect with MetaMask */}
        <button
          className="bg-green-500 text-black rounded-full py-2 px-6 mb-4 w-full"
          onClick={onConnectMetaMask}
        >
          Connect MetaMask
        </button>
        {/* Button to connect with other wallets */}
        <button
          className="bg-green-500 text-black rounded-full py-2 px-6 w-full"
          onClick={onConnectOtherWallet}
        >
          Connect Other Wallet
        </button>
        {/* Button to close the modal */}
        <button
          className="mt-4 text-red-500 underline"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
