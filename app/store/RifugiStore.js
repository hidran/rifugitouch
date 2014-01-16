Ext.define('mytouch.store.RifugiStore',
		
		{	extend : 'Ext.data.Store',
		requires :['mytouch.model.RifugioModel'],
		config : {
			 sorters: 'nome',
			 grouper: {
			       groupFn: function(record) {
			           return Ext.getStore('NazioniStore').getById(record.get('nazione_id')).data.nazione+' - '+record.get('regione');
			       }
			   },
			model :'mytouch.model.RifugioModel',
			listeners:{
				load:function(v,r){
						console.log('rifugi')
						console.log(r)
				}
			}
		}
		}
		)
