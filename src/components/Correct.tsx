import { useState, useEffect, useRef } from 'react';
import UseFirestore from '../hooks/useFirestore';
import Sortable from 'sortablejs';

const ImageGallery = () => {
  const { docs: images, isLoading } = UseFirestore('images');
  const [searchQuery, setSearchQuery] = useState('');
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      new Sortable(galleryRef.current, {});
    }
  }, []);

  const filteredImages = images.filter((image) =>
    image.userEmail.toLowerCase().includes(searchQuery.toLowerCase())
  );

    if (isLoading) {
      return (
        <div className="text-center mt-10">
          <progress className="progress w-56"></progress>
        </div>
      );
    }
  

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by user email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="grid md:grid-cols-3 justify-center gap-4 mt-10" ref={galleryRef}>
        {filteredImages.map((image: { imageUrl: string, userEmail: string, createdAt: Date }) => (
          <div
            key={image.imageUrl}
            className="card move card-compact w-full bg-base-100 shadow-xl"
          >
            <figure className="max-h-[17rem]">
              <img src={image.imageUrl} alt="photo" />
            </figure>
            <div className="card-body">
              <p>Upload by: {image.userEmail}</p>
              <span>Created on: {image.createdAt.toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
