Ext.Loader.setConfig({
    enabled:true
});


Ext.application({
    
    name: 'teste11',
    views:[],
    models:[],
    controllers:[],
    stores:[],
    
    viewport:{
	layout:{
	    type:'card',
	    animation:{
		type:'slide',
		duration: 300
	    }
	}
    },
    launch: function (){
	Ext.Viewport.add({
	    html:'painel 1',
	    items: [{
		docked:'top',
		xtype:'toolbar',
		ui:'light',
		items:[
		    {
			text:'botao teste',
			listeners:{
			    tap: function (){
				Ext.Viewport.setActiveItem(1);
			    }
			}
		    }
		]
	    } 
	    ]
	},
	{  html:'painel 2',
	    items:[ {
		docked:'top',
		xtype:'toolbar',
		ui:'light',
		items:[
		    {
			text:'voltar',
			ui:'back',
			listeners:{
			    tap: function (){
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