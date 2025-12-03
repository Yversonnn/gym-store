import React from 'react';

function Rating({ value = 0, reviews = 0 }) {
  const fullStars = Math.floor(value);
  const halfStar = value - fullStars >= 0.5;
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    let symbol = '☆';
    if (i <= fullStars) symbol = '★';
    else if (i === fullStars + 1 && halfStar) symbol = '⯨';
    stars.push(<span key={i} style={{ color: '#f4c542', fontSize: '1.1rem' }}>{symbol}</span>);
  }

  return (
    <div className="d-flex align-items-center">
      <div>{stars}</div>
      <small className="text-muted ms-2">({reviews})</small>
    </div>
  );
}

export default Rating;
