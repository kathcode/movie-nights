import PropTypes from 'prop-types';
import Filters from '../Filters';
import imgLike from '../../assets/images/like.svg';
import './banner.scss';

const Banner = ({
  imgUrl,
  imgAlt,
  genresList,
  date,
  title,
  description
}) => {
  return (
    <section className="row banner mt-5">
      <div className="col-xs-12 col-lg-6 p-0">
        {imgUrl &&
          <img className="img-fluid banner-image" src={imgUrl} alt={imgAlt} />
        }
        {!imgUrl && <div>No image found</div>}
      </div>
      <div className="col description">
        <Filters filterList={genresList} />
        <small>{date}</small>
        <h2 className="title mt-3 mb-5">{title}</h2>
        <p className="mb-5">{description}</p>
        <button className="banner-button mt-1">
          Vote for this movie
          <img className="ps-3" src={imgLike} alt="Like" />
        </button>
      </div>
    </section>
  )
}

Banner.propTypes = {
  imgUrl: PropTypes.string,
  imgAlt: PropTypes.string,
  genresList: PropTypes.arrayOf(PropTypes.objectOf({
    id: PropTypes.string,
    name: PropTypes.string
  })),
  date: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

export default Banner