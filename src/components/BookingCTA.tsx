const BookingCTA = () => {
  return (
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <p className="section-subheading text-primary-foreground/60 mb-3">Reservation</p>
        <h2 className="section-heading-jp text-primary-foreground mb-4">ご予約</h2>
        <div className="divider-line mt-4 mb-8" />
        <p className="text-sm md:text-base text-primary-foreground/70 mb-10 max-w-xl mx-auto leading-relaxed">
          公式サイトからのご予約が最もお得です。<br />
          空室状況もリアルタイムでご確認いただけます。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.satokanko.com/hotel_sato/index.html?tripla_booking_widget_open=search&is_including_occupied=false"
            target="_blank"
            rel="noopener noreferrer"
            className="booking-btn-outline"
          >
            ホテルサトウ 予約
          </a>
          <a
            href="https://www.satokanko.com/annexinn/index.html?tripla_booking_widget_open=search&is_including_occupied=false"
            target="_blank"
            rel="noopener noreferrer"
            className="booking-btn-outline"
          >
            アネックスイン 予約
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
