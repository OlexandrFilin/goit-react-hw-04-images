import React from 'react';
import { WrapImageGallery, MessageNoResult } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { spinerFunc } from '../Loader/Loader';

export const ImageGallery = ({
  gallery,
  onError,
  onSpiner,
  onRenderLoadMore,
}) => {
  const getComponentImagesForRender = () => {
    return gallery.map(ImgItem => {
      return <ImageGalleryItem key={ImgItem.id} ImgItem={ImgItem} />;
    });
  };

  const renderResultQuery = (error, spiner) => {
    if (error) {
      return <h2>Помилка запиту</h2>;
    }
    if (spiner) {
      return (
        <div>
          {spinerFunc()}
          <WrapImageGallery>{getComponentImagesForRender()}</WrapImageGallery>
        </div>
      );
    } else {
      return (
        <div>
          <WrapImageGallery>{getComponentImagesForRender()}</WrapImageGallery>
        </div>
      );
    }
  };

  return gallery.length === 0 ? (
    <MessageNoResult>No result or empty query string </MessageNoResult>
  ) : (
    renderResultQuery(onError, onSpiner, onRenderLoadMore)
  );
};
//}
