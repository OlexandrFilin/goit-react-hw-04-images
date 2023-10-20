import {
  SearchbarHed,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import React, { useState } from 'react';
import { AiOutlineKey } from 'react-icons/ai';

//ехспортуэмо до App
export const SearchBar = ({ onSubmitForm }) => {
  const [stringSearch, setStringSearch] = useState('');
  // для організації пошуку міняєму в стейті рядок для пошуку
  const submitForm = evt => {
    evt.preventDefault();

    onSubmitForm(stringSearch);
  };
  // для контрольованого вводу
  const changeStrSearch = e => {
    setStringSearch(e.target.value);
  };

  return (
    <SearchbarHed>
      <SearchForm onSubmit={submitForm}>
        {/* кнопка пошуку */}
        <SearchFormButton type="submit">
          {/* іконка */}
          <AiOutlineKey size={32} />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={stringSearch}
          name="stringSearch"
          onChange={changeStrSearch}
        />
      </SearchForm>
    </SearchbarHed>
  );
};
