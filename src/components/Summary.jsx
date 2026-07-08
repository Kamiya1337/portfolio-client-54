import { Quote } from 'lucide-react';
import avatarImage from '../../docs/avatar.png';

export default function Summary() {
  return (
    <div className="space-y-10">
      <div className="max-w-4xl">
        <span className="section-kicker">Reflection & academic integrity</span>
        <h2 className="mt-4 text-5xl text-academic-ink md:text-6xl">Suy ngẫm sau hành trình học tập</h2>
        <div className="mt-7 h-1 w-24 rounded-full bg-academic-deep-rose" />
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <article data-reveal className="reveal soft-card relative overflow-hidden rounded-[32px] p-8 md:p-10">
          <Quote className="absolute right-7 top-7 text-academic-cyan/35" size={86} strokeWidth={1.2} />
          <h3 className="relative text-4xl leading-tight text-academic-blue">Kiến thức & Kỹ năng đã đạt được</h3>
          <div className="relative mt-8 border-l-4 border-academic-yellow pl-7">
            <p className="font-serif text-xl italic leading-9 text-academic-muted">
              “Ban đầu em nghĩ portfolio chỉ là gom các bài đã làm rồi đưa lên một trang web. Nhưng khi bắt tay vào làm, em mới thấy nếu chỉ đưa file lên thì sản phẩm sẽ khá rời rạc và không thể hiện được quá trình học.”
            </p>
          </div>
          <p className="relative mt-8 whitespace-pre-line text-justify text-base leading-8 text-academic-muted">
            •	Nắm vững kiến thức nền tảng về công nghệ số và trí tuệ nhân tạo. 
            <br />
•	Hiểu nguyên lý hoạt động và các ứng dụng cơ bản của AI. 
            <br />
•	Phát triển kỹ năng tìm kiếm, đánh giá và xử lý thông tin số. 
            <br />
•	Rèn luyện tư duy số và khả năng giải quyết vấn đề. 
            <br />
•	Nâng cao kỹ năng làm việc nhóm, thuyết trình và quản lý thời gian. 
            <br />
•	Nhận thức được các nguyên tắc đạo đức và trách nhiệm khi sử dụng AI.

          </p>
        </article>

        <aside className="space-y-8">
          <div data-reveal className="reveal glass-card rounded-[28px] p-7">
            <span className="section-kicker">Thông tin hồ sơ</span>
            <div className="mt-6 h-px bg-academic-deep-rose/15" />
            <dl className="mt-6 space-y-5 text-sm">
              <div className="flex items-center justify-between gap-4">
                <dt className="font-bold text-academic-muted">Học kỳ:</dt>
                <dd className="font-extrabold text-academic-ink">2025 - 2026</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="font-bold text-academic-muted">Chuyên ngành:</dt>
                <dd className="text-right font-extrabold text-academic-ink">Công nghệ Số & AI</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="font-bold text-academic-muted">Trạng thái:</dt>
                <dd className="rounded-full bg-academic-cyan px-4 py-2 text-xs font-extrabold uppercase text-academic-hero-blue">Hoàn thành</dd>
              </div>
            </dl>
          </div>

          <figure data-reveal className="reveal glass-card overflow-hidden rounded-[28px]">
            <figcaption className="bg-academic-deep-rose px-6 py-5 font-serif text-xl italic leading-8 text-academic-blush">
              “Học hỏi là một hành trình không bao giờ dừng lại.”
            </figcaption>
          </figure>
        </aside>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <article data-reveal className="reveal soft-card hover-lift rounded-[24px] p-7">
          <span className="section-kicker">Thử thách</span>
          <h3 className="mt-4 text-3xl text-academic-ink">Khó khăn gặp phải</h3>
          <p className="mt-5 text-justify text-sm leading-8 text-academic-muted">
            Khó nhất với em không phải là viết từng báo cáo, mà là gom tất cả lại thành một sản phẩm hoàn chỉnh. Khi đưa lên web, em phải chỉnh lại bố cục, màu sắc, phần minh chứng, bảng rubric và cả trang in PDF. Trong quá trình làm, em có dùng AI để hỗ trợ viết code, gợi ý giao diện và sửa nội dung. Tuy nhiên, em không dùng nguyên mọi thứ AI tạo ra. Em vẫn phải chạy thử, kiểm tra, chỉnh lại phần sai và thay các nội dung chung chung bằng thông tin thực tế của mình.
          </p>
        </article>
        <article data-reveal className="reveal soft-card hover-lift rounded-[24px] p-7">
          <span className="section-kicker">Next steps</span>
          <h3 className="mt-4 text-3xl text-academic-ink">Điểm mình tâm đắc về Portfolio</h3>
          <p className="mt-5 text-justify text-sm leading-8 text-academic-muted">
            •	Hệ thống hóa đầy đủ kiến thức đã học trong học phần. 
                        <br />
•	Thể hiện rõ quá trình học tập và các sản phẩm đạt được. 
            <br />
•	Ứng dụng AI một cách hiệu quả, đúng mục đích và có trách nhiệm. 
            <br />
•	Trình bày khoa học, trực quan và dễ theo dõi.

          </p>
        </article>
      </div>
    </div>
  );
}
