(function(env) {
    "use strict";

    env.ddg_spice_in_theaters = function(api_result) {

        if(api_result.error) {
            return Spice.error('in_theaters');
        }

        Spice.add({
            id: 'in_theaters',
            name: 'Now Showing',
            data: api_result.movies,
            meta: {
                sourceName: 'Rotten Tomatoes',
                sourceUrl: 'http://www.rottentomatoes.com/movie/in-theaters/',
                itemType: 'Movies'
            },
            normalize: function(item) {
                return { 
                    rating: item.ratings.critics_score >= 0 ? item.ratings.critics_score / 20 : 0,
                    image: item.posters.detailed
                };
            },
            templates: {
                group: 'info',
                item: 'basic_image_item',
                options: {
                    content: Spice.in_theaters.in_theaters_detail
                }
            }
        });
    }

    // Convert minutes to hr. min. format.
    // e.g. {{time 90}} will return 1 hr. 30 min.
    Handlebars.registerHelper("time", function(runtime) {
        var hours = '',
            minutes = runtime;

        if(runtime >= 60) {
            hours = Math.floor(runtime / 60) + ' hr. ';
            minutes = (runtime % 60);
        }

        return hours + (minutes > 0 ? minutes + ' min.' : '');
    });
}(this));
