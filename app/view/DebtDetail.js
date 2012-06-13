/*
 * File: app/view/DebtDetail.js
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

Ext.define('Payback.view.DebtDetail', {
    extend: 'Ext.form.Panel',
    alias: 'widget.DebtDetail',

    config: {
        padding: '',
        autoDestroy: false,
        layout: {
            type: 'vbox'
        },
        scrollable: false,
        items: [
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'button',
                        id: 'cancelDebt',
                        ui: 'decline',
                        text: 'Cancel'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        id: 'saveDebt',
                        ui: 'confirm',
                        text: 'Save'
                    }
                ]
            },
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Details',
                items: [
                    {
                        xtype: 'button',
                        id: 'emailDebt',
                        ui: 'action',
                        text: 'send email',
                        align: 'right'
                    }
                ]
            },
            {
                xtype: 'container',
                height: 250,
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Debt Information',
                        items: [
                            {
                                xtype: 'selectfield',
                                label: 'Name',
                                name: 'person_id',
                                displayField: 'name',
                                store: 'People',
                                valueField: 'id'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Reason',
                                name: 'reason'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Amount',
                                name: 'amount'
                            },
                            {
                                xtype: 'datepickerfield',
                                label: 'Date',
                                name: 'date'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                layout: {
                    type: 'vbox'
                },
                flex: 1,
                items: [
                    {
                        xtype: 'button',
                        id: 'addPayment',
                        ui: 'action',
                        text: 'add payment'
                    },
                    {
                        xtype: 'dataview',
                        baseCls: 'x-list',
                        cls: [
                            'x-list-normal'
                        ],
                        id: 'myPaymentDataView',
                        itemId: 'myPaymentDataView',
                        minHeight: '',
                        defaultType: 'myPaymentListItem',
                        store: 'Payments',
                        useComponents: true,
                        disableSelection: true,
                        flex: 1
                    }
                ]
            }
        ]
    }

});