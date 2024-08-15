import Image from "next/image";

export default function ProductGrid() {
  const categories = [
    { name: 'Silver Set', image: '/Silver Set.png', link: '#' },
    { name: 'Bracelets', image: '/Bracelets.png', link: '#' },
    { name: 'Earrings', image: '/Ear Rings.png', link: '#' },
    { name: 'Necklaces', image: '/Necklaces.png', link: '#' },
    { name: 'Rings', image: '/Rings.png', link: '#' },
  ];

  return (
    <section className="container mx-auto px-6 py-8">
      <div className="grid md:grid-cols-5 gap-10">
        {categories.map((category, index) => (
          <a key={index} href={category.link} className="block relative group">
            <div className="w-full pt-[100%] relative">
              <Image 
                src={category.image} 
                alt={category.name} 
                className="object-cover absolute " 
                layout="fill" 
              />
            </div>
            <div className="absolute inset-0 bg-orange-950 opacity-10 flex items-center justify-center text-white text-lg font-semibold hover:opacity-75">
              {category.name}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
