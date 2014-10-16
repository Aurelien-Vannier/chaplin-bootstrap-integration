/**
 * Created by aurelien.vannier on 14/10/2014.
 */
define(['jquery', 'underscore', 'backbone', 'chaplin'], function($, _, Backbone, Chaplin) {

    describe('Checking dependencies', function() {

        it('"underscore" is available', function () {
            expect(_).not.toBeNull();
        });

        it('"underscore" works fine', function () {
            expect(_.size([1, 2, 3])).toEqual(3);
        });

        it('"jquery" is available', function () {
            expect($).not.toBeNull();
        });

        it('"backbone" is available', function () {
            expect(Backbone).toBeDefined();
            expect(Backbone.View).not.toBeNull();
        });

        it('"chaplin" is available', function () {
            expect(Chaplin).toBeDefined();
            expect(Chaplin.View).not.toBeNull();
        });

    });

});
