export type GitHubStats = {
  publicRepos: number;
  topLanguages: string[];
  lastActive: string;
};

const FALLBACK: GitHubStats = {
  publicRepos: 28,
  topLanguages: ['TypeScript', 'JavaScript', 'HTML'],
  lastActive: 'recently',
};

function timeAgo(dateStr: string): string {
  const diffMs = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (days <= 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

export type ContributionDay = { date: string; level: number; row: number; col: number };
export type ContributionData = { weeks: number; total: number; days: ContributionDay[] };

const EMPTY_CONTRIBUTIONS: ContributionData = { weeks: 0, total: 0, days: [] };

export async function getContributions(): Promise<ContributionData> {
  try {
    const res = await fetch('https://github.com/users/SpicyFalcon619/contributions', {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return EMPTY_CONTRIBUTIONS;

    const html = await res.text();

    const totalMatch = html.match(/(\d[\d,]*)\s*\n?\s*contributions?/);
    const total = totalMatch ? parseInt(totalMatch[1].replace(/,/g, ''), 10) : 0;

    const tdMatches = html.match(/<td\b[^>]*class="ContributionCalendar-day"[^>]*>/g) || [];
    const days: ContributionDay[] = [];
    let maxCol = 0;

    for (const td of tdMatches) {
      const dateMatch = td.match(/data-date="([\d-]+)"/);
      const levelMatch = td.match(/data-level="(\d)"/);
      const idMatch = td.match(/id="contribution-day-component-(\d+)-(\d+)"/);
      if (!dateMatch || !levelMatch || !idMatch) continue;
      const row = parseInt(idMatch[1], 10);
      const col = parseInt(idMatch[2], 10);
      if (col > maxCol) maxCol = col;
      days.push({ date: dateMatch[1], level: parseInt(levelMatch[1], 10), row, col });
    }

    if (!days.length) return EMPTY_CONTRIBUTIONS;
    return { weeks: maxCol + 1, total, days };
  } catch {
    return EMPTY_CONTRIBUTIONS;
  }
}

export async function getGitHubStats(): Promise<GitHubStats> {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch('https://api.github.com/users/SpicyFalcon619', { next: { revalidate: 3600 } }),
      fetch('https://api.github.com/users/SpicyFalcon619/repos?per_page=100', { next: { revalidate: 3600 } }),
    ]);

    if (!userRes.ok || !reposRes.ok) return FALLBACK;

    const user = await userRes.json();
    const repos: Array<{ language: string | null; fork: boolean; pushed_at: string }> = await reposRes.json();

    const counts = new Map<string, number>();
    let mostRecentPush = 0;
    for (const r of repos) {
      if (r.fork) continue;
      if (r.language) counts.set(r.language, (counts.get(r.language) ?? 0) + 1);
      const t = new Date(r.pushed_at).getTime();
      if (t > mostRecentPush) mostRecentPush = t;
    }
    const topLanguages = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 4).map(([lang]) => lang);

    return {
      publicRepos: user.public_repos ?? FALLBACK.publicRepos,
      topLanguages: topLanguages.length ? topLanguages : FALLBACK.topLanguages,
      lastActive: mostRecentPush ? timeAgo(new Date(mostRecentPush).toISOString()) : FALLBACK.lastActive,
    };
  } catch {
    return FALLBACK;
  }
}
