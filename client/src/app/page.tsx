import CategoryBar from '@/components/categorybar';
import HeroSection from '../components/herosection';
import Navbar from '../components/navbar';
import BestSellers from '@/components/bestsellers';
import ProductGrid from '@/components/productgrid';
import Footer from '@/components/footer';
import Banner from '@/components/banner';
import FeaturedProducts from '@/components/featuredproducts';

export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <CategoryBar/>
      <BestSellers/>
      <ProductGrid/>
      <Banner/>
      <FeaturedProducts/>
      <Footer/>
    </div>
  );
}
