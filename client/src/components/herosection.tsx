import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-[90vh] bg-no-repeat"
      style={{ backgroundImage: "url('/Main image.png')" }}
    >
      {/* Content over the background image */}
      <div className="container mx-auto flex flex-col justify-center items-center h-full text-center text-white relative z-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          We have the jewelry for you
        </h1>
        <p className="text-base md:text-lg mb-6">
          ... The diamonds are real, but the magic is in your eyes
        </p>
        <Link href="/products"><button className="bg-orange-950 text-white px-6 py-3 rounded-full hover:bg-orange-900 transition">
          Shop Collection
        </button></Link>
        
      </div>
    </section>
  );
}
