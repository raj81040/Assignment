
import { MessageCircle } from "lucide-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { FaHeart, FaBars, FaRobot, FaUser, FaRegImage } from "react-icons/fa";



const MainFile = () => {
    return (
        <>
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="relative bg-white p-10 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-10 w-[90%] md:w-[900px] h-auto md:h-[400px] overflow-hidden">
                    <div className="flex-1 flex flex-col justify-between h-full text-left relative z-10">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                            Stay motivated and <br /> reach your goals
                        </h2>
                        <p className="text-gray-600 leading-relaxed mt-5">
                            Speak Tutor keeps you motivated and consistent to achieve your goals.
                            Learning a language is better with someone by your side.
                        </p>
                    </div>
                    <div className="flex-1 p-8 relative z-10">
                        <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                            <div className="flex flex-col gap-3 w-full">
                                <div className="bg-rose-500 text-white p-5 rounded-xl text-sm font-medium relative">
                                    <FaHeart className="absolute top-3 left-3 text-white text-lg" />
                                    <p className="mt-4">
                                        You're interested in traveling, and exploring new cultures.
                                    </p>
                                </div>
                                <div className="bg-blue-600 text-white p-5 rounded-xl text-sm font-medium relative">
                                    <FaBars className="absolute top-3 left-3 text-white text-lg" />
                                    <p className="mt-4">
                                        We've created unique lessons and conversations based on those goals.
                                    </p>
                                </div>
                                <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-150 shadow-md hover:shadow-lg">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="min-h-screen bg-white-50 flex items-center justify-center">
                <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-10 w-[90%] md:w-[900px]">
                    <div className="flex-1 flex flex-col justify-between h-[400px]">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                            Talk about anything, <br /> anytime, anywhere
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Speak Tutor is your on-the-go conversational partner.
                            Practice speaking on any topic, anytime, no matter how niche.
                        </p>
                    </div>
                    <div className="flex-1 bg-gray-50 p-6 rounded-xl shadow-inner flex flex-col gap-4">
                        <h3 className="text-gray-700 font-medium mb-2">Create your own</h3>
                        <div className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-2">
                            <FaUser size={18} />
                            <p className="text-gray-800 text-sm">Tourist</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-2">
                            <FaRobot size={18} />
                            <p className="text-gray-800 text-sm">New friend</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-2">
                            <FaRegImage size={18} color="black" />
                            <p className="text-gray-800 text-sm">
                                Talking about the best places to grab dinner in San Francisco
                            </p>
                        </div>
                        <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition">
                            Start chatting
                        </button>
                    </div>
                </div>
            </div>

            <section className="bg-white-50 py-24 flex flex-col items-center text-center">
                <div className="bg-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between w-[90%] md:w-[950px] p-10 mb-16 border border-gray-100">
                    <div className="flex-1 flex flex-col justify-between text-left h-[400px]">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                            Build a relationship <br /> with your tutor
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            Speak Tutor designs a personalized curriculum as unique as you are
                            by getting to know you on a surprisingly deep level.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="relative bg-gradient from-gray-100 to-gray-200 rounded-[2.5rem] w-[230px] md:w-[260px] h-[420px] shadow-inner border-8 border-gray-300 overflow-hidden">
                            <div className="p-5 mt-6">
                                <div className="flex justify-between text-gray-400 text-xs mb-3">
                                    <span>9:41</span>
                                    <div className="flex gap-1 items-center">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-2xl p-3 shadow text-left border border-gray-100">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="bg-blue-100 p-1 rounded-full">
                                            <MessageCircle size={14} className="text-blue-600" />
                                        </div>
                                        <p className="text-gray-800 text-sm font-medium">Speak</p>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Hey Amelia, your trip to Malaysia is in 6 days! Let’s practice
                                        some vocabulary for your trip!
                                    </p>
                                </div>
                                <div className="mt-5 grid grid-cols-4 gap-2 opacity-10">
                                    {Array(12)
                                        .fill(0)
                                        .map((_, i) => (
                                            <div key={i} className="bg-gray-400 h-6 rounded-md"></div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col items-center justify-center py-16 bg-white font-sans">
                <div className="flex flex-col items-center mb-4">
                    <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mb-2">
                        <img
                            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&crop=faces&fit=crop"
                            alt="Profile"
                            className="w-9 h-9 rounded-full object-cover"
                        />
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Jessica Park</p>
                </div>
                <p className="max-w-2xl text-center text-lg md:text-xl font-medium text-[#1A1A40] leading-relaxed">
                    "The first time I used <span className="font-semibold">Speak Tutor</span>, I couldn’t believe it wasn’t a real person.
                    It feels like it understands my motivations at a deep level
                </p>
            </section>

        </>
    );
};

export default MainFile;
