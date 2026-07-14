import { CheckCircle2, CircleDashed, RefreshCw } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function RubricTable() {
  const { projects, rubric } = portfolioData;
  const totalMilestones = projects.length;
  const completedMilestones = projects.reduce((acc, project) => {
    const reportDone = project.report !== 'Sẽ cập nhật sau' && project.report !== '' && project.report !== 'Không yêu cầu';
    return acc + (reportDone ? 1 : 0);
  }, 0);
  const progressPercent = Math.round(50 + (completedMilestones / totalMilestones) * 50);

  return (
    <div className="space-y-10">
      <div data-reveal className="reveal glass-card outcome-glow overflow-hidden rounded-[32px] p-8 md:p-10 lg:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <span className="inline-flex rounded-full bg-white/45 px-5 py-2 section-kicker">Learning outcomes & digital skills</span>
            <h2 className="mt-7 text-5xl text-academic-ink md:text-6xl">Tổng kết kỹ năng</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-academic-muted">
              Hành trình sáu bài tập kết nối quản lý dữ liệu, nghiên cứu thông tin, tư duy AI, cộng tác, sáng tạo và liêm chính học thuật.
            </p>
          </div>
          <div className="rounded-[24px] border border-academic-deep-rose/10 bg-white/65 px-10 py-8 text-center shadow-soft backdrop-blur-xl">
            <p className="font-serif text-7xl text-academic-deep-rose">{progressPercent}%</p>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-academic-muted">Portfolio readiness</p>
          </div>
        </div>
        <div className="mt-9 h-2 overflow-hidden rounded-full bg-academic-deep-rose/12">
          <div className="h-full rounded-full bg-academic-deep-rose transition-all duration-700" style={{ width: `${progressPercent}%` }} />
        </div>
        <div className="mt-5 flex items-center gap-2 text-sm text-academic-muted">
          <RefreshCw size={15} />
          <span>{completedMilestones}/{totalMilestones} báo cáo PDF đã được đồng bộ.</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const reportDone = project.report !== 'Sẽ cập nhật sau' && project.report !== '' && project.report !== 'Không yêu cầu';
          const isFullyDone = reportDone;
          const rubricItem = rubric[project.id];

          return (
            <article data-reveal key={project.id} className="reveal soft-card hover-lift relative overflow-hidden rounded-[28px] p-8">
              <span className="select-none font-serif text-6xl text-academic-deep-rose/10">{String(project.id).padStart(2, '0')}</span>
              <span className="absolute right-8 top-8 flex h-9 w-9 items-center justify-center rounded-full bg-academic-yellow text-academic-warning">
                {isFullyDone ? <CheckCircle2 size={20} /> : <CircleDashed size={20} />}
              </span>
              <h3 className="mt-8 text-2xl leading-tight text-academic-ink">{project.title}</h3>
              <p className="mt-5 inline-flex rounded-full bg-academic-yellow/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.06em] text-academic-warning">
                {isFullyDone ? 'Đạt chuẩn báo cáo' : 'Cần bổ sung báo cáo'}
              </p>
              {rubricItem && <p className="mt-6 text-base leading-8 text-academic-muted">{rubricItem.action}</p>}
              <div className="mt-7 h-2 w-2 rotate-45 bg-academic-deep-rose/25" />
            </article>
          );
        })}
      </div>
    </div>
  );
}
