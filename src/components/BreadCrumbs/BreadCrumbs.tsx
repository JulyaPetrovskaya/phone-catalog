import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '../../Images/Icons/Home.png';
import ArrowRight from '../../Images/Icons/ArrowRight.svg';

import './BreadCrumbs.scss';

export const capitalize = (string: string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
};

type Props = {
  productName?: string;
};

export const BreadCrumbs: React.FC<Props> = ({ productName }) => {
  const { pathname } = useLocation();
  const directory = pathname.split('/')[1];

  return (
    <div data-cy="breadCrumbs" className="breadcrumbs">
      <Link to="/" className="breadcrumbs__icon breadcrumbs__icon--hover">
        <img src={HomeIcon} alt="Home" />
      </Link>

      <div className="breadcrumbs__icon">
        <img src={ArrowRight} alt="ArrowRight" />
      </div>

      {productName ? (
        <>
          <Link to={`/${directory}`} className="breadcrumbs__link">
            {capitalize(directory)}
          </Link>
          <div className="breadcrumbs__icon">
            <img src={ArrowRight} alt="ArrowRight" />
          </div>

          <p className="breadcrumbs__current">{productName}</p>
        </>
      ) : (
        <p className="breadcrumbs__current">{capitalize(directory)}</p>
      )}
    </div>
  );
};
