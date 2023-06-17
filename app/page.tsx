import Container from "@/app/components/Container";
import HeroSection from "@/app/components/homePage/HeroSection";
import ThirdSection from "@/app/components/homePage/ThirdSection";
import FourthSection from "@/app/components/homePage/FourthSection";

export default function Home() {
    return (
        <Container>
            <HeroSection/>
            <section className="pt-24 flex items-center justify-center px-0 md:px-5 2xl:px-60">
                <div className="flex justify-center w-[90%]">
                    <div className="w-1/2 relative flex flex-col flex-grow md:flex-grow-0 justify-center items-center p-1 md:p-10">
                        <div className="h-1 w-[100%] bg-gradient-to-r from-violet-700 to-blue-600 "></div>
                        <div className="text-xl text-violet-600 pt-6 text-center whitespace-nowrap">
                            All time sold components
                        </div>
                        <div className="text-3xl text-gray-500 pt-3">
                            1,208,368
                        </div>
                    </div>
                    <div className="hidden xl:flex w-1/2 relative flex-col justify-center items-center p-10">
                        <div className="h-1 w-[100%] bg-gradient-to-r from-blue-500 to-blue-700"></div>
                        <div className="text-xl text-blue-600 pt-6 px-8">
                            5-star reviews
                        </div>
                        <div className="text-3xl text-gray-500 pt-3">
                            17,434
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-32 flex flex-col w-full items-center">
                <div className="flex flex-col items-center justify-center w-[80%] gap-4 md:gap-8">
                    <p className="text-3xl lg:text-4xl xl:text-5xl text-gray-300 text-center">Uncompromising Quality: Discover the Best Components</p>
                    <p className="text-gray-400 text-md lg:text-lg xl:text-xl 2xl:text-2xl text-center">Explore a wide range of top-notch components, meticulously selected for their exceptional quality and performance.</p>
                </div>
                <ThirdSection/>
            </section>

            <section className="pt-24 flex justify-center">
                <FourthSection/>
            </section>
        </Container>
    )
}
