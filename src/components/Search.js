import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const SearchInput = styled(Input.Search)`
    width: 400px;
    margin-bottom: 50px;
`;

const Search = ({ onSearchSubmit }) => (
    <SearchInput
        onSearch={ value => onSearchSubmit(value) }
        placeholder='Your city name'
    />
);

export default Search;