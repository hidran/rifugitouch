Ext.define('mytouch.controller.phone.MainPhone',

{
	extend : 'mytouch.controller.RifugiController',
	config : {
		refs : {
			phonemain : '.phonemain',
			navview : '.phonemain .rifuginavigationview'
		},
		control : {
			'nazioneselect' : {

				change : function(v, val) {
					return false;
					//this.getPhonemain().setActiveItem(1);
					//this.callParent();

				}
			},
			'regioneselect' : {
				change : function(v, val) {
					this.callParent();
				}
			},
			'monteselect' : {
				change : function(v, val) {
					this.callParent();
				}
			},
			'valleselect' : {
				change : function(v, val) {
					this.callParent();
				}
			},
			'searchButton' : {
				tap : function() {
					var value = Ext.ComponentQuery.query('#searchfield')[0]
					.getValue();
			this.searchRifugi({
				nome : value
			});
		this.getPhonemain().setActiveItem('rifuginavigationview');
					
				}
			},

			'searchfield' : {
				keyup : function(v) {
					this.callParent();
				}
			},
			'rifugilist' : {
				disclose : function(v, r) {
					this.pushDetail(r);

				},
				itemtap : function(v,i,t,r) {
					this.pushDetail(r);

				}
			}

		},
		
	},
	searchRifugi: function(pars){
		this.callParent(pars);
		
	},
  
	launch : function() {
	          var v = this.getNavview();
	}

})