import Image from 'next/image';
import './globals.css';

export default function Page() {
  return (
    <>
      <header className="nav">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <Image src="/logo.png" alt="MirroHaus logo" width={36} height={36} />
          <strong>MirroHaus</strong>
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#work">Our Work</a>
          <a href="mailto:mirrohaus@gmail.com" className="cta" style={{marginLeft:12}}>Book a call</a>
        </nav>
      </header>

      <main>
        <section className="hero container">
  <Image
    className="fade-in hero-logo"
    src="/logo.png"
    alt="MirroHaus"
    width={860}
    height={860}
    priority
  />
</section>


        <section id="about" className="section container">
          <h2>About Us</h2>
          <p>
            MirroHaus is a premium creative studio that designs brand systems, digital experiences,
            and campaign-ready assets with precision and restraint. We combine strategy, design,
            and engineering to ship work that feels inevitable—clean, fast, and built to scale.
          </p>
          <p>
            From concept to launch, we operate as a quiet force behind the brands, building
            the infrastructure that lets great products speak for themselves.
          </p>
        </section>

        <section id="work" className="section container">
          <h2>Our Work</h2>
          <p>Selected directions and systems we build for founders and teams.</p>

          <div className="grid">
            <article className="card">
              <div>
                <h3>Brand Systems</h3>
                <span>Identity, typography, motion, guidelines.</span>
              </div>
            </article>
            <article className="card">
              <div>
                <h3>Web Experiences</h3>
                <span>Next.js sites, ecommerce, performance.</span>
              </div>
            </article>
            <article className="card">
              <div>
                <h3>Campaign Assets</h3>
                <span>Art direction, landing pages, creative ops.</span>
              </div>
            </article>
            <article className="card">
              <div>
                <h3>Tooling & Automations</h3>
                <span>Internal dashboards, content systems, AI workflows.</span>
              </div>
            </article>
          </div>

          <a className="cta" href="mailto:mirrohaus@gmail.com">Start a project</a>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} MirroHaus. All rights reserved.
      </footer>
    </>
  );
}
