interface TutorialProps {
    number: number;
    completed: boolean;
    title: string;
}

const Tutorial = ({number, completed, title}: TutorialProps) => {
    return (
        <div className="w-80 p-6 relative flex flex-col items-center bg-white shadow-lg rounded-lg border border-black">
            <h2 className="font-bold text-center text-lg mb-4 flex items-center">
                <span>{number}. </span>{title}
            </h2>
            {completed ? (
                <div className="flex items-center justify-center mt-2 mb-5">
                    <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full flex items-center">
                        {/* checkmark code found and copied from w3Schools */}
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Completed
                    </span>
                </div>
            ) : (
                <div className="flex items-center justify-center mt-2 mb-5">
                    <span className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full">
                        Incomplete
                    </span>
                </div>
            )}
            <button className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold rounded-lg shadow-md hover:from-purple-600 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300">
                Go to Tutorial
            </button>
        </div>
    )
}

export default Tutorial