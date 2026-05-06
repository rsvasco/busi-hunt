import DirectorContentSection from "../components/DirectorContentSection";
import DirectorProfile from "../components/DirectorProfile";
import PageHeader from "../components/PageHeader";
import Tagline from "../components/Tagline";



export default function Director() {
  return (
    <>
      <PageHeader  />
      <DirectorProfile />
      <DirectorContentSection />
      <Tagline />
    </>
  );
}