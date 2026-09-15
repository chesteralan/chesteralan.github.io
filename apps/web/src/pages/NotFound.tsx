import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center">
      <div className="section-container text-center">
        <ScrollReveal>
          <h1 className="gradient-text mb-4 text-7xl font-bold sm:text-8xl">404</h1>
          <p className="mb-8 text-xl text-gray-600">
            This page doesn't exist yet.
          </p>
          <Link to="/" className="btn-primary">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
}
