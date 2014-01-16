Ext.define('mytouch.store.ValliStore',

{
	requires:['mytouch.model.ValleModel'],
	extend: 'Ext.data.Store',
	config : {
		model:'mytouch.model.ValleModel'
       }
	}

)