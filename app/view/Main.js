Ext.define('mytouch.view.Main', {
	extend : 'Ext.Container',
	xtype : 'main',
	requires : [ 
			'mytouch.view.SearchForm', 'Ext.field.Select',
			'Ext.form.FieldSet'
			],
	config :{
                   layout :{
                   	type:'vbox', 
                   	align:'stretch'
                   	},
                    defaults:{
                    	flex:1
                    },
                    items : [
                             
                             {
                        xtype : 'searchform'
                      

                    }, {
                        xtype : 'rifuginavigationview',
                        flex:2

                    },
                    {
                                 xtype:'toolbar',
                                 title:'RIFUGI  BIVACCHI',
                                 docked:'top'
                             }
                    ]
                }
});
