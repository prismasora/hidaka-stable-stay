import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import BookingCTA from "@/components/BookingCTA";
import heroAnnex from "@/assets/hero-annex.jpg";
import roomAnnex from "@/assets/room-annex.jpg";
import cuisine from "@/assets/cuisine.jpg";

const AnnexInn = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh]">
        <img src={heroAnnex} alt="アネックスイン ロビー" className="img-cover absolute inset-0" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-16 md:pb-24 px-6 text-center text-primary-foreground">
          <p className="text-xs tracking-[0.3em] uppercase mb-3 opacity-70">Annex Inn</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wider">
            ホテル アネックスイン
          </h1>
          <p className="mt-4 text-sm opacity-60 tracking-wider">ミシュラン掲載</p>
        </div>
      </section>

      {/* Concept */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading english="Concept" japanese="競馬文化に包まれる宿" />
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-6">
            日高の競馬文化をモチーフにデザインされたモダンなホテル。
            ロビーにはレースのスタートゲートを模したフォトスポットを設置し、
            館内随所に馬と競馬のエッセンスを散りばめています。
          </p>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            旅行サイトに掲載されている日高・えりも地域の30以上の宿泊施設のうち、
            ミシュランに選ばれたわずか3軒のひとつです。
          </p>
        </div>
      </section>

      {/* Rooms */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={roomAnnex} alt="客室" className="img-cover" />
            </div>
            <div>
              <SectionHeading english="Rooms" japanese="客室" align="left" />
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                深いグリーンとウォールナットを基調としたモダンな客室。
                機能性と快適性を兼ね備えた空間で、ビジネスにも観光にも最適です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breakfast */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <SectionHeading english="Breakfast" japanese="朝食" align="left" />
              <p className="text-xs tracking-[0.15em] text-gold mb-4">
                レストラン「コンブ、トマト、ハチミツ」
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-6">
                日高昆布、地元産トマト、はちみつをテーマにした朝食レストラン。
                地元の食材を活かしたユニークな朝食体験をお楽しみいただけます。
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                競馬の馬券をイメージした特別な朝食チケットも、
                ここでしか味わえない体験のひとつ。
              </p>
            </div>
            <div className="order-1 md:order-2 aspect-square overflow-hidden">
              <img src={cuisine} alt="朝食" className="img-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Lobby */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={heroAnnex} alt="ロビー" className="img-cover" />
            </div>
            <div>
              <SectionHeading english="Lobby Experience" japanese="ロビー" align="left" />
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                ロビーに設置されたレースのスタートゲートは、宿泊のお客様に大人気のフォトスポット。
                競馬の世界観に包まれた特別な空間をお楽しみください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionHeading english="Gallery" japanese="ギャラリー" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[heroAnnex, roomAnnex, cuisine].map((img, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden">
                <img src={img} alt={`ギャラリー ${i + 1}`} className="img-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto">
          <SectionHeading english="Access" japanese="アクセス" />
          <div className="aspect-video w-full overflow-hidden rounded-sm mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.5!2d142.369!3d42.334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5paw44Gy44Gf44GL55S6!5e0!3m2!1sja!2sjp!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="アネックスイン 地図"
            />
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>〒056-0016 北海道日高郡新ひだか町静内本町</p>
            <p className="mt-1">TEL: 0146-42-0425</p>
          </div>
        </div>
      </section>

      <BookingCTA />
      <Footer />
    </div>
  );
};

export default AnnexInn;
