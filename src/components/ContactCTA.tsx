'use client';

import ScrollReveal from './ScrollReveal';
import MagneticButton from './MagneticButton';
import { GitHubIcon, LinkedInIcon, InstagramIcon, MailIcon } from './Icons';

export default function ContactCTA() {
  return (
    <ScrollReveal id="contact" className="container contact-v3">
      <span className="section-mark">Contact</span>
      <h2 className="contact-cta">
        Let&apos;s build<br />
        <span className="accent-block">something.</span>
      </h2>

      <div className="contact-row">
        <div className="contact-links-v3">
          <MagneticButton>
            <a className="btn-solid" href="mailto:a.marufhossain619@gmail.com">
              <MailIcon /> a.marufhossain619@gmail.com
            </a>
          </MagneticButton>
          <div className="contact-icon-row">
            <MagneticButton>
              <a href="https://github.com/SpicyFalcon619" target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-btn"><GitHubIcon /></a>
            </MagneticButton>
            <MagneticButton>
              <a href="https://www.linkedin.com/in/ahmad-maruf-hossain/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-btn"><LinkedInIcon /></a>
            </MagneticButton>
            <MagneticButton>
              <a href="https://www.instagram.com/spicy_falconn/" target="_blank" rel="noreferrer" aria-label="Instagram" className="icon-btn"><InstagramIcon /></a>
            </MagneticButton>
          </div>
        </div>

        <form action="https://formspree.io/f/myzdbzdy" method="POST" className="contact-form-min">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea className="full" name="message" placeholder="Message" rows={3} required></textarea>
          <button type="submit">Send &rarr;</button>
        </form>
      </div>
    </ScrollReveal>
  );
}
