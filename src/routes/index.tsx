import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight, ArrowUp, CalendarDays, ClipboardList, Flower2, Heart, Info, MapPin, Menu, Phone, Plus, Sparkles, Users, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/kandy-wedding-hero.jpg";
import bridalImage from "@/assets/bridal-details.jpg";
import receptionImage from "@/assets/garden-reception.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Kandy Wedding Planners | Independent Wedding Website Concept" },
    { name: "description", content: "Explore an independent, illustrative wedding-planning website concept for Kandy, Sri Lanka, by Source Code Software Solutions. Not official or endorsed." },
    { property: "og:title", content: "Kandy Wedding Planners | Independent Wedding Website Concept" },
    { property: "og:description", content: "Sri Lankan wedding inspiration and a demo enquiry experience. An independent concept by Source Code Software Solutions, not the official business website." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const services = [
  { name: "Full Wedding Planning", icon: ClipboardList, copy: "A considered journey from the first ideas to the final details, bringing the many parts of a wedding together." },
  { name: "Wedding-Day Coordination", icon: CalendarDays, copy: "A proposed focus on timelines, people, and the flow of the day, so the celebration can take centre stage." },
  { name: "Venue & Decor Coordination", icon: Flower2, copy: "Exploring spaces, florals, and thoughtful styling that feel connected to your vision and setting." },
  { name: "Traditional Sri Lankan Ceremony Coordination", icon: Sparkles, copy: "Making space for meaningful traditions, with ceremony details guided by your family and chosen officiants." },
  { name: "Bridal Party & Guest Coordination", icon: Users, copy: "Considering the little practical details that could help your closest people feel welcomed and at ease." },
  { name: "Vendor Coordination", icon: Heart, copy: "A shared point of reference for your selected creative partners, their responsibilities, and the day's arrangements." },
];
const gallery = [
  { title: "A celebration in the hills", category: "Kandyan ceremony concept", image: heroImage, alt: "AI-created Sri Lankan couple in traditional wedding attire beneath an ivory floral pavilion overlooking green hills", width: 1920, height: 1088 },
  { title: "Beauty in the details", category: "Bridal styling concept", image: bridalImage, alt: "AI-created Kandyan bridal osariya with traditional gold jewellery and an ivory floral bouquet", width: 1024, height: 1280 },
  { title: "Under the garden canopy", category: "Intimate reception concept", image: receptionImage, alt: "AI-created garden reception table with ivory orchids, brass candles, and burgundy napkins", width: 1280, height: 1024 },
];
const faqs = [
  { question: "What could I share in an initial enquiry?", answer: "Your ideas, approximate guest count, preferred location, and any traditions that matter to your family can be a helpful starting point. It is completely fine if your plans are still taking shape. This demo does not send an enquiry to the business." },
  { question: "Do we need a confirmed date or venue first?", answer: "Not necessarily for an initial planning conversation. A preferred season or a shortlist of locations can help frame the discussion. Any real availability or venue arrangements would need to be confirmed directly with the business and venue." },
  { question: "How could family traditions be included?", answer: "Couples can discuss the ceremonies, customs, and family priorities they wish to honour. The exact arrangements should be agreed with their families, relevant officiants, and any confirmed service providers." },
  { question: "How are services and costs usually agreed?", answer: "In general, a written proposal can outline the scope of work, responsibilities, fees, and terms before a booking is made. No prices or service commitments are offered here; the proposed categories on this concept require owner confirmation." },
  { question: "Are these photographs from real client weddings?", answer: "No. All photographs on this page are AI-generated illustrative concept imagery. They are not actual client work or verified portfolio images from Kandy Wedding Planners." },
  { question: "Will this form contact Kandy Wedding Planners?", answer: "No. This is an independent website concept, not commissioned or endorsed by the business. Form details are not sent, saved, or used to make a booking. The listed public phone number must be verified before any real launch." },
];

function Brand() {
  return <a href="#top" className="brand" aria-label="Kandy Wedding Planners concept, back to top">
    <Flower2 className="brand-symbol" aria-hidden="true" />
    <span className="min-w-0"><span className="brand-name">Kandy Wedding Planners</span><span className="brand-location">Kandy, Sri Lanka · Wedding Website Concept</span></span>
  </a>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const resultRef = useRef<HTMLParagraphElement>(null);
  const selected = selectedImage === null ? undefined : gallery[selectedImage];
  useEffect(() => {
    if (selectedImage !== null) dialogRef.current?.showModal();
    else dialogRef.current?.close();
  }, [selectedImage]);
  useEffect(() => { if (submitted) resultRef.current?.focus(); }, [submitted]);
  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }
  return <div id="top">
    <div className="concept-notice"><Info aria-hidden="true" /><span>Independent concept design — not the official website.</span></div>
    <header className="site-header">
      <div className="container-wide header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#approach">Our Approach</a><a href="#services">Services</a><a href="#gallery">Gallery</a><a href="#faq">FAQs</a>
        </nav>
        <Button variant="wedding" size="editorial" asChild className="header-cta"><a href="#enquiry">Let’s Plan Your Day <ArrowRight aria-hidden="true" /></a></Button>
        <Button variant="navigation" size="icon" className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" onClick={() => setMenuOpen(false)}><a href="#approach">Our Approach</a><a href="#services">Services</a><a href="#gallery">Gallery</a><a href="#faq">FAQs</a><Button variant="wedding" size="editorial" asChild><a href="#enquiry">Start an Enquiry <ArrowRight /></a></Button></nav>}
    </header>
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img src={heroImage} width={1920} height={1088} alt="Illustrative AI wedding concept: a Sri Lankan couple beneath a flower-covered ceremony pavilion in the Kandy hills" className="hero-image" fetchPriority="high" />
        <div className="container-wide hero-content">
          <p className="eyebrow">Kandy Wedding Planners · Sri Lanka</p>
          <h1 id="hero-title">Your Day.<br />Your Story.<br /><em>Beautifully Planned.</em></h1>
          <p className="hero-subtitle">Thoughtful wedding planning in Kandy, inspired by your story, your traditions, and the moments that matter.</p>
          <div className="hero-actions"><Button variant="wedding" size="editorial" asChild><a href="#enquiry">Start an Enquiry <ArrowRight aria-hidden="true" /></a></Button><Button variant="heroOutline" size="editorial" asChild><a href="#gallery">Explore the Gallery</a></Button></div>
          <p className="hero-proposal">Proposed demo copy — not confirmed official business copy.</p>
        </div>
        <div className="container-wide hero-bottom"><span>AI-generated illustrative concept image · Not verified client work</span><a href="#approach">A little more to discover <ArrowDown aria-hidden="true" /></a></div>
      </section>

      <section id="approach" className="section" aria-labelledby="approach-title">
        <div className="container-wide approach-grid">
          <div className="approach-visual"><img src={receptionImage} alt="Illustrative garden wedding table with delicate orchids and burgundy accents" width={1280} height={1024} loading="lazy" /><span className="photo-label">An illustrative reception concept</span></div>
          <div className="approach-content"><p className="eyebrow">A thoughtful approach</p><h2 id="approach-title">More than a wedding.<br /><em>A feeling to remember.</em></h2><p className="section-copy">A celebration can feel beautifully personal when every detail has a purpose. From meaningful traditions to the atmosphere around the table, this concept imagines a considered approach to your day.</p><p className="proposal-note">Illustrative proposed positioning — subject to business owner confirmation.</p>
            <div className="approach-points">
              <div className="approach-point"><ClipboardList aria-hidden="true" /><div><h3>Planning with intention</h3><p>A clear vision, shaped around the things that matter to you.</p></div></div>
              <div className="approach-point"><Heart aria-hidden="true" /><div><h3>Coordination with care</h3><p>Thoughtful connections between people, plans, and moments.</p></div></div>
              <div className="approach-point"><Flower2 aria-hidden="true" /><div><h3>Details that feel like you</h3><p>Personal touches, family traditions, and a sense of belonging.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section services-section" aria-labelledby="services-title"><div className="container-wide">
        <div className="section-heading"><div><p className="eyebrow">Ways to bring it together</p><h2 id="services-title">A place for every detail.</h2></div><div><p className="section-copy">From the bigger picture to the smallest finishing touch, explore what a planning journey could include.</p><p className="proposal-note">Proposed service categories — for owner confirmation.<br />These are not confirmed services of the business.</p></div></div>
        <div className="services-grid">{services.map(service => <article className="service" key={service.name}><service.icon className="service-icon" aria-hidden="true" /><h3>{service.name}</h3><p>{service.copy}</p></article>)}</div>
      </div></section>

      <section id="gallery" className="section" aria-labelledby="gallery-title"><div className="container-wide">
        <div className="gallery-heading"><p className="eyebrow">A little inspiration</p><h2 id="gallery-title">Moments worth <em>imagining.</em></h2><p className="proposal-note">Illustrative concept imagery — not verified work by this business.<br />All photographs are AI-generated, not actual client weddings.</p></div>
        <div className="gallery-grid">{gallery.map((image, index) => <figure className="gallery-item" key={image.title}><Button variant="navigation" className="gallery-trigger" aria-label={`View ${image.title}`} onClick={() => setSelectedImage(index)}><img src={image.image} width={image.width} height={image.height} alt={image.alt} loading="lazy" /><span className="gallery-zoom"><ZoomIn aria-hidden="true" /></span></Button><figcaption className="gallery-caption"><div><h3>{image.title}</h3><p>{image.category} · AI illustration</p></div><span>0{index + 1}</span></figcaption></figure>)}</div>
      </div></section>

      <section className="section process-section" aria-labelledby="process-title"><div className="container-wide"><p className="eyebrow">From the first thought to the final moment</p><h2 id="process-title">How planning could work</h2><div className="process-grid">
        <article className="process-step"><span className="process-number">01</span><h3>Share your vision</h3><p>Start with a conversation about your story, your hopes, and what a meaningful celebration looks like to you.</p></article>
        <article className="process-step"><span className="process-number">02</span><h3>Shape the details</h3><p>Explore the setting, traditions, and creative ideas. Bring the practical pieces into a thoughtful plan.</p></article>
        <article className="process-step"><span className="process-number">03</span><h3>Celebrate with confidence</h3><p>Imagine a day with room to be present, surrounded by your people and the details that feel like home.</p></article>
      </div><p className="process-note">An illustrative planning journey, not a confirmed business process or service promise.</p></div></section>

      <section id="faq" className="section" aria-labelledby="faq-title"><div className="container-wide faq-grid"><div className="faq-intro"><p className="eyebrow">A few things you may be wondering</p><h2 id="faq-title">Before the<br /><em>first conversation.</em></h2><p className="section-copy">A little clarity for the early stages of planning. These are general, non-binding answers, not confirmed business policies.</p></div><div className="faq-list">{faqs.map(faq => <details key={faq.question}><summary>{faq.question}<Plus aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div></div></section>

      <section id="enquiry" className="section enquiry-section" aria-labelledby="enquiry-title"><div className="container-wide enquiry-grid">
        <div className="enquiry-intro"><p className="eyebrow">Every story starts somewhere</p><h2 id="enquiry-title">Let’s imagine<br /><em>your beautiful day.</em></h2><p className="section-copy">A few thoughts are all it takes to begin. Explore how a first enquiry could feel, whether you have a clear vision or just the beginning of an idea.</p><p className="demo-label"><Info aria-hidden="true" /><span>Demo form only. Your details will not be sent or stored. This is not a booking or an enquiry to the business.</span></p>
          <div className="contact-info" id="contact"><p className="eyebrow">Public listing details</p><div className="contact-line"><MapPin aria-hidden="true" /><span>Kandy, Sri Lanka</span></div><div className="contact-line"><Phone aria-hidden="true" /><span className="contact-phone">077 461 6306</span></div><p className="proposal-note">Public listing phone only. All contact details must be verified by the business before any real launch.</p></div>
        </div>
        <form className="enquiry-form" onSubmit={submitEnquiry} onChange={() => { if (submitted) setSubmitted(false); }}>
          <div className="field"><label htmlFor="name">Your name *</label><input id="name" name="name" placeholder="Your full name" autoComplete="name" required maxLength={150} /></div>
          <div className="field contact-field"><label htmlFor="contact-detail">Email or phone *</label><input id="contact-detail" name="contact" placeholder="An email address or phone number" required maxLength={200} /></div>
          <div className="field"><label htmlFor="event-date">Event date <span>(optional)</span></label><input id="event-date" name="date" type="date" /></div>
          <div className="field"><label htmlFor="venue">Venue / location <span>(optional)</span></label><input id="venue" name="venue" placeholder="A place you have in mind" maxLength={200} /></div>
          <div className="field full-width"><label htmlFor="service">Service interest *</label><select id="service" name="service" required defaultValue=""><option value="" disabled>Select a proposed service</option>{services.map(service => <option key={service.name}>{service.name}</option>)}<option>Still exploring / not sure yet</option></select></div>
          <div className="field full-width"><label htmlFor="message">Tell us a little about your day *</label><textarea id="message" name="message" required placeholder="Your vision, meaningful traditions, or anything you would like to share…" maxLength={5000} /></div>
          <div className="form-end"><Button variant="wedding" size="editorial" type="submit">Preview Enquiry <ArrowRight aria-hidden="true" /></Button><p className="proposal-note">Concept demonstration only.<br />No details are transmitted or saved.</p></div>
          {submitted && <p className="submission-message" role="status" tabIndex={-1} ref={resultRef}>This is a concept demo. Your details have not been sent.</p>}
        </form>
      </div></section>
    </main>
    <footer className="footer"><div className="container-wide"><div className="footer-top"><Brand /><div className="footer-disclosure"><strong>Independent concept design by Source Code Software Solutions</strong><p>This is not the official Kandy Wedding Planners website. Images and proposed copy are illustrative.</p><p>This speculative concept is not commissioned or endorsed by the business.</p></div></div><div className="footer-bottom"><span>A wedding website concept · No bookings or enquiries are processed.</span><a href="#top">Back to top <ArrowUp aria-hidden="true" /></a></div></div></footer>
    <dialog ref={dialogRef} className="lightbox" aria-label="Illustrative wedding concept gallery" onClose={() => setSelectedImage(null)} onClick={event => { if (event.target === event.currentTarget) setSelectedImage(null); }}>
      {selected && <><div className="lightbox-top"><h3>{selected.title}</h3><Button variant="navigation" size="icon" onClick={() => setSelectedImage(null)} aria-label="Close gallery image"><X /></Button></div><img src={selected.image} alt={selected.alt} width={selected.width} height={selected.height} /><p className="proposal-note">Illustrative concept imagery — not verified work by this business. AI-generated, not an actual client wedding.</p></>}
    </dialog>
  </div>;
}
