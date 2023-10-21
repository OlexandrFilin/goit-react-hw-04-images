import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';
import { fetchImages } from '../getDataImage';
import React, { useEffect, useState } from 'react';
import { BtnWraper, BtnLoadMore } from './App.styled';

export const App = () => {
  const [isStringSearch, setStringSearsh] = useState('');
  const [isGallery, setGallery] = useState([]);
  const [isPage, setPage] = useState(1);
  const [isError, setError] = useState(false);
  const [isSpiner, setSpiner] = useState(true);
  const [isLoadMore, setLoadMore] = useState(false);

  // для організації пошуку міняєму в стейті рядок для пошуку
  const onSubmitForm = newStr => {
    setStringSearsh(newStr);
    setPage(1);
    setGallery([]);
  };

  useEffect(() => {
    if (isStringSearch) {
      setSpiner(true);
      try {
        fetchImages(isStringSearch, isPage).then(data => {
          const totalHits = data.totalHits;
          setGallery(prevGallery => [...prevGallery, ...data.hits]);
          setLoadMore(isPage < Math.ceil(totalHits / 12));
        });
      } catch (error) {
        // console.log('error :>> ', error);
        setError(true);
      } finally {
        setSpiner(false);
      }
    }
  }, [isStringSearch, isPage]);

  const onLoadMore = () => {
    setPage(isPage + 1);
  };

  const renderButon = renderLoadMore => {
    if (renderLoadMore) {
      return (
        <BtnWraper>
          <BtnLoadMore type="button" onClick={onLoadMore}>
            Load more
          </BtnLoadMore>
        </BtnWraper>
      );
    } else {
    }
  };
  return (
    <div>
      <SearchBar onSubmitForm={onSubmitForm} />
      <ImageGallery gallery={isGallery} onError={isError} onSpiner={isSpiner} />
      {renderButon(isLoadMore)}
    </div>
  );
};
