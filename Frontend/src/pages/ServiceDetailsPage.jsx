import { useParams } from 'react-router-dom';

const detailsMap = {
  health: {
    title: 'Health Insurance',
    description: 'Medical coverage for treatments, consultations, and hospital stays.',
    features: ['Family coverage', 'Digital claims', 'Hospital cash benefits'],
  },
  life: {
    title: 'Life Insurance',
    description: 'Guaranteed support for your dependents when they need it most.',
    features: ['Sum assured', 'Flexible tenure', 'Premium waiver options'],
  },
  auto: {
    title: 'Auto Insurance',
    description: 'Protect your vehicle with accident, theft, and third-party coverage.',
    features: ['Roadside assistance', 'Cashless repairs', 'No claim bonus'],
  },
  home: {
    title: 'Home Insurance',
    description: 'Protect your property, contents, and liabilities under one plan.',
    features: ['Fire protection', 'Flood coverage', 'Personal liability'],
  },
};

export default function ServiceDetailsPage() {
  const { serviceId } = useParams();
  const service = detailsMap[serviceId] || {
    title: 'Service not found',
    description: 'The selected service is not available in the demo catalog.',
    features: [],
  };

  return (
    <div className="page shell">
      <section className="card">
        <h1>{service.title}</h1>
        <p>{service.description}</p>
      </section>
      {service.features.length > 0 && (
        <section className="card">
          <h2>Key features</h2>
          <ul>
            {service.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
