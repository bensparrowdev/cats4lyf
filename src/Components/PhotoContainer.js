import React from 'react';
import { Photo } from "./Photo";

export const PhotoContainer = (props) => {

  const displayPhotos = () => {
    return props.photos.map(photos => {
      return <Photo url={photos.url} name={photos.name} price={photos.price} />;
    });
  };

  return (
    <>
      <div>
        <section>{displayPhotos()}</section>
      </div>
    </>
  );
};
