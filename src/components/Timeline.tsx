'use client';

import ScrollReveal from './ScrollReveal';

const ENTRIES = [
  {
    date: 'Oct 2026',
    title: 'Grameenphone FutureMakers 2026',
    org: 'Team_Anomaly, Gender Equality & Inclusion',
    body: 'Reached Round 2, the Concept Pitch at GP House, with Shetu: an AI system that keeps a job intact through maternity leave. A team of four; now our Software Engineering Lab project.',
    tags: ['AI', 'Competition', 'Team of four'],
  },
  {
    date: 'Jul 2026 — Present',
    title: 'Undergraduate Assistant (UGA)',
    org: 'Department of CSE, United International University',
    body: 'Selected as a UGA for the Database Management System Lab: supporting students through SQL and database lab sessions.',
    tags: ['DBMS', 'SQL', 'Teaching'],
  },
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
    body: '3rd year, 8th trimester. Every course is archived in Drawer 378.',
    tags: ['Data Structures', 'Algorithms', 'OOP', 'Database Systems', 'AI', 'Computer Architecture', 'Software Engineering'],
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
