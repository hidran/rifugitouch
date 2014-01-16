Ext.define('mytouch.controller.RifugiController',

{
	extend : 'Ext.app.Controller',
	config : {
		refs : {
			nazioneselect : '.searchform #nazioneselect',
			regioneselect : '.searchform #regioneselect',
			monteselect : '.searchform #monteselect',
			valleselect : '.searchform #valleselect',
			searchButton : '.searchform #searchButton',
			searchfield : '.searchform #searchfield',
			rifuginavigationview : '.rifuginavigationview',
			rifugilist : '.rifuginavigationview #rifugilist'

		},
		control : {
			'nazioneselect' : {
				change : function(v, val) {
					if (!val || val == '0') {
						return false;
					}
					this.loadRegions(val);
					this.searchRifugi({
						nazione_id : val
					})

				}
			},
			'regioneselect' : {
				change : function(v, val) {
					if (!val || val == '0') {
						return false;
					}
					var rec = v.getStore().getById(val);
					if (rec && val) {
						this.searchRifugi({
							regione_id : rec.get('regione_id')
						});

						Ext.getStore('MontiStore').load({
							params : {
								nazione_id : rec.get('nazione_id'),
								regione_id : rec.get('regione_id')
							}
						});
					}

				}
			},
			'monteselect' : {
				change : function(v, val) {
					if (!val || val == '0') {
						return false;
					}
					var rec = v.getStore().getById(val);
					if (rec) {
						Ext.getStore('ValliStore').load({
							params : {
								nazione_id : rec.get('nazione_id'),
								monte_id : rec.get('gruppo_montuoso_id') * 1,
								regione_id : rec.get('regione_id')
							}
						});
						this.searchRifugi({
							monte_id : rec.get('gruppo_montuoso_id')
						})

					}
				}
			},
			'valleselect' : {
				change : function(v, val) {
					if (!val || val == '0') {
						return false;
					}
					this.searchRifugi({
						valle_id : val
					})

				}
			},
			'searchButton' : {
				tap : function() {
					var value = Ext.ComponentQuery.query('#searchfield')[0]
							.getValue();
					this.searchRifugi({
						nome : value
					})
				}
			},

			'searchfield' : {
				keyup : function(v) {

					var value = v.getValue();
					if (value == '' || value.length >= 3) {
						this.searchRifugi({
							nome : value
						});
					}
				}
			},
			'rifugilist' : {
				disclose : function(v, r) {
                  this.pushDetail(r);
				}
			}

		}
	},
	launch : function() {
	  
	},
	init : function() {
		Ext.getStore('NazioniStore').load();

	},
	pushDetail : function(r){
		var item = Ext.create('mytouch.view.RifugioDetail');
	//	item.getStore().removeAll();
		item.setData(r);
		this.getRifuginavigationview().push(item);

	},
	loadRegions : function(val) {
		Ext.getStore('RegioniStore').load({
			params : {
				nazione_id : val
			}
		})
	},
	searchRifugi : function(newpars) {
		var allPars = Ext.apply(Ext.getStore('RifugiStore').getProxy()
				.getExtraParams(), newpars);
		
		Ext.getStore('RifugiStore').getProxy().setExtraParams(allPars)

		Ext.getStore('RifugiStore').load();
	}
})