/*
 * File: app/view/Debts.js
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

Ext.define('Payback.view.Debts', {
    extend: 'Ext.Panel',
    alias: 'widget.Debts',

    config: {
        ui: 'light',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'titlebar',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'button',
                        cls: 'my-buttons',
                        id: 'addDebt',
                        iconCls: 'icon-add-debt',
                        iconMask: true,
                        text: 'Add Loan'
                    }
                ]
            },
            {
                xtype: 'dataview',
                baseCls: 'x-list',
                cls: [
                    'x-list-normal'
                ],
                id: 'myDebtDataView',
                defaultType: 'myDebtListItem',
                store: 'Debts',
                useComponents: true,
                disableSelection: true
            }
        ],
        listeners: [
            {
                fn: 'onPanelShow',
                event: 'show'
            }
        ]
    },

    onPanelShow: function(component, options) {
        //clears filter if one is on the store, filters are set when contact item is tapped
        Ext.getStore('Debts').clearFilter();
    }

});