Ext.Loader.setConfig({
    enabled: true
});

Ext.require('Ext.device.Connection');
Ext.require('Ext.MessageBox');
Ext.require('Ext.device.Notification');
Ext.require('Ext.device.Camera');

Ext.application({
    name: 'MyApp',
    views: [],
    models: [],
    controllers: [],
    stores: [],
    viewport: {
	layout: {
	    type: 'card',
	    animation: {
		type: 'slide',
		duration: 300
	    }
	}
    },
    launch: function () {
	if (Ext.device.Connection.isOnline()) {
	    Ext.Msg.alert('You are currently connected via ' + Ext.device.Connection.getType());
	} else {
	    Ext.Msg.alert('You are not currently connected');
	}
	Ext.device.Notification.show({
    title: 'One Button',
    message: 'This is a simple notification with one button.'
});
//Ext.device.Notification.Abstract.vibrate();
Ext.device.Camera.capture({
    source: 'camera',
    destination: 'file',

    success: function(url) {
        //show the newly captured image in a full screen Ext.Img component:
        Ext.create('Ext.Img', {
            src: url,
            fullscreen: true
        });
    }
});

	Ext.Viewport.add({
	    html: 'painel 1',
	    items: [{
		    docked: 'top',
		    xtype: 'toolbar',
		    ui: 'light',
		    items: [
			{
			    text: 'botao teste',
			    listeners: {
				tap: function () {
				    Ext.Viewport.setActiveItem(1);
				}
			    }
			}
		    ]
		}
	    ]
	},
	{html: 'painel 2',
	    items: [{
		    docked: 'top',
		    xtype: 'toolbar',
		    ui: 'light',
		    items: [
			{
			    text: 'voltar',
			    ui: 'back',
			    listeners: {
				tap: function () {
				    Ext.Viewport.setActiveItem(0);
				}
			    }
			}
		    ]
		}]
	}


	);

    }


});