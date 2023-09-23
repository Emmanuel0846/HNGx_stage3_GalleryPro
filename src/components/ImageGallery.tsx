import { useState, useEffect, useRef } from 'react';
import UseFirestore from '../hooks/useFirestore';
import Sortable from 'sortablejs';

const ImageGallery = () => {
  const { docs: images, isLoading } = UseFirestore('images');
  const [searchQuery, setSearchQuery] = useState('');
  const galleryRef = useRef(null);
  const [enlargedImg, setEnlargedImg] = useState<string | null>(null);

  const filteredImages = images.filter((image) =>
    image.userEmail.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (galleryRef.current) {
      new Sortable(galleryRef.current, {
        // SortableJS options
        onEnd: (evt) => {
          const updatedImages = [...filteredImages];
          const [movedItem] = updatedImages.splice(evt.oldIndex as number, 1);
          updatedImages.splice(evt.newIndex as number, 0, movedItem);
        },
      });
    }
  }, [filteredImages]);

  
  if (isLoading) {
    return (
      <div className="text-center mt-10">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  // Function to handle image click and set the enlarged image
  const handleImageClick = (image: string) => {
    setEnlargedImg(image);
  };

  const closeEnlargedImg = () => {
    setEnlargedImg(null);
  };

  return (
    <div>
      {enlargedImg && (
        <button className="close-button" onClick={closeEnlargedImg}>
          Close
        </button>
      )}
      <br/>
  
       
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by user email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <h3 className='red-red'>Click on any image to enlarge</h3>

      <div className="grid md:grid-cols-3 justify-center gap-4 mt-10" ref={galleryRef}>
        {filteredImages.map((image: { imageUrl: string, userEmail: string, createdAt: Date }) => (
          <div
          key={image.imageUrl}
          className={`card move card-compact w-full bg-base-100 shadow-xl ${
            enlargedImg === image.imageUrl ? 'enlarged' : ''
          }`} draggable = {true}
          onClick={() => handleImageClick(image.imageUrl)}
        >
            <figure className="max-h-[17rem]">
              <img className={`my-image ${
            enlargedImg === image.imageUrl ? 'enlarged' : ''
          }`} 
           src={image.imageUrl} alt="photo" />
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
