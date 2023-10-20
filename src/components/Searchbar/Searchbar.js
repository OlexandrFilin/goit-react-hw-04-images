import {
  SearchbarHed,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

import React, { Component } from 'react';
import { AiOutlineKey } from 'react-icons/ai';
//ехспортуэмо до App
export default class Searchbar extends Component {
  state = {
    stringSearch: '',
  };
  // для організації пошуку міняєму в стейті рядок для пошуку
  submitForm = evt => {
    evt.preventDefault();
    this.props.onSubmitForm(this.state.stringSearch);
  };

  // для контрольованого вводу
  changeStrSearch = e => {
    this.setState({
      stringSearch: e.target.value,
    });
  };

  render() {
    const { stringSearch } = this.state;
    const { changeStrSearch, submitForm } = this;

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
  }
}
