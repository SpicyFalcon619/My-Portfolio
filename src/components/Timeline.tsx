'use client';

import ScrollReveal from './ScrollReveal';

const ENTRIES = [
  {
    date: 'Nov 2026',
    title: 'Drawer 378 and the Field Guides',
    org: 'Open learning resources',
    body: 'Published my whole degree as a searchable archive, and three interactive guides (Java, ML, AI Engineering) where every example runs in the browser.',
    tags: ['Teaching', 'Open Source'],
  },
  {
    date: 'Oct 2026',
    title: 'PhytoCast — Electronics Lab project',
    org: 'Team of six, EEE 2124',
    body: 'An ESP32 plant-care system that forecasts disease before symptoms appear, with a Flask dashboard and a MobileNetV2 detector at 94.7% validation accuracy.',
    tags: ['ESP32', 'IoT', 'Machine Learning'],
  },
  {
    date: 'Oct 2026',
    title: 'Grameenphone FutureMakers 2026',
    org: 'Team_Anomaly',
    body: 'Built Shetu, a prototype that helps employers keep the people they trained through long leave, with an offline AI pipeline.',
    tags: ['Hackathon', 'Prototype'],
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
