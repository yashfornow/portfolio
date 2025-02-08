

export const About = () => {
    const skills = ["HTML", "CSS", "React", "JavaScript", "Tailwind CSS", "Redux", "Jest", "Front End Development"];
    const tools = ["Git", "VS Code", "Next JS"];

    return (
    <section id = "about" className = "min-h-screen flex items-center justify-center py-20">
        <div className = "max-w-3xl mx-auto px-4">
            <h2 className = "text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                 About Me 
            </h2>
            <div classNmae = "glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className = "text-gray-300 mb-6">
                    A Software Engineer with expertise in Front-end Web Development with 2 years of experience designing , developing and managing complex e-commerce sites and internal frameworks. Specializes in React JS, responsive design
                </p>

                <div className = "grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className = "rounded-xl-p-6 hover:-translate-y-1 transition-all">
                        <h3 className = "text-xl font-bold mb-4">
                            Skills
                        </h3>
                        <div className = "flex flex-wrap gap-2">
                            {skills.map((items, key) => (
                                <span
                                 key={key}
                                 className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {items}
                                </span>
                            )
                        )
                        }
                        </div>

                    </div>

                    <div className = "rounded-xl-p-6 hover:-translate-y-1 transition-all">
                        <h3 className = "text-xl font-bold mb-4">
                            Tools
                        </h3>
                        <div className = "flex flex-wrap gap-2">
                            {tools.map((items, key) => (
                                <span
                                 key={key}
                                 className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {items}
                                </span>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
            <div className = "grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className = "p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className = "text-xl font-bold mb-4"> 📖 Education </h3>
                    <ul className = " list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> B.Tech in Electronics and Communication Engineering - CVR College of Engineering [2018-2022]</strong>
                        </li>
                    </ul>
                </div>
                <div className = "p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className = "text-xl font-bold mb-4"> 💼 Work Experience </h3>
                    <div className = "space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold"> Software Engineer at Cognizant Technlogy Solutions [2022-2024]</h4>
                        </div>
                        <div>
                            <h4 className="font-semibold"> Intern at Cognizant [2022]</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}