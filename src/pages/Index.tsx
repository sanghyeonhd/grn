
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel"

const Index = () => {
  const isMobile = useIsMobile();

  const images = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg"
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className={`container mx-auto ${isMobile ? 'px-4' : 'px-8'} py-6`}>
        <h1 className={`text-center font-bold mb-6 ${isMobile ? 'text-2xl' : 'text-4xl'}`}>
          사진 갤러리
        </h1>

        <Carousel className="w-full max-w-screen-lg mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={isMobile ? "-left-2" : "-left-12"} />
          <CarouselNext className={isMobile ? "-right-2" : "-right-12"} />
        </Carousel>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
