'use client';
import Image from 'next/image';
import Reveal from '../components/Reveal';

export default function Page() {
  return (
    <>
      <header className="nav">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <Image src="/icon.png" alt="MirroHaus mark" width={28} height={28} />
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
          <div className="hero-bg" />
          <Image
            className="hero-logo fade-in"
            src="/logo.png"
            alt="MirroHaus"
            width={1400}
            height={1400}
            priority
          />
        </section>

       <section id="about" className="section container about">
  <Reveal as="h2">About Us</Reveal>

  <Reveal as="p" delay={80} className="about-lead">
    MirroHaus is a premium creative studio that architects brand systems, high-performance web
    experiences, and campaign engines that sell. We combine strategy, design, and engineering to
    ship work that feels inevitable—clean, fast, and built to scale.
  </Reveal>

  {/* KPIs / Signals */}
  <div className="kpis">
    <Reveal className="kpi" delay={120}>
      <strong>1–3 wk</strong>
      <span>Typical sprint to launch</span>
    </Reveal>
    <Reveal className="kpi" delay={160}>
      <strong>90+</strong>
      <span>Lighthouse performance targets</span>
    </Reveal>
    <Reveal className="kpi" delay={200}>
      <strong>Made to convert</strong>
      <span>Systems-first, revenue-focused</span>
    </Reveal>
  </div>

  {/* Capabilities */}
  <Reveal as="h3" delay={220} className="subhead">What we ship</Reveal>
  <div className="cap-grid">
    <Reveal className="cap" delay={240}>
      <h4>Brand Systems</h4>
      <p>Identity, typography, motion language, usage rules, and kits you can scale without guesswork.</p>
      <ul className="list">
        <li>Logo & typographic system</li>
        <li>Guidelines & components</li>
        <li>Motion & art direction</li>
      </ul>
    </Reveal>
    <Reveal className="cap" delay={260}>
      <h4>Web Experiences</h4>
      <p>Next.js builds tuned for speed, SEO, and conversions—designed to look expensive and load fast.</p>
      <ul className="list">
        <li>Landing pages & sites</li>
        <li>Ecommerce (Shopify/Headless)</li>
        <li>Performance & analytics</li>
      </ul>
    </Reveal>
    <Reveal className="cap" delay={280}>
      <h4>Campaign Systems</h4>
      <p>Campaign-ready modules and creative ops so you can launch, learn, and scale on repeat.</p>
      <ul className="list">
        <li>Offer pages & funnels</li>
        <li>Ad creative & variants</li>
        <li>Playbooks & handoff</li>
      </ul>
    </Reveal>
    <Reveal className="cap" delay={300}>
      <h4>Content & Automations</h4>
      <p>Repeatable content pipelines and light tooling that remove friction from publishing.</p>
      <ul className="list">
        <li>CMS & content models</li>
        <li>Dashboards & utilities</li>
        <li>Micro-automations</li>
      </ul>
    </Reveal>
  </div>

  {/* Approach */}
  <Reveal as="h3" delay={320} className="subhead">How we work</Reveal>
  <div className="steps">
    <Reveal className="step" delay={340}><span className="pill">01</span><div><strong>Discover</strong><p>Goals, constraints, and the fastest path to traction.</p></div></Reveal>
    <Reveal className="step" delay={360}><span className="pill">02</span><div><strong>Design</strong><p>We map the system—brand, components, and narrative that sells.</p></div></Reveal>
    <Reveal className="step" delay={380}><span className="pill">03</span><div><strong>Build</strong><p>Production Next.js, optimized for speed, SEO, and scale.</p></div></Reveal>
    <Reveal className="step" delay={400}><span className="pill">04</span><div><strong>Launch & Grow</strong><p>Ship, measure, refine. Hand-off playbook included.</p></div></Reveal>
  </div>

  {/* CTA strip */}
  <div className="cta-row">
    <a className="cta" href="mailto:mirrohaus@gmail.com?subject=Project%20Inquiry%20—%20MirroHaus">Start a project</a>
    <a className="ghost" href="#work">View work</a>
  </div>
</section>


        <section id="work" className="section container">
          <Reveal as="h2">Our Work</Reveal>
          <Reveal delay={80} as="p">Select directions and systems.</Reveal>
          <div className="grid portfolio">
            {[
              {src:'/projects/luxelane.jpg', title:'Luxe Lane', desc:'Luxury fashion identity & ecommerce'},
              {src:'/projects/ybgoode.jpg', title:'YB Goode', desc:'Denim-forward brand system & storefront'},
              {src:'/projects/void.jpg', title:'The VØID Label', desc:'Monochrome editorial & web build'},
              {src:'/projects/club69.jpg', title:'Club69', desc:'Campaign landing system & creative ops'}
            ].map((p,i)=>(
              <Reveal key={p.title} delay={120 + i*60} className="card project">
                <div className="image-wrap">
                  <Image src={p.src} alt={p.title} width={800} height={600} />
                </div>
                <div className="overlay">
                  <h3>{p.title}</h3>
                  <span>{p.desc}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <a className="cta" href="mailto:mirrohaus@gmail.com">Start a project</a>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} MirroHaus · Designed & Built in Boston
      </footer>
    </>
  );
}
