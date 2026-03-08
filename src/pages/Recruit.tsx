import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Users, Heart, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  { num: "01", title: "応募", desc: "お問い合わせフォームまたはお電話でご連絡ください。" },
  { num: "02", title: "面接", desc: "日程を調整の上、面接を行います。" },
  { num: "03", title: "採用", desc: "選考結果をご連絡いたします。" },
  { num: "04", title: "入社", desc: "研修を経て勤務開始となります。" },
];

const Recruit = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-20 md:pt-24 section-padding bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-subheading text-muted-foreground mb-3">Recruit</p>
          <h1 className="section-heading-jp text-foreground mb-6">採用情報</h1>
          <div className="divider-line" />
        </div>
      </section>

      {/* Message */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading english="Message" japanese="私たちと一緒に働きませんか" />
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-6">
            佐藤観光商事は、新ひだか町で70年以上にわたりホテル事業を営んでまいりました。
            地元に根ざし、訪れるすべてのお客様に心温まるおもてなしを提供することが私たちの使命です。
          </p>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            馬と自然が息づくこの町で、私たちと一緒に働いてみませんか。
            経験や年齢は問いません。おもてなしの心を大切にできる方のご応募をお待ちしています。
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto">
          <SectionHeading english="Work Environment" japanese="働く環境" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Heart className="w-8 h-8 mx-auto mb-4 text-gold" />
              <h3 className="font-serif text-lg mb-2">温かい職場</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                少人数のアットホームな環境。チームワークを大切にしています。
              </p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-4 text-gold" />
              <h3 className="font-serif text-lg mb-2">地域とともに</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                地元の食材や文化を大切にし、地域社会に貢献しています。
              </p>
            </div>
            <div className="text-center">
              <Briefcase className="w-8 h-8 mx-auto mb-4 text-gold" />
              <h3 className="font-serif text-lg mb-2">キャリア</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                ホテル運営の多岐にわたる業務を経験できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <SectionHeading english="Positions" japanese="募集職種" />
          <div className="space-y-4">
            {["フロントスタッフ", "調理補助", "清掃スタッフ"].map((pos) => (
              <div key={pos} className="bg-secondary p-6 flex items-center justify-between">
                <span className="font-serif text-lg">{pos}</span>
                <span className="text-xs tracking-[0.15em] text-muted-foreground">詳細はお問い合わせください</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto">
          <SectionHeading english="Application Flow" japanese="応募の流れ" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="text-center relative">
                <p className="text-3xl font-display text-gold mb-3">{step.num}</p>
                <h3 className="font-serif text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden md:block w-5 h-5 text-muted-foreground/30 absolute right-0 top-8 translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeading english="Contact" japanese="応募・お問い合わせ" />
          <p className="text-sm text-muted-foreground mb-8">
            ご応募やご質問は、お問い合わせフォームまたはお電話でお気軽にどうぞ。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="booking-btn">
              お問い合わせフォーム
            </Link>
            <a href="tel:0146-42-0425" className="booking-btn bg-secondary text-secondary-foreground hover:bg-muted">
              TEL: 0146-42-0425
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recruit;
