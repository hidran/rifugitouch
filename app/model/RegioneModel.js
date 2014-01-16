Ext.define('mytouch.model.RegioneModel', {
			extend : 'Ext.data.Model',
			config : {  
	          fields:[
              "nazione_id" , "regione_id" , "regione" 
              ],
              proxy : {
              	type:'jsonp',
              	url:'http://www.hidran.it/rifugi/services/regioni.php',
              	
              	reader : {
              		idProperty:'regione_id',
              		type : 'json'
              		
              	}
              }
            }
		}

)