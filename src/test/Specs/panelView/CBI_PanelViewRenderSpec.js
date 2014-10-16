/**
 * Created by aurelien.vannier on 16/10/2014.
 */
define(['chaplin','main/main-chaplin-bootstrap'], function(Chaplin,Bootstrap) {

    describe("CBI check PanelView render", function() {

        it('Render with empty View and no title', function() {
            var panelView = new Bootstrap.PanelView(
                { bodyView : new Chaplin.View()
            });

            expect( panelView.$el.attr('class')).toEqual('panelView panelView-default');
            expect( panelView.$el.find('.panelView-heading').length).toEqual(0);
        })

        it('Render with empty View and title', function() {
            var titleOfView = 'Some title';

            var panelView = new Bootstrap.PanelView({
                bodyView : new Chaplin.View(),
                title: titleOfView
            });

            expect( panelView.$el.attr('class')).toEqual('panelView panelView-default');
            expect( panelView.$el.find('.panelView-heading').length).toEqual(1);
            expect( panelView.$el.find('h3.panelView-title').text()).toEqual(titleOfView);
        })

    });

});