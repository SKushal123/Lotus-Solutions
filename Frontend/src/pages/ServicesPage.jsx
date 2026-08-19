import { Link } from 'react-router-dom';

const services = [
  { id: 'health', title: 'Health Insurance', description: 'Comprehensive health plan for families and individuals.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80' },
  { id: 'life', title: 'Life Insurance', description: 'Secure your family’s future with trusted life coverage.', image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=80' },
  { id: 'car', title: 'Car Insurance Policy', description: 'Vehicle protection with simplified claims and service tracking.', image: 'https://cms.zurichkotak.com/uploads/302_4ad813a337.webp' },
  { id: 'home', title: 'Home Insurance', description: 'Protect your home, assets, and family from unexpected risks.', image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80' },
];

export default function ServicesPage() {
  return (
    <div className="page shell">
      <section className="card">
        <h1>Services Details</h1>
        <p>Explore our insurance service offerings and choose the right package for your needs.</p>
      </section>

      <section className="grid-cards">
        {services.map((service) => (
          <article key={service.id} className="card service-card">
            {service.image && (
              <Link to={`/services/${service.id}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80';
                  }}
                />
              </Link>
            )}
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <Link to={`/services/${service.id}`} className="link-button">
              View details
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
