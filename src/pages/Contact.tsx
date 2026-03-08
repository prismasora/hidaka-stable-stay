import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-20 md:pt-24 section-padding bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-subheading text-muted-foreground mb-3">Contact</p>
          <h1 className="section-heading-jp text-foreground mb-6">お問い合わせ</h1>
          <div className="divider-line" />
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* Info */}
            <div>
              <h3 className="font-serif text-xl mb-6">お問い合わせ先</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-gold shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <p className="text-foreground font-medium mb-1">佐藤観光商事株式会社</p>
                    <p>〒056-0016</p>
                    <p>北海道日高郡新ひだか町静内本町3-3-4</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold shrink-0" />
                  <a href="tel:0146-42-0425" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    0146-42-0425
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    フォームよりお問い合わせください
                  </span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              {submitted ? (
                <div className="text-center py-16">
                  <h3 className="font-serif text-2xl mb-4">お問い合わせありがとうございます</h3>
                  <p className="text-sm text-muted-foreground">
                    内容を確認の上、担当者よりご連絡いたします。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs tracking-[0.1em] text-muted-foreground mb-2">
                        お名前 <span className="text-sakura-deep">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-secondary border border-border text-sm focus:outline-none focus:border-foreground transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.1em] text-muted-foreground mb-2">
                        メールアドレス <span className="text-sakura-deep">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-secondary border border-border text-sm focus:outline-none focus:border-foreground transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs tracking-[0.1em] text-muted-foreground mb-2">
                        電話番号
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-secondary border border-border text-sm focus:outline-none focus:border-foreground transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.1em] text-muted-foreground mb-2">
                        件名
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-secondary border border-border text-sm focus:outline-none focus:border-foreground transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.1em] text-muted-foreground mb-2">
                      お問い合わせ内容 <span className="text-sakura-deep">*</span>
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary border border-border text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="booking-btn w-full md:w-auto">
                    送信する
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto">
          <SectionHeading english="Map" japanese="地図" />
          <div className="aspect-video w-full overflow-hidden rounded-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.5!2d142.369!3d42.334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5paw44Gy44Gf44GL55S6!5e0!3m2!1sja!2sjp!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="佐藤観光商事 地図"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
