import { ReactElement } from 'react';

type PortfolioCardProps = {
    title: string,
    subtitle: String,
    imgSrc?: string,
    modalFrameSrc: string,
    modalContent?: ReactElement,
}

export const PortfolioCard = ({
    title,
    subtitle,
    imgSrc,
    modalFrameSrc,
    modalContent,
}: PortfolioCardProps) => {
    return (

        <div className=" w-[65vw] md:w-[70vw] rounded-xl overflow-hidden shadow-lg bg-black/50">
            <div className="relative">

                <div className='flex md:flex-row md:m-0 m-2'>
                    {
                        imgSrc ?
                            <img className="md:w-32 md:h-32 w-8 h-8 rounded-xl object-cover md:m-6 mt-4 " src={imgSrc} alt={title} />
                            : ""}


                    <div className="flex place-content-center md:place-content-start flex-col md:mt-4 m-2 ">
                        <div className="md:text-2xl text-sm md:mb-2 mb-2">{title}</div>
                        <div className="md:text-base text-sm md:mt-4 mt-2 text-white">{subtitle}</div>
                        {
                            modalContent ? modalContent
                                : ""}
                    </div>
                </div>

                <div className="flex place-content-center md:m-4 mx-4 my-2">
                    {
                        modalFrameSrc ?
                            <iframe width="100%" height="250px" src={modalFrameSrc} loading="lazy" />
                            : ""}

                </div>
            </div>
        </div>

    );
};
