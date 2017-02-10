Ext.define('Shopware.apps.BlisstributePaymentMapping.view.list.Payment', {
    extend: 'Shopware.grid.Panel',
    alias:  'widget.blisstribute-payment-mapping-listing-grid',
    region: 'center',

    /**
     * Contains all snippets for the controller
     *
     * @object
     */
    snippets: {
        id: '{s name=blisstribute/id}ID{/s}',
        paymentName: '{s name=blisstribute/paymentName}Zahlart{/s}',
        paymentIsActive: '{s name=blisstribute/paymentIsActive}Zahlart Aktiv?{/s}',
        isPayed: '{s name=blisstribute/isPayed}Bezahlt{/s}',
        className: '{s name=blisstribute/className}Blisstribute Zuweisung{/s}',

        classNameNone: '{s name=blisstribute/none}Bitte wählen{/s}',
        classNamePrePayment: '{s name=blisstribute/paymentPrePayment}Vorkasse{/s}',
        classNamedebitAdvice: '{s name=blisstribute/paymentDebitAdvice}Lastschrift{/s}',
        classNameCashOnDelivery: '{s name=blisstribute/paymentCashOnDelivery}Nachnahme{/s}',
        classNameSofort: '{s name=blisstribute/paymentSofort}Sofortueberweisung{/s}',
        classNamePayPal: '{s name=blisstribute/paymentPayPal}PayPal{/s}',
        classNameBill: '{s name=blisstribute/paymentBill}Rechnung (Eigene Abwicklung){/s}',
        classNamePayolution: '{s name=blisstribute/paymentPayolution}Rechnung (Payolution){/s}',
        classNamePayolutionInstallment: '{s name=blisstribute/paymentPayolutionInstallment}Ratenkauf (Payolution){/s}',
        classNameHeidelpayCreditCard: '{s name=blisstribute/paymentHeidelpayCreditCard}Kreditkarte (Heidelpay){/s}',
		classNameHeidelpaySofort: '{s name=blisstribute/paymentHeidelpaySofort}Sofortueberweisung (Heidelpay){/s}',
		classNameHeidelpayIdeal: '{s name=blisstribute/paymentHeidelpayIdeal}iDEAL (Heidelpay){/s}',
        classNameMarketplace: '{s name=blisstribute/paymentMarketplace}Marktplatz{/s}',
        classNameSelfcollectorCash: '{s name=blisstribute/paymentSelfcollectorCash}Bar (Selbstabholer){/s}',
        classNameSelfcollectorCashEc: '{s name=blisstribute/paymentSelfcollectorCashEc}EC (Selbstabholer){/s}',
        classNameSelfcollectorCashCreditCard: '{s name=blisstribute/paymentSelfcollectorCashCreditCard}Kreditkarte (Selbstabholer){/s}',
        classNameVrPayCC: '{s name=blisstribute/paymentVrPayCC}vrPayCC{/s}',
        classNameAmazonPayments: '{s name=blisstribute/paymentAmazonPayments}Amazon Payments{/s}',
        classNameBillsafe: '{s name=blisstribute/paymentBillsafe}Billsafe{/s}'
    },

    configure: function() {
        var me = this;
        return {
            eventAlias: 'blisstribute-payment-mapping',
            columns: {
                id: {
                    header: me.snippets.id,
                    flex: 2,
                    sortable: false,
                    editor: null,
                    editable: false,
                    dataIndex: 'id'
                },
                paymentName: {
                    header: me.snippets.paymentName,
                    flex: 4,
                    sortable: true,
                    editor: null,
                    editable: false,
                    dataIndex: 'paymentName'
                },
                paymentIsActive: {
                    header: me.snippets.paymentIsActive,
                    flex: 2,
                    sortable: true,
                    editor: null,
                    editable: false,
                    dataIndex: 'paymentIsActive'
                },
                isPayed: {
                    header: me.snippets.isPayed,
                    flex: 1,
                    sortable: true,
                    dataIndex: 'isPayed'
                },
                className: {
                    header: me.snippets.className,
                    flex: 3,
                    sortable: false,
                    dataIndex: 'className',
                    align: 'left',
                    renderer: function(value) {
                        switch (value) {
                            case 'PrePayment':
                                return me.snippets.classNamePrePayment;

                            case 'DebitAdvice':
                                return me.snippets.classNamedebitAdvice;

                            case 'CashOnDelivery':
                                return me.snippets.classNameCashOnDelivery;

                            case 'PayPal':
                                return me.snippets.classNamePayPal;

                            case 'Bill':
                                return me.snippets.classNameBill;

                            case 'Payolution':
                                return me.snippets.classNamePayolution;

                            case 'PayolutionInstallment':
                                return me.snippets.classNamePayolutionInstallment;

                            case 'Sofort':
                                return me.snippets.classNameSofort;

                            case 'HeidelpayCreditCard':
                                return me.snippets.classNameHeidelpayCreditCard;
							
							case 'HeidelpaySofort':
                                return me.snippets.classNameHeidelpaySofort;
							
							case 'HeidelpayIdeal':
                                return me.snippets.classNameHeidelpayIdeal;

                            case 'Marketplace':
                                return me.snippets.classNameMarketplace;

                            case 'SelfcollectorCash':
                                return me.snippets.classNameSelfcollectorCash;

                            case 'SelfcollectorCashEc':
                                return me.snippets.classNameSelfcollectorCashEc;

                            case 'SelfcollectorCashCreditCard':
                                return me.snippets.classNameSelfcollectorCashCreditCard;

                            case 'VrPayCC':
                                return me.snippets.classNameVrPayCC;

                            case 'AmazonPayments':
                                return me.snippets.classNameAmazonPayments;

                            case 'Billsafe':
                                return me.snippets.classNameBillsafe;

                            default:
                                return me.snippets.classNameNone;
                        }
                    },
                    editor: Ext.create('Ext.form.field.ComboBox', {
                        store: new Ext.data.SimpleStore({
                            fields:['id', 'label'],
                            data: [
                                [null, me.snippets.classNameNone],

                                ['PrePayment', me.snippets.classNamePrePayment],
                                ['DebitAdvice', me.snippets.classNamedebitAdvice],
                                ['CashOnDelivery', me.snippets.classNameCashOnDelivery],
                                ['PayPal', me.snippets.classNamePayPal],
                                ['Bill', me.snippets.classNameBill],
                                ['Payolution', me.snippets.classNamePayolution],
                                ['PayolutionInstallment', me.snippets.classNamePayolutionInstallment],
                                ['Sofort', me.snippets.classNameSofort],
                                ['HeidelpayCreditCard', me.snippets.classNameHeidelpayCreditCard],
								['HeidelpaySofort', me.snippets.classNameHeidelpaySofort],
								['HeidelpayIdeal', me.snippets.classNameHeidelpayIdeal],
                                ['Marketplace', me.snippets.classNameMarketplace],
                                ['SelfcollectorCash', me.snippets.classNameSelfcollectorCash],
                                ['SelfcollectorCashEc', me.snippets.classNameSelfcollectorCashEc],
                                ['SelfcollectorCashCreditCard', me.snippets.classNameSelfcollectorCashCreditCard],
                                ['VrPayCC', me.snippets.classNameVrPayCC],
                                ['AmazonPayments', me.snippets.classNameAmazonPayments],
                                ['Billsafe', me.snippets.classNameBillsafe]
                            ]
                        }),
                        allowBlank: false,
                        editable: false,
                        mode: 'local',
                        triggerAction: 'all',
                        displayField: 'label',
                        valueField: 'id'
                    })
                }
            },
            rowEditing: true,
            editColumn: false,
            deleteColumn: false,
            addButton: false,
            deleteButton: false
        }
    }
});