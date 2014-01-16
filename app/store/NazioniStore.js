Ext.define('mytouch.store.NazioniStore',

{
	requires:['mytouch.model.NazioneModel'],
	extend: 'Ext.data.Store',
	config : {
		model:'mytouch.model.NazioneModel'
    //   storeId :'nazioniStoreID',
   //    params:{filename:'http://www.hidran.it/rifugi/services/nazioni.php'},
       
      
       }
	}

)