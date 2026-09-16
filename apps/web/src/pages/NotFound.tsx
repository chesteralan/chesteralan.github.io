import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import Icon from '../components/Icon';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center">
      <div className="section-container text-center">
        <ScrollReveal>
          <h1 className="mb-4 text-7xl font-bold sm:text-8xl text-[#0891b2]">404</h1>
          <p className="mb-8 text-xl text-gray-600">
            This page doesn't exist yet.
          </p>
          <Link to="/" className="btn-primary">
            <Icon name="home" size={18} />
            Back to Home
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
}
