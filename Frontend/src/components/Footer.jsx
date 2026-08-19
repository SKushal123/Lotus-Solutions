export default function Footer() {
  return (
    <footer className="footer shell">
      <div className="footer-brand">
        <h2>Lotus Strategic Solutions</h2>
        <p>Secure digital onboarding, payments, and service management for insurance providers.</p>
      </div>
      <div className="footer-links-grid">
        <div>
          <h3>Company</h3>
          <a href="/about">About Us</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </div>
        <div>
          <h3>Products</h3>
          <a href="/services">Services</a>
          <a href="/pricing">Pricing</a>
          <a href="/help">Help Center</a>
        </div>
        <div>
          <h3>Support</h3>
          <a href="mailto:support@lotusstrategic.com">support@lotusstrategic.com</a>
          <span>+1 555 123 4567</span>
          <span>Mon - Fri, 9am - 6pm</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Lotus Strategic Solutions. All rights reserved.</span>
      </div>
    </footer>
  );
}
