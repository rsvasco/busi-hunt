import Galleryone from "../components/Galleryone";
import PageHeader from "../components/PageHeader";
import PremiumThreeGallery from "../components/PremiumThreeGallery";
import Tagline from "../components/Tagline";



export default function Gallery() {
  return (
    <>
      <PageHeader  />
      <PremiumThreeGallery />
      <Galleryone />
      <Tagline />
    </>
  );
}