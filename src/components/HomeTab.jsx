import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Bot, CheckCircle2, Globe2, Languages, Quote, Sparkles } from 'lucide-react';
import avatarImage from '../../docs/avatar.png';

export default function HomeTab() {
  const { student, overview } = portfolioData;

  return (
    <div className="relative z-10 space-y-20 lg:space-y-28">
      <section data-reveal className="reveal">
        <div className="grid min-w-0 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,450px)]">
          <div className="min-w-0 pt-4 md:pt-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex rounded-full bg-academic-blush/80 px-5 py-2 section-kicker text-academic-deep-rose">
                Portfolio / Digital & AI Learning
              </span>
              <span className="hidden items-center gap-2 rounded-full bg-white/55 px-4 py-2 text-sm font-bold text-academic-muted backdrop-blur-xl sm:inline-flex">
                <CheckCircle2 size={16} />
                2025 - 2026
              </span>
            </div>

            <h1 className="mt-8 max-w-4xl text-[2.45rem] leading-[1.05] text-academic-ink sm:text-6xl lg:text-7xl">
              <span className="block">Personal portfolio</span>
              <span className="block italic">{student.name}</span>
            </h1>
            <p className="mt-6 max-w-3xl text-wrap font-serif text-2xl italic leading-snug text-academic-muted md:text-3xl">
              French Language & Culture Learning Portfolio
            </p>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-academic-muted">
              {student.bio}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#bai-tap" className="primary-button inline-flex w-full items-center justify-center gap-3 px-8 py-4 text-sm uppercase sm:w-auto">
                Xem bài tập
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          <aside className="glass-card overflow-hidden rounded-[40px] p-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-academic-ivory">
              <img
                src={avatarImage}
                alt={`Ảnh chân dung ${student.name}`}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute bottom-6 right-6 rounded-full bg-white/82 px-5 py-3 text-sm font-bold text-academic-rose backdrop-blur-md">
                Đinh Thị Thu Hiền
              </div>
            </div>
            <div className="mt-6 space-y-4 px-2">
              <div className="flex items-center justify-between gap-6">
                <span className="section-kicker">Student ID</span>
                <span className="font-serif text-xl text-academic-ink">25041382</span>
              </div>
              <div className="h-px bg-academic-deep-rose/10" />
              <div>
                <span className="section-kicker">Affiliation</span>
                <p className="mt-2 text-base text-academic-muted">ULIS - Vietnam National University</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="ho-so" className="section-anchor grid gap-6 md:grid-cols-4">
        <article data-reveal className="reveal glass-card hover-lift flex min-h-64 flex-col justify-between rounded-[32px] p-8 md:col-span-2">
          <Languages className="text-academic-deep-rose" size={38} strokeWidth={1.5} />
          <div>
            <span className="section-kicker">Ngành</span>
            <h2 className="mt-3 text-3xl leading-tight text-academic-ink">Ngôn ngữ và Văn hóa Pháp</h2>
          </div>
        </article>
        <article data-reveal className="reveal glass-card hover-lift flex min-h-64 flex-col justify-between rounded-[32px] border-l-4 border-l-academic-yellow p-8 md:col-span-2">
          <Bot className="text-academic-deep-rose" size={38} strokeWidth={1.5} />
          <div>
            <span className="section-kicker">Học phần</span>
            <h2 className="mt-3 text-3xl leading-tight text-academic-ink">Công nghệ số & Ứng dụng AI</h2>
          </div>
        </article>
        <article data-reveal className="reveal soft-card hover-lift rounded-[28px] p-8 md:col-span-2 lg:col-span-1">
          <Globe2 className="text-academic-blue" size={28} strokeWidth={1.6} />
          <span className="section-kicker mt-8 block">Mục tiêu học tập</span>
          <h3 className="mt-3 text-2xl text-academic-ink">Văn hóa trong ngôn ngữ</h3>
          <p className="mt-4 text-sm leading-7 text-academic-muted">
            • Nắm vững kiến thức về học phần.
            <br />
            • Biết ứng dụng AI để hỗ trợ học tập, công việc.
            <br />
            • Phát triển kỹ năng sử dụng công nghệ số an toàn, trách nhiệm.
          </p>
        </article>
        <article data-reveal className="reveal soft-card hover-lift rounded-[28px] p-8 md:col-span-2 lg:col-span-1">
          <Sparkles className="text-academic-blue" size={28} strokeWidth={1.6} />
          <span className="section-kicker mt-8 block">Digital learning</span>
          <h3 className="mt-3 text-2xl text-academic-ink">AI có trách nhiệm</h3>
          <p className="mt-4 text-sm leading-7 text-academic-muted">
            Công cụ số hỗ trợ tìm kiếm, tổ chức và trình bày thông tin khi người học biết kiểm chứng nội dung.
          </p>
        </article>
        <blockquote data-reveal className="reveal soft-card hover-lift relative rounded-[28px] p-8 md:col-span-4 lg:col-span-2">
          <Quote className="absolute right-7 top-7 text-academic-yellow" size={46} strokeWidth={1.2} />
          <span className="section-kicker">Kỹ năng nổi bật</span>
          <p className="mt-6 max-w-2xl font-serif text-2xl italic leading-10 text-academic-ink">
            • Khả năng tìm kiếm, chọn lọc và xử lý thông tin hiệu quả.
            <br />
            • Sử dụng các công cụ AI để hỗ trợ học tập và giải quyết công việc.
            <br />
            • Tư duy logic, khả năng tự học với công nghệ mới.
            <br />
            • Kỹ năng làm việc nhóm và quản lý thời gian.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {student.skills.slice(0, 4).map((skill) => <span className="tag" key={skill}>{skill}</span>)}
          </div>
        </blockquote>
      </section>

      <section id="bai-tap" data-reveal className="reveal section-anchor">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="section-kicker">Learning index</span>
            <h2 className="mt-4 text-5xl text-academic-ink md:text-6xl">Bản đồ học tập</h2>
          </div>
          <p className="max-w-md text-base italic leading-8 text-academic-muted md:text-right">
            Bảy năng lực nền tảng định hướng hành trình học tập và sáu bài thực hành trong portfolio.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {overview.map((item, index) => {
            const Icon = item.icon;
            const accents = ['bg-academic-cyan', 'bg-academic-yellow', 'bg-academic-blush'];
            return (
              <article data-reveal key={item.id} className="reveal soft-card hover-lift group relative min-h-[270px] overflow-hidden rounded-[28px] p-8 transition">
                <span className="absolute left-4 top-6 select-none font-serif text-5xl font-bold text-academic-deep-rose/10">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex justify-end">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accents[index % accents.length]} text-academic-deep-rose shadow-sm`}>
                    <Icon size={22} />
                  </span>
                </div>
                <div className="mt-14">
                  <h3 className="text-2xl leading-tight text-academic-ink">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-academic-muted">{item.desc}</p>
                  <div className="mt-8 h-px w-14 bg-academic-deep-rose/25 transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
