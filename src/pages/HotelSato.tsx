import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import BookingCTA from "@/components/BookingCTA";
import heroHotelSato from "@/assets/hero-hotel-sato.jpg";
import roomSato from "@/assets/room-sato.jpg";
import cuisine from "@/assets/cuisine.jpg";
import bath from "@/assets/bath.jpg";

const HotelSato = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh]">
        <img src={heroHotelSato} alt="ホテルサトウ外観" className="img-cover absolute inset-0" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-16 md:pb-24 px-6 text-center text-primary-foreground">
          <p className="text-xs tracking-[0.3em] uppercase mb-3 opacity-70">Hotel Sato</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wider">
            ホテルサトウ
          </h1>
        </div>
      </section>

      {/* Concept */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading english="Concept" japanese="おもてなしの心" />
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            創業以来70年にわたり、日高の玄関口として旅人を迎えてまいりました。
            家庭的な温もりと心のこもったサービスで、ビジネスでも観光でも、
            すべてのお客様にくつろぎの時間をお届けします。
          </p>
        </div>
      </section>

      {/* Rooms */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={roomSato} alt="客室" className="img-cover" />
            </div>
            <div>
              <SectionHeading english="Rooms" japanese="客室" align="left" />
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-6">
                シンプルで清潔な客室をご用意しております。
                ビジネスにも観光にも最適な快適な空間で、ゆっくりとおくつろぎください。
              </p>
              <p className="text-xs text-muted-foreground">
                ※当ホテルにはエレベーターはございません
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cuisine */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <SectionHeading english="Cuisine" japanese="料理" align="left" />
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-6">
                大好評の朝食は、和洋をバランスよくセレクトした20種類以上のバイキング。
                旬の野菜や魚を食材にした煮物や焼き物、和え物など数多くが並びます。
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                夕食も地元の旬の食材を活かした日替わりメニューを、
                味だけでなく品数でもご満足いただける形でご提供いたします。
              </p>
            </div>
            <div className="order-1 md:order-2 aspect-square overflow-hidden">
              <img src={cuisine} alt="朝食バイキング" className="img-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Bath */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={bath} alt="光明石の湯" className="img-cover" />
            </div>
            <div>
              <SectionHeading english="Bath" japanese="光明石の湯" align="left" />
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                天然石の中で最もイオン化作用が強いと言われる光明石を泉源体とした人工温泉。
                一日の疲れを癒す、やわらかなお湯に身を委ねてください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery placeholder */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionHeading english="Gallery" japanese="ギャラリー" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[heroHotelSato, roomSato, cuisine, bath].map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden">
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
              title="ホテルサトウ 地図"
            />
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>〒056-0016 北海道日高郡新ひだか町静内本町3-3-4</p>
            <p className="mt-1">TEL: 0146-42-0425</p>
          </div>
        </div>
      </section>

      <BookingCTA />
      <Footer />
    </div>
  );
};

export default HotelSato;
