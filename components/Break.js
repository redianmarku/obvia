/**
 * This is a Break Element Component
 * 
 * Kreatx 2018
 */

//component definitionnn
var Break = KxGenerator.createComponent({
    //component data
    initModel: function () {
        return {
            class: this.class || "mb-1 form-group col-sm-" + this.colspan + " rowspan" + this.rowspan + " resizable",
            style: this.style
        }
    },

    beforeAttach: function () {
        this.$break = this.$el;
    },

    registerEvents: function () {
        return [
            {
                registerTo: this.$el, events: {
                    'afterAttach': this.afterAttach.bind(this),
                    'load': this.handlebreakonload.bind(this) 
                }
            }
        ]
    },
    handlebreakonload: function(e){
        if (typeof this.onload == 'function')
            this.onload.apply(this, arguments);

        if(!e.isDefaultPrevented()){
            //
        }
    },
    afterAttach: function (e) {
        this.trigger('creationComplete');
    },

    getValue: function () {
        return null;
    },
    setValue: function (value) {
        return null
    },
   // align 
    set align(v){
        if(this._align != v){
            if(this.$el){
                this.$el.attr('align', v);
            }
            this._align = v;
        }
    },
    get align(){
        return this._align;
    },
    // size
    set size(v){
        if(this._size != v){
            if(this.$el){
                this.$el.attr('size', v);
            }
            this._size = v;
        }
    },
    get size(){
        return this._size;
    },
    // width
    set width(v){
        if(this._alt != v){
            if(this.$el){
                this.$el.attr('width', v);
            }
            this._width = v;
        }
    },
    get width(){
        return this._width;
    },



    template: function () {    
        // a ka nevoje hr per id?     
        return  '<hr id="' + this.domID + '" align="'+this.align +'" size="'+this.size +'"   width="'+this.width +'" >';    
    },

    render: function () {
        if(this.$el.complete){
            this.trigger('load');
        }
        return this.$el;
    }
});

//component prototype
Break.type = 'break';

//register dom element for this component
KxGenerator.registerDOMElement(Break, 'kx-break');