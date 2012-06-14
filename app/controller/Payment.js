/*
 * File: app/controller/Payment.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Payback.controller.Payment', {
    extend: 'Ext.app.Controller',

    config: {
        stores: [
            'PaymentStore'
        ],

        refs: {
            PaymentDetail: {
                selector: 'PaymentDetail',
                xtype: 'PaymentDetail',
                autoCreate: true
            },
            DebtDetail: {
                selector: 'DebtDetail',
                xtype: 'DebtDetail',
                autoCreate: true
            },
            myPaymentDataView: '#myPaymentDataView'
        },

        control: {
            "#addPayment": {
                tap: 'onAddPaymentTap'
            },
            "#savePayment": {
                tap: 'onSavePaymentTap'
            },
            "#cancelPayment": {
                tap: 'onCancelButtonTap'
            },
            "#myPaymentDataView": {
                itemswipe: 'onDataviewItemSwipe',
                itemtap: 'onDataviewItemTap'
            }
        }
    },

    onAddPaymentTap: function(button, e, options) {

        var form = this.getPaymentDetail();

        form.reset(); //clears form
        form.setRecord(null); //clears record from form

        //sets date field to today
        form.down('datepickerfield').setValue(new Date());

        form.setValues({debt_id:this.getDebtDetail().getRecord().get('id')});

        //set active item
        Ext.Viewport.setActiveItem(form);
    },

    onSavePaymentTap: function(button, e, options) {
        var form = this.getPaymentDetail(),
            record = form.getRecord(),
            values = form.getValues(),
            debt = this.getDebtDetail().getRecord();

        if(record) { //if editing record
            record.set(values);
            record.save();
        } else { //if new record
            var payment = debt.payments().add(values)[0];
            debt.payments().sync();
            payment.getDebt(); //bug in framework, associates payment with debt 

            //bug in the framework, this allows the dataview to update the list when a record is added the first time and no other are in the store
            payment.save({
                callback:function(){
                    this.getMyPaymentDataView().refresh();
                }
            },this);

            //bug in framework, debt_id is not correctly set in filter, work around is to delete the store and reassociate
            delete debt.paymentsStore; 
            debt.payments();

            //recalc balance
            debt.set('balance',0);
        }

        //update the debt balance on new payments
        var debtRecord = this.getDebtDetail().getRecord();
        debtRecord.set('balance',0); //bug in framework, calls convert field again on debt
        debtRecord.getPerson().calcBalance(); //calc balance of updated payments and debt in person

        //loads data from localStorage
        Ext.getStore('Payments').load();

        //update people store and summary
        Ext.getStore('People').load(function(){
            this.getApplication().getController('Summary').updateSummary();
        },
        this);

        //refresh Contact DataView
        //this.getContactDetail().down('dataview').refresh();

        //set active item
        Ext.Viewport.setActiveItem(this.getDebtDetail());

    },

    onCancelButtonTap: function(button, e, options) {
        this.getPaymentDetail().reset(); //clears form

        //set active item
        Ext.Viewport.setActiveItem(this.getDebtDetail());
    },

    onDataviewItemSwipe: function(dataview, index, target, record, e, options) {
        var deleteButtons = dataview.query('button');

        //hide other buttons0
        for (var i=0; i < deleteButtons.length; i++) {
            deleteButtons[i].hide();
        }

        //show current button
        target.query('button')[0].show();

        //hides delete button if anywhere else is tapped
        Ext.Viewport.element.on({tap:function(){
            target.query('button')[0].hide();
        }, single:true});
    },

    onDataviewItemTap: function(dataview, index, target, record, e, options) {

        var form = this.getPaymentDetail();

        form.setRecord(record); //set form record

        //set active item
        Ext.Viewport.setActiveItem(form);
    }

});