interface ChallengeProps {
    number: number;
    completed: boolean;
    stars: number;
    title: string;
}

const Challenge = ({ number, completed, stars, title }: ChallengeProps) => {
    return (
        <div className="w-80 p-6 relative flex flex-col items-center bg-white shadow-lg rounded-lg border border-black">
            <h2 className="font-bold text-center text-lg mb-4 flex items-center">
                <span className="mr-[4px]">{number}.</span>{title}
                {completed ? (
                    <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full absolute top-2 right-2">
                        Completed
                    </span>
                ) : (
                    <span className="ml-2 px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full absolute top-2 right-2">
                        Incomplete
                    </span>
                )}
            </h2>
            <div className="flex p-2">
                {Array.from({ length: 3 }).map((_, index) => (
                    <img key={index} src={index < stars ? "/star.png" : "/blank-star.png"} alt="star" className="w-10" />
                ))}
            </div>
            <button className="mt-4 px-6 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300">
                Go to Challenge
            </button>
        </div>
    )
}

export default Challenge