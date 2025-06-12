import CoursesCarousel from "@/components/CoursesCarousel";
import LMSCarousel from "@/components/LMSCarousel";


export default function Home() {
  return (
    <main className="min-h-screen ">
      <LMSCarousel />
      <CoursesCarousel />
    </main>
  );
}
