export default function Hero() {
  return (
    <section className="hero">
      <h1>Cuidando da sua saúde com excelência</h1>
      <p>Agende consultas online com nossos especialistas de confiança</p>
      <button onClick={() => alert("Formulário de agendamento simulado")}>
        Agende sua consulta
      </button>
    </section>
  );
}