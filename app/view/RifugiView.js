Ext
		.define(
				'mytouch.view.RifugiView',
				{
					extend : 'Ext.NavigationView',
					xtype : 'rifuginavigationview',
					config : {
						items : [
								{
									xtype : 'list',
									store : 'RifugiStore',
									itemId : 'rifugilist',
									styleHtmlContent : 'true',
									indexBar : true,
									grouped : true,
									onItemDisclosure : true,
									itemTpl : [
											'<div style:"font-weight:bold">{nome}</div>',
											'<div  style:"font-style:italic">{valle},{monte},{regione}, {nazione} </div>',
											'<div>{descrizione}</div>',

											'<div><span>Telefono:</span> <span>{telefono}</span>',
											'<div><span>Sito web:</span> <span><a href="{sito_web}" target="_blanck">{sito_web}</a></span> </div>',
											'<span>Tipologia:</span> <span>{tipologia}</span> </div>'

									].join('')

								},
								{
									xtype : 'toolbar',

									docked : 'top',
									items : [ {
										ui : 'back',
										text:'Back',
										xtype:'button',
										
										handler :function() {
											    that = this;
											   
											    var v = this.up('phonemain').setActiveItem(0);
											    console.log(v);
											   v.setActiveItem(0);
											
											
										}
									} ]
								}
								]
					}

				})