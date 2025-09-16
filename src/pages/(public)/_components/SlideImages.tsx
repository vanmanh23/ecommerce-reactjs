import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type SlideProps = {
    imgUrls: string[]
}

export default function SlideImages({imgUrls}: SlideProps) {
     const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="flex w-full max-w-full h-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-full h-full">
        {imgUrls.map((item, index) => (
          <CarouselItem key={index} className="w-full h-full">
            <div className="p-1 w-full h-full">
                  <img src={item} alt="" className="object-cover w-full h-full rounded-md"/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-20" />
      <CarouselNext  className="mr-28"/>
    </Carousel>
  )
}
