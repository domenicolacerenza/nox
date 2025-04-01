// components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    const handleOverlayClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={handleOverlayClick}
        >
            
            <div className="p-4 rounded-4xl w-10/12 my-8 bg-[#567A6A]/45 backdrop-blur-sm ">
                <button
                    onClick={onClose}
                    className="fixed top-8 right-8 p-2 bg-black/50 text-gray-100/75 rounded-full hover:bg-gray-300/50 transition"
                >
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>

                {children}
            </div>
        </div>
    );
};

export default Modal;
