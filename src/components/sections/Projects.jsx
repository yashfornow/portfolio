
export const Projects = () => {

    return (
        <section id = "projects" className = "min-h-screen flex items-center justy-center py-20">
            <div className = "max-w-5xl mx-auto px-4">
            <h2 className = "text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                 Featured Projects 
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className = "text-xl font-bold mb-2"> Portfolio </h3>
                    <p className = "text-gray-400 mb-4">  Take a look at my portfolio website containing my profile and projects that I've done 😁
                        </p>
                        <div className = "flex flex-wrap gap-2 mb-4">
                            {["React", "Tailwind CSS", "emailJS"].map((items, key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                               hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {items}
                            </span>

                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href = "https://yashfornow.github.io/portfolio/" target="_blank"
                            className = "text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project 
                            <i className="fa-solid fa-up-right-from-square pl-5"></i></a>
                            <a href = "https://github.com/yashfornow/portfolio"
                            className = "text-blue-400 hover:text-blue-300 transition-colors my-4"> Github 
                            <i className="fa-brands fa-github pl-5"></i> </a>
                            
                        </div>
                    </div>
                
                <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className = "text-xl font-bold mb-2"> Recipe Finder </h3>
                    <p className = "text-gray-400 mb-4"> This application allows users to search for a wide range of recipes for different dishes.
                        </p>
                        <div className = "flex flex-wrap gap-2 mb-4">
                            {["React", "API Integration", "State functions"].map((items, key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                               hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {items}
                            </span>

                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href = "https://yashfornow.github.io/recipe-finder/" target="_blank"
                             className = "text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project 
                             <i className="fa-solid fa-up-right-from-square pl-5"></i></a>
                             <a href = "https://github.com/yashfornow/recipe-finder" target="_blank"
                            className = "text-blue-400 hover:text-blue-300 transition-colors my-4"> Github 
                            <i className="fa-brands fa-github pl-5"></i> </a>

                        </div>
                    </div>
                    <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className = "text-xl font-bold mb-2"> Simple Weather App </h3>
                    <p className = "text-gray-400 mb-4"> This application provides a detailed local & world wide weather according to the city name searched.
                        </p>
                        <div className = "flex flex-wrap gap-2 mb-4">
                            {["React", "API Integration"].map((items, key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                               hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {items}
                            </span>

                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href = "https://yashfornow.github.io/Weather-app/" target="_blank"
                            className = "text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project 
                            <i className="fa-solid fa-up-right-from-square pl-5"></i></a>
                            <a href = "https://github.com/yashfornow/Weather-app" target="_blank"
                            className = "text-blue-400 hover:text-blue-300 transition-colors my-4"> Github 
                            <i className="fa-brands fa-github pl-5"></i> </a>
                            
                        </div>
                    </div>

                    <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className = "text-xl font-bold mb-2"> To Do App </h3>
                    <p className = "text-gray-400 mb-4">  This application provides the list everything that you have to do along with priority and can be deleted when the task is completed.
                        </p>
                        <div className = "flex flex-wrap gap-2 mb-4">
                            {["React", "Conditional rendering", "State Management", "Event handling"].map((items, key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                               hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {items}
                            </span>

                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href = "https://yashfornow.github.io/to-do-app/" target="_blank"
                            className = "text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project 
                            <i className="fa-solid fa-up-right-from-square pl-5"></i></a>
                            <a href = "https://github.com/yashfornow/to-do-app" target="_blank"
                            className = "text-blue-400 hover:text-blue-300 transition-colors my-4 "> Github 
                            <i className="fa-brands fa-github pl-5"></i> </a>
                            
                        </div>
                    </div>

                    <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className = "text-xl font-bold mb-2"> Restaurant App </h3>
                    <p className = "text-gray-400 mb-4">  This application provides the food items. According to adjustment of items by user, total price and items are changed.
                        </p>
                        <div className = "flex flex-wrap gap-2 mb-4">
                            {["React", "Bootstrap CSS", "State Management", "Redux Tool Kit"].map((items, key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                               hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {items}
                            </span>

                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href = "https://yashfornow.github.io/restaurant/" target="_blank"
                            className = "text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project 
                            <i className="fa-solid fa-up-right-from-square pl-5"></i></a>
                            <a href = "https://github.com/yashfornow/restaurant" target="_blank"
                            className = "text-blue-400 hover:text-blue-300 transition-colors my-4 "> Github 
                            <i className="fa-brands fa-github pl-5"></i> </a>
                            
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}