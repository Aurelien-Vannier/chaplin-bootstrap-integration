/**
 * Created by aurelien.vannier on 16/10/2014.
 */
define(['chaplin','main/main-chaplin-bootstrap'], function(Chaplin,Bootstrap) {

    describe("CBI check SelectboxCollectionView handling", function () {

        var firstLabel = 'First Label';
        var secondLabel = 'Second Label';

        it('Handling default selected item', function () {
            var selectboxCollectionView = new Bootstrap.SelectboxCollectionView({
                collection: new Chaplin.Collection([
                    { label : firstLabel, value: 1 },
                    { label : secondLabel, value: 2 }
                ])
            })
            expect(selectboxCollectionView.$el.find('option').length).toEqual(2);

        })
    });

});