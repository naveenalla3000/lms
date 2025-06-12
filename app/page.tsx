import CoursesCarousel from "@/components/CoursesCarousel";
import LMSCarousel from "@/components/LMSCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <LMSCarousel />
      <CoursesCarousel />
    </main>
  );
}
