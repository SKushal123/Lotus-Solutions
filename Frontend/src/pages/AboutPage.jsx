export default function AboutPage() {
  return (
    <div className="page shell about-page">
      <section className="about-hero card">
        <div>
          <span className="eyebrow">About Us</span>
          <h1>Innovating Insurance Solutions</h1>
          <p>
            Lotus Strategic Solutions delivers a modern insurance portal that simplifies onboarding, payments, and customer engagement while
            empowering administrators with centralized control.
          </p>
          <ul className="about-highlights">
            <li>Streamlined applicant onboarding with digital forms and identity verification.</li>
            <li>Integrated premium payments, policy management, and claims notifications.</li>
            <li>Insights and reporting designed for brokers, administrators, and operations teams.</li>
          </ul>
          <div className="button-row">
            <a href="/contact" className="button button-primary">
              Contact Us
            </a>
            <a href="/help" className="button button-secondary">
              Help Center
            </a>
          </div>
        </div>
        <div className="about-hero-image">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
            alt="Insurance team"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=900&q=80';
            }}
          />
        </div>
      </section>

      <section className="grid-cards about-mission">
        <article className="card">
          <h2>Our Vision</h2>
          <p>
            To build an insurance platform that connects customers, services, and operations with speed, clarity, and trust.
          </p>
        </article>
        <article className="card">
          <h2>Our Approach</h2>
          <p>
            We blend secure digital workflows, automated notifications, and data-driven insights to make insurance simpler and more reliable.
          </p>
        </article>
      </section>

      <section className="card about-values">
        <h2>Making a Difference with Lotus</h2>
        <div className="about-values-grid">
          <article>
            <strong>01</strong>
            <h3>Customer-Centric Focus</h3>
            <p>Every experience is designed to reduce friction and keep customers informed at every step.</p>
          </article>
          <article>
            <strong>02</strong>
            <h3>Commitment to Integrity</h3>
            <p>We deliver transparent service tracking, secure payment flows, and responsible operations.</p>
          </article>
          <article>
            <strong>03</strong>
            <h3>Innovation and Adaptability</h3>
            <p>Our platform evolves with new business needs while keeping the user experience intuitive.</p>
          </article>
        </div>
      </section>

      <section className="grid-cards about-story">
        <article className="card story-card media-card">
          <img
            src="https://cms.zurichkotak.com/uploads/302_4ad813a337.webp"
            alt="Insurance team"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80';
            }}
          />
          <h2>Driving Insurance with Integrity</h2>
          <p>We support modern insurance teams with technology built for trust, adaptability, and operational efficiency.</p>
        </article>
        <article className="card story-card media-card">
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80" alt="Insurance analytics" />
          <div>
            <h3>Innovation</h3>
            <p>Smart process automation to improve onboarding, claims, and customer updates.</p>
          </div>
        </article>
        <article className="card story-card media-card">
          <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=900&q=80" alt="Insurance consultation" />
          <div>
            <h3>Reliability</h3>
            <p>Dependable operations through secure workflows and transparent service tracking.</p>
          </div>
        </article>
      </section>
    </div>
  );
}
