Ext.define('mytouch.store.MontiStore',

{
	requires:['mytouch.model.MonteModel'],
	extend: 'Ext.data.Store',
	config : {
		model:'mytouch.model.MonteModel'
       }
	}

)