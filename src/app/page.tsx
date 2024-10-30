"use client";
import AchievementsSection from "@/components/section/AchievementsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-hero-pattern flex flex-col">
      <div className="lg:container pt-16 lg:pt-24 flex-grow sm:px-8 px-4 mx-auto pb-12 sm:pb-0">
        <div className="flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 lg:h-80 h-64 violet-gradient" />
          </div>

          <div>
            <h1 className="font-black lg:text-[64px] sm:text-[50px] xs:text-[40px] text-[30px] text-white">
              Hi, I&apos;m <span className="text-[#915EFF]">MENGHOR</span>
            </h1>
            <p className="text-white font-medium lg:text-[24px] sm:text-[20px] xs:text-[16px] text-[14px] mt-4">
              I&apos;m a Software Development
            </p>
            <p className="text-white font-medium lg:text-[24px] sm:text-[20px] xs:text-[16px] text-[14px] mt-4">
              - Mobile Development{" "}
              <span className="text-[#915EFF]">(Flutter)</span>
            </p>
            <p className="text-white font-medium lg:text-[24px] sm:text-[20px] xs:text-[16px] text-[14px] mt-4">
              - Web Development{" "}
              <span className="text-[#915EFF]">(Next JS)</span>
            </p>
            <p className="text-white font-medium lg:text-[24px] sm:text-[20px] xs:text-[16px] text-[14px] mt-4">
              - Backend Development{" "}
              <span className="text-[#915EFF]">(Spring Boot)</span>
            </p>
          </div>
        </div>
      </div>
      <AchievementsSection />
    </div>
  );
}
