'use client';

import ScrollReveal from './ScrollReveal';

const ENTRIES = [
  {
    date: 'Jan 2025',
    title: 'UIU CSE FEST 2025 — Best Emerging Team',
    org: 'Blockchain Category',
    body: 'Won with Wastopia, a blockchain-based waste-tracking & incentive platform.',
    tags: null as string[] | null,
  },
  {
    date: '2024 — Present',
    title: 'BSc in Computer Science & Engineering',
    org: 'United International University',
    body: 'Currently in my 2nd year, focusing on core CS fundamentals and emerging tech like blockchain and AI.',
    tags: ['Data Structures', 'Algorithms', 'OOP', 'Database Systems'],
  },
  {
    date: '2023',
    title: 'Completed Higher Secondary Certificate (HSC)',
    org: 'Sena Public School & College',
    body: 'Focused on Mathematics, Physics, and Chemistry — a solid foundation for CS studies.',
    tags: ['Mathematics', 'Physics', 'Chemistry', 'ICT'],
  },
  {
    date: '2022',
    title: 'Started Higher Secondary',
    org: 'Sena Public School & College',
    body: 'Began building a foundation in the sciences.',
    tags: null,
  },
];

export default function Timeline() {
  return (
    <ScrollReveal id="timeline" className="container">
      <h2 className="section-title">Timeline</h2>
      <div className="timeline-v3">
        {ENTRIES.map((e) => (
          <div className="timeline-entry" key={e.title}>
            <div className="timeline-date mono">{e.date}</div>
            <div className="timeline-rule" />
            <div className="timeline-body">
              <h3>{e.title}</h3>
              <div className="org">{e.org}</div>
              <p>{e.body}</p>
              {e.tags && (
                <div className="tag-row">
                  {e.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
