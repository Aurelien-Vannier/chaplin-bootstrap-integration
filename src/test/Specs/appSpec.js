define(['jquery', 'underscore'], function($, _) {

    describe('just checking', function() {

        it('works for app', function() {
            var el = $('<div></div>');

            expect(el.text()).toEqual('');
        });

        it('works for underscore', function() {
            // just checking that _ works
            expect(_.size([1,2,3])).toEqual(3);
        });

    });

});
