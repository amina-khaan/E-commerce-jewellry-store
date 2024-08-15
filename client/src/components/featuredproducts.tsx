import Image from "next/image";

export default function FeaturedProducts() {
    const products = [
        { name: 'Yellow Gold Infinity Pendant', price: 214, image: '/Rectangle 7.png' },
        { name: 'Diamond & Baroque Pendant', price: 314, image: '/Rectangle 8.png' },
        { name: 'Open Heart Floating Pendant', price: 121, image: '/Rectangle 9.png' },
        { image: '/Rectangle 11.png', featured: true },
    ];

    return (
        <section className="container mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-3 flex flex-col md:flex-row justify-around items-center">
                    {products.slice(0, 3).map((product, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image
                                src={product.image}
                                alt="Products"
                                className="object-cover mb-2"
                                width={200}
                                height={200}
                            />
                            <h3 className="text-lg">{product.name}</h3>
                            <p className="font-bold">${product.price}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center">
                    <Image
                        src={products[3].image}
                        alt="Featured Product"
                        className="object-cover mb-2"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </section>
    );
}
