import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoGalleryProps {
  title: string;
  photos: { src: string; caption?: string }[];
}

const PhotoGallery = ({ title, photos }: PhotoGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? photos.length - 1 : selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === photos.length - 1 ? 0 : selectedImageIndex + 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImageIndex === null) return;

    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  // Add event listener for keyboard navigation
  React.useEffect(() => {
    if (selectedImageIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex]);

  return (
    <>
      <section className="py-12">
        <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl bg-muted card-hover cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={photo.src}
                alt={photo.caption || `Photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {photo.caption && (
                <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-sm text-primary-foreground">{photo.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Full Screen Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="relative max-w-7xl max-h-full animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-all duration-200 hover:scale-110"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation Buttons */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-all duration-200 bg-black/20 hover:bg-black/40 rounded-full p-2 hover:scale-110"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-all duration-200 bg-black/20 hover:bg-black/40 rounded-full p-2 hover:scale-110"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Image */}
            <img
              src={photos[selectedImageIndex].src}
              alt={photos[selectedImageIndex].caption || `Photo ${selectedImageIndex + 1}`}
              className="max-w-full max-h-full object-contain animate-in fade-in duration-500"
              key={selectedImageIndex} // Force re-render for animation
            />

            {/* Caption */}
            {photos[selectedImageIndex].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 animate-in slide-in-from-bottom duration-300">
                <p className="text-center animate-in fade-in duration-500 delay-150">{photos[selectedImageIndex].caption}</p>
                <p className="text-center text-sm text-gray-300 mt-1 animate-in fade-in duration-500 delay-300">
                  {selectedImageIndex + 1} of {photos.length}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
