Ext.define('mytouch.view.NazioniView',
{
	extend : 'Ext.DataView',
	xtype:'nazionilistview',
	config :{
		title:'Nazioni',
		styleHtmlContent: true,
        scrollable: 'vertical',
		store:'NazioniStore',
		itemTpl :'<div>{nazione} ({nazione_id})</div>'
		}
});
