import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './gallery.css';  // Ensure your gallery.css includes the custom styles below

// Define your images array
const images = [
  { src: "prison-ministry.jpg", caption: "Prison Ministry" },
  { src: "repair-boreholes-wells.jpg", caption: "Repairing Boreholes" },
  { src: "showing-the-jesus-film.jpg", caption: "Showing the Jesus Film" },
  { src: "treating-wounds-skin-issues.jpg", caption: "Treating Wounds & Skin Issues" },
  { src: "preparing-lunch.jpg", caption: "Preparing Lunch" },
  { src: "children-love-jesus-booklets.jpg", caption: "Children with Jesus Booklets" },
  { src: "distributing-blankets-orphans.jpg", caption: "Distributing Blankets to Orphans" },
  { src: "distributing-clothing.jpg", caption: "Distributing Clothing" },
  { src: "distributing-glasses.jpg", caption: "Distributing Reading Glasses" },
  { src: "distributing-new-testaments.jpg", caption: "Giving Out New Testaments" },
  { src: "distributing-school-bags.jpg", caption: "Distributing School Bags" },
  { src: "everyone-gets-a-free-lunch.jpg", caption: "Everyone Gets a Free Lunch" }
];

function GallerySlider() {
  // Group images into sets of three for each slide
  const groupedImages = [];
  for (let i = 0; i < images.length; i += 3) {
    groupedImages.push(images.slice(i, i + 3));
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // React Slick settings. Note: fade only works when slidesToShow is 1.
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true, // fade effect for transitions
    autoplay: true,
    autoplaySpeed: 3000, // interval in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1
  };

  // Open modal when an image is clicked.
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  // Close modal handler.
  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="gallery-slider container py-5">
      <h2 className="mb-4 text-center">Our Gallery</h2>
      <Slider {...settings}>
        {groupedImages.map((group, slideIndex) => (
          <div className="slide" key={slideIndex}>
            <div className="slide-content d-flex flex-wrap">
              {group.map((image, idx) => (
                <div
                  key={idx}
                  className="gallery-item flex-fill p-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleImageClick(image)}
                >
                  <div className="image-container position-relative">
                    <img
                      src={`/${image.src}`}
                      alt={image.caption}
                      className="img-fluid rounded shadow-sm"
                      style={{ objectFit: "cover", width: "100%", height: "200px" }}
                    />
                    <div className="caption-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                      <p className="mb-0 fw-bold text-white">{image.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>

      {/* Modal for a larger image view */}
      {modalOpen && selectedImage && (
        <div className="custom-modal-overlay" onClick={closeModal}>
          <div className="custom-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="custom-modal-close" onClick={closeModal}>×</button>
            <img 
              src={`/${selectedImage.src}`} 
              alt={selectedImage.caption} 
              className="img-fluid modal-image" 
              style={{ maxHeight: '80vh', objectFit: 'contain', display: 'block', margin: '0 auto' }}
            />
            <p className="mt-2 text-center fw-bold">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GallerySlider;
