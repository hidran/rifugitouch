Ext.define('mytouch.profile.Phone', {
			extend : 'Ext.app.Profile',
			requires : ['mytouch.view.phone.Main'],

			config : {
				controllers : ['MainPhone']
			},
			launch : function() {
					Ext.Viewport.add({
							xtype : 'phonemain'
						});
			},
			isActive : function() {
				return true;
				var active = Ext.os.deviceType==='Phone';
				return active;
			}
		});