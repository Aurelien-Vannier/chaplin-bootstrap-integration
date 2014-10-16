/**
 * Created by aurelien.vannier on 16/10/2014.
 */
define(['chaplin','main/main-chaplin-bootstrap'], function(Chaplin,Bootstrap) {

    describe("CBI check PanelView initialize", function() {
        it('Loading PanelView definition', function() {
            expect(Bootstrap.PanelView).not.toBeNull();
        })

        it('Initialize without parameters (throw Exception)', function() {
            expect(function(){
                new Bootstrap.PanelView()
            } ).toThrow("bodyView attribute is mandatory.");
        })

        it('Initialize with bodyView not instance of View/CollectionView (throw Exception)', function() {
            expect(function () {
                new Bootstrap.PanelView({
                    bodyView : new Object()
                })
            }).toThrow("bodyView attribute must be instance of View/Collection-view.");
        })

        it('Initialize with empty View', function() {
            expect( new Bootstrap.PanelView({
                bodyView : new Chaplin.View()
            })).not.toBeNull();
        })

        it('Initialize with empty CollectionView', function() {
            expect( new Bootstrap.PanelView({
                bodyView : new Chaplin.CollectionView({
                    collection: new Chaplin.Collection()
                })
            })).not.toBeNull();
        })
    });

});
