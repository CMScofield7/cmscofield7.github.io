const Projects = () => {
  return (
    <section className="projects">
      <h2 style={{ fontFamily: "Exo, sans-serif" }}>Projetos</h2>
      <ul
        style={{
          fontFamily: "Exo, sans-serif",
          color: "white",
          marginLeft: 30,
          marginBottom: 15,
        }}
      >
        <li>
          Racing App: Controle de Corredores em Corridas de Rua - em andamento
        </li>
        <li>
          Modelagem, Corte e Costura: Um Curso Rosy Moda Fashion - em andamento
        </li>
        <li>Sistema Apes - JD3 Software</li>
      </ul>
      {/* <a href="" className="btn">
        Ver Projetos
      </a> */}
    </section>
  );
};

export default Projects;
