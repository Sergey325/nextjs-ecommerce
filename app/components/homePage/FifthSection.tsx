import FifthSectionItem from "@/app/components/homePage/FifthSectionItem";

type Props = {

};

const FifthSection = (props: Props) => {
    return (
        <div className="text-3xl lg:text-4xl xl:text-5xl text-gray-300 text-center w-full">
            Backed by the best
            <div className="pt-14 grid grid-cols-2  md:grid-cols-3 justify-center items-center">
                <FifthSectionItem/>
                <FifthSectionItem/>
                <FifthSectionItem/>
                <FifthSectionItem/>
                <FifthSectionItem/>
                <FifthSectionItem/>
            </div>
        </div>
    );
};

export default FifthSection;