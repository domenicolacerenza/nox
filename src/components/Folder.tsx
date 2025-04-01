"use client"; 

import React, { ReactElement, useState } from 'react';
import Modal from '@/components/Modal'; 

type FolderProps = {
    title: string,
    modalWindow?: ReactElement,
}

export const Folder = ({
    title,
    modalWindow,

}: FolderProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button
                onClick={openModal}
                className="flex items-center justify-center p-4  h-12 place-items-center rounded-4xl backdrop-blur-sm bg-[#567A6A]/45 hover:bg-gray-300/50 transition text-white text-2xl">
                {title}
            </button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className='max-h-[80vh]'>
                    <h1 className="font-semibold md:text-5xl text-2xl text-center md:mb-8 m-2 text-white">{title}</h1>
                    <div className="max-h-[70vh] overflow-y-auto">
                        <div className="flex flex-wrap mx-auto place-content-center md:gap-8 gap-4 mb-4 p-2">
                            {modalWindow}
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
