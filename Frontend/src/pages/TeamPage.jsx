const team = [
  { name: 'Amina Malik', role: 'Founder & CEO' },
  { name: 'Sahil Verma', role: 'Head of Product' },
  { name: 'Neha Shah', role: 'Lead Designer' },
  { name: 'Imran Khan', role: 'Senior Engineer' },
];

export default function TeamPage() {
  return (
    <div className="page shell">
      <section className="card">
        <h1>Team</h1>
        <p>Meet the people designing the Lotus Strategic Solutions platform and customer experience.</p>
      </section>
      <section className="grid-cards team-grid">
        {team.map((member) => (
          <article key={member.name} className="card team-card">
            <h2>{member.name}</h2>
            <p>{member.role}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
