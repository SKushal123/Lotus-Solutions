import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [services, setServices] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
      return;
    }

    const loadUser = async () => {
      try {
        const profile = await api.get('/auth/profile');
        setUser(profile.data.user);
      } catch (err) {
        localStorage.removeItem('authToken');
        navigate('/login');
      }
    };

    const loadServices = async () => {
      try {
        const response = await api.get('/services');
        setServices(response.data.services || []);
      } catch (err) {
        setMessage('Unable to load services');
      }
    };

    loadUser();
    loadServices();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const handleApply = async () => {
    if (!selectedServiceId) {
      setMessage('Please select a service');
      return;
    }

    try {
      await api.post('/services/apply', {
        serviceId: selectedServiceId,
        details: 'Customer applied through frontend',
      });
      setMessage('Service application submitted successfully');
    } catch (err) {
      setMessage(err.response?.data?.error || 'Application failed');
    }
  };

  return (
    <div className="page shell dashboard-page">
      <header className="dashboard-header">
        <div>
          <h1>Customer Dashboard</h1>
          <p>Welcome back, {user?.name || 'Customer'}.</p>
        </div>
        <button className="button button-secondary" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <section className="card">
        <h2>Available Services</h2>
        <select value={selectedServiceId} onChange={(e) => setSelectedServiceId(e.target.value)}>
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service._id} value={service._id}>
              {service.title} - ${service.price}
            </option>
          ))}
        </select>
        <button className="button" onClick={handleApply}>
          Apply for service
        </button>
        {message && <div className="message">{message}</div>}
      </section>

      <section className="card">
        <h2>Profile</h2>
        <div className="field-row">
          <span>Email</span>
          <strong>{user?.email}</strong>
        </div>
        <div className="field-row">
          <span>Phone</span>
          <strong>{user?.phone || 'Not provided'}</strong>
        </div>
      </section>
    </div>
  );
}
