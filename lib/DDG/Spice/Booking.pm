package DDG::Spice::Booking;
#Booking.com instant answer for accomondattion search

use DDG::Spice;

triggers startend =>'hotels';

spice to =>'';

spice wrap_joson_callback => 1;

handle reminder = sub {
  return _$ if _$;
  return;
};

1;
