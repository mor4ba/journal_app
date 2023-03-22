import FavoriteButton from "../Button/favouriteButton";

export default function Entry({
  date,
  heading,
  notes,
  isFavorite,
  id,
  onToggleFavorite,
}) {
  return (
    <article className="entry">
      <time className="entry__date">{date}</time>
      <div className="entry__content">
        <div className="entry__heading__container">
          <h2 className="entry__heading">{heading}</h2>
          <FavoriteButton
            isFavorite={isFavorite}
            id={id}
            onToggleFavorite={onToggleFavorite}
          />
        </div>

        <p className="entry__notes">{notes}</p>
      </div>
    </article>
  );
}
