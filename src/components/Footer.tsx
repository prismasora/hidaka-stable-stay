import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Company */}
          <div>
            <h3 className="font-display text-2xl tracking-wider mb-2">佐藤観光商事</h3>
            <p className="text-xs tracking-[0.2em] uppercase opacity-60 mb-6">Sato Kanko Shoji Co., Ltd.</p>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>〒056-0016<br />北海道日高郡新ひだか町静内本町3-3-4</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:0146-42-0425" className="hover:opacity-100 transition-opacity">0146-42-0425</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="/contact" className="hover:opacity-100 transition-opacity">お問い合わせ</a>
              </div>
            </div>
          </div>

          {/* Facilities */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 opacity-60">施設案内</h4>
            <nav className="space-y-3">
              <Link to="/hotel-sato" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">ホテルサトウ</Link>
              <Link to="/annex-inn" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">ホテル アネックスイン</Link>
              <Link to="/coin-laundry" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">コインランドリー アネックス</Link>
            </nav>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 opacity-60">インフォメーション</h4>
            <nav className="space-y-3">
              <Link to="/recruit" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">採用情報</Link>
              <Link to="/contact" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">お問い合わせ</Link>
              <a
                href="https://www.satokanko.com/hotel_sato/index.html?tripla_booking_widget_open=search&is_including_occupied=false"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                ホテルサトウ 予約
              </a>
              <a
                href="https://www.satokanko.com/annexinn/index.html?tripla_booking_widget_open=search&is_including_occupied=false"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                アネックスイン 予約
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-xs opacity-40 tracking-wider">
            © {new Date().getFullYear()} 佐藤観光商事株式会社 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
