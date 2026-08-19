import { Link } from 'react-router-dom';

const steps = [
  {
    title: 'Consultation & Assessment',
    label: '01',
    description: 'Begin with a consultation to identify the right insurance options and document required for your policy.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Customized Plan Selection',
    label: '02',
    description: 'Select a custom plan that matches your needs, budget, and coverage goals.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Enrollment and Coverage Activation',
    label: '03',
    description: 'Finalize your application, make secure payment, and activate your coverage quickly.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80',
  },
];

const team = [
  { name: 'Jane Doe', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80' },
  { name: 'Emily Brown', role: 'CFO', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80' },
  { name: 'John Smith', role: 'CTO', image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80' },
];

export default function HomePage() {
  return (
    <div className="page shell home-page">
      <section className="hero-section">
        <div className="hero-content">
          <span className="eyebrow">Secure your future</span>
          <h1>Insurance Solutions by Lotus Strategic Solutions</h1>
          <p>
            Modernize onboarding, payment processing, and customer service workflows with a digital platform built for insurance operations.
          </p>
          <div className="button-row">
            <Link to="/register" className="button button-primary">
              Get a Quote
            </Link>
            <Link to="/contact" className="button button-secondary">
              Contact Us
            </Link>
          </div>
          <div className="hero-contact">
            <span>+1 555 123 4567</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-main">
            <img src="https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=900&q=80" alt="Insurance consultation" />
          </div>
          <div className="hero-visual-cards">
            <div className="hero-card hero-card-small">
              <strong>15%</strong>
              <span>Growth Rate</span>
            </div>
            <div className="hero-card hero-card-small testimonial-card">
              <p>"Elevated to industry leaders."</p>
              <span>★★★★★</span>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="section-headline">
          <span className="eyebrow">How it works</span>
          <h2>How Our Insurance Process Works</h2>
        </div>
        <div className="process-grid">
          {steps.map((step) => (
            <article key={step.label} className="process-card">
              <div className="process-card-top">
                <div className="process-label">{step.label}</div>
                <h3>{step.title}</h3>
              </div>
              <p>{step.description}</p>
              <img src={step.image} alt={step.title} />
            </article>
          ))}
        </div>
      </section>

      <section className="about-preview-section">
        <div className="about-preview-card">
          <span className="eyebrow">About Us</span>
          <h2>Innovating Insurance Solutions</h2>
          <p>
            Lotus Strategic Solutions builds insurance technology that focuses on customer convenience, operational efficiency, and secure digital payments.
          </p>
          <Link to="/about" className="button button-primary">
            Learn More
          </Link>
        </div>
        <div className="about-preview-image">
          <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=900&q=80" alt="Team meeting" />
        </div>
      </section>

      <section className="values-section">
        <h2>Making a Difference with Lotus</h2>
        <div className="values-grid">
          <article className="value-card">
            <span>01</span>
            <h3>Customer-Centric Focus</h3>
            <p>Designing every step to make insurance simple, transparent, and customer-friendly.</p>
          </article>
          <article className="value-card">
            <span>02</span>
            <h3>Commitment to Integrity</h3>
            <p>Secure workflows, clear communication, and reliable service tracking matter most.</p>
          </article>
          <article className="value-card">
            <span>03</span>
            <h3>Innovation and Adaptability</h3>
            <p>A platform that grows with your business and supports new service experiences.</p>
          </article>
        </div>
      </section>

      <section className="team-section">
        <div className="section-headline">
          <span className="eyebrow">Our Team</span>
          <h2>Meet Our Talented Team Members</h2>
        </div>
        <div className="team-grid">
          {team.map((member) => (
            <article key={member.name} className="team-card">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-card">
          <h2>Get Started with Lotus Insurance</h2>
          <p>Transform your insurance operations with a secure digital portal and better customer experiences.</p>
          <div className="button-row">
            <Link to="/contact" className="button button-secondary">
              Talk to Sales
            </Link>
            <Link to="/register" className="button button-primary">
              Start Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
