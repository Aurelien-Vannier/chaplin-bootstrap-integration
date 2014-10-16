/**
 * Created by aurelien.vannier on 16/10/2014.
 */
define(['chaplin','main/main-chaplin-bootstrap'], function(Chaplin,Bootstrap) {

    describe("CBI check SelectboxCollectionView render", function() {

        var firstLabel = 'First Label';
        var secondLabel = 'Second Label';

        it('Render an empty collection', function() {
            var selectboxCollectionView = new Bootstrap.SelectboxCollectionView({
                collection: new Chaplin.Collection()
            })
            expect( selectboxCollectionView.$el.attr('class')).toEqual('form-control');
            expect(selectboxCollectionView.$el.find('option').length).toEqual(0);
        })

        it('Render a collection with default attribute label and no value (throw Exception)', function() {
            expect(function(){
                new Bootstrap.SelectboxCollectionView({
                    collection: new Chaplin.Collection([
                        { label : firstLabel }
                    ])
                })
            }).toThrow('"valueAttribute" property must exist on model.');
        })

        it('Render a collection with default attribute value and no label (throw Exception)', function() {
            expect(function(){
                new Bootstrap.SelectboxCollectionView({
                    collection: new Chaplin.Collection([
                        { value : 1 }
                    ])
                })
            }).toThrow('"labelAttribute" property must exist on model.');
        })

        it('Render a collection with default label and value', function() {
            var selectboxCollectionView = new Bootstrap.SelectboxCollectionView({
                collection: new Chaplin.Collection([
                    { label : firstLabel, value: 1 },
                    { label : secondLabel, value: 2 }
                ])
            })
            expect(selectboxCollectionView.$el.find('option').length).toEqual(2);
        })

        it('Render a collection with custom label and default value', function() {
            var selectboxCollectionView = new Bootstrap.SelectboxCollectionView({
                labelAttribute: 'custoLabel',
                collection: new Chaplin.Collection([
                    { custoLabel : firstLabel, value: 1 }
                ])
            })
            expect(selectboxCollectionView.$el.find('option').length).toEqual(1);
        })

        it('Render a collection with default label and custom value', function() {
            var selectboxCollectionView = new Bootstrap.SelectboxCollectionView({
                valueAttribute: 'custoValue',
                collection: new Chaplin.Collection([
                    { label : firstLabel, custoValue: 1 }
                ])
            })
            expect(selectboxCollectionView.$el.find('option').length).toEqual(1);
        })

        it('Render a collection with custom label and value', function() {
            var selectboxCollectionView = new Bootstrap.SelectboxCollectionView({
                labelAttribute: 'custoLabel',
                valueAttribute: 'custoValue',
                collection: new Chaplin.Collection([
                    { custoLabel : firstLabel, custoValue: 1 }
                ])
            })
            expect(selectboxCollectionView.$el.find('option').length).toEqual(1);
        })
    });

});