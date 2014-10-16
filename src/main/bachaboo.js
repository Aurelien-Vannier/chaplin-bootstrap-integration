(function (root, factory) {

    if (typeof exports !== 'undefined') {
        // Define as CommonJS export:
        module.exports = factory(root, require("underscore"), require("chaplin"));
    } else if (typeof define === 'function' && define.amd) {
        // Define as AMD:
        define(["../../bower_components/underscore/underscore", "chaplin"], function(_, Chaplin) {
            // Export global even in AMD case in case this script is loaded with
            // others that may still expect a global Backbone.
            root.Bachaboo = factory( root, _, Chaplin);
        });
    } else {
        // Just run it:
        factory(root, root._, root.Chaplin);
    }

}(this, function (root, _, Chaplin) {

    // Epoxy namespace:
    var Bachaboo = root.Bachaboo = {};

    // Calls method implementations of a super-class object:
    function _super(instance, method, args) {
        return instance._super.prototype[method].apply(instance, args);
    }

    Bachaboo.PanelView = Chaplin.View.extend({
        _super: Chaplin.View,
        autoRender: true,
        className: 'panel panel-default',

        initialize: function (attr) {
            _super(this, 'initialize', arguments);

            if (attr && attr.bodyView) {
                if (attr && attr.title) {
                    this.title = attr.title;
                }
                if (attr.bodyView instanceof Chaplin.View || attr.bodyView instanceof Chaplin.CollectionView) {
                    this.bodyView = attr.bodyView;
                } else {
                    throw "bodyView attribute must be instance of View/Collection-view.";
                }
            } else {
                throw "bodyView attribute is mandatory.";
            }
        },

        render: function () {
            _super(this, 'render', arguments);

            this.$el.find('.bodyView').html(this.bodyView.el);
            this.subview('bodyView', this.bodyView);

        },

        getTemplateData: function () {
            return {title: this.title };
        },

        getTemplateFunction: function() {
            var templateHtml ='';
            if( this.title ){
                templateHtml += "<div class='panel-heading'><h3 class='panel-title'><%= title %></h3></div>";
            }
            templateHtml += "<div class='panel-body bodyView'></div>";
            return _.template( templateHtml );
        }

    });

    return Bachaboo;
}));