import Banner from "@/components/Banner";
import Wrapper from "@/components/Wrapper";
export default function Home() {
  return (
    <main>
      <Banner />
      <Wrapper>
        {/* title start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight ">
            Elevating Fashion, Embracing Style.
          </div>
          <div className="text-md md:text-xl">
            Where fashion meets individuality, explore a world of limitless
            style on our clothing website
          </div>
        </div>
        {/* title end */}
      </Wrapper>
    </main>
  );
}
