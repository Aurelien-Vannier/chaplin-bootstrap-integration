/**
 * Created by aurelien.vannier on 16/10/2014.
 */
define(['chaplin','main/main-chaplin-bootstrap'], function(Chaplin,Bootstrap) {

    describe("CBI check SelectboxCollectionView initialize", function() {

        it('Loading SelectboxCollectionView definition', function() {
            expect(Bootstrap.SelectboxCollectionView).not.toBeNull();
        })

        it('Initialize without collection parameter (throw Exception)', function() {
            expect(function(){
                new Bootstrap.SelectboxCollectionView()
            } ).toThrow(new TypeError("Cannot read property '_listenId' of undefined"));
        })

        it('Initialize with empty collection', function() {
            expect( new Bootstrap.SelectboxCollectionView({
                collection : new Chaplin.Collection()
            })).not.toBeNull();
        })
    });

});
