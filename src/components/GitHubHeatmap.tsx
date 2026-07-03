import type { ContributionData } from '@/lib/github';

export default function GitHubHeatmap({ data }: { data: ContributionData }) {
  if (!data.days.length) return null;

  return (
    <div className="contrib-wrap">
      <div className="contrib-head">
        <span className="contrib-total">{data.total.toLocaleString()} contributions in the last year</span>
      </div>

      <div className="contrib-grid" style={{ gridTemplateColumns: `repeat(${data.weeks}, 11px)` }}>
        {data.days.map((d) => (
          <div
            key={d.date}
            className={`contrib-cell l${d.level}`}
            style={{ gridRow: d.row + 1, gridColumn: d.col + 1 }}
            title={`${d.date}`}
          />
        ))}
      </div>

      <div className="contrib-legend">
        <span>Less</span>
        <i className="contrib-cell l0" />
        <i className="contrib-cell l1" />
        <i className="contrib-cell l2" />
        <i className="contrib-cell l3" />
        <i className="contrib-cell l4" />
        <span>More</span>
      </div>
    </div>
  );
}
