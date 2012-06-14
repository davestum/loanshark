/*
 * File: app/model/Payment.js
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

Ext.define('Payback.model.Payment', {
    extend: 'Ext.data.Model',

    uses: [
        'Payback.model.Debt'
    ],

    config: {
        fields: [
            {
                name: 'id',
                type: 'auto'
            },
            {
                name: 'debt_id'
            },
            {
                name: 'amount',
                type: 'float'
            },
            {
                name: 'date',
                type: 'date'
            },
            {
                name: 'type',
                type: 'int'
            },
            {
                name: 'memo',
                type: 'string'
            }
        ],
        proxy: {
            type: 'localstorage',
            id: 'Payments'
        },
        belongsTo: {
            model: 'Payback.model.Debt',
            foreignKey: 'debt_id'
        }
    }
});