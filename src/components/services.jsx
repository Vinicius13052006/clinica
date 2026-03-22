export default function Services() {
  const services = [
    "Cardiologia",
    "Odontologia",
    "Fisioterapia",
    "Pediatria",
    "Dermatologia",
    "Nutrição"
  ];

  return (
    <section className="services" id="services">
      <h2>Nossos Serviços</h2>
      <div className="service-cards">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <h3>{s}</h3>
            <p>Atendimento de alta qualidade com profissionais experientes.</p>
          </div>
        ))}
      </div>
    </section>
  );
}