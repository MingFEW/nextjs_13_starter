
import React from "react";
import { Container } from "@/components/layout";
import Hero from "@/components/Hero";


const page = () => {
  return (
    <>
      <Container>
        <div className="inner py-6">
          <h1 className="text-2xl font-bold mb-2">About us</h1>
          <Hero />
          Content herer
        </div>
      </Container>
    </>
  );
}; 

export default page;
