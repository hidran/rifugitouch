Ext.define('mytouch.model.NazioneModel', {
			extend : 'Ext.data.Model',
			config : {  
              fields:[
              { name:'nazione_id'}, {name:'nazione'}
              ],
              proxy : {
              	type:'jsonp',
              	url:'http://www.hidran.it/rifugi/services/nazioni.php',
              	
              	reader : {
              		idProperty:'nazione_id',
              		type : 'json'
              		
              	}
              }
            }
		}

)