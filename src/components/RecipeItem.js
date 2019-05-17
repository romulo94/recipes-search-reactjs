import React from 'react';
import PropTypes from 'prop-types';

const withHighlight = (text, highlight = '') => {
  if (highlight === '') {
    return text;
  }
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

  return parts.map(part => (part.toLowerCase().includes(highlight.toLowerCase()) ? (
    <mark>{part}</mark>
  ) : (
    part
  )));
};

const RecipeItem = ({ recipe, highlight }) => (
  <div className="col-sm-3 mt-4">
    <div className="card">
      <a href={recipe.href}>
        <img
          className="card-img-top img-fluid"
          src={recipe.thumbnail}
          alt={recipe.title}
        />
      </a>
      <div className="card-body">
        <h5 className="card-title mark-text">
          {withHighlight(recipe.title, highlight)}
        </h5>
        <p className="card-text">
          <strong>Ingredients: </strong>
          <span className="mark-text">
            {withHighlight(recipe.ingredients, highlight)}
          </span>
        </p>
      </div>
    </div>
  </div>
);

RecipeItem.propTypes = {
  highlight: PropTypes.string.isRequired,
  recipe: PropTypes.shape({
    href: PropTypes.string,
    title: PropTypes.string,
    ingredients: PropTypes.string,
  }).isRequired,
};

export default RecipeItem;
