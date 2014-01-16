Ext.define('mytouch.view.phone.Main',
{
 extend:'Ext.Container',
 xtype:'phonemain',
 config:{
 	fullscreen : true,
 	layout:{
 		type:'card'
 	},
 	items:[
 	{
 		
 		xtype:'searchform'
 	},
 	{
 		xtype:'rifuginavigationview'
 	}
 	]
 }
}
)