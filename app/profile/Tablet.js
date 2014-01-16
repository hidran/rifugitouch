Ext.define('mytouch.profile.Tablet',
{
    extend:'Ext.app.Profile',
    config:{
        launch:function(){
            alert('tablet')
        },
        isActive:function(){
        	var active = Ext.os.deviceType==='Tablet';
        	alert('tablet==='+active)
			return active;
           
        }
    }
}
)