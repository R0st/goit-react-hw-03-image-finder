import React from 'react';
import PropTypes from 'prop-types';
import '../../style.css';

export default function ImageGalleryItem({ webformatURL, onClick, tags }) {
    return (<img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={onClick}
    />
    )}
        
ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};