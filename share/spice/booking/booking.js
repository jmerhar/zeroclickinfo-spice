Handlebars.registerHelper('substr', function(length, context, options) {
 if ( context.length > length ) {
  return context.substring(0, length) + "...";
 } else {
  return context;
 }
});


(function (env) {
    "use strict";
    env.ddg_spice_booking = function(api_result){

        if (api_result.error) {
            return Spice.failed('booking');
        }

        Spice.add({
            id: "booking",
            name: "Hotels",
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


