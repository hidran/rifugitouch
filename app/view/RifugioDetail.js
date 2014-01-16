Ext
		.define(
				'mytouch.view.RifugioDetail',
				{
					extend : 'Ext.DataView',
					xtype : 'rifugiodetail',
					config : {
						store :'RifugiStoreDetail',
							title : 'Rifugio Detail',
							styleHtmlContent : 'true',
							itemTpl : [
									'<div style:"font-weight:bold">{nome}</div>',
									'<div  style:"font-style:italic">{valle},{monte},{regione}, {nazione} </div>',
									'<div>{descrizione}</div>',

									'<div><span>Telefono:</span> <span>{telefono}</span>',
									'<div><span>Sito web:</span> <span><a href="{sito_web}" target="_blanck">{sito_web}</a></span> </div>',
									'<span>Tipologia:</span> <span>{tipologia}</span> </div>'

							].join('')

						
					}

				})