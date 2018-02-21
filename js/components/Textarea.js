/**
 * This is a TextArea element
 * 
 * Kreatx 2018
 */

//component definition
var TextArea = KxGenerator.createComponent({
    //component data
    initModel: function () {
        return {
            blockProcessAttr: this.required ? false : this.blockProcessAttr,
            enabled: true
        }
    },

    registerEvents: function () {
        this.$input = this.$el.find("#" + this.domID);
        this.$spellCheckBtn = null;

        var events = [
            {
                registerTo: this.$el, events: {
                    'afterAttach': this.afterAttach.bind(this),
                }
            }
        ];

        if (this.hasOwnProperty('spellCheck')) {
            if (this.spellCheck != false) {
                this.$spellCheckBtn = this.$el.find('#' + this.domID + '-spellCheck');

                events.push({
                    registerTo: this.$spellCheckBtn, events: {
                        'click': this.spellCHeckClickHandler.bind(this)
                    }
                })
            }
        }

        return events;
    },

    spellCHeckClickHandler: function (e) {
        this.$spellCheckBtn.spellCheckInDialog({ defaultDictionary: this.spellCheck.defaultDictionary });
    },

    afterAttach: function (e) {
        this.trigger('creationComplete')
    },

    enable: function () {
        var model = this.getModel();
        model.enabled = true;

        return this;
    },

    disable: function () {
        var model = this.getModel();
        model.enabled = false;

        return this;
    },

    validate: function () {
        if (this.required) {
            if (this.value == "" || this.value == undefined) {
                this.errorList = [
                    KxGenerator.getErrorList().call(this)['empty']
                ];
                return false;
            } else
                return true;    
        } else
            return true;    
    },

    template: function () {
        return "<div id='" + this.domID + "-wrapper'>" +
                "<div class='form-group col-lg-" + this.colspan + "' rowspan" + this.rowspan + " resizable '>" +
                    "<div id='" + this.domID + "-block'> " +
                        "<label rv-style='versionStyle' rv-for='domID'>{label}<span rv-if='required'>*</span></label>" +
                            "<span rv-if='model.blockProcessAttr' class='block-process'> * </span>" +
                                "<textarea rv-type='type' rv-value='value' " +
                                "name='" + this.domID + "' id='" + this.domID + "' class='form-control rowspan"+ this.rowspan +
                                "' rv-placeholder='label' rv-enabled='model.enabled' autofocus></textarea>" +
                                "<button type='button' rv-if='spellCheck' id='" + this.domID + "-spellCheck' class='btn btn-xs btn-default pull-right'>Spell Check</button>" +
                    "</div>" +
                "</div>"+
            "</div>";
    },

    render: function () {
        return this.$el;
    }
});

//component prototype
TextArea.type = 'textarea';

//register dom element for this component
KxGenerator.registerDOMElement(TextArea, 'kx-textarea');