import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { AlertCircle, CheckCircle2, XCircle, X, Maximize2 } from 'lucide-react';

export default function EvidenceTable() {
  const { projects } = portfolioData;
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });

  const openPreview = (e, url, type) => {
    if (type === 'drive') return;
    e.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };

  const closePreview = () => setPreviewData({ isOpen: false, url: '', type: '' });

  const EvidenceLink = ({ value, label, type }) => {
    if (value === 'Sẽ cập nhật sau' || !value) {
      return <span className="rounded-full bg-academic-yellow/70 px-3 py-1.5 text-xs font-bold text-academic-warning">Đang chờ</span>;
    }
    if (value === 'Không yêu cầu') {
      return <span className="rounded-full bg-academic-ivory px-3 py-1.5 text-xs font-bold text-academic-muted">---</span>;
    }
    return (
      <a
        href={value}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => openPreview(e, value, type)}
        className="group inline-flex items-center gap-1.5 rounded-full border border-academic-deep-rose/15 bg-white/48 px-3 py-1.5 text-sm font-bold text-academic-deep-rose transition hover:bg-white/75"
      >
        {label}
        {type !== 'drive' && <Maximize2 size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />}
      </a>
    );
  };

  const StatusBadge = ({ report, img, drive }) => {
    const isReportDone = report !== 'Sẽ cập nhật sau' && report !== '' && report !== 'Không yêu cầu';
    const isImgDone = img !== 'Sẽ cập nhật sau' && img !== '' && img !== 'Không yêu cầu';
    const isDriveDone = drive !== 'Sẽ cập nhật sau' && drive !== '' && drive !== 'Không yêu cầu';

    if (isReportDone && isImgDone && isDriveDone) {
      return (
        <span className="inline-flex items-center gap-1 rounded-full border border-academic-blue-light/40 bg-academic-cyan px-3 py-1.5 text-xs font-bold uppercase text-academic-hero-blue">
          <CheckCircle2 size={14}/> Đã nộp
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-academic-blush bg-academic-blush/65 px-3 py-1.5 text-xs font-bold uppercase text-academic-deep-rose">
        <XCircle size={14}/> Thiếu MC
      </span>
    );
  };

  return (
    <div className="mx-auto max-w-6xl pb-2">
      {previewData.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-academic-ink/70 p-4 backdrop-blur-md print:hidden md:p-10">
          <div className="glass-card flex h-full max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-[28px] shadow-glass">
            <div className="flex items-center justify-between border-b border-academic-deep-rose/10 bg-white/45 p-4">
              <h3 className="text-xl text-academic-ink">
                {previewData.type === 'pdf' ? 'Trình xem PDF (Báo cáo)' : 'Trình xem Hình ảnh (Screenshot)'}
              </h3>
              <div className="flex items-center gap-4">
                <a href={previewData.url} target="_blank" rel="noreferrer" className="text-sm font-bold text-academic-deep-rose hover:underline">
                  Mở thẻ mới
                </a>
                <button onClick={closePreview} className="icon-button" aria-label="Đóng bản xem trước">
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center overflow-auto bg-white/35 p-4">
              {previewData.type === 'pdf' ? (
                <iframe
                  src={previewData.url}
                  title="PDF Preview"
                  className="h-full w-full rounded-2xl border-none bg-white shadow-sm"
                />
              ) : (
                <img
                  src={previewData.url}
                  alt="Minh chứng"
                  className="max-h-full max-w-full rounded-2xl bg-white object-contain shadow-sm"
                />
              )}
            </div>
          </div>
        </div>
      )}

      <div className="mb-10 text-center">
        <span className="section-kicker">Evidence control</span>
        <h2 className="mt-4 text-5xl text-academic-ink md:text-6xl">Bảng kiểm soát minh chứng</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-academic-muted">Tổng hợp tình trạng các file báo cáo, hình ảnh và link sản phẩm cần nộp.</p>
      </div>

      <div className="glass-card overflow-hidden rounded-[28px]">
        <div className="flex items-start gap-3 border-b border-academic-deep-rose/10 bg-white/35 p-5">
          <AlertCircle className="mt-0.5 flex-shrink-0 text-academic-deep-rose" size={20} />
          <p className="text-sm leading-6 text-academic-muted">
            <strong className="text-academic-ink">Ghi chú:</strong> Click vào Báo cáo (PDF) hoặc Hình ảnh để xem nhanh ngay trên trình duyệt dưới dạng Pop-up.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] border-collapse text-left">
            <thead>
              <tr className="border-b border-academic-deep-rose/10 bg-academic-cyan/45 text-xs uppercase tracking-[0.12em] text-academic-muted">
                <th className="w-1/4 p-4 font-bold">Bài tập / Nhiệm vụ</th>
                <th className="p-4 font-bold">File Báo cáo</th>
                <th className="p-4 font-bold">Ảnh Screenshot</th>
                <th className="p-4 font-bold">Link Google Drive</th>
                <th className="p-4 text-center font-bold">Trạng thái chung</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-academic-deep-rose/10">
              {projects.map((project) => (
                <tr key={project.id} className="transition-colors hover:bg-white/35">
                  <td className="p-4">
                    <p className="font-serif text-xl leading-snug text-academic-ink">{project.title}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.08em] text-academic-muted">{project.chapter}</p>
                  </td>
                  <td className="p-4"><EvidenceLink value={project.report} label="Xem báo cáo" type="pdf" /></td>
                  <td className="p-4"><EvidenceLink value={project.evidenceImg} label="Xem ảnh" type="img" /></td>
                  <td className="p-4"><EvidenceLink value={project.driveLink} label="Mở Drive" type="drive" /></td>
                  <td className="p-4 text-center">
                    <StatusBadge report={project.report} img={project.evidenceImg} drive={project.driveLink} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
