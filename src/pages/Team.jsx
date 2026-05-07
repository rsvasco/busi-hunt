import Tagline from "../components/Tagline";
import TeamSection from "../components/TeamSection";
import TeamCard from "../components/TeamCard";
import TeamPageHeader from "../components/TeamPageHeader";


export default function Team() {
  return (
    <>
      <TeamPageHeader  />
      <Tagline />
      <TeamSection />
      <TeamCard />
    </>
  );
}