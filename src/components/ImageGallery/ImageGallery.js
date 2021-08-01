import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';
import '../../style.css';

const ImageGallery = ({ hits, onOpenModal }) => {
    return (
        <ul className="ImageGallery">
            {hits.map(({ id, webformatURL, largeImageURL }) => {
                const handleImgClick = () => onOpenModal(largeImageURL);
                return (
                    <li key={id}>
                        <ImageGalleryItem
                            webformatURL={webformatURL}
                            onClick={handleImgClick}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

ImageGallery.propTypes = {
    hits: PropTypes.array.isRequired,
    onOpenModal: PropTypes.func.isRequired,
};

export default ImageGallery;