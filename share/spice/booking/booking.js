(function (env) {
    "use strict";
    env.ddg_spice_booking = function(api_result){

        if (api_result.error) {
            return Spice.failed('booking');
        }

        Spice.add({
            id: "booking",
            name: "Booking",
            data: api_result,
//            meta: {
//                sourceName: "booking.com",
//                sourceUrl: 'http://www.booking.com/hotel/' + api_result.country + '/' + api_result.pagename + '.html'
//            },
            templates: {
                group: 'base',
                options: {
                    content: Spice.booking.content,
                    moreAt: true
                }
            }
        });
    };
}(this));
