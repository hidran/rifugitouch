Ext.define('mytouch.model.ValleModel', {
			extend : 'Ext.data.Model',
			config : {  
              fields:[
              "nazione_id" , "valle_id" , "nome" 
              ],
              proxy : {
              	type:'jsonp',
              	url:'http://www.hidran.it/rifugi/services/valli.php',
              	
              	reader : {
              		idProperty:'valle_id',
              		type : 'json'
              		
              	}
              }
            }
		}

)