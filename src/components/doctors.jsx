export default function Doctors() {
  const doctors = [
    { name: "Dra. Ana Souza", specialty: "Cardiologia", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Dr. Carlos Lima", specialty: "Odontologia", img: "https://randomuser.me/api/portraits/men/46.jpg" },
    { name: "Dra. Marina Silva", specialty: "Dermatologia", img: "https://randomuser.me/api/portraits/women/47.jpg" },
  ];

  return (
    <section className="doctors" id="doctors">
      <h2>Nossos Médicos</h2>
      <div className="doctor-cards">
        {doctors.map((d,i) => (
          <div key={i} className="doctor-card">
            <img src={d.img} alt={d.name}/>
            <h3>{d.name}</h3>
            <p>{d.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
}