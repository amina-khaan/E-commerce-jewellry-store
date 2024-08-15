import Image from "next/image";

export default function BestSellers() {
    const products = [
      { name: 'Diamond Ring', price: 715, image: '/DRing.png' },
      { name: 'Tube Bangle', price: 500, image: '/TBangle.png' },
      { name: 'Eternity Ring', price: 468, image: '/SRing.png' },
      { name: 'Wave Bangle', price: 350, image: '/WBangle.png' },
    ];
  
    return (
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Our Best Sellers</h2>
        <div className="flex flex-wrap justify-around align-middle">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center text-center py-6 px-6 my-2">
              <Image src={product.image} alt={product.name} className="object-cover mb-4" width={200} height={100}/>
              <h3 className="text-lg mb-2">{product.name}</h3>
              <p className="font-bold">${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  