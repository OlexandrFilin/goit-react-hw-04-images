import React, { useState } from 'react';
import { ImageGalleryItemInp } from './ImageGalleryItem.styled';
import { ModalWindow } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ ImgItem }) => {
  const [showmodal, setShowmodal] = useState(false);
  const onCloseModal = () => {
    setShowmodal(false);
  };
  const onOpenModal = () => {
    setShowmodal(true);
  };
  return (
    <div>
      <ImageGalleryItemInp
        width="300"
        height="200"
        src={`${ImgItem.webformatURL}`}
        alt={`${ImgItem.tags}`}
        loading="lazy"
        onClick={onOpenModal}
      />
      <ModalWindow
        showModal={showmodal}
        onCloseModal={onCloseModal}
        tags={ImgItem.tags}
        image={ImgItem.largeImageURL}
      ></ModalWindow>
    </div>
  );
};
