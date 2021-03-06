// Compiled by ClojureScript 0.0-2202
goog.provide('crossviz.core');
goog.require('cljs.core');
goog.require('crossviz.obj3');
goog.require('crossviz.obj3');
goog.require('crossviz.constants');
goog.require('crossviz.math');
goog.require('om.dom');
goog.require('crossviz.three');
goog.require('crossviz.constants');
goog.require('crossviz.rp2');
goog.require('crossviz.obj3');
goog.require('crossviz.geom');
goog.require('om.dom');
goog.require('crossviz.three');
goog.require('crossviz.rp2');
goog.require('om.core');
goog.require('om.core');
goog.require('crossviz.math');
goog.require('crossviz.geom');
crossviz.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
crossviz.core.textChange = (function textChange(e){return console.log(e);
});
crossviz.core.make_om_ui = (function make_om_ui(){return om.core.root.call(null,(function (app,owner){if(typeof crossviz.core.t5924 !== 'undefined')
{} else
{
/**
* @constructor
*/
crossviz.core.t5924 = (function (owner,app,make_om_ui,meta5925){
this.owner = owner;
this.app = app;
this.make_om_ui = make_om_ui;
this.meta5925 = meta5925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
crossviz.core.t5924.cljs$lang$type = true;
crossviz.core.t5924.cljs$lang$ctorStr = "crossviz.core/t5924";
crossviz.core.t5924.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"crossviz.core/t5924");
});
crossviz.core.t5924.prototype.om$core$IRender$ = true;
crossviz.core.t5924.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": "buttons"},React.DOM.button({"onClick": ((function (___$1){
return (function (e){return crossviz.core.takeStep.call(null);
});})(___$1))
, "className": "btn btn-lg btn-default", "id": "step-forward", "type": "button"},React.DOM.i({"className": "fa fa-step-forward fa-2x"},null)),React.DOM.button({"onClick": ((function (___$1){
return (function (e){return crossviz.core.resetWorld.call(null);
});})(___$1))
, "className": "btn btn-lg btn-default", "id": "reset-world", "type": "button"},React.DOM.i({"className": "fa fa-home fa-2x"},null))),React.DOM.div({"className": "rp2-item"},om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (e){return crossviz.core.textChange.call(null,e);
});})(___$1))
, "size": 4, "type": "text"}),om.dom.input.call(null,{"type": "checkbox"})));
});
crossviz.core.t5924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5926){var self__ = this;
var _5926__$1 = this;return self__.meta5925;
});
crossviz.core.t5924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5926,meta5925__$1){var self__ = this;
var _5926__$1 = this;return (new crossviz.core.t5924(self__.owner,self__.app,self__.make_om_ui,meta5925__$1));
});
crossviz.core.__GT_t5924 = (function __GT_t5924(owner__$1,app__$1,make_om_ui__$1,meta5925){return (new crossviz.core.t5924(owner__$1,app__$1,make_om_ui__$1,meta5925));
});
}
return (new crossviz.core.t5924(owner,app,make_om_ui,null));
}),crossviz.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("om-ui")], null));
});
crossviz.core.make_om_ui.call(null);
cljs.core.enable_console_print_BANG_.call(null);
crossviz.core.log = (function log(msg){return console.log(msg);
});
crossviz.core.stop_transform_action = (function stop_transform_action(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"transform","transform",2066570974),new cljs.core.Keyword(null,"func","func",1017058870),(function (){return null;
})], null);
});
crossviz.core.scene_root = crossviz.three.Scene.call(null);
crossviz.core.geoms = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crossviz.core.insert_geom = (function insert_geom(g){cljs.core.swap_BANG_.call(null,crossviz.core.geoms,(function (gs){return cljs.core.conj.call(null,gs,g);
}));
return crossviz.core.refresh.call(null);
});
crossviz.core.remove_geom = (function remove_geom(g){cljs.core.swap_BANG_.call(null,crossviz.core.geoms,(function (gs){return cljs.core.filter.call(null,(function (p1__5927_SHARP_){return cljs.core.not_EQ_.call(null,p1__5927_SHARP_,g);
}),gs);
}));
return crossviz.core.refresh.call(null);
});
crossviz.core.texts = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crossviz.core.WORLD = (new crossviz.three.Object3D());
crossviz.core.WORLD.matrixAutoUpdate = false;
crossviz.core.world = cljs.core.atom.call(null,crossviz.three.Object3D.call(null));
crossviz.core.add_geom_to_world = (function add_geom_to_world(g){if(cljs.core.vector_QMARK_.call(null,g))
{cljs.core.doall.call(null,cljs.core.map.call(null,add_geom_to_world,g));
} else
{var obj_5928 = crossviz.geom.to_obj3.call(null,g);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"text","text",1017460895)))
{cljs.core.swap_BANG_.call(null,crossviz.core.texts,((function (obj_5928){
return (function (ts){return cljs.core.conj.call(null,ts,obj_5928);
});})(obj_5928))
);
} else
{}
cljs.core.deref.call(null,crossviz.core.world).add(obj_5928);
}
return null;
});
cljs.core.add_watch.call(null,crossviz.core.geoms,new cljs.core.Keyword(null,"geoms-watch","geoms-watch",552219563),(function (_,___$1,___$2,new_geoms){crossviz.core.WORLD.remove(cljs.core.deref.call(null,crossviz.core.world));
cljs.core.reset_BANG_.call(null,crossviz.core.world,(new THREE.Object3D()));
cljs.core.reset_BANG_.call(null,crossviz.core.texts,cljs.core.PersistentVector.EMPTY);
var seq__5929_5933 = cljs.core.seq.call(null,new_geoms);var chunk__5930_5934 = null;var count__5931_5935 = 0;var i__5932_5936 = 0;while(true){
if((i__5932_5936 < count__5931_5935))
{var g_5937 = cljs.core._nth.call(null,chunk__5930_5934,i__5932_5936);crossviz.core.add_geom_to_world.call(null,g_5937);
{
var G__5938 = seq__5929_5933;
var G__5939 = chunk__5930_5934;
var G__5940 = count__5931_5935;
var G__5941 = (i__5932_5936 + 1);
seq__5929_5933 = G__5938;
chunk__5930_5934 = G__5939;
count__5931_5935 = G__5940;
i__5932_5936 = G__5941;
continue;
}
} else
{var temp__4126__auto___5942 = cljs.core.seq.call(null,seq__5929_5933);if(temp__4126__auto___5942)
{var seq__5929_5943__$1 = temp__4126__auto___5942;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5929_5943__$1))
{var c__4229__auto___5944 = cljs.core.chunk_first.call(null,seq__5929_5943__$1);{
var G__5945 = cljs.core.chunk_rest.call(null,seq__5929_5943__$1);
var G__5946 = c__4229__auto___5944;
var G__5947 = cljs.core.count.call(null,c__4229__auto___5944);
var G__5948 = 0;
seq__5929_5933 = G__5945;
chunk__5930_5934 = G__5946;
count__5931_5935 = G__5947;
i__5932_5936 = G__5948;
continue;
}
} else
{var g_5949 = cljs.core.first.call(null,seq__5929_5943__$1);crossviz.core.add_geom_to_world.call(null,g_5949);
{
var G__5950 = cljs.core.next.call(null,seq__5929_5943__$1);
var G__5951 = null;
var G__5952 = 0;
var G__5953 = 0;
seq__5929_5933 = G__5950;
chunk__5930_5934 = G__5951;
count__5931_5935 = G__5952;
i__5932_5936 = G__5953;
continue;
}
}
} else
{}
}
break;
}
return crossviz.core.WORLD.add(cljs.core.deref.call(null,crossviz.core.world));
}));
crossviz.core.animating = cljs.core.atom.call(null,false);
crossviz.core.finterp = (function finterp(x0,x1,t){return (x0 + (t * (x1 - x0)));
});
crossviz.core.v3interp = (function v3interp(v0,v1,t){return (new THREE.Vector3(crossviz.core.finterp.call(null,v0.x,v1.x,t),crossviz.core.finterp.call(null,v0.y,v1.y,t),crossviz.core.finterp.call(null,v0.z,v1.z,t)));
});
crossviz.core.anim_transform_action = (function() {
var anim_transform_action = null;
var anim_transform_action__5 = (function (target,q1,p1,s1,n){var q0 = (new THREE.Quaternion());var p0 = (new THREE.Vector3());var s0 = (new THREE.Vector3());target.matrix.decompose(p0,q0,s0);
return anim_transform_action.call(null,target,q0,p0,s0,q1,p1,s1,n);
});
var anim_transform_action__8 = (function (target,q0,p0,s0,q1,p1,s1,n){return anim_transform_action.call(null,target,q0,p0,s0,q1,p1,s1,n,0);
});
var anim_transform_action__9 = (function (target,q0,p0,s0,q1,p1,s1,n,t){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"anim-transform","anim-transform",4473840162),new cljs.core.Keyword(null,"func","func",1017058870),(((t >= 1))?(function (){target.quaternion = q1;
target.position = p1;
target.scale = s1;
target.updateMatrix();
target.matrixWorldNeedsUpdate = true;
return null;
}):(function (){target.quaternion = q0.slerp(q1,t);
target.position = crossviz.core.v3interp.call(null,p0,p1,t);
target.scale = crossviz.core.v3interp.call(null,s0,s1,t);
target.updateMatrix();
target.matrixWorldNeedsUpdate = true;
return anim_transform_action.call(null,target,q0,p0,s0,q1,p1,s1,n,(t + (1.0 / n)));
}))], null);
});
anim_transform_action = function(target,q0,p0,s0,q1,p1,s1,n,t){
switch(arguments.length){
case 5:
return anim_transform_action__5.call(this,target,q0,p0,s0,q1);
case 8:
return anim_transform_action__8.call(this,target,q0,p0,s0,q1,p1,s1,n);
case 9:
return anim_transform_action__9.call(this,target,q0,p0,s0,q1,p1,s1,n,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
anim_transform_action.cljs$core$IFn$_invoke$arity$5 = anim_transform_action__5;
anim_transform_action.cljs$core$IFn$_invoke$arity$8 = anim_transform_action__8;
anim_transform_action.cljs$core$IFn$_invoke$arity$9 = anim_transform_action__9;
return anim_transform_action;
})()
;
crossviz.core.anim_reset_action = (function anim_reset_action(target){var p1 = (new THREE.Vector3(0,0,0));var q1 = (new THREE.Quaternion(0,0,0,1));var s1 = (new THREE.Vector3(1,1,1));return crossviz.core.anim_transform_action.call(null,target,q1,p1,s1,100);
});
crossviz.core.resetWorld = (function resetWorld(){return crossviz.core.add_actions.call(null,crossviz.core.stop_transform_action.call(null),crossviz.core.anim_reset_action.call(null,crossviz.core.WORLD));
});
crossviz.core.prepareContainer = (function prepareContainer(domElement,renderer){var container = document.getElementById("container");container.appendChild(renderer.domElement);
return container;
});
crossviz.core.actions = cljs.core.atom.call(null,cljs.core.List.EMPTY);
crossviz.core.take_actions = (function take_actions(){var action_taken = cljs.core.seq.call(null,cljs.core.deref.call(null,crossviz.core.actions));cljs.core.swap_BANG_.call(null,crossviz.core.actions,((function (action_taken){
return (function (actions){return cljs.core.doall.call(null,cljs.core.filter.call(null,((function (action_taken){
return (function (p1__5954_SHARP_){return !((p1__5954_SHARP_ == null));
});})(action_taken))
,cljs.core.map.call(null,((function (action_taken){
return (function (p1__5955_SHARP_){return new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(p1__5955_SHARP_).call(null);
});})(action_taken))
,actions)));
});})(action_taken))
);
return action_taken;
});
crossviz.core.actions_similar = (function actions_similar(a1,a2){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(a1),new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(a2));
});
crossviz.core.action_similar_to_any = (function action_similar_to_any(a,actions){return cljs.core.some.call(null,(function (p1__5956_SHARP_){return crossviz.core.actions_similar.call(null,a,p1__5956_SHARP_);
}),actions);
});
/**
* @param {...*} var_args
*/
crossviz.core.add_actions = (function() { 
var add_actions__delegate = function (new_actions){cljs.core.swap_BANG_.call(null,crossviz.core.actions,(function (actions){return cljs.core.apply.call(null,cljs.core.conj,cljs.core.cons.call(null,cljs.core.filter.call(null,(function (p1__5957_SHARP_){return cljs.core.not.call(null,crossviz.core.action_similar_to_any.call(null,p1__5957_SHARP_,new_actions));
}),actions),new_actions));
}));
return crossviz.core.refresh.call(null);
};
var add_actions = function (var_args){
var new_actions = null;if (arguments.length > 0) {
  new_actions = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return add_actions__delegate.call(this,new_actions);};
add_actions.cljs$lang$maxFixedArity = 0;
add_actions.cljs$lang$applyTo = (function (arglist__5958){
var new_actions = cljs.core.seq(arglist__5958);
return add_actions__delegate(new_actions);
});
add_actions.cljs$core$IFn$_invoke$arity$variadic = add_actions__delegate;
return add_actions;
})()
;
crossviz.core.oneshot_transform_action = (function oneshot_transform_action(target,M){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"transform","transform",2066570974),new cljs.core.Keyword(null,"func","func",1017058870),(function (){target.matrix.multiply(M);
target.matrixWorldNeedsUpdate = true;
return null;
})], null);
});
crossviz.core.repeating_transform_action = (function repeating_transform_action(target,M){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"transform","transform",2066570974),new cljs.core.Keyword(null,"func","func",1017058870),(function (){target.matrix.multiply(M);
target.matrixWorldNeedsUpdate = true;
return repeating_transform_action.call(null,target,M);
})], null);
});
crossviz.core.drag_rotation_matrix = (function drag_rotation_matrix(dx,dy,button,eventTracker,width,height,moving,center,frame){if(cljs.core._EQ_.call(null,dx,dy,0))
{return null;
} else
{if(cljs.core._EQ_.call(null,button,1))
{var v = (new THREE.Vector3(0,0,1));var d = (dx + dy);var angle = ((d / width) * Math.PI);var R = (new THREE.Matrix4()).makeRotationAxis(v,angle);var M = eventTracker.computeTransform(moving,center,frame,R);return M;
} else
{var v = (new THREE.Vector3(dy,dx,0)).normalize();var d = Math.sqrt(((dx * dx) + (dy * dy)));var angle = ((d / width) * Math.PI);var R = (new THREE.Matrix4()).makeRotationAxis(v,angle);var M = eventTracker.computeTransform(moving,center,frame,R);return M;
}
}
});
crossviz.core.drag_scale_matrix = (function drag_scale_matrix(delta,eventTracker,width,height,moving,center,frame){if(cljs.core._EQ_.call(null,delta,0))
{return null;
} else
{var s = Math.exp((delta / 20.0));var R = (new THREE.Matrix4()).makeScale(s,s,s);var M = eventTracker.computeTransform(moving,center,frame,R);return M;
}
});
crossviz.core.do_if_not_nil = (function do_if_not_nil(value,f){if(!((value == null)))
{return f.call(null,value);
} else
{return null;
}
});
crossviz.core.renderer = (new THREE.WebGLRenderer({"antialias": true}));
crossviz.core.container = crossviz.core.prepareContainer.call(null,document.getElementById("container"),crossviz.core.renderer);
crossviz.core.width = crossviz.core.container.offsetWidth;
crossviz.core.height = crossviz.core.container.offsetHeight;
crossviz.core.camera = (new THREE.PerspectiveCamera(45,(crossviz.core.width / crossviz.core.height),1,4000));
crossviz.core.light1 = (new THREE.DirectionalLight(16777215,0.5));
crossviz.core.light2 = (new THREE.DirectionalLight(16777215,0.7));
crossviz.core.light3 = (new THREE.DirectionalLight(16777215,0.7));
crossviz.core.light4 = (new THREE.DirectionalLight(16777215,0.7));
crossviz.core.eventTracker = EventTracker(crossviz.core.renderer.domElement,{"mouseWheel": (function (delta){return crossviz.core.do_if_not_nil.call(null,crossviz.core.drag_scale_matrix.call(null,delta,crossviz.core.eventTracker,crossviz.core.width,crossviz.core.height,crossviz.core.WORLD,crossviz.core.WORLD,crossviz.core.camera),(function (p1__5961_SHARP_){return crossviz.core.add_actions.call(null,crossviz.core.oneshot_transform_action.call(null,crossviz.core.WORLD,p1__5961_SHARP_));
}));
}), "mouseUp": (function (p,dt,dp,button){if((dt < 100))
{return crossviz.core.do_if_not_nil.call(null,crossviz.core.drag_rotation_matrix.call(null,dp.x,dp.y,button,crossviz.core.eventTracker,crossviz.core.width,crossviz.core.height,crossviz.core.WORLD,crossviz.core.WORLD,crossviz.core.camera),(function (p1__5960_SHARP_){return crossviz.core.add_actions.call(null,crossviz.core.repeating_transform_action.call(null,crossviz.core.WORLD,p1__5960_SHARP_));
}));
} else
{return null;
}
}), "mouseDrag": (function (p,dp,button){return crossviz.core.do_if_not_nil.call(null,crossviz.core.drag_rotation_matrix.call(null,dp.x,dp.y,button,crossviz.core.eventTracker,crossviz.core.width,crossviz.core.height,crossviz.core.WORLD,crossviz.core.WORLD,crossviz.core.camera),(function (p1__5959_SHARP_){return crossviz.core.add_actions.call(null,crossviz.core.oneshot_transform_action.call(null,crossviz.core.WORLD,p1__5959_SHARP_));
}));
}), "mouseDown": (function (p){return crossviz.core.add_actions.call(null,crossviz.core.stop_transform_action.call(null));
})});
crossviz.core.realign_labels_camera_facing = (function realign_labels_camera_facing(){crossviz.core.WORLD.updateMatrixWorld();
crossviz.core.camera.updateMatrixWorld();
var M = (new THREE.Matrix4()).getInverse(crossviz.core.WORLD.matrixWorld).multiply(crossviz.core.camera.matrixWorld);return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (M){
return (function (p1__5962_SHARP_){return p1__5962_SHARP_.rotation.setFromRotationMatrix(M);
});})(M))
,cljs.core.deref.call(null,crossviz.core.texts)));
});
crossviz.core.refresh = (function refresh(){return requestAnimationFrame((function (){crossviz.core.realign_labels_camera_facing.call(null);
crossviz.core.renderer.render(crossviz.core.scene_root,crossviz.core.camera);
if(crossviz.core.take_actions.call(null))
{return refresh.call(null);
} else
{return null;
}
}));
});
crossviz.core.renderer.setSize(crossviz.core.width,crossviz.core.height);
crossviz.core.renderer.setClearColor(crossviz.constants.bgcolor,1);
crossviz.core.camera.position.set(0,0,8);
crossviz.core.camera.up.set(0,1,0);
crossviz.core.camera.lookAt(crossviz.obj3.vector3.call(null,0,0,0));
crossviz.core.light1.position.set(100,0,0);
crossviz.core.light2.position.set(0,-100,0);
crossviz.core.light3.position.set(0,100,0);
crossviz.core.light3.position.set(0,0,-10);
crossviz.core.camera.add(crossviz.core.light1);
crossviz.core.camera.add(crossviz.core.light2);
crossviz.core.camera.add(crossviz.core.light3);
crossviz.core.camera.add(crossviz.core.light4);
crossviz.core.scene_root.add(crossviz.core.camera);
crossviz.core.scene_root.add(crossviz.core.WORLD);
crossviz.core.WORLD.add(cljs.core.deref.call(null,crossviz.core.world));
crossviz.core.refresh.call(null);
crossviz.core.disc_radius = crossviz.math.sqrt.call(null,((crossviz.constants.univDiam * crossviz.constants.univDiam) - 1));
crossviz.core.rp2_v1 = crossviz.rp2.rp2.call(null,1,1,3);
crossviz.core.rp2_v2 = crossviz.rp2.rp2.call(null,1,-1,2);
crossviz.core.rp2_v1v2 = crossviz.rp2.cross.call(null,crossviz.core.rp2_v1,crossviz.core.rp2_v2);
crossviz.core.geom_vector_v1 = crossviz.geom.vector.call(null,crossviz.core.rp2_v1);
crossviz.core.geom_vector_v2 = crossviz.geom.vector.call(null,crossviz.core.rp2_v2);
crossviz.core.geom_vector_v1v2 = crossviz.geom.vector.call(null,crossviz.core.rp2_v1v2);
crossviz.core.rp2_a = crossviz.rp2.rp2.call(null,2,4,2);
crossviz.core.rp2_b = crossviz.rp2.rp2.call(null,3,-6,2);
crossviz.core.rp2_ab = crossviz.rp2.cross.call(null,crossviz.core.rp2_b,crossviz.core.rp2_a);
crossviz.core.geom_2d_axes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [crossviz.geom.segment3.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- crossviz.core.disc_radius),0,1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [crossviz.core.disc_radius,0,1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),16711680], null)),crossviz.geom.segment3.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,(- crossviz.core.disc_radius),1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,crossviz.core.disc_radius,1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),65280], null)),crossviz.geom.text.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [crossviz.core.disc_radius,0,1], null),"x"),crossviz.geom.text.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,crossviz.core.disc_radius,1], null),"y")], null);
crossviz.core.geom_line_a = crossviz.geom.line.call(null,crossviz.core.rp2_a);
crossviz.core.geom_line_a_label = crossviz.geom.text.call(null,cljs.core.first.call(null,crossviz.obj3.segment_endpoints.call(null,crossviz.core.rp2_a)),[cljs.core.str(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(crossviz.core.rp2_a)),cljs.core.str("x + "),cljs.core.str(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(crossviz.core.rp2_a)),cljs.core.str("y + "),cljs.core.str(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(crossviz.core.rp2_a)),cljs.core.str(" = 0")].join(''));
crossviz.core.geom_plane_a = crossviz.geom.plane.call(null,crossviz.core.rp2_a,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transparent","transparent",3582677188),true,new cljs.core.Keyword(null,"color","color",1108746965),crossviz.constants.planecolor], null));
crossviz.core.geom_vector_a = crossviz.geom.vector.call(null,crossviz.core.rp2_a);
crossviz.core.geom_vector_a_label = crossviz.geom.text.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(crossviz.core.rp2_a),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(crossviz.core.rp2_a),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(crossviz.core.rp2_a)], null),[cljs.core.str("("),cljs.core.str(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(crossviz.core.rp2_a)),cljs.core.str(","),cljs.core.str(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(crossviz.core.rp2_a)),cljs.core.str(","),cljs.core.str(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(crossviz.core.rp2_a)),cljs.core.str(")")].join(''));
crossviz.core.geom_line_b = crossviz.geom.line.call(null,crossviz.core.rp2_b);
crossviz.core.geom_line_b_label = crossviz.geom.text.call(null,cljs.core.first.call(null,crossviz.obj3.segment_endpoints.call(null,crossviz.core.rp2_b)),[cljs.core.str(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(crossviz.core.rp2_b)),cljs.core.str("x + "),cljs.core.str(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(crossviz.core.rp2_b)),cljs.core.str("y + "),cljs.core.str(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(crossviz.core.rp2_b)),cljs.core.str(" = 0")].join(''));
crossviz.core.geom_plane_b = crossviz.geom.plane.call(null,crossviz.core.rp2_b,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transparent","transparent",3582677188),true,new cljs.core.Keyword(null,"color","color",1108746965),crossviz.constants.planecolor], null));
crossviz.core.geom_vector_b = crossviz.geom.vector.call(null,crossviz.core.rp2_b);
crossviz.core.geom_vector_b_label = crossviz.geom.text.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(crossviz.core.rp2_b),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(crossviz.core.rp2_b),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(crossviz.core.rp2_b)], null),[cljs.core.str("("),cljs.core.str(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(crossviz.core.rp2_b)),cljs.core.str(","),cljs.core.str(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(crossviz.core.rp2_b)),cljs.core.str(","),cljs.core.str(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(crossviz.core.rp2_b)),cljs.core.str(")")].join(''));
crossviz.core.geom_point_ab = crossviz.geom.point.call(null,crossviz.core.rp2_ab);
crossviz.core.geom_point_ab_label = (function (){var p = crossviz.rp2.normalize.call(null,crossviz.core.rp2_ab);return crossviz.geom.text.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p),(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p) + 0.2),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p)], null),"?");
})();
crossviz.core.geom_vector_ab = crossviz.geom.vector.call(null,crossviz.core.rp2_ab);
crossviz.core.geom_vector_ab_label = crossviz.geom.text.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(crossviz.core.rp2_ab),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(crossviz.core.rp2_ab),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(crossviz.core.rp2_ab)], null),[cljs.core.str("a X b")].join(''));
crossviz.core.geom_3d_x_axis = crossviz.geom.segment3.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,0,0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1108746965),16711680,new cljs.core.Keyword(null,"linewidth","linewidth",3534637508),2], null));
crossviz.core.geom_3d_y_axis = crossviz.geom.segment3.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,2,0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1108746965),65280,new cljs.core.Keyword(null,"linewidth","linewidth",3534637508),2], null));
crossviz.core.geom_3d_z_axis = crossviz.geom.segment3.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,2], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1108746965),255,new cljs.core.Keyword(null,"linewidth","linewidth",3534637508),2], null));
crossviz.core.geom_z1_disc = crossviz.geom.zdisc.call(null,crossviz.core.disc_radius,crossviz.constants.z_disc_height,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1108746965),crossviz.constants.planecolor,new cljs.core.Keyword(null,"transparent","transparent",3582677188),true], null));
crossviz.core.steps = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crossviz.core.create_step = (function create_step(f){return cljs.core.swap_BANG_.call(null,crossviz.core.steps,(function (steps){return cljs.core.conj.call(null,steps,f);
}));
});
crossviz.core.takeStep = (function takeStep(){cljs.core.first.call(null,cljs.core.deref.call(null,crossviz.core.steps)).call(null);
return cljs.core.swap_BANG_.call(null,crossviz.core.steps,(function (steps){return cljs.core.rest.call(null,steps);
}));
});
crossviz.core.insert_geom.call(null,crossviz.core.geom_3d_x_axis);
crossviz.core.insert_geom.call(null,crossviz.core.geom_3d_y_axis);
crossviz.core.insert_geom.call(null,crossviz.core.geom_3d_z_axis);
crossviz.core.create_step.call(null,(function (){return crossviz.core.insert_geom.call(null,crossviz.core.geom_vector_v1);
}));
crossviz.core.create_step.call(null,(function (){return crossviz.core.insert_geom.call(null,crossviz.core.geom_vector_v2);
}));
crossviz.core.create_step.call(null,(function (){return crossviz.core.insert_geom.call(null,crossviz.core.geom_vector_v1v2);
}));
crossviz.core.create_step.call(null,(function (){crossviz.core.remove_geom.call(null,crossviz.core.geom_vector_v1);
crossviz.core.remove_geom.call(null,crossviz.core.geom_vector_v2);
crossviz.core.remove_geom.call(null,crossviz.core.geom_vector_v1v2);
crossviz.core.remove_geom.call(null,crossviz.core.geom_3d_x_axis);
crossviz.core.remove_geom.call(null,crossviz.core.geom_3d_y_axis);
return crossviz.core.remove_geom.call(null,crossviz.core.geom_3d_z_axis);
}));
crossviz.core.create_step.call(null,(function (){return crossviz.core.insert_geom.call(null,crossviz.core.geom_2d_axes);
}));
crossviz.core.insert_geom.call(null,crossviz.core.geom_3d_x_axis);
crossviz.core.insert_geom.call(null,crossviz.core.geom_3d_y_axis);
crossviz.core.insert_geom.call(null,crossviz.core.geom_3d_z_axis);
crossviz.core.create_step.call(null,(function (){crossviz.core.insert_geom.call(null,crossviz.core.geom_line_a);
return crossviz.core.insert_geom.call(null,crossviz.core.geom_line_a_label);
}));
crossviz.core.create_step.call(null,(function (){crossviz.core.insert_geom.call(null,crossviz.core.geom_line_b);
return crossviz.core.insert_geom.call(null,crossviz.core.geom_line_b_label);
}));
crossviz.core.create_step.call(null,(function (){crossviz.core.insert_geom.call(null,crossviz.core.geom_point_ab);
return crossviz.core.insert_geom.call(null,crossviz.core.geom_point_ab_label);
}));
crossviz.core.create_step.call(null,(function (){crossviz.core.insert_geom.call(null,crossviz.core.geom_3d_x_axis);
crossviz.core.insert_geom.call(null,crossviz.core.geom_3d_y_axis);
return crossviz.core.insert_geom.call(null,crossviz.core.geom_3d_z_axis);
}));
crossviz.core.create_step.call(null,(function (){return crossviz.core.insert_geom.call(null,crossviz.core.geom_z1_disc);
}));
crossviz.core.create_step.call(null,(function (){crossviz.core.remove_geom.call(null,crossviz.core.geom_point_ab);
crossviz.core.remove_geom.call(null,crossviz.core.geom_point_ab_label);
crossviz.core.remove_geom.call(null,crossviz.core.geom_line_b);
return crossviz.core.remove_geom.call(null,crossviz.core.geom_line_b_label);
}));
crossviz.core.create_step.call(null,(function (){return crossviz.core.insert_geom.call(null,crossviz.core.geom_plane_a);
}));
crossviz.core.create_step.call(null,(function (){crossviz.core.remove_geom.call(null,crossviz.core.geom_z1_disc);
return crossviz.core.remove_geom.call(null,crossviz.core.geom_2d_axes);
}));
crossviz.core.create_step.call(null,(function (){crossviz.core.insert_geom.call(null,crossviz.core.geom_vector_a);
return crossviz.core.insert_geom.call(null,crossviz.core.geom_vector_a_label);
}));
crossviz.core.create_step.call(null,(function (){crossviz.core.remove_geom.call(null,crossviz.core.geom_line_a_label);
crossviz.core.insert_geom.call(null,crossviz.core.geom_line_b);
return crossviz.core.insert_geom.call(null,crossviz.core.geom_line_b_label);
}));
crossviz.core.create_step.call(null,(function (){return crossviz.core.insert_geom.call(null,crossviz.core.geom_plane_b);
}));
crossviz.core.create_step.call(null,(function (){crossviz.core.insert_geom.call(null,crossviz.core.geom_vector_b);
return crossviz.core.insert_geom.call(null,crossviz.core.geom_vector_b_label);
}));
crossviz.core.create_step.call(null,(function (){crossviz.core.insert_geom.call(null,crossviz.core.geom_vector_ab);
return crossviz.core.insert_geom.call(null,crossviz.core.geom_vector_ab_label);
}));
crossviz.core.create_step.call(null,(function (){return crossviz.core.insert_geom.call(null,crossviz.core.geom_z1_disc);
}));

//# sourceMappingURL=core.js.map