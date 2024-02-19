import Logo from "../assets/LogoGroup.png";
import { useState } from "react";

const HeroHeader = () => {
  const [time, setTime] = useState<any>({});

  const TimeRemove = () => {
    let future = Date.parse("March 24, 2024 11:30:00");
    let now: any = new Date();
    let diff = future - now;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff / (1000 * 60 * 60));
    let mins = Math.floor(diff / (1000 * 60));
    let secs = Math.floor(diff / 1000);

    let d = days;
    let h = hours - days * 24;
    let m = mins - hours * 60;
    let s = secs - mins * 60;
    setTime({ d, h, m, s });
  };

  setInterval(TimeRemove, 1000);

  return (
    <>
      <div className="bg-[#2F3A47E5] relative overflow-hidden">
        <div className="container mx-auto max-w-4xl px-4 py-20 md:py-12 md:px-2 flex justify-between gap-20 flex-col items-center  min-h-screen ">
          <div className=" z-50">
            <img src={Logo} alt="Boborahim Mashrab Maktabi" className="w-60" />
          </div>
          <div className=" z-50">
            <h1 className=" text-3xl sm:text-4xl text-center  md:text-5xl lg:text-6xl text-white">
              “ BM Matematika ”
            </h1>
          </div>
          <div className="flex w-full justify-between z-50 flex-col items-center gap-5 md:flex-row md:justify-around lg:justify-between">
            <article className="text-red-400 text-center">
              - {time?.d}-k {time.h}-s {time?.m}-m
            </article>
            <article className="text-center relative md:ml-2 ">
              <a href="#contact" className="text-white uppercase text-xl ">
                Ro'yhatdan O'tish
              </a>
            </article>
            <article className="text-white">24/03/2024</article>
          </div>
        </div>

        <div className="w-60 z-10 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full absolute bg-gradient-to-r from-[#2F3A47E5]  to-[#636f7ce5] top-[-10%] left-[-10%] anim-a">
          <div className=" h-12 w-12 right-[-20px] top-16 md:w-20 md:h-20 md:top-20 md:right-[-30px] bg-gradient-to-r z-0 from-[#2F3A47E5]  to-[#878d94e5] absolute  rounded-full  anim-b"></div>
        </div>
        <div className="w-60 z-10 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full absolute bg-gradient-to-r from-[#2F3A47E5]  to-[#636f7ce5] bottom-[-10%] right-[-10%] anim-b">
          <div className=" h-12 w-12 right-[-20px] top-16 md:w-20 md:h-20 md:top-20 md:right-[-30px] bg-gradient-to-r z-0 from-[#2F3A47E5]  to-[#878d94e5] absolute  rounded-full  anim-a"></div>
        </div>
      </div>
    </>
  );
};

export default HeroHeader;
