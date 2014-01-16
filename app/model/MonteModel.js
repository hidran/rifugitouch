Ext.define('mytouch.model.MonteModel', {
			extend : 'Ext.data.Model',
			config : {  
				idProperty:'gruppo_montuoso_id',
              fields:[
              "gruppo_montuoso_id" , "nazione_id" , "nome" , "regione_id" 
              ],
              proxy : {
              	type:'jsonp',
              	url:'http://www.hidran.it/rifugi/services/monti.php',
              	
              	reader : {
              		idProperty:'gruppo_montuoso_id',
              		type : 'json'
              		
              	}
              }
            }
		}

)