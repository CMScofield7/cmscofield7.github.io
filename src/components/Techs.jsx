import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMongodb,
  DiMysql,
  DiJava,
  DiPython,
} from "react-icons/di";

import {
  SiTypescript,
  SiNestjs,
  SiSequelize,
  SiMongoose,
  SiDocker,
} from "react-icons/si";

import "../styles/components/techs.sass";

const techs = [
  { id: "html", name: "HTML", icon: <DiHtml5 /> },
  { id: "css", name: "CSS", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "ts", name: "TypeScript", icon: <SiTypescript /> },
  { id: "java", name: "Java", icon: <DiJava /> },
  { id: "python", name: "Python", icon: <DiPython /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "nestjs", name: "NestJS", icon: <SiNestjs /> },
  { id: "docker", name: "Docker", icon: <SiDocker /> },
  { id: "mongo", name: "MongoDB", icon: <DiMongodb /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "mongoose", name: "Mongoose", icon: <SiMongoose /> },
  // { id: "sequelize", name: "Sequelize", icon: <SiSequelize />}
];

const Techs = () => {
  return (
    <section className="techs">
      <h2 style={{ fontFamily: "Exo, sans-serif" }}>Stacks</h2>
      <div className="tech-grid">
        {techs.map((tech) => (
          <div className="tech" id={tech.id} key={tech.name}>
            {tech.icon}
            <div className="tech-info">
              <h3 style={{ fontFamily: "Exo, sans-serif" }}>{tech.name}</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Techs;
