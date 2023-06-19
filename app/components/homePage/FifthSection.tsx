import FifthSectionItem from "@/app/components/homePage/FifthSectionItem";

const FifthSection = () => {
    return (
        <div className="text-3xl lg:text-4xl xl:text-5xl text-gray-400 text-center w-full">
            Backed by the best
            <div className="pt-14 grid grid-cols-2 md:grid-cols-3 justify-center items-center">
                <FifthSectionItem src_gray="/images/amd_gray.svg" src_purple="/images/amd_purple.svg"/>
                <FifthSectionItem src_gray="/images/asrock_gray.svg" src_purple="/images/asrock_purple.svg"/>
                <FifthSectionItem src_gray="/images/msi_gray.svg" src_purple="/images/msi_purple.svg"/>
                <FifthSectionItem src_gray="/images/bequite_gray.svg" src_purple="/images/bequite_purple.svg"/>
                <FifthSectionItem src_gray="/images/intel_gray.svg" src_purple="/images/intel_purple.svg"/>
                <FifthSectionItem src_gray="/images/gigabyte_gray.svg" src_purple="/images/gigabyte_purple.svg"/>
                <FifthSectionItem src_gray="/images/corsair_gray.svg" src_purple="/images/corsair_purple.svg"/>
                <FifthSectionItem src_gray="/images/razer_gray.svg" src_purple="/images/razer_purple.svg"/>
                <div className="col-span-2 md:col-span-1 ">
                    <FifthSectionItem src_gray="/images/hyperx_gray.svg" src_purple="/images/hyperx_purple.svg" lastOne/>
                </div>
            </div>
        </div>
    );
};

export default FifthSection;