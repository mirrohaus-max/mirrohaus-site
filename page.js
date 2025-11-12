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

        <section id="about" className="section container">
          <Reveal as="h2">About Us</Reveal>
          <Reveal delay={80} as="p">
            MirroHaus is a premium creative studio that designs brand systems, digital experiences,
            and campaign-ready assets with precision and restraint. We combine strategy, design,
            and engineering to ship work that feels inevitable—clean, fast, and built to scale.
          </Reveal>
          <Reveal delay={160} as="p">
            From concept to launch, we operate as a quiet force behind the brands, building
            the infrastructure that lets great products speak for themselves.
          </Reveal>
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
