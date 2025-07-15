import Companisonslist from "@/components/Companisonslist";
import CompanionsCard from "@/components/CompanionsCard";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionsCard
          id="123"
          subject="science"
          duration={45}
          name="Neura the brainy Explorer"
          topic="Neutral network of the brain"
          color="#ffda6e"
        />
        <CompanionsCard
          id="456"
          subject="math"
          duration={30}
          name="Derivatives & Integrals"
          topic="Neutral network of the brain"
          color="#99d1db"
        />
        <CompanionsCard
          id="987"
          subject="science"
          duration={45}
          name="Neura the brainy Explorer"
          topic="Neutral network of the brain"
          color="#f4b8e4"
        />
      </section>

      <section className="home-section">
        <Companisonslist />
      </section>
    </main>
  );
};

export default Page;
