import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col-reverse xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Left Section - Photo */}
          <div className="mb-8 xl:mb-0">
            <Photo />
          </div>

          {/* Right Section - Text Content */}
          <div className="text-center xl:text-left">
            <span className="text-xl">BCA Student</span>
            <h1 className="h1 mb-6">
              Hello I'm<br /><span className="text-accent">Rachit Pal</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              My journey as a developer is fueled by curiosity and the drive to create meaningful applications that make an impact. Whether it's building web apps, exploring machine learning, or contributing to open-source projects, I strive to learn and grow every day.
            </p>

            {/* Buttons & Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span> 
                <FiDownload className="text-xl" />
              </Button>
              <Social 
                containerStyles="flex gap-6 mt-4" 
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Home;