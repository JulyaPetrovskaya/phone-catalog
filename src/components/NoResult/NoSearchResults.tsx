import { useSearchParams } from 'react-router-dom';

import { SearchTypes } from '../../types/SearchTypes';
import './NoSearchResults.scss';
import notFoundProduct from '../../Images/NotFound/product-not-found.png';

export const NoSearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get(SearchTypes.Query) || '';

  return (
    <div className="no-search-result">
      <h2 className="no-search-result__title">
        {`No results for "${searchQuery}"`}
      </h2>

      <p className="no-search-result__description">
        Sorry, that filter combination has no results.
        <br />
        Please try different criteria.
      </p>
      <img
        className="no-search-result__image"
        src={notFoundProduct}
        alt="not-found-product"
      />
    </div>
  );
};
