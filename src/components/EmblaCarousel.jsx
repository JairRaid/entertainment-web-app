import useEmblaCarousel from "embla-carousel-react";
import TrendingThumbnail from "./TrendingThumbnail";

const EmblaCarousel = ({ slides }) => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: "start", // Align slides to the start
  });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4 md:gap-10 px-4 md:px-10">
        {slides.map((slide, index) => (
          <TrendingThumbnail
            key={index}
            title={slide.title}
            year={slide.year}
            category={slide.category}
            rating={slide.rating}
            thumbnail={slide.thumbnail}
            isBookmarked={slide.isBookmarked}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
