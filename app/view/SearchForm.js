Ext.define('mytouch.view.SearchForm',
{

extend:'Ext.Container',
 xtype:'searchform',
 
 config:{
   title:'my form',
   defaults:{
		  align:'center',
		  flex:1
	  },
	  layout:{
		  type:'vbox',
		  pack:'center'
	  },
    items:[
    
    
        {
        	xtype:'toolbar',
        	docked:'top',
        	title:'Cerca rifugi'
        },
        {
        xtype:'formpanel',
        flex:3,
        items:
        	[
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
        }
        ]
 },
        
        
      
        {
        	xtype:'toolbar',
        	docked:'bottom',

        	items:
        	[
        	 {
        		xtype:'spacer' 
        	 },
        	 {
        		 
        xtype:'button',
        text:'Cerca',
        itemId:'searchButton',
        ui:'action-round',
        iconCls:'search',
        ui:'confirm'
        }
        ]
        }
    
    ]
 }
}
)