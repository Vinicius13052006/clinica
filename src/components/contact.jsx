import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada! Nome: ${form.name}`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <h2>Entre em contato</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" value={form.name} onChange={e => setForm({...form,name:e.target.value})} required/>
        <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form,email:e.target.value})} required/>
        <textarea placeholder="Mensagem" value={form.message} onChange={e => setForm({...form,message:e.target.value})} required/>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}