import * as React from 'react';

export interface ISearchBoxProps {
  searchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.SFC<ISearchBoxProps> = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
