Ext.define('mytouch.view.SearchToolbar',
{

extend:'Ext.Toolbar',
 xtype:'searchtoolbar',
 
 config:{
 	loyout:{
 		type:'form'
 	},
 	items:[
 	
 	
 		
 		{
 		xtype:'selectfield',
 		itemId:'nazioneselect',
 		label: 'Nazione',
 		store:'NazioniStore',
 		displayField:'nazione',
 		valueField:'nazione_id',
  		flex:1
 		},
        {
        xtype:'selectfield',
        itemId:'regioneselect',
        label: 'Regione',
        store:'RegioniStore',
        displayField:'regione',
        valueField:'regione_id',
        flex:1
        },
        {
        xtype:'selectfield',
        label: 'Monte',
        itemId:'monteselect',
        store:'MontiStore',
        displayField:'nome',
        valueField:'gruppo_montuoso_id',
        flex:1
        },
        {
        xtype:'selectfield',
        label: 'Valle',
        itemId:'valleselect',
        store:'ValliStore',
        displayField:'nome',
        valueField:'valle_id',
        flex:1
        },
        {
        xtype:'textfield',
        label: 'Parola',
        itemId:'searchfield',
        flex:1
        },
 		
 		
 		{
 			xtype:'spacer',
 			flex:1
 		},
 		{
        text:'Cerca',
        itemId:'searchButton',
        ui:'action-round',
        iconCls:'search'
        }
 	
 	]
 }
}
)