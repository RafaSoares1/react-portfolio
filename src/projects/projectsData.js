import projectOne from "../assets/cub3d.gif";
import projectTwo from "../assets/minishell.gif";
import projectThree from "../assets/cpp.gif";
import projectFour from "../assets/betmind.png";
import projectFive from "../assets/more.gif";

const projects = {
  1: {
    title: "Cub3D",
    image: projectOne,
    description: (
      <>
        <p>
				Cub3d is an impressive C project that offers a "realistic" 3D graphical representation of the inside of a maze from a first-person perspective.<br /> 
It's achieved by implementing Ray-Casting principles and application of advanced algorithms.
        </p>
      </>
    ),
    github: "https://github.com/RafaSoares1/42_CUB3D",
  },
  2: {
    title: "Minishell",
    image: projectTwo,
    description: (
      <>
        <p>
				A group project in C whose main objective was to create our own shell, teaching us processes and file descriptors.<br /> 
				This was without any doubt the most challenging project so far, because Shell encompass distinct and well-defined behaviors in nearly every scenario, demanding careful handling.
        </p>
      </>
    ),
    github: "https://github.com/RafaSoares1/42_Cursus_3_minishell",
  },
  3: {
    title: "CPP Modules",
    image: projectThree,
    description: (
      <>
        <p>
				This project contains a series of modules that cover various aspects of C++ programming.<br /> 
				Each module focuses on specific topics to help me to build a strong foundation in C++ development.
        </p>
      </>
    ),
    github: "https://github.com/RafaSoares1/42_CPP00-09",
  },
	4: {
    title: "BetMind AI",
    image: projectFour,
    description: (
      <>
        <p>
				Development of a bot to give sports predictions.<br />  Use of the
webscrapping technique (Python, BS4 and Pandas) and creation of a
statistical method by comparing data stored in the database (SQLite)
        </p>
      </>
    ),
    github: "https://github.com/RafaSoares1/BetMind-AI-info-/tree/main",
  },
	5: {
    title: "More Projects",
    image: projectFive,
    description: (
      <>
        <p>
				That's Not All Folks!<br /> You can find more projects developed in recent months at the link below.
        </p>
      </>
    ),
    github: "https://github.com",
  },
};

export default projects;