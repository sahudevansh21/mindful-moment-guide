import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container home-container">
      <section className="hero-section glass-card">
        <h1 className="hero-title">Mindful Moment Guide</h1>
        <p className="hero-subtitle">Your sanctuary for calm and clarity.</p>
        <p className="hero-description">
          Integrate simple mindfulness practices into your busy life. Access short, calming exercises and reflective prompts on demand,
          fostering self-awareness and stress reduction without external dependencies.
        </p>
        <div className="hero-actions">
          <Link href="/guided-practice" className="btn primary-btn">
            Start a Practice
          </Link>
          <Link href="/reflection-journal" className="btn secondary-btn">
            Write in Journal
          </Link>
        </div>
      </section>

      <section className="features-section">
        <div className="feature-card glass-card">
          <h2>Instant Guidance</h2>
          <p>Quick access to guided exercises whenever you need a moment of peace.</p>
        </div>
        <div className="feature-card glass-card">
          <h2>Personal Journal</h2>
          <p>Privately record your thoughts and insights, fostering self-awareness.</p>
        </div>
        <div className="feature-card glass-card">
          <h2>Browser-Based</h2>
          <p>Everything you need is right here, no downloads or complex setups.</p>
        </div>
      </section>
    </main>
  );
}