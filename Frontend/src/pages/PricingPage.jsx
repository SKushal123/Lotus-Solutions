export default function PricingPage() {
  return (
    <div className="page shell">
      <section className="card">
        <h1>Pricing</h1>
        <p>Choose the best plan for your organization or personal insurance needs.</p>
      </section>
      <section className="grid-cards">
        <article className="card pricing-card">
          <h2>Starter</h2>
          <p>Basic insurance onboarding and customer support.</p>
          <strong>$49 / month</strong>
          <ul>
            <li>1 service type</li>
            <li>Basic reports</li>
            <li>Email support</li>
          </ul>
        </article>
        <article className="card pricing-card">
          <h2>Professional</h2>
          <p>Complete service management with payment and notifications.</p>
          <strong>$129 / month</strong>
          <ul>
            <li>All service types</li>
            <li>Payment integration</li>
            <li>Priority support</li>
          </ul>
        </article>
        <article className="card pricing-card">
          <h2>Enterprise</h2>
          <p>Full platform control with advanced analytics and service automation.</p>
          <strong>$249 / month</strong>
          <ul>
            <li>Custom integrations</li>
            <li>Dedicated support</li>
            <li>Admin workflow automation</li>
          </ul>
        </article>
      </section>
    </div>
  );
}
