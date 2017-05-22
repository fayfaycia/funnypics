var hover_dir={
	wrapper: $('.pic-list')[0],
	box: $('.pic-item'),
	target: $('.back'),
	bindEvent: function(){
		var mouse_pos,x,y,stop_bubble;
		for(var i=0;i<hover_dir.box.length;i++){
			(function(n){
				$.addEvent(hover_dir.box[n],"mouseover",function(event){
					event=$.getEvent(event);	// $.getEvent(event)
					var relatedT=$.getRelatedTarget(event);		// $.getRelatedTarget(event)
					if(!$.contains(hover_dir.box[n], relatedT)){		// $.contains(hover_dir.box[n],ralatedT)
						var child=hover_dir.box[n].childNodes[0];
						$.stopPropagation(event);
						$.removeClass(hover_dir.target[n],"to-top") ||
						$.removeClass(hover_dir.target[n],"to-right") ||
						$.removeClass(hover_dir.target[n],"to-bottom") ||
						$.removeClass(hover_dir.target[n],"to-left");
						x=event.pageX;
						y=event.pageY;
						mouse_pos={"x":x, "y":y};
						var dir=$.get_dir(hover_dir.box[n],mouse_pos);		// $.get_dir(hover_dir.box[n],mouse_pos);
						switch (dir) {
							case "top":
								$.addClass(hover_dir.target[n],"from-top");
								break;
							case "right":
								$.addClass(hover_dir.target[n],"from-right");
								break;
							case "bottom":
								$.addClass(hover_dir.target[n],"from-bottom");
								break;
							case "left":
								$.addClass(hover_dir.target[n],"from-left");
								break;
							default: break;
						}
					}
				});
				$.addEvent(hover_dir.box[n], "mouseout",function(event){
					event=$.getEvent(event);
					var relatedT=$.getRelatedTarget(event);
					if(!$.contains(hover_dir.box[n],relatedT)){
						$.removeClass(hover_dir.target[n],"from-top") ||
						$.removeClass(hover_dir.target[n],"from-right") ||
						$.removeClass(hover_dir.target[n],"from-bottom") ||
						$.removeClass(hover_dir.target[n],"from-left");
						x=event.pageX;
						y=event.pageY;
						mouse_pos={"x":x, "y":y};
						var dir=$.get_dir(hover_dir.box[n],mouse_pos);
						switch (dir) {
							case "top":
								$.addClass(hover_dir.target[n],"to-top");
								break;
							case "right":
								$.addClass(hover_dir.target[n],"to-right");
								break;
							case "bottom":
								$.addClass(hover_dir.target[n],"to-bottom");
								break;
							case "left":
								$.addClass(hover_dir.target[n],"to-left");
								break;
							default: break;
						}
					}
				});
			})(i);
		}
	},
	init: function(){
		hover_dir.bindEvent();
	}
};
hover_dir.init();