import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import coinLaundry from "@/assets/coin-laundry.jpg";
import { Clock, MapPin, Phone } from "lucide-react";

const CoinLaundry = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img src={coinLaundry} alt="コインランドリー アネックス" className="img-cover absolute inset-0" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-16 md:pb-20 px-6 text-center text-primary-foreground">
          <p className="text-xs tracking-[0.3em] uppercase mb-3 opacity-70">Coin Laundry</p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-wider">
            コインランドリー アネックス
          </h1>
        </div>
      </section>

      {/* About */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading english="About" japanese="清潔・安心のコインランドリー" />
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            大型洗濯機・乾燥機、靴専用洗濯機・乾燥機など設備が充実。
            布団や毛布など大物の洗濯物や大量の洗濯物もお任せください。
            安全面の強化にも力を入れ、女性にも安心です。
          </p>
        </div>
      </section>

      {/* Info */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-4 text-gold" />
              <h3 className="font-serif text-lg mb-2">営業時間</h3>
              <p className="text-sm text-muted-foreground">6:00〜24:00</p>
              <p className="text-sm text-muted-foreground">年中無休</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-gold" />
              <h3 className="font-serif text-lg mb-2">所在地</h3>
              <p className="text-sm text-muted-foreground">
                〒056-0016<br />
                北海道日高郡新ひだか町<br />
                静内本町2丁目2-10
              </p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-gold" />
              <h3 className="font-serif text-lg mb-2">お問い合わせ</h3>
              <p className="text-sm text-muted-foreground">0146-42-0425</p>
            </div>
          </div>

          {/* Machines */}
          <SectionHeading english="Equipment" japanese="設備・料金" />
          <div className="space-y-6">
            <div className="bg-background p-6 md:p-8">
              <h3 className="font-serif text-lg mb-4">洗濯乾燥機</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>洗濯・乾燥22kg / 洗濯のみ32kg — 1台</p>
                <p>洗濯・乾燥15kg / 洗濯のみ22kg — 3台</p>
                <p>洗濯・乾燥8kg / 洗濯のみ12kg — 1台</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background p-6">
                <h3 className="font-serif text-lg mb-4">洗濯機</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>8kg — 1台</p>
                  <p>4.5kg — 1台</p>
                </div>
              </div>
              <div className="bg-background p-6">
                <h3 className="font-serif text-lg mb-4">乾燥機</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>14kg — 6台</p>
                  <p>25kg — 2台</p>
                </div>
              </div>
              <div className="bg-background p-6">
                <h3 className="font-serif text-lg mb-4">スニーカー用</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>洗濯機 — 1台</p>
                  <p>乾燥機 — 1台</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding">
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
              title="コインランドリー 地図"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoinLaundry;
