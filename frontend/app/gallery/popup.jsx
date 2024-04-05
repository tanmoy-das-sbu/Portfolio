import React from 'react';
import './page.css'
import Image from 'next/image';
import { formatDate } from '@/utils/dateFormat';

const Modal = ({ image, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content p-4 md:flex justify-center items-center">
                <div className="close absolute top-1 right-2" onClick={onClose}>&times;</div>
                <div className='md:flex md:space-x-4'>
                    <section className="md:w-1/2 md:h-full h-full">
                        <Image src={image.imageUrl} alt={image.altText} width={1336} height={600} className='popup-img' />
                    </section>
                    <section className="md:w-1/2 md:h-full">
                        <h2 className='font-bold text-lg md:text-2xl'>{image.title}</h2>
                        <div>
                            {image.socialTags.map((tag, index) => (
                                <span key={index} className="text-blue-500">{index !== 0 && ' '}#{tag}</span>
                            ))}
                        </div>
                        <br />
                        <p className="text-sm md:text-base">{image.shortDescription}</p>
                        <br />
                        <div className="absolute bottom-2 right-2 text-xs md:text-sm text-gray-500">{formatDate(image.date)}</div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Modal;