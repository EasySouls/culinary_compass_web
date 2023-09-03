import Hero from "@/components/Hero";
import SearchSection from "@/components/SearchSection";
import Link from "next/link";

const Home = async () => {
  return (
    <>
      <Hero />
      <SearchSection />
    </>
  );
};

export default Home;
