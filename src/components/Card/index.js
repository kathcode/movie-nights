import PropTypes from 'prop-types';
import Filters from '../Filters';
import imgLike from '../../assets/images/like.svg'
import './card.scss';

const Card = ({
  imgUrl,
  imgAlt,
  genresList,
  date,
  title,
  description
}) => {
  return (
    <article className="card-article col-xs-12 col-md-6 col-lg-4 mb-5">
      <Filters className="card-filters" filterList={genresList} />
      <img className="img-fluid" src={imgUrl} alt={imgAlt} />
      <section>
        <div className="pt-3 pb-3">{date}</div>
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="like">
          <img src={imgLike} alt="Like" />
        </button>
      </section>
    </article>
  )
}

Card.propTypes = {
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

export default Card