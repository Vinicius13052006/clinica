export default function Header() {
  return (
    <header>
      <div className="logo">Clínica Saúde+</div>
      <nav>
        <a href="#services">Serviços</a>
        <a href="#doctors">Médicos</a>
        <a href="#contact">Contato</a>
        <a href="#contact" className="cta">Agende sua consulta</a>
      </nav>
    </header>
  );
}