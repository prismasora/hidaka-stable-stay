import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import BookingCTA from "@/components/BookingCTA";
import heroHome from "@/assets/hero-home.jpg";
import cuisine from "@/assets/cuisine.jpg";
import sakuraRoad from "@/assets/sakura-road.jpg";
import horses from "@/assets/horses.jpg";
import heroHotelSato from "@/assets/hero-hotel-sato.jpg";
import heroAnnex from "@/assets/hero-annex.jpg";
import coinLaundry from "@/assets/coin-laundry.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative h-screen">
        <img src={heroHome} alt="日高の牧場と馬" className="img-cover absolute inset-0" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-primary-foreground">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in opacity-80">
            Shinhidaka, Hokkaido
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-wider mb-6 animate-fade-in-up">
            Stay in the Heart of Hidaka
          </h1>
          <p className="text-sm md:text-base max-w-lg leading-relaxed opacity-80 mb-10 animate-fade-in font-light">
            馬の文化が息づく新ひだか町。<br />
            伝統のおもてなしと、豊かな自然が迎える宿。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Link to="/hotel-sato" className="booking-btn-outline">
              ホテルサトウ
            </Link>
            <Link to="/annex-inn" className="booking-btn-outline">
              アネックスイン
            </Link>
          </div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="w-px h-12 bg-primary-foreground/40 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Shinhidaka */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            english="About Shinhidaka"
            japanese="馬と桜の里、新ひだか"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={horses} alt="日高のサラブレッド" className="img-cover" />
            </div>
            <div>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-6">
                北海道日高地方は、日本を代表するサラブレッドの産地です。
                広大な牧草地に馬が駆ける風景は、ここでしか見ることのできない特別なもの。
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-6">
                毎年夏には国内最大級の競走馬セリ市が開催され、
                全国から競馬ファンや関係者が集まります。
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                春には全長7kmの「二十間道路桜並木」が満開を迎え、
                日本屈指の桜の名所として多くの観光客を魅了します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Hotels */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            english="Our Hotels"
            japanese="宿泊施設"
            description="伝統のおもてなしと、モダンなデザイン。二つの個性がお迎えします。"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Hotel Sato Card */}
            <Link to="/hotel-sato" className="card-hotel group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={heroHotelSato} alt="ホテルサトウ外観" className="img-cover" />
              </div>
              <div className="p-6 md:p-8 bg-background">
                <p className="section-subheading text-muted-foreground mb-2">Hotel Sato</p>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">ホテルサトウ</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  創業70年の伝統を受け継ぐ、料理とお風呂が自慢のホテル。
                  地元の旬の食材を活かした朝食バイキングと光明石の湯でおくつろぎください。
                </p>
                <span className="inline-block mt-4 text-xs tracking-[0.15em] text-foreground border-b border-foreground pb-0.5 group-hover:border-gold transition-colors">
                  詳しく見る →
                </span>
              </div>
            </Link>

            {/* Annex Inn Card */}
            <Link to="/annex-inn" className="card-hotel group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={heroAnnex} alt="アネックスイン ロビー" className="img-cover" />
              </div>
              <div className="p-6 md:p-8 bg-background">
                <p className="section-subheading text-muted-foreground mb-2">Annex Inn</p>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">ホテル アネックスイン</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  競馬文化をモチーフにしたモダンなホテル。ミシュラン掲載の実績を持つ、
                  日高を代表する宿泊施設です。
                </p>
                <span className="inline-block mt-4 text-xs tracking-[0.15em] text-foreground border-b border-foreground pb-0.5 group-hover:border-gold transition-colors">
                  詳しく見る →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Cuisine */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <SectionHeading
                english="Cuisine"
                japanese="日高の味わい"
                align="left"
              />
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-6">
                日高昆布、地元産トマト、はちみつなど、
                この土地ならではの食材を活かした料理をお届けします。
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-6">
                ホテルサトウでは和洋20種類以上のバイキング朝食を、
                アネックスインでは「コンブ、トマト、ハチミツ」をテーマにした
                ユニークな朝食体験をお楽しみいただけます。
              </p>
            </div>
            <div className="order-1 md:order-2 aspect-square overflow-hidden">
              <img src={cuisine} alt="日高の朝食" className="img-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Local Experience */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            english="Local Experience"
            japanese="日高を楽しむ"
            description="馬の里ならではの体験と、北海道の大自然に包まれる旅。"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden mb-4">
                <img src={horses} alt="牧場見学" className="img-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="font-serif text-lg mb-2">牧場見学</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                サラブレッドの産地ならではの牧場見学。間近で馬に触れ合える貴重な体験を。
              </p>
            </div>
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden mb-4">
                <img src={sakuraRoad} alt="二十間道路桜並木" className="img-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="font-serif text-lg mb-2">二十間道路桜並木</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                全長約7kmの直線道路に約2,000本の桜が咲き誇る、日本屈指の桜並木。
              </p>
            </div>
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden mb-4">
                <img src={heroHome} alt="日高の自然" className="img-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="font-serif text-lg mb-2">日高の自然</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                太平洋と日高山脈に囲まれた雄大な自然。四季折々の景色をお楽しみください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coin Laundry */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={coinLaundry} alt="コインランドリー アネックス" className="img-cover" />
            </div>
            <div>
              <SectionHeading
                english="Coin Laundry"
                japanese="コインランドリー アネックス"
                align="left"
              />
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-6">
                清潔・安心なコインランドリー。大型洗濯乾燥機、靴専用洗濯機など設備が充実。
                年中無休で6:00〜24:00まで営業しています。
              </p>
              <Link to="/coin-laundry" className="booking-btn inline-flex">
                詳しく見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Access */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            english="Access"
            japanese="アクセス"
          />
          <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.5!2d142.369!3d42.334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5paw44Gy44Gf44GL55S6!5e0!3m2!1sja!2sjp!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="新ひだか町 地図"
            />
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              〒056-0016 北海道日高郡新ひだか町静内本町3-3-4
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              TEL: 0146-42-0425
            </p>
          </div>
        </div>
      </section>

      <BookingCTA />
      <Footer />
    </div>
  );
};

export default Index;
