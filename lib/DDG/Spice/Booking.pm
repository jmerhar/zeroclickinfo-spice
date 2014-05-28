package DDG::Spice::Booking;
### Booking.com instant answer for accomondattion search

use DDG::Spice;

triggers startend =>'hotels';

spice to =>'http://jmerhar-app.dev.booking.com/duckduckhotels?city=$1&callback=ddg_spice_booking';

#spice wrap_joson_callback => 1;

handle remainder => sub {

  return $_ if $_;
  return;
};

1;
