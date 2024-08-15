import Image from "next/image";
import Link from "next/link";

export default function CategoryBar() {
    // Array of image sources
    const brandImages = [
      '/brand01.png',
      '/brand02.png',
      '/brand04.png',
      '/brand05.png',
      '/brand06.png',
      '/brand07.png',
      '/brand08.png',
      '/brand09.png',
      '/brand10.png',
      '/brand11.png'
    ];

    // Array of URLs corresponding to each brand
    const brandLinks = [
      '/products/brand01',
      '/products/brand02',
      '/products/brand04',
      '/products/brand05',
      '/products/brand06',
      '/products/brand07',
      '/products/brand08',
      '/products/brand09',
      '/products/brand10',
      '/products/brand11'
    ];

    return (
      <div className="container mx-auto px-4 py-4 bg-white">
        <div className="flex items-center overflow-x-auto whitespace-nowrap scrollbar-hidden">
          {brandImages.map((src, index) => (
            <Link key={index} href={brandLinks[index]} className="flex-shrink-0 mx-6">
              <Image
                src={src}
                alt={`Brand ${index + 1}`}
                width={100}
                height={40}
              />
            </Link>
          ))}
        </div>
      </div>
    );
}
