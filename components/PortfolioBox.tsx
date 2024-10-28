import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number;
        title: string;
        image: string;
        urlGithub: string;
        description: string;
        technologies: string[];
    };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props;
    const { id, title, image, urlGithub, description, technologies } = data;

    return (
        
        <div
            key={id}
            className="flex flex-col items-center bg-slate-900 text-white w-full h-full rounded-xl shadow-lg p-6"
        >
            <h3 className="mb-4 text-2xl font-semibold text-center">{title}</h3>
            
            <Image
                src={image}
                alt={`${title} Image`}
                width={400}
                height={400}
                className="w-full rounded-2xl h-auto mb-4"
            />
            
            <p className="mb-4 text-center text-gray-300">{description}</p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-4">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 text-sm bg-slate-700 text-gray-100 rounded-lg"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            
            <div className="flex-grow" /> 
            <div className="flex gap-5 mt-4">
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="px-4 py-2 text-center transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80 mb-2"
                >
                   Live Demo
                </Link>
            </div>
        </div>        
    );
}

export default PortfolioBox;
