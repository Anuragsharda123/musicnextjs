'use client';

import React from "react";
import { NextPage } from "next";
import HeroSection from '@/components/HeroSection';
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpComingWebinars from "@/components/UpComingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

const Home:NextPage = () => {
  return (
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection />
    <FeaturedCourses />
    <WhyChooseUs />
    <MusicSchoolTestimonials />
    <UpComingWebinars />
    <Instructors />
    <Footer />
  </main>
      );
}

export default Home;