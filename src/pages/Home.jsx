import Hero from "@/components/Hero";
import Report from "@/components/Report";
import Statistics from "@/components/Statistics";

function Home() {
  return (
    <div className="p-4">
      <Hero/>
      <Report/>
      <Statistics/>
    </div>
  );
}

export default Home;