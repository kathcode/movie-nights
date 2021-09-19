import Filters from '../Filters';
import './card.scss';
import imgLike from '../../assets/images/like.svg'

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

export default Card