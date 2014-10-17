(function (root, factory) {

    if (typeof exports !== 'undefined') {
        // Define as CommonJS export:
        module.exports = factory(root, require("underscore"), require("chaplin"));
    } else if (typeof define === 'function' && define.amd) {
        // Define as AMD:
        define(["underscore", "chaplin"], function(_, Chaplin) {
            // Export global even in AMD case in case this script is loaded with
            // others that may still expect a global Backbone.
            return factory( root, _, Chaplin);
        });
    } else {
        // Just run it:
        root.Chaplin.Bootstrap = factory(root, root._, root.Chaplin);
    }

}(this, function (root, _, Chaplin) {

    // Epoxy namespace:
    var Bootstrap = Chaplin.Bootstrap = {};

    // Calls method implementations of a super-class object:
    function _super(instance, method, args) {
        return instance._super.prototype[method].apply(instance, args);
    }

    /* Panel View */
    /* ========== */
    Bootstrap.PanelView = Chaplin.View.extend({
        _super: Chaplin.View,
        autoRender: true,
        className: 'panelView panelView-default',

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
                templateHtml += "<div class='panelView-heading'><h3 class='panelView-title'><%= title %></h3></div>";
            }
            templateHtml += "<div class='panelView-body bodyView'></div>";
            return _.template( templateHtml );
        }

    });

    /* Selectbox Item View */
    /* =================== */
    Bootstrap.SelectboxItemView = Chaplin.View.extend({
        _super: Chaplin.View,
        autoRender: true,
        tagName: 'option',
        attributes:{ value:'' },

        initialize: function( attr ) {
            _super(this, 'initialize', arguments);

            if(_.isUndefined( this.model.get( attr.labelAttribute ) ) ){
                throw '"labelAttribute" property must exist on model.';
            }
            this.label = attr.labelAttribute;

            if(_.isUndefined( this.model.get( attr.valueAttribute ) ) ){
                throw '"valueAttribute" property must exist on model.';
            }
            this.attributes.value = this.model.get( attr.valueAttribute );

            this.selected = attr.selected;
        },

        render: function(){
            _super(this, 'render', arguments);

            if( this.selected ){
                this.$el.attr('selected', 'selected');
            }
        },

        getTemplateData: function () {
            return {label: this.label };
        },

        getTemplateFunction: function() {
            return _.template( '<%= label %>' );
        }
    });

    /* Selectbox View */
    /* ============== */
    Bootstrap.SelectboxCollectionView = Chaplin.CollectionView.extend({
        _super:  Chaplin.CollectionView,
        autoRender: true,
        itemView: Bootstrap.SelectboxItemView,
        tagName: 'select',
        className: 'form-control',
        events:{
            'change' : 'itemSelected'
        },
        labelAttribute: 'label',
        valueAttribute: 'value',

        initialize: function( attr ){
            _super(this, 'initialize', arguments);
            if( attr ){
                if( attr.labelAttribute ){
                    this.labelAttribute = attr.labelAttribute;
                }
                if( attr.valueAttribute ){
                    this.valueAttribute = attr.valueAttribute;
                }
                if( attr.defaultValue ){
                    this.defaultValue = attr.defaultValue;
                }
            }
        },

        initItemView: function( model ){
            var selected = false;
            if( this.defaultValue && model.get(this.valueAttribute) == this.defaultValue ){
                selected = true;
                this.selectedModel = model;
            }
            return new Bootstrap.SelectboxItemView( {
                model : model,
                labelAttribute : this.labelAttribute,
                valueAttribute : this.valueAttribute,
                selected: selected
            });
        },

        itemSelected: function(){
            var selectedText = this.$el.find('option:selected').text();
            this.selectedModel = this.collection.findWhere( JSON.parse( '{"'+this.labelAttribute+'": "'+selectedText+'"}' ) );
        },

        getSelectedModel: function(){
            return this.selectedModel;
        },

        setSelectedValue: function( value ){
            this.$el.find('option:selected').removeAttr('selected');
            this.$el.find('option[value='+value+']').attr('selected', 'selected');
            this.itemSelected();
        }
    });

    return Bootstrap;
}));