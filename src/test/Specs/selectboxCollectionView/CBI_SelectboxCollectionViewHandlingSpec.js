/**
 * Created by aurelien.vannier on 16/10/2014.
 */
define(['chaplin','main/main-chaplin-bootstrap'], function(Chaplin,Bootstrap) {

    describe("CBI check SelectboxCollectionView handling", function () {

        var firstLabel = 'First Label';
        var secondLabel = 'Second Label';

        it('Select default item with value', function () {
            var selectboxCollectionView = new Bootstrap.SelectboxCollectionView({
                defaultValue : 2,
                collection: new Chaplin.Collection([
                    { label : firstLabel, value: 1 },
                    { label : secondLabel, value: 2 }
                ])
            });

            expect(selectboxCollectionView.getSelectedModel().get('value')).toEqual(2);
        })

        it('Select default item with value', function () {
            var selectboxCollectionView = new Bootstrap.SelectboxCollectionView({
                collection: new Chaplin.Collection([
                    { label : firstLabel, value: 1 },
                    { label : secondLabel, value: 2 }
                ])
            });

            selectboxCollectionView.setSelectedValue(2);

            expect(selectboxCollectionView.getSelectedModel().get('value')).toEqual(2);
        })

    });

});