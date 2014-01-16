Ext.define('mytouch.model.RifugioModel',
		{
	extend: 'Ext.data.Model',
		
		config : {
			fields :[
						"rifugio_id" ,
						"nome", 
						"regione_id" ,
						"valle_id" , 
						"area_montuosa_id" ,
						"nazione_id" , 
						"telefono" , 
						"cellulare", 
						"sito_web",
						"descrizione" ,
						"posti_letto" , 
						"coordinate_gps" , 
						"periodo_paertura", 
						"trasporto_pubblico" ,
						"rifugi_tipologia_id" , 
						"nazione" ,
						"regione" ,
						"tipologia_tipologia_id",
						"tipologia" ,
						{name:'valle', mapping:"valli_nome"},
						"valli_gruppo_montuoso_id",
						{name:'monte', mapping:"gruppo_montuoso_nome" }

			         ],
		             proxy : {
		               	type:'jsonp',
		               	url:'http://www.hidran.it/rifugi/services/rifugi.php',
		               	
		               	reader : {
		               		idProperty:'rifugio_id',
		               		type : 'json'
		               		
		               	}
		               }

				
               
					}

		}
	
		)