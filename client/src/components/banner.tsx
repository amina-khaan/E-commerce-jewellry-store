import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section
      className="relative bg-cover bg-center h-[55vh] bg-no-repeat"
      style={{ backgroundImage: "url('/Banner.png')" }}
    >
      <div className="container mx-auto flex flex-col justify-center h-full text-left text-white relative px-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Diamonds are forever - and so you are..
        </h2>
        <Link href="/products">
          <button className="bg-transparent text-white text-lg py-3 underline underline-offset-4 hover:font-bold">
            Shop Collection
          </button>
        </Link>
      </div>
    </section>
  );
}
