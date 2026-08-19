export default function ContactPage() {
  return (
    <div className="page shell">
      <section className="card">
        <h1>Contact Us</h1>
        <p>Have questions or need help? Reach out to our support team for fast assistance.</p>
      </section>
      <section className="card">
        <h2>Contact details</h2>
        <div className="field-row">
          <span>Email</span>
          <strong>support@lotusstrategic.com</strong>
        </div>
        <div className="field-row">
          <span>Phone</span>
          <strong>+1 555 123 4567</strong>
        </div>
        <div className="field-row">
          <span>Address</span>
          <strong>123 Lotus Avenue, Finance District</strong>
        </div>
      </section>
    </div>
  );
}
