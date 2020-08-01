import React from 'react';
import ImageGallery from 'react-image-gallery';

const Gallery = () => {
	const images = [
		{
			original: '',
			thumbnail: '',
		},
		{
			original: '',
			thumbnail: '',
		},
		{
			original: '',
			thumbnail: '',
		},
	];
	return (
		<div className='gallery'>
			<h3>TradingRift Gallery</h3>
			<p>Ostatnie sprzedane konta naszych klientów:</p>
			<ImageGallery items={images} />;
		</div>
	);
};

export default Gallery;

// ImageGallery avaible props:
// original - image src url
// thumbnail - image thumbnail src url
// fullscreen - image for fullscreen (defaults to original)
// originalClass - custom image class
// thumbnailClass - custom thumbnail class
// renderItem - Function for custom renderer (see renderItem below)
// renderThumbInner - Function for custom thumbnail renderer (see renderThumbInner below)
// originalAlt - image alt
// thumbnailAlt - thumbnail image alt
// originalTitle - image title
// thumbnailTitle - thumbnail image title
// thumbnailLabel - label for thumbnail
// description - description for image
// imageSet - array of <source> using <picture> element (see app.js for example)
// srcSet - image srcset (html5 attribute)
// sizes - image sizes (html5 attribute)
// bulletClass - extra class for the bullet of the item
// bulletOnClick - callback({item, itemIndex, currentIndex})
// A function that will be called upon bullet click.
// EVERYTHING ELSE IS HERE:
// https://www.npmjs.com/package/react-image-gallery
// EXAMPLE:
// https://github.com/xiaolin/react-image-gallery/blob/master/example/app.js
