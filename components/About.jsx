import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/RajaRajCrop.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-2xl tracking-widest text-[#5651e5] drop-shadow-2xl">
            About
          </p>
          <h2 className="py-4 drop-shadow-2xl">Who I Am</h2>
          {/* <p className='py-2 text-gray-600'>
            / / I am not your average developer
          </p> */}
          <p className="py-2 text-gray-600 text-lg">
            <span className="font-bold text-xl">
              Hey Hii I am Raja raj CEO & Founder Of Placement Wallah. 
            </span>
            I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!


          </p>
          <p className="py-2 text-gray-600 text-lg">
          Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest Projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto rounded-lg flex items-center justify-center p-2 ease-in duration-300 card">
          <Image src={AboutImg} className="rounded-lg" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
