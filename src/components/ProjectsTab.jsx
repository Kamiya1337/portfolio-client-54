import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, ExternalLink, FileText, FolderOpen, Image, Maximize2, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const unavailable = (value) => !value || value === 'Sẽ cập nhật sau';
const notRequired = (value) => value === 'Không yêu cầu';

function PreviewModal({ previewData, onClose }) {
  useEffect(() => {
    if (!previewData.isOpen) return undefined;
    const handleEscape = (event) => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [previewData.isOpen, onClose]);

  if (!previewData.isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onMouseDown={onClose}>
      <div className="glass-card flex h-[88vh] w-full max-w-6xl flex-col overflow-hidden rounded-[28px] shadow-glass" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between gap-4 border-b border-academic-deep-rose/10 bg-white/45 px-5 py-4">
          <div>
            <p className="section-kicker">Preview</p>
            <h3 className="mt-1 text-xl text-academic-ink">{previewData.type === 'pdf' ? 'Trình xem PDF (Báo cáo)' : 'Trình xem Hình ảnh (Screenshot)'}</h3>
          </div>
          <div className="flex items-center gap-2">
            <a href={previewData.url} target="_blank" rel="noreferrer" className="icon-button" aria-label="Mở trong tab mới"><ExternalLink size={18} /></a>
            <button type="button" onClick={onClose} className="icon-button" aria-label="Đóng bản xem trước"><X size={20} /></button>
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden bg-white/35">
          {previewData.type === 'pdf' ? (
            <iframe
              src={previewData.url}
              title="Bản xem trước báo cáo PDF"
              className="block h-full w-full border-0 bg-transparent"
            />
          ) : (
            <div className="flex h-full items-center justify-center overflow-auto bg-transparent">
              <img src={previewData.url} alt="Ảnh minh chứng bài tập" className="block max-h-full max-w-full object-contain" />
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}

function ResourceAction({ value, type, onPreview }) {
  const config = {
    pdf: { label: 'Báo cáo PDF', icon: FileText },
    img: { label: 'Ảnh minh chứng', icon: Image },
    drive: { label: 'Google Drive', icon: FolderOpen },
  }[type];
  const Icon = config.icon;

  if (unavailable(value)) return <span className="resource-disabled"><Icon size={17} /> Sẽ cập nhật sau</span>;
  if (notRequired(value)) return <span className="resource-disabled"><Icon size={17} /> Không yêu cầu</span>;

  return (
    <a
      href={value}
      target={type === 'drive' ? '_blank' : undefined}
      rel={type === 'drive' ? 'noreferrer' : undefined}
      onClick={type === 'drive' ? undefined : (event) => onPreview(event, value, type)}
      className="resource-action"
    >
      <Icon size={17} />
      {config.label}
      {type === 'drive' ? <ExternalLink size={14} /> : <Maximize2 size={14} />}
    </a>
  );
}

export default function ProjectsTab() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });

  const openPreview = (event, url, type) => {
    event.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };
  const closePreview = () => setPreviewData({ isOpen: false, url: '', type: '' });

  return (
    <section data-reveal className="reveal section-anchor space-y-12" aria-labelledby="cases-title">
      <PreviewModal previewData={previewData} onClose={closePreview} />

      <div className="mx-auto max-w-3xl text-center">
        <span className="section-kicker">Digital learning cases</span>
        <h2 id="cases-title" className="mt-4 text-5xl text-academic-ink md:text-6xl">6 case học phần</h2>
        <p className="mt-5 text-base leading-8 text-academic-muted md:text-lg">
          Sáu bài tập ghi lại cách kiến thức được chuyển thành sản phẩm, minh chứng và trải nghiệm học tập thực tế.
        </p>
      </div>

      {selectedProject && (
        <article className="glass-card soft-pink-glow overflow-hidden rounded-[32px]">
          <div className="p-7 text-academic-ink md:p-10">
            <button type="button" onClick={() => setSelectedProject(null)} className="mb-8 inline-flex items-center gap-2 rounded-full border border-academic-deep-rose/20 bg-white/45 px-4 py-2 text-sm font-bold text-academic-deep-rose backdrop-blur-xl transition hover:bg-white/75">
              <ArrowLeft size={17} /> Trở lại 6 case
            </button>
            <p className="section-kicker">Case {String(selectedProject.id).padStart(2, '0')} · {selectedProject.chapter}</p>
            <h3 className="mt-4 max-w-4xl text-4xl leading-tight text-academic-ink md:text-5xl">{selectedProject.title}</h3>
            <p className="mt-5 max-w-3xl text-base leading-8 text-academic-muted">{selectedProject.shortDesc}</p>
          </div>

          <div className="grid gap-6 p-7 pt-0 md:p-10 md:pt-0 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-[24px] border border-academic-deep-rose/10 bg-white/38 p-6 backdrop-blur-xl">
                <span className="section-kicker">Mục tiêu</span>
                <p className="mt-4 leading-7 text-academic-muted">{selectedProject.target}</p>
              </div>
              <div className="rounded-[24px] border border-academic-deep-rose/10 bg-white/38 p-6 backdrop-blur-xl">
                <span className="section-kicker">Kỹ năng</span>
                <div className="mt-4 flex flex-wrap gap-2">{selectedProject.skills?.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
              </div>
            </div>
            <div className="rounded-[24px] border border-academic-deep-rose/10 bg-white/38 p-6 backdrop-blur-xl">
              <span className="section-kicker">Quá trình thực hiện</span>
              <p className="mt-4 text-sm leading-8 text-academic-muted">{selectedProject.process}</p>
            </div>
          </div>

          <div className="border-t border-academic-deep-rose/10 bg-white/25 p-7 md:px-10">
            <p className="section-kicker mb-4">Tài liệu & minh chứng</p>
            <div className="flex flex-wrap gap-3">
              <ResourceAction value={selectedProject.report} type="pdf" onPreview={openPreview} />
              <ResourceAction value={selectedProject.evidenceImg} type="img" onPreview={openPreview} />
              <ResourceAction value={selectedProject.driveLink} type="drive" onPreview={openPreview} />
            </div>
          </div>
        </article>
      )}

      <div className={`${selectedProject ? 'hidden' : 'grid'} gap-8 md:grid-cols-2`} aria-hidden={Boolean(selectedProject)}>
        {projects.map((project) => (
          <article data-reveal key={project.id} className="reveal soft-card hover-lift group flex min-h-[340px] flex-col rounded-[28px] p-8 transition">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="section-kicker">Case {String(project.id).padStart(2, '0')}</span>
                <p className="mt-3 text-sm font-extrabold uppercase tracking-[0.08em] text-academic-muted">{project.chapter}</p>
              </div>
              <span className="rounded-full bg-academic-cyan px-4 py-2 text-[11px] font-extrabold uppercase text-academic-hero-blue">{project.status}</span>
            </div>
            <h3 className="mt-8 text-4xl leading-tight text-academic-ink">{project.title}</h3>
            <p className="mt-5 flex-1 text-base leading-8 text-academic-muted">{project.shortDesc}</p>
            <div className="mt-6 flex flex-wrap gap-2">{project.skills?.slice(0, 3).map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
            <div className="mt-8 flex items-center justify-between border-t border-academic-deep-rose/10 pt-6">
              <button type="button" onClick={() => setSelectedProject(project)} className="primary-button px-6 py-3 text-sm">Xem chi tiết</button>
              <button type="button" onClick={(event) => openPreview(event, project.report, 'pdf')} disabled={unavailable(project.report) || notRequired(project.report)} className="icon-button h-14 w-14 disabled:cursor-not-allowed disabled:opacity-35" aria-label={`Xem báo cáo ${project.title}`}><FileText size={21} /></button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
