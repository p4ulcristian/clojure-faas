goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__3037__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__3037 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3046__i = 0, G__3046__a = new Array(arguments.length -  0);
while (G__3046__i < G__3046__a.length) {G__3046__a[G__3046__i] = arguments[G__3046__i + 0]; ++G__3046__i;}
  args = new cljs.core.IndexedSeq(G__3046__a,0,null);
} 
return G__3037__delegate.call(this,args);};
G__3037.cljs$lang$maxFixedArity = 0;
G__3037.cljs$lang$applyTo = (function (arglist__3047){
var args = cljs.core.seq(arglist__3047);
return G__3037__delegate(args);
});
G__3037.cljs$core$IFn$_invoke$arity$variadic = G__3037__delegate;
return G__3037;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__3049__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__3049 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3053__i = 0, G__3053__a = new Array(arguments.length -  0);
while (G__3053__i < G__3053__a.length) {G__3053__a[G__3053__i] = arguments[G__3053__i + 0]; ++G__3053__i;}
  args = new cljs.core.IndexedSeq(G__3053__a,0,null);
} 
return G__3049__delegate.call(this,args);};
G__3049.cljs$lang$maxFixedArity = 0;
G__3049.cljs$lang$applyTo = (function (arglist__3058){
var args = cljs.core.seq(arglist__3058);
return G__3049__delegate(args);
});
G__3049.cljs$core$IFn$_invoke$arity$variadic = G__3049__delegate;
return G__3049;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
