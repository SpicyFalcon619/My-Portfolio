import TopBar from '@/components/TopBar';
import Hero from '@/components/Hero';
import InfoPanels from '@/components/InfoPanels';
import ProjectIndex from '@/components/ProjectIndex';
import Timeline from '@/components/Timeline';
import ContactCTA from '@/components/ContactCTA';
import { getGitHubStats, getContributions } from '@/lib/github';

export default async function HomePage() {
  const [githubStats, contributions] = await Promise.all([getGitHubStats(), getContributions()]);

  return (
    <>
      <TopBar />

      <main>
        <Hero githubStats={githubStats} />
        <ProjectIndex />
        <InfoPanels githubStats={githubStats} contributions={contributions} />
        <Timeline />
        <ContactCTA />
      </main>

      <footer>&copy; 2026 Ahmad Maruf Hossain — built with Next.js</footer>
    </>
  );
}
