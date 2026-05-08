import DirectorContentSection from "../components/DirectorContentSection";
import DirectorHeader from "../components/DirectorHeader";
import DirectorProfile from "../components/DirectorProfile";
import Tagline from "../components/Tagline";



export default function Director() {
  return (
    <>
      <DirectorHeader  />
      <DirectorProfile />
      <Tagline />
      <DirectorContentSection />
      
    </>
  );
}