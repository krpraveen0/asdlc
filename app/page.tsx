"use client";

import { Box } from "@mui/material";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { CoursesOverview } from "@/components/home/CoursesOverview";
import { Pricing } from "@/components/home/Pricing";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <CoursesOverview />
      <Pricing />
      <Footer />
    </Box>
  );
}
