import { bannerImageOne } from "@/assets";
import Container from "@/components/Container";

import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Button from "./ui/Button";

const Banner = async () => {
  return (
    <div className="bg-[#115061] py-20 text-themeWhite">
      <Container className="flex items-center justify-between">
        <div className="flex flex-col gap-5">
          <p className="text-base font-semibold">Starting at $274.00</p>
          <h2 className="text-5xl font-bold max-w-[500px]">
            The best tablet Collection 2023
          </h2>
          <p className="text-lg font-bold">
            Exclusive offer
            <span className="text-lightYellow mx-1">-35%</span>
            off this week
          </p>
          <Button
            href={"/"}
            className="flex items-center gap-1 bg-themeWhite text-black rounded-md w-32 px-0 justify-center text-sm font-semibold hover:bg-transparent hover:text-themeWhite py-3 border border-transparent hover:border-white/40 duration-200"
          >
            Shop Now <GoArrowRight className="text-lg" />
          </Button>
        </div>
        <div>
          <Image src={bannerImageOne} alt="bannerImageOne" />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
