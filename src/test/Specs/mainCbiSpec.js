/**
 * Created by aurelien.vannier on 14/10/2014.
 */
define(['chaplin','main/main-chaplin-bootstrap'], function(Chaplin, Bootstrap) {

    describe("Chaplin-Bootstrap-Integration (CBI) check", function() {
        it('loading module', function() {
            expect(Bootstrap).toBeDefined();
        })
    });
});
