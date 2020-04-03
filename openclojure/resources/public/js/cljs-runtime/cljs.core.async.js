goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__6758 = arguments.length;
switch (G__6758) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6759 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6759 = (function (f,blockable,meta6760){
this.f = f;
this.blockable = blockable;
this.meta6760 = meta6760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6761,meta6760__$1){
var self__ = this;
var _6761__$1 = this;
return (new cljs.core.async.t_cljs$core$async6759(self__.f,self__.blockable,meta6760__$1));
});

cljs.core.async.t_cljs$core$async6759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6761){
var self__ = this;
var _6761__$1 = this;
return self__.meta6760;
});

cljs.core.async.t_cljs$core$async6759.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6759.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async6759.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async6759.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async6759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta6760","meta6760",1405454872,null)], null);
});

cljs.core.async.t_cljs$core$async6759.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6759";

cljs.core.async.t_cljs$core$async6759.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async6759");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6759.
 */
cljs.core.async.__GT_t_cljs$core$async6759 = (function cljs$core$async$__GT_t_cljs$core$async6759(f__$1,blockable__$1,meta6760){
return (new cljs.core.async.t_cljs$core$async6759(f__$1,blockable__$1,meta6760));
});

}

return (new cljs.core.async.t_cljs$core$async6759(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__6765 = arguments.length;
switch (G__6765) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__6770 = arguments.length;
switch (G__6770) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__6776 = arguments.length;
switch (G__6776) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_9199 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_9199) : fn1.call(null,val_9199));
} else {
cljs.core.async.impl.dispatch.run(((function (val_9199,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_9199) : fn1.call(null,val_9199));
});})(val_9199,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__6785 = arguments.length;
switch (G__6785) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___9204 = n;
var x_9205 = (0);
while(true){
if((x_9205 < n__4607__auto___9204)){
(a[x_9205] = (0));

var G__9206 = (x_9205 + (1));
x_9205 = G__9206;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__9208 = (i + (1));
i = G__9208;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6790 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6790 = (function (flag,meta6791){
this.flag = flag;
this.meta6791 = meta6791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_6792,meta6791__$1){
var self__ = this;
var _6792__$1 = this;
return (new cljs.core.async.t_cljs$core$async6790(self__.flag,meta6791__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async6790.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_6792){
var self__ = this;
var _6792__$1 = this;
return self__.meta6791;
});})(flag))
;

cljs.core.async.t_cljs$core$async6790.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6790.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async6790.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async6790.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async6790.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta6791","meta6791",-617586463,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async6790.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6790";

cljs.core.async.t_cljs$core$async6790.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async6790");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6790.
 */
cljs.core.async.__GT_t_cljs$core$async6790 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async6790(flag__$1,meta6791){
return (new cljs.core.async.t_cljs$core$async6790(flag__$1,meta6791));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async6790(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6802 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6802 = (function (flag,cb,meta6803){
this.flag = flag;
this.cb = cb;
this.meta6803 = meta6803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6804,meta6803__$1){
var self__ = this;
var _6804__$1 = this;
return (new cljs.core.async.t_cljs$core$async6802(self__.flag,self__.cb,meta6803__$1));
});

cljs.core.async.t_cljs$core$async6802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6804){
var self__ = this;
var _6804__$1 = this;
return self__.meta6803;
});

cljs.core.async.t_cljs$core$async6802.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6802.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async6802.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async6802.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async6802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta6803","meta6803",-2093590481,null)], null);
});

cljs.core.async.t_cljs$core$async6802.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6802";

cljs.core.async.t_cljs$core$async6802.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async6802");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6802.
 */
cljs.core.async.__GT_t_cljs$core$async6802 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async6802(flag__$1,cb__$1,meta6803){
return (new cljs.core.async.t_cljs$core$async6802(flag__$1,cb__$1,meta6803));
});

}

return (new cljs.core.async.t_cljs$core$async6802(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__6810_SHARP_){
var G__6814 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6810_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__6814) : fret.call(null,G__6814));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__6811_SHARP_){
var G__6815 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6811_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__6815) : fret.call(null,G__6815));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9217 = (i + (1));
i = G__9217;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9218 = arguments.length;
var i__4731__auto___9219 = (0);
while(true){
if((i__4731__auto___9219 < len__4730__auto___9218)){
args__4736__auto__.push((arguments[i__4731__auto___9219]));

var G__9220 = (i__4731__auto___9219 + (1));
i__4731__auto___9219 = G__9220;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__6821){
var map__6822 = p__6821;
var map__6822__$1 = (((((!((map__6822 == null))))?(((((map__6822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6822):map__6822);
var opts = map__6822__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq6817){
var G__6818 = cljs.core.first(seq6817);
var seq6817__$1 = cljs.core.next(seq6817);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6818,seq6817__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__6828 = arguments.length;
switch (G__6828) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__6685__auto___9223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6685__auto___9223){
return (function (){
var f__6686__auto__ = (function (){var switch__6409__auto__ = ((function (c__6685__auto___9223){
return (function (state_6866){
var state_val_6867 = (state_6866[(1)]);
if((state_val_6867 === (7))){
var inst_6862 = (state_6866[(2)]);
var state_6866__$1 = state_6866;
var statearr_6873_9224 = state_6866__$1;
(statearr_6873_9224[(2)] = inst_6862);

(statearr_6873_9224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6867 === (1))){
var state_6866__$1 = state_6866;
var statearr_6874_9225 = state_6866__$1;
(statearr_6874_9225[(2)] = null);

(statearr_6874_9225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6867 === (4))){
var inst_6841 = (state_6866[(7)]);
var inst_6841__$1 = (state_6866[(2)]);
var inst_6844 = (inst_6841__$1 == null);
var state_6866__$1 = (function (){var statearr_6875 = state_6866;
(statearr_6875[(7)] = inst_6841__$1);

return statearr_6875;
})();
if(cljs.core.truth_(inst_6844)){
var statearr_6876_9226 = state_6866__$1;
(statearr_6876_9226[(1)] = (5));

} else {
var statearr_6878_9227 = state_6866__$1;
(statearr_6878_9227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6867 === (13))){
var state_6866__$1 = state_6866;
var statearr_6880_9228 = state_6866__$1;
(statearr_6880_9228[(2)] = null);

(statearr_6880_9228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6867 === (6))){
var inst_6841 = (state_6866[(7)]);
var state_6866__$1 = state_6866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6866__$1,(11),to,inst_6841);
} else {
if((state_val_6867 === (3))){
var inst_6864 = (state_6866[(2)]);
var state_6866__$1 = state_6866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6866__$1,inst_6864);
} else {
if((state_val_6867 === (12))){
var state_6866__$1 = state_6866;
var statearr_6881_9232 = state_6866__$1;
(statearr_6881_9232[(2)] = null);

(statearr_6881_9232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6867 === (2))){
var state_6866__$1 = state_6866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6866__$1,(4),from);
} else {
if((state_val_6867 === (11))){
var inst_6855 = (state_6866[(2)]);
var state_6866__$1 = state_6866;
if(cljs.core.truth_(inst_6855)){
var statearr_6882_9237 = state_6866__$1;
(statearr_6882_9237[(1)] = (12));

} else {
var statearr_6883_9238 = state_6866__$1;
(statearr_6883_9238[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6867 === (9))){
var state_6866__$1 = state_6866;
var statearr_6885_9240 = state_6866__$1;
(statearr_6885_9240[(2)] = null);

(statearr_6885_9240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6867 === (5))){
var state_6866__$1 = state_6866;
if(cljs.core.truth_(close_QMARK_)){
var statearr_6886_9241 = state_6866__$1;
(statearr_6886_9241[(1)] = (8));

} else {
var statearr_6888_9242 = state_6866__$1;
(statearr_6888_9242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6867 === (14))){
var inst_6860 = (state_6866[(2)]);
var state_6866__$1 = state_6866;
var statearr_6889_9243 = state_6866__$1;
(statearr_6889_9243[(2)] = inst_6860);

(statearr_6889_9243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6867 === (10))){
var inst_6851 = (state_6866[(2)]);
var state_6866__$1 = state_6866;
var statearr_6890_9244 = state_6866__$1;
(statearr_6890_9244[(2)] = inst_6851);

(statearr_6890_9244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6867 === (8))){
var inst_6847 = cljs.core.async.close_BANG_(to);
var state_6866__$1 = state_6866;
var statearr_6891_9248 = state_6866__$1;
(statearr_6891_9248[(2)] = inst_6847);

(statearr_6891_9248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6685__auto___9223))
;
return ((function (switch__6409__auto__,c__6685__auto___9223){
return (function() {
var cljs$core$async$state_machine__6410__auto__ = null;
var cljs$core$async$state_machine__6410__auto____0 = (function (){
var statearr_6892 = [null,null,null,null,null,null,null,null];
(statearr_6892[(0)] = cljs$core$async$state_machine__6410__auto__);

(statearr_6892[(1)] = (1));

return statearr_6892;
});
var cljs$core$async$state_machine__6410__auto____1 = (function (state_6866){
while(true){
var ret_value__6411__auto__ = (function (){try{while(true){
var result__6412__auto__ = switch__6409__auto__(state_6866);
if(cljs.core.keyword_identical_QMARK_(result__6412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6412__auto__;
}
break;
}
}catch (e6893){if((e6893 instanceof Object)){
var ex__6413__auto__ = e6893;
var statearr_6894_9249 = state_6866;
(statearr_6894_9249[(5)] = ex__6413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_6866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6893;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9250 = state_6866;
state_6866 = G__9250;
continue;
} else {
return ret_value__6411__auto__;
}
break;
}
});
cljs$core$async$state_machine__6410__auto__ = function(state_6866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6410__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6410__auto____1.call(this,state_6866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6410__auto____0;
cljs$core$async$state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6410__auto____1;
return cljs$core$async$state_machine__6410__auto__;
})()
;})(switch__6409__auto__,c__6685__auto___9223))
})();
var state__6687__auto__ = (function (){var statearr_6895 = (f__6686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6686__auto__.cljs$core$IFn$_invoke$arity$0() : f__6686__auto__.call(null));
(statearr_6895[(6)] = c__6685__auto___9223);

return statearr_6895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6687__auto__);
});})(c__6685__auto___9223))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__6899){
var vec__6900 = p__6899;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6900,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6900,(1),null);
var job = vec__6900;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__6685__auto___9253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6685__auto___9253,res,vec__6900,v,p,job,jobs,results){
return (function (){
var f__6686__auto__ = (function (){var switch__6409__auto__ = ((function (c__6685__auto___9253,res,vec__6900,v,p,job,jobs,results){
return (function (state_6907){
var state_val_6908 = (state_6907[(1)]);
if((state_val_6908 === (1))){
var state_6907__$1 = state_6907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6907__$1,(2),res,v);
} else {
if((state_val_6908 === (2))){
var inst_6904 = (state_6907[(2)]);
var inst_6905 = cljs.core.async.close_BANG_(res);
var state_6907__$1 = (function (){var statearr_6909 = state_6907;
(statearr_6909[(7)] = inst_6904);

return statearr_6909;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_6907__$1,inst_6905);
} else {
return null;
}
}
});})(c__6685__auto___9253,res,vec__6900,v,p,job,jobs,results))
;
return ((function (switch__6409__auto__,c__6685__auto___9253,res,vec__6900,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____0 = (function (){
var statearr_6914 = [null,null,null,null,null,null,null,null];
(statearr_6914[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__);

(statearr_6914[(1)] = (1));

return statearr_6914;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____1 = (function (state_6907){
while(true){
var ret_value__6411__auto__ = (function (){try{while(true){
var result__6412__auto__ = switch__6409__auto__(state_6907);
if(cljs.core.keyword_identical_QMARK_(result__6412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6412__auto__;
}
break;
}
}catch (e6915){if((e6915 instanceof Object)){
var ex__6413__auto__ = e6915;
var statearr_6920_9258 = state_6907;
(statearr_6920_9258[(5)] = ex__6413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_6907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6915;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9259 = state_6907;
state_6907 = G__9259;
continue;
} else {
return ret_value__6411__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__ = function(state_6907){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____1.call(this,state_6907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__;
})()
;})(switch__6409__auto__,c__6685__auto___9253,res,vec__6900,v,p,job,jobs,results))
})();
var state__6687__auto__ = (function (){var statearr_6929 = (f__6686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6686__auto__.cljs$core$IFn$_invoke$arity$0() : f__6686__auto__.call(null));
(statearr_6929[(6)] = c__6685__auto___9253);

return statearr_6929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6687__auto__);
});})(c__6685__auto___9253,res,vec__6900,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__6933){
var vec__6934 = p__6933;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6934,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6934,(1),null);
var job = vec__6934;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___9260 = n;
var __9261 = (0);
while(true){
if((__9261 < n__4607__auto___9260)){
var G__6942_9262 = type;
var G__6942_9263__$1 = (((G__6942_9262 instanceof cljs.core.Keyword))?G__6942_9262.fqn:null);
switch (G__6942_9263__$1) {
case "compute":
var c__6685__auto___9265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__9261,c__6685__auto___9265,G__6942_9262,G__6942_9263__$1,n__4607__auto___9260,jobs,results,process,async){
return (function (){
var f__6686__auto__ = (function (){var switch__6409__auto__ = ((function (__9261,c__6685__auto___9265,G__6942_9262,G__6942_9263__$1,n__4607__auto___9260,jobs,results,process,async){
return (function (state_6959){
var state_val_6960 = (state_6959[(1)]);
if((state_val_6960 === (1))){
var state_6959__$1 = state_6959;
var statearr_6961_9266 = state_6959__$1;
(statearr_6961_9266[(2)] = null);

(statearr_6961_9266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6960 === (2))){
var state_6959__$1 = state_6959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6959__$1,(4),jobs);
} else {
if((state_val_6960 === (3))){
var inst_6957 = (state_6959[(2)]);
var state_6959__$1 = state_6959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6959__$1,inst_6957);
} else {
if((state_val_6960 === (4))){
var inst_6949 = (state_6959[(2)]);
var inst_6950 = process(inst_6949);
var state_6959__$1 = state_6959;
if(cljs.core.truth_(inst_6950)){
var statearr_6966_9267 = state_6959__$1;
(statearr_6966_9267[(1)] = (5));

} else {
var statearr_6967_9268 = state_6959__$1;
(statearr_6967_9268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6960 === (5))){
var state_6959__$1 = state_6959;
var statearr_6971_9269 = state_6959__$1;
(statearr_6971_9269[(2)] = null);

(statearr_6971_9269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6960 === (6))){
var state_6959__$1 = state_6959;
var statearr_6972_9270 = state_6959__$1;
(statearr_6972_9270[(2)] = null);

(statearr_6972_9270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6960 === (7))){
var inst_6955 = (state_6959[(2)]);
var state_6959__$1 = state_6959;
var statearr_6973_9272 = state_6959__$1;
(statearr_6973_9272[(2)] = inst_6955);

(statearr_6973_9272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__9261,c__6685__auto___9265,G__6942_9262,G__6942_9263__$1,n__4607__auto___9260,jobs,results,process,async))
;
return ((function (__9261,switch__6409__auto__,c__6685__auto___9265,G__6942_9262,G__6942_9263__$1,n__4607__auto___9260,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____0 = (function (){
var statearr_6974 = [null,null,null,null,null,null,null];
(statearr_6974[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__);

(statearr_6974[(1)] = (1));

return statearr_6974;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____1 = (function (state_6959){
while(true){
var ret_value__6411__auto__ = (function (){try{while(true){
var result__6412__auto__ = switch__6409__auto__(state_6959);
if(cljs.core.keyword_identical_QMARK_(result__6412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6412__auto__;
}
break;
}
}catch (e6975){if((e6975 instanceof Object)){
var ex__6413__auto__ = e6975;
var statearr_6976_9273 = state_6959;
(statearr_6976_9273[(5)] = ex__6413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_6959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6975;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9274 = state_6959;
state_6959 = G__9274;
continue;
} else {
return ret_value__6411__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__ = function(state_6959){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____1.call(this,state_6959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__;
})()
;})(__9261,switch__6409__auto__,c__6685__auto___9265,G__6942_9262,G__6942_9263__$1,n__4607__auto___9260,jobs,results,process,async))
})();
var state__6687__auto__ = (function (){var statearr_6981 = (f__6686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6686__auto__.cljs$core$IFn$_invoke$arity$0() : f__6686__auto__.call(null));
(statearr_6981[(6)] = c__6685__auto___9265);

return statearr_6981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6687__auto__);
});})(__9261,c__6685__auto___9265,G__6942_9262,G__6942_9263__$1,n__4607__auto___9260,jobs,results,process,async))
);


break;
case "async":
var c__6685__auto___9275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__9261,c__6685__auto___9275,G__6942_9262,G__6942_9263__$1,n__4607__auto___9260,jobs,results,process,async){
return (function (){
var f__6686__auto__ = (function (){var switch__6409__auto__ = ((function (__9261,c__6685__auto___9275,G__6942_9262,G__6942_9263__$1,n__4607__auto___9260,jobs,results,process,async){
return (function (state_6994){
var state_val_6995 = (state_6994[(1)]);
if((state_val_6995 === (1))){
var state_6994__$1 = state_6994;
var statearr_6998_9276 = state_6994__$1;
(statearr_6998_9276[(2)] = null);

(statearr_6998_9276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6995 === (2))){
var state_6994__$1 = state_6994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6994__$1,(4),jobs);
} else {
if((state_val_6995 === (3))){
var inst_6992 = (state_6994[(2)]);
var state_6994__$1 = state_6994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6994__$1,inst_6992);
} else {
if((state_val_6995 === (4))){
var inst_6984 = (state_6994[(2)]);
var inst_6985 = async(inst_6984);
var state_6994__$1 = state_6994;
if(cljs.core.truth_(inst_6985)){
var statearr_7000_9278 = state_6994__$1;
(statearr_7000_9278[(1)] = (5));

} else {
var statearr_7001_9279 = state_6994__$1;
(statearr_7001_9279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6995 === (5))){
var state_6994__$1 = state_6994;
var statearr_7004_9280 = state_6994__$1;
(statearr_7004_9280[(2)] = null);

(statearr_7004_9280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6995 === (6))){
var state_6994__$1 = state_6994;
var statearr_7007_9281 = state_6994__$1;
(statearr_7007_9281[(2)] = null);

(statearr_7007_9281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6995 === (7))){
var inst_6990 = (state_6994[(2)]);
var state_6994__$1 = state_6994;
var statearr_7010_9286 = state_6994__$1;
(statearr_7010_9286[(2)] = inst_6990);

(statearr_7010_9286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__9261,c__6685__auto___9275,G__6942_9262,G__6942_9263__$1,n__4607__auto___9260,jobs,results,process,async))
;
return ((function (__9261,switch__6409__auto__,c__6685__auto___9275,G__6942_9262,G__6942_9263__$1,n__4607__auto___9260,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____0 = (function (){
var statearr_7011 = [null,null,null,null,null,null,null];
(statearr_7011[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__);

(statearr_7011[(1)] = (1));

return statearr_7011;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____1 = (function (state_6994){
while(true){
var ret_value__6411__auto__ = (function (){try{while(true){
var result__6412__auto__ = switch__6409__auto__(state_6994);
if(cljs.core.keyword_identical_QMARK_(result__6412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6412__auto__;
}
break;
}
}catch (e7012){if((e7012 instanceof Object)){
var ex__6413__auto__ = e7012;
var statearr_7014_9292 = state_6994;
(statearr_7014_9292[(5)] = ex__6413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_6994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7012;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9295 = state_6994;
state_6994 = G__9295;
continue;
} else {
return ret_value__6411__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__ = function(state_6994){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____1.call(this,state_6994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__;
})()
;})(__9261,switch__6409__auto__,c__6685__auto___9275,G__6942_9262,G__6942_9263__$1,n__4607__auto___9260,jobs,results,process,async))
})();
var state__6687__auto__ = (function (){var statearr_7017 = (f__6686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6686__auto__.cljs$core$IFn$_invoke$arity$0() : f__6686__auto__.call(null));
(statearr_7017[(6)] = c__6685__auto___9275);

return statearr_7017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6687__auto__);
});})(__9261,c__6685__auto___9275,G__6942_9262,G__6942_9263__$1,n__4607__auto___9260,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6942_9263__$1)].join('')));

}

var G__9297 = (__9261 + (1));
__9261 = G__9297;
continue;
} else {
}
break;
}

var c__6685__auto___9298 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6685__auto___9298,jobs,results,process,async){
return (function (){
var f__6686__auto__ = (function (){var switch__6409__auto__ = ((function (c__6685__auto___9298,jobs,results,process,async){
return (function (state_7055){
var state_val_7056 = (state_7055[(1)]);
if((state_val_7056 === (7))){
var inst_7050 = (state_7055[(2)]);
var state_7055__$1 = state_7055;
var statearr_7065_9299 = state_7055__$1;
(statearr_7065_9299[(2)] = inst_7050);

(statearr_7065_9299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7056 === (1))){
var state_7055__$1 = state_7055;
var statearr_7066_9300 = state_7055__$1;
(statearr_7066_9300[(2)] = null);

(statearr_7066_9300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7056 === (4))){
var inst_7028 = (state_7055[(7)]);
var inst_7028__$1 = (state_7055[(2)]);
var inst_7030 = (inst_7028__$1 == null);
var state_7055__$1 = (function (){var statearr_7067 = state_7055;
(statearr_7067[(7)] = inst_7028__$1);

return statearr_7067;
})();
if(cljs.core.truth_(inst_7030)){
var statearr_7068_9301 = state_7055__$1;
(statearr_7068_9301[(1)] = (5));

} else {
var statearr_7069_9302 = state_7055__$1;
(statearr_7069_9302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7056 === (6))){
var inst_7037 = (state_7055[(8)]);
var inst_7028 = (state_7055[(7)]);
var inst_7037__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_7039 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7042 = [inst_7028,inst_7037__$1];
var inst_7043 = (new cljs.core.PersistentVector(null,2,(5),inst_7039,inst_7042,null));
var state_7055__$1 = (function (){var statearr_7072 = state_7055;
(statearr_7072[(8)] = inst_7037__$1);

return statearr_7072;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7055__$1,(8),jobs,inst_7043);
} else {
if((state_val_7056 === (3))){
var inst_7052 = (state_7055[(2)]);
var state_7055__$1 = state_7055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7055__$1,inst_7052);
} else {
if((state_val_7056 === (2))){
var state_7055__$1 = state_7055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7055__$1,(4),from);
} else {
if((state_val_7056 === (9))){
var inst_7047 = (state_7055[(2)]);
var state_7055__$1 = (function (){var statearr_7077 = state_7055;
(statearr_7077[(9)] = inst_7047);

return statearr_7077;
})();
var statearr_7078_9303 = state_7055__$1;
(statearr_7078_9303[(2)] = null);

(statearr_7078_9303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7056 === (5))){
var inst_7032 = cljs.core.async.close_BANG_(jobs);
var state_7055__$1 = state_7055;
var statearr_7079_9304 = state_7055__$1;
(statearr_7079_9304[(2)] = inst_7032);

(statearr_7079_9304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7056 === (8))){
var inst_7037 = (state_7055[(8)]);
var inst_7045 = (state_7055[(2)]);
var state_7055__$1 = (function (){var statearr_7080 = state_7055;
(statearr_7080[(10)] = inst_7045);

return statearr_7080;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7055__$1,(9),results,inst_7037);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__6685__auto___9298,jobs,results,process,async))
;
return ((function (switch__6409__auto__,c__6685__auto___9298,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____0 = (function (){
var statearr_7081 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7081[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__);

(statearr_7081[(1)] = (1));

return statearr_7081;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____1 = (function (state_7055){
while(true){
var ret_value__6411__auto__ = (function (){try{while(true){
var result__6412__auto__ = switch__6409__auto__(state_7055);
if(cljs.core.keyword_identical_QMARK_(result__6412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6412__auto__;
}
break;
}
}catch (e7083){if((e7083 instanceof Object)){
var ex__6413__auto__ = e7083;
var statearr_7084_9305 = state_7055;
(statearr_7084_9305[(5)] = ex__6413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7083;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9306 = state_7055;
state_7055 = G__9306;
continue;
} else {
return ret_value__6411__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__ = function(state_7055){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____1.call(this,state_7055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__;
})()
;})(switch__6409__auto__,c__6685__auto___9298,jobs,results,process,async))
})();
var state__6687__auto__ = (function (){var statearr_7086 = (f__6686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6686__auto__.cljs$core$IFn$_invoke$arity$0() : f__6686__auto__.call(null));
(statearr_7086[(6)] = c__6685__auto___9298);

return statearr_7086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6687__auto__);
});})(c__6685__auto___9298,jobs,results,process,async))
);


var c__6685__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6685__auto__,jobs,results,process,async){
return (function (){
var f__6686__auto__ = (function (){var switch__6409__auto__ = ((function (c__6685__auto__,jobs,results,process,async){
return (function (state_7129){
var state_val_7130 = (state_7129[(1)]);
if((state_val_7130 === (7))){
var inst_7125 = (state_7129[(2)]);
var state_7129__$1 = state_7129;
var statearr_7134_9307 = state_7129__$1;
(statearr_7134_9307[(2)] = inst_7125);

(statearr_7134_9307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (20))){
var state_7129__$1 = state_7129;
var statearr_7136_9308 = state_7129__$1;
(statearr_7136_9308[(2)] = null);

(statearr_7136_9308[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (1))){
var state_7129__$1 = state_7129;
var statearr_7137_9309 = state_7129__$1;
(statearr_7137_9309[(2)] = null);

(statearr_7137_9309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (4))){
var inst_7089 = (state_7129[(7)]);
var inst_7089__$1 = (state_7129[(2)]);
var inst_7090 = (inst_7089__$1 == null);
var state_7129__$1 = (function (){var statearr_7138 = state_7129;
(statearr_7138[(7)] = inst_7089__$1);

return statearr_7138;
})();
if(cljs.core.truth_(inst_7090)){
var statearr_7141_9310 = state_7129__$1;
(statearr_7141_9310[(1)] = (5));

} else {
var statearr_7142_9311 = state_7129__$1;
(statearr_7142_9311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (15))){
var inst_7105 = (state_7129[(8)]);
var state_7129__$1 = state_7129;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7129__$1,(18),to,inst_7105);
} else {
if((state_val_7130 === (21))){
var inst_7120 = (state_7129[(2)]);
var state_7129__$1 = state_7129;
var statearr_7144_9312 = state_7129__$1;
(statearr_7144_9312[(2)] = inst_7120);

(statearr_7144_9312[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (13))){
var inst_7122 = (state_7129[(2)]);
var state_7129__$1 = (function (){var statearr_7145 = state_7129;
(statearr_7145[(9)] = inst_7122);

return statearr_7145;
})();
var statearr_7146_9313 = state_7129__$1;
(statearr_7146_9313[(2)] = null);

(statearr_7146_9313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (6))){
var inst_7089 = (state_7129[(7)]);
var state_7129__$1 = state_7129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7129__$1,(11),inst_7089);
} else {
if((state_val_7130 === (17))){
var inst_7115 = (state_7129[(2)]);
var state_7129__$1 = state_7129;
if(cljs.core.truth_(inst_7115)){
var statearr_7147_9314 = state_7129__$1;
(statearr_7147_9314[(1)] = (19));

} else {
var statearr_7150_9315 = state_7129__$1;
(statearr_7150_9315[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (3))){
var inst_7127 = (state_7129[(2)]);
var state_7129__$1 = state_7129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7129__$1,inst_7127);
} else {
if((state_val_7130 === (12))){
var inst_7102 = (state_7129[(10)]);
var state_7129__$1 = state_7129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7129__$1,(14),inst_7102);
} else {
if((state_val_7130 === (2))){
var state_7129__$1 = state_7129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7129__$1,(4),results);
} else {
if((state_val_7130 === (19))){
var state_7129__$1 = state_7129;
var statearr_7151_9316 = state_7129__$1;
(statearr_7151_9316[(2)] = null);

(statearr_7151_9316[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (11))){
var inst_7102 = (state_7129[(2)]);
var state_7129__$1 = (function (){var statearr_7153 = state_7129;
(statearr_7153[(10)] = inst_7102);

return statearr_7153;
})();
var statearr_7154_9317 = state_7129__$1;
(statearr_7154_9317[(2)] = null);

(statearr_7154_9317[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (9))){
var state_7129__$1 = state_7129;
var statearr_7155_9318 = state_7129__$1;
(statearr_7155_9318[(2)] = null);

(statearr_7155_9318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (5))){
var state_7129__$1 = state_7129;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7156_9319 = state_7129__$1;
(statearr_7156_9319[(1)] = (8));

} else {
var statearr_7157_9320 = state_7129__$1;
(statearr_7157_9320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (14))){
var inst_7109 = (state_7129[(11)]);
var inst_7105 = (state_7129[(8)]);
var inst_7105__$1 = (state_7129[(2)]);
var inst_7108 = (inst_7105__$1 == null);
var inst_7109__$1 = cljs.core.not(inst_7108);
var state_7129__$1 = (function (){var statearr_7158 = state_7129;
(statearr_7158[(11)] = inst_7109__$1);

(statearr_7158[(8)] = inst_7105__$1);

return statearr_7158;
})();
if(inst_7109__$1){
var statearr_7159_9321 = state_7129__$1;
(statearr_7159_9321[(1)] = (15));

} else {
var statearr_7160_9322 = state_7129__$1;
(statearr_7160_9322[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (16))){
var inst_7109 = (state_7129[(11)]);
var state_7129__$1 = state_7129;
var statearr_7161_9323 = state_7129__$1;
(statearr_7161_9323[(2)] = inst_7109);

(statearr_7161_9323[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (10))){
var inst_7099 = (state_7129[(2)]);
var state_7129__$1 = state_7129;
var statearr_7162_9324 = state_7129__$1;
(statearr_7162_9324[(2)] = inst_7099);

(statearr_7162_9324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (18))){
var inst_7112 = (state_7129[(2)]);
var state_7129__$1 = state_7129;
var statearr_7163_9325 = state_7129__$1;
(statearr_7163_9325[(2)] = inst_7112);

(statearr_7163_9325[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7130 === (8))){
var inst_7093 = cljs.core.async.close_BANG_(to);
var state_7129__$1 = state_7129;
var statearr_7164_9326 = state_7129__$1;
(statearr_7164_9326[(2)] = inst_7093);

(statearr_7164_9326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6685__auto__,jobs,results,process,async))
;
return ((function (switch__6409__auto__,c__6685__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____0 = (function (){
var statearr_7165 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7165[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__);

(statearr_7165[(1)] = (1));

return statearr_7165;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____1 = (function (state_7129){
while(true){
var ret_value__6411__auto__ = (function (){try{while(true){
var result__6412__auto__ = switch__6409__auto__(state_7129);
if(cljs.core.keyword_identical_QMARK_(result__6412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6412__auto__;
}
break;
}
}catch (e7166){if((e7166 instanceof Object)){
var ex__6413__auto__ = e7166;
var statearr_7167_9327 = state_7129;
(statearr_7167_9327[(5)] = ex__6413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7166;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9328 = state_7129;
state_7129 = G__9328;
continue;
} else {
return ret_value__6411__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__ = function(state_7129){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____1.call(this,state_7129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6410__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6410__auto__;
})()
;})(switch__6409__auto__,c__6685__auto__,jobs,results,process,async))
})();
var state__6687__auto__ = (function (){var statearr_7171 = (f__6686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6686__auto__.cljs$core$IFn$_invoke$arity$0() : f__6686__auto__.call(null));
(statearr_7171[(6)] = c__6685__auto__);

return statearr_7171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6687__auto__);
});})(c__6685__auto__,jobs,results,process,async))
);

return c__6685__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__7177 = arguments.length;
switch (G__7177) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__7191 = arguments.length;
switch (G__7191) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__7199 = arguments.length;
switch (G__7199) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__6685__auto___9332 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6685__auto___9332,tc,fc){
return (function (){
var f__6686__auto__ = (function (){var switch__6409__auto__ = ((function (c__6685__auto___9332,tc,fc){
return (function (state_7234){
var state_val_7235 = (state_7234[(1)]);
if((state_val_7235 === (7))){
var inst_7230 = (state_7234[(2)]);
var state_7234__$1 = state_7234;
var statearr_7236_9333 = state_7234__$1;
(statearr_7236_9333[(2)] = inst_7230);

(statearr_7236_9333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7235 === (1))){
var state_7234__$1 = state_7234;
var statearr_7237_9334 = state_7234__$1;
(statearr_7237_9334[(2)] = null);

(statearr_7237_9334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7235 === (4))){
var inst_7206 = (state_7234[(7)]);
var inst_7206__$1 = (state_7234[(2)]);
var inst_7209 = (inst_7206__$1 == null);
var state_7234__$1 = (function (){var statearr_7238 = state_7234;
(statearr_7238[(7)] = inst_7206__$1);

return statearr_7238;
})();
if(cljs.core.truth_(inst_7209)){
var statearr_7239_9335 = state_7234__$1;
(statearr_7239_9335[(1)] = (5));

} else {
var statearr_7240_9336 = state_7234__$1;
(statearr_7240_9336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7235 === (13))){
var state_7234__$1 = state_7234;
var statearr_7241_9337 = state_7234__$1;
(statearr_7241_9337[(2)] = null);

(statearr_7241_9337[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7235 === (6))){
var inst_7206 = (state_7234[(7)]);
var inst_7215 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_7206) : p.call(null,inst_7206));
var state_7234__$1 = state_7234;
if(cljs.core.truth_(inst_7215)){
var statearr_7242_9338 = state_7234__$1;
(statearr_7242_9338[(1)] = (9));

} else {
var statearr_7243_9339 = state_7234__$1;
(statearr_7243_9339[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7235 === (3))){
var inst_7232 = (state_7234[(2)]);
var state_7234__$1 = state_7234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7234__$1,inst_7232);
} else {
if((state_val_7235 === (12))){
var state_7234__$1 = state_7234;
var statearr_7249_9340 = state_7234__$1;
(statearr_7249_9340[(2)] = null);

(statearr_7249_9340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7235 === (2))){
var state_7234__$1 = state_7234;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7234__$1,(4),ch);
} else {
if((state_val_7235 === (11))){
var inst_7206 = (state_7234[(7)]);
var inst_7219 = (state_7234[(2)]);
var state_7234__$1 = state_7234;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7234__$1,(8),inst_7219,inst_7206);
} else {
if((state_val_7235 === (9))){
var state_7234__$1 = state_7234;
var statearr_7250_9341 = state_7234__$1;
(statearr_7250_9341[(2)] = tc);

(statearr_7250_9341[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7235 === (5))){
var inst_7211 = cljs.core.async.close_BANG_(tc);
var inst_7213 = cljs.core.async.close_BANG_(fc);
var state_7234__$1 = (function (){var statearr_7251 = state_7234;
(statearr_7251[(8)] = inst_7211);

return statearr_7251;
})();
var statearr_7252_9342 = state_7234__$1;
(statearr_7252_9342[(2)] = inst_7213);

(statearr_7252_9342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7235 === (14))){
var inst_7228 = (state_7234[(2)]);
var state_7234__$1 = state_7234;
var statearr_7253_9343 = state_7234__$1;
(statearr_7253_9343[(2)] = inst_7228);

(statearr_7253_9343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7235 === (10))){
var state_7234__$1 = state_7234;
var statearr_7254_9344 = state_7234__$1;
(statearr_7254_9344[(2)] = fc);

(statearr_7254_9344[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7235 === (8))){
var inst_7221 = (state_7234[(2)]);
var state_7234__$1 = state_7234;
if(cljs.core.truth_(inst_7221)){
var statearr_7258_9345 = state_7234__$1;
(statearr_7258_9345[(1)] = (12));

} else {
var statearr_7262_9346 = state_7234__$1;
(statearr_7262_9346[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6685__auto___9332,tc,fc))
;
return ((function (switch__6409__auto__,c__6685__auto___9332,tc,fc){
return (function() {
var cljs$core$async$state_machine__6410__auto__ = null;
var cljs$core$async$state_machine__6410__auto____0 = (function (){
var statearr_7264 = [null,null,null,null,null,null,null,null,null];
(statearr_7264[(0)] = cljs$core$async$state_machine__6410__auto__);

(statearr_7264[(1)] = (1));

return statearr_7264;
});
var cljs$core$async$state_machine__6410__auto____1 = (function (state_7234){
while(true){
var ret_value__6411__auto__ = (function (){try{while(true){
var result__6412__auto__ = switch__6409__auto__(state_7234);
if(cljs.core.keyword_identical_QMARK_(result__6412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6412__auto__;
}
break;
}
}catch (e7266){if((e7266 instanceof Object)){
var ex__6413__auto__ = e7266;
var statearr_7267_9347 = state_7234;
(statearr_7267_9347[(5)] = ex__6413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7266;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9348 = state_7234;
state_7234 = G__9348;
continue;
} else {
return ret_value__6411__auto__;
}
break;
}
});
cljs$core$async$state_machine__6410__auto__ = function(state_7234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6410__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6410__auto____1.call(this,state_7234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6410__auto____0;
cljs$core$async$state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6410__auto____1;
return cljs$core$async$state_machine__6410__auto__;
})()
;})(switch__6409__auto__,c__6685__auto___9332,tc,fc))
})();
var state__6687__auto__ = (function (){var statearr_7268 = (f__6686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6686__auto__.cljs$core$IFn$_invoke$arity$0() : f__6686__auto__.call(null));
(statearr_7268[(6)] = c__6685__auto___9332);

return statearr_7268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6687__auto__);
});})(c__6685__auto___9332,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__6685__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6685__auto__){
return (function (){
var f__6686__auto__ = (function (){var switch__6409__auto__ = ((function (c__6685__auto__){
return (function (state_7289){
var state_val_7290 = (state_7289[(1)]);
if((state_val_7290 === (7))){
var inst_7285 = (state_7289[(2)]);
var state_7289__$1 = state_7289;
var statearr_7295_9349 = state_7289__$1;
(statearr_7295_9349[(2)] = inst_7285);

(statearr_7295_9349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7290 === (1))){
var inst_7269 = init;
var state_7289__$1 = (function (){var statearr_7296 = state_7289;
(statearr_7296[(7)] = inst_7269);

return statearr_7296;
})();
var statearr_7297_9350 = state_7289__$1;
(statearr_7297_9350[(2)] = null);

(statearr_7297_9350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7290 === (4))){
var inst_7272 = (state_7289[(8)]);
var inst_7272__$1 = (state_7289[(2)]);
var inst_7273 = (inst_7272__$1 == null);
var state_7289__$1 = (function (){var statearr_7298 = state_7289;
(statearr_7298[(8)] = inst_7272__$1);

return statearr_7298;
})();
if(cljs.core.truth_(inst_7273)){
var statearr_7299_9351 = state_7289__$1;
(statearr_7299_9351[(1)] = (5));

} else {
var statearr_7300_9352 = state_7289__$1;
(statearr_7300_9352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7290 === (6))){
var inst_7269 = (state_7289[(7)]);
var inst_7272 = (state_7289[(8)]);
var inst_7276 = (state_7289[(9)]);
var inst_7276__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_7269,inst_7272) : f.call(null,inst_7269,inst_7272));
var inst_7277 = cljs.core.reduced_QMARK_(inst_7276__$1);
var state_7289__$1 = (function (){var statearr_7301 = state_7289;
(statearr_7301[(9)] = inst_7276__$1);

return statearr_7301;
})();
if(inst_7277){
var statearr_7302_9353 = state_7289__$1;
(statearr_7302_9353[(1)] = (8));

} else {
var statearr_7303_9354 = state_7289__$1;
(statearr_7303_9354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7290 === (3))){
var inst_7287 = (state_7289[(2)]);
var state_7289__$1 = state_7289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7289__$1,inst_7287);
} else {
if((state_val_7290 === (2))){
var state_7289__$1 = state_7289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7289__$1,(4),ch);
} else {
if((state_val_7290 === (9))){
var inst_7276 = (state_7289[(9)]);
var inst_7269 = inst_7276;
var state_7289__$1 = (function (){var statearr_7304 = state_7289;
(statearr_7304[(7)] = inst_7269);

return statearr_7304;
})();
var statearr_7305_9355 = state_7289__$1;
(statearr_7305_9355[(2)] = null);

(statearr_7305_9355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7290 === (5))){
var inst_7269 = (state_7289[(7)]);
var state_7289__$1 = state_7289;
var statearr_7306_9356 = state_7289__$1;
(statearr_7306_9356[(2)] = inst_7269);

(statearr_7306_9356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7290 === (10))){
var inst_7283 = (state_7289[(2)]);
var state_7289__$1 = state_7289;
var statearr_7307_9357 = state_7289__$1;
(statearr_7307_9357[(2)] = inst_7283);

(statearr_7307_9357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7290 === (8))){
var inst_7276 = (state_7289[(9)]);
var inst_7279 = cljs.core.deref(inst_7276);
var state_7289__$1 = state_7289;
var statearr_7308_9358 = state_7289__$1;
(statearr_7308_9358[(2)] = inst_7279);

(statearr_7308_9358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__6685__auto__))
;
return ((function (switch__6409__auto__,c__6685__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6410__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6410__auto____0 = (function (){
var statearr_7309 = [null,null,null,null,null,null,null,null,null,null];
(statearr_7309[(0)] = cljs$core$async$reduce_$_state_machine__6410__auto__);

(statearr_7309[(1)] = (1));

return statearr_7309;
});
var cljs$core$async$reduce_$_state_machine__6410__auto____1 = (function (state_7289){
while(true){
var ret_value__6411__auto__ = (function (){try{while(true){
var result__6412__auto__ = switch__6409__auto__(state_7289);
if(cljs.core.keyword_identical_QMARK_(result__6412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6412__auto__;
}
break;
}
}catch (e7311){if((e7311 instanceof Object)){
var ex__6413__auto__ = e7311;
var statearr_7312_9359 = state_7289;
(statearr_7312_9359[(5)] = ex__6413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7311;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9360 = state_7289;
state_7289 = G__9360;
continue;
} else {
return ret_value__6411__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6410__auto__ = function(state_7289){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6410__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6410__auto____1.call(this,state_7289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6410__auto____0;
cljs$core$async$reduce_$_state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6410__auto____1;
return cljs$core$async$reduce_$_state_machine__6410__auto__;
})()
;})(switch__6409__auto__,c__6685__auto__))
})();
var state__6687__auto__ = (function (){var statearr_7313 = (f__6686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6686__auto__.cljs$core$IFn$_invoke$arity$0() : f__6686__auto__.call(null));
(statearr_7313[(6)] = c__6685__auto__);

return statearr_7313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6687__auto__);
});})(c__6685__auto__))
);

return c__6685__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__6685__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6685__auto__,f__$1){
return (function (){
var f__6686__auto__ = (function (){var switch__6409__auto__ = ((function (c__6685__auto__,f__$1){
return (function (state_7319){
var state_val_7320 = (state_7319[(1)]);
if((state_val_7320 === (1))){
var inst_7314 = cljs.core.async.reduce(f__$1,init,ch);
var state_7319__$1 = state_7319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7319__$1,(2),inst_7314);
} else {
if((state_val_7320 === (2))){
var inst_7316 = (state_7319[(2)]);
var inst_7317 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_7316) : f__$1.call(null,inst_7316));
var state_7319__$1 = state_7319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7319__$1,inst_7317);
} else {
return null;
}
}
});})(c__6685__auto__,f__$1))
;
return ((function (switch__6409__auto__,c__6685__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__6410__auto__ = null;
var cljs$core$async$transduce_$_state_machine__6410__auto____0 = (function (){
var statearr_7326 = [null,null,null,null,null,null,null];
(statearr_7326[(0)] = cljs$core$async$transduce_$_state_machine__6410__auto__);

(statearr_7326[(1)] = (1));

return statearr_7326;
});
var cljs$core$async$transduce_$_state_machine__6410__auto____1 = (function (state_7319){
while(true){
var ret_value__6411__auto__ = (function (){try{while(true){
var result__6412__auto__ = switch__6409__auto__(state_7319);
if(cljs.core.keyword_identical_QMARK_(result__6412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6412__auto__;
}
break;
}
}catch (e7327){if((e7327 instanceof Object)){
var ex__6413__auto__ = e7327;
var statearr_7328_9361 = state_7319;
(statearr_7328_9361[(5)] = ex__6413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9362 = state_7319;
state_7319 = G__9362;
continue;
} else {
return ret_value__6411__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__6410__auto__ = function(state_7319){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__6410__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__6410__auto____1.call(this,state_7319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__6410__auto____0;
cljs$core$async$transduce_$_state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__6410__auto____1;
return cljs$core$async$transduce_$_state_machine__6410__auto__;
})()
;})(switch__6409__auto__,c__6685__auto__,f__$1))
})();
var state__6687__auto__ = (function (){var statearr_7329 = (f__6686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6686__auto__.cljs$core$IFn$_invoke$arity$0() : f__6686__auto__.call(null));
(statearr_7329[(6)] = c__6685__auto__);

return statearr_7329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6687__auto__);
});})(c__6685__auto__,f__$1))
);

return c__6685__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__7337 = arguments.length;
switch (G__7337) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__6685__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6685__auto__){
return (function (){
var f__6686__auto__ = (function (){var switch__6409__auto__ = ((function (c__6685__auto__){
return (function (state_7369){
var state_val_7370 = (state_7369[(1)]);
if((state_val_7370 === (7))){
var inst_7351 = (state_7369[(2)]);
var state_7369__$1 = state_7369;
var statearr_7371_9364 = state_7369__$1;
(statearr_7371_9364[(2)] = inst_7351);

(statearr_7371_9364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7370 === (1))){
var inst_7345 = cljs.core.seq(coll);
var inst_7346 = inst_7345;
var state_7369__$1 = (function (){var statearr_7378 = state_7369;
(statearr_7378[(7)] = inst_7346);

return statearr_7378;
})();
var statearr_7380_9365 = state_7369__$1;
(statearr_7380_9365[(2)] = null);

(statearr_7380_9365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7370 === (4))){
var inst_7346 = (state_7369[(7)]);
var inst_7349 = cljs.core.first(inst_7346);
var state_7369__$1 = state_7369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7369__$1,(7),ch,inst_7349);
} else {
if((state_val_7370 === (13))){
var inst_7363 = (state_7369[(2)]);
var state_7369__$1 = state_7369;
var statearr_7382_9366 = state_7369__$1;
(statearr_7382_9366[(2)] = inst_7363);

(statearr_7382_9366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7370 === (6))){
var inst_7354 = (state_7369[(2)]);
var state_7369__$1 = state_7369;
if(cljs.core.truth_(inst_7354)){
var statearr_7383_9367 = state_7369__$1;
(statearr_7383_9367[(1)] = (8));

} else {
var statearr_7384_9368 = state_7369__$1;
(statearr_7384_9368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7370 === (3))){
var inst_7367 = (state_7369[(2)]);
var state_7369__$1 = state_7369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7369__$1,inst_7367);
} else {
if((state_val_7370 === (12))){
var state_7369__$1 = state_7369;
var statearr_7385_9369 = state_7369__$1;
(statearr_7385_9369[(2)] = null);

(statearr_7385_9369[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7370 === (2))){
var inst_7346 = (state_7369[(7)]);
var state_7369__$1 = state_7369;
if(cljs.core.truth_(inst_7346)){
var statearr_7387_9370 = state_7369__$1;
(statearr_7387_9370[(1)] = (4));

} else {
var statearr_7388_9371 = state_7369__$1;
(statearr_7388_9371[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7370 === (11))){
var inst_7360 = cljs.core.async.close_BANG_(ch);
var state_7369__$1 = state_7369;
var statearr_7389_9372 = state_7369__$1;
(statearr_7389_9372[(2)] = inst_7360);

(statearr_7389_9372[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7370 === (9))){
var state_7369__$1 = state_7369;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7390_9373 = state_7369__$1;
(statearr_7390_9373[(1)] = (11));

} else {
var statearr_7391_9374 = state_7369__$1;
(statearr_7391_9374[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7370 === (5))){
var inst_7346 = (state_7369[(7)]);
var state_7369__$1 = state_7369;
var statearr_7393_9375 = state_7369__$1;
(statearr_7393_9375[(2)] = inst_7346);

(statearr_7393_9375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7370 === (10))){
var inst_7365 = (state_7369[(2)]);
var state_7369__$1 = state_7369;
var statearr_7394_9376 = state_7369__$1;
(statearr_7394_9376[(2)] = inst_7365);

(statearr_7394_9376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7370 === (8))){
var inst_7346 = (state_7369[(7)]);
var inst_7356 = cljs.core.next(inst_7346);
var inst_7346__$1 = inst_7356;
var state_7369__$1 = (function (){var statearr_7395 = state_7369;
(statearr_7395[(7)] = inst_7346__$1);

return statearr_7395;
})();
var statearr_7396_9378 = state_7369__$1;
(statearr_7396_9378[(2)] = null);

(statearr_7396_9378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6685__auto__))
;
return ((function (switch__6409__auto__,c__6685__auto__){
return (function() {
var cljs$core$async$state_machine__6410__auto__ = null;
var cljs$core$async$state_machine__6410__auto____0 = (function (){
var statearr_7398 = [null,null,null,null,null,null,null,null];
(statearr_7398[(0)] = cljs$core$async$state_machine__6410__auto__);

(statearr_7398[(1)] = (1));

return statearr_7398;
});
var cljs$core$async$state_machine__6410__auto____1 = (function (state_7369){
while(true){
var ret_value__6411__auto__ = (function (){try{while(true){
var result__6412__auto__ = switch__6409__auto__(state_7369);
if(cljs.core.keyword_identical_QMARK_(result__6412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6412__auto__;
}
break;
}
}catch (e7399){if((e7399 instanceof Object)){
var ex__6413__auto__ = e7399;
var statearr_7403_9379 = state_7369;
(statearr_7403_9379[(5)] = ex__6413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7399;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9380 = state_7369;
state_7369 = G__9380;
continue;
} else {
return ret_value__6411__auto__;
}
break;
}
});
cljs$core$async$state_machine__6410__auto__ = function(state_7369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6410__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6410__auto____1.call(this,state_7369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6410__auto____0;
cljs$core$async$state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6410__auto____1;
return cljs$core$async$state_machine__6410__auto__;
})()
;})(switch__6409__auto__,c__6685__auto__))
})();
var state__6687__auto__ = (function (){var statearr_7405 = (f__6686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6686__auto__.cljs$core$IFn$_invoke$arity$0() : f__6686__auto__.call(null));
(statearr_7405[(6)] = c__6685__auto__);

return statearr_7405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6687__auto__);
});})(c__6685__auto__))
);

return c__6685__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7426 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7426 = (function (ch,cs,meta7427){
this.ch = ch;
this.cs = cs;
this.meta7427 = meta7427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_7428,meta7427__$1){
var self__ = this;
var _7428__$1 = this;
return (new cljs.core.async.t_cljs$core$async7426(self__.ch,self__.cs,meta7427__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async7426.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_7428){
var self__ = this;
var _7428__$1 = this;
return self__.meta7427;
});})(cs))
;

cljs.core.async.t_cljs$core$async7426.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7426.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async7426.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7426.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7426.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7426.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7426.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta7427","meta7427",85160813,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async7426.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7426";

cljs.core.async.t_cljs$core$async7426.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async7426");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7426.
 */
cljs.core.async.__GT_t_cljs$core$async7426 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async7426(ch__$1,cs__$1,meta7427){
return (new cljs.core.async.t_cljs$core$async7426(ch__$1,cs__$1,meta7427));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async7426(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6685__auto___9382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6685__auto___9382,cs,m,dchan,dctr,done){
return (function (){
var f__6686__auto__ = (function (){var switch__6409__auto__ = ((function (c__6685__auto___9382,cs,m,dchan,dctr,done){
return (function (state_7592){
var state_val_7593 = (state_7592[(1)]);
if((state_val_7593 === (7))){
var inst_7588 = (state_7592[(2)]);
var state_7592__$1 = state_7592;
var statearr_7598_9385 = state_7592__$1;
(statearr_7598_9385[(2)] = inst_7588);

(statearr_7598_9385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (20))){
var inst_7483 = (state_7592[(7)]);
var inst_7496 = cljs.core.first(inst_7483);
var inst_7497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_7496,(0),null);
var inst_7498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_7496,(1),null);
var state_7592__$1 = (function (){var statearr_7599 = state_7592;
(statearr_7599[(8)] = inst_7497);

return statearr_7599;
})();
if(cljs.core.truth_(inst_7498)){
var statearr_7600_9390 = state_7592__$1;
(statearr_7600_9390[(1)] = (22));

} else {
var statearr_7601_9391 = state_7592__$1;
(statearr_7601_9391[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (27))){
var inst_7451 = (state_7592[(9)]);
var inst_7532 = (state_7592[(10)]);
var inst_7539 = (state_7592[(11)]);
var inst_7534 = (state_7592[(12)]);
var inst_7539__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_7532,inst_7534);
var inst_7540 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_7539__$1,inst_7451,done);
var state_7592__$1 = (function (){var statearr_7602 = state_7592;
(statearr_7602[(11)] = inst_7539__$1);

return statearr_7602;
})();
if(cljs.core.truth_(inst_7540)){
var statearr_7603_9392 = state_7592__$1;
(statearr_7603_9392[(1)] = (30));

} else {
var statearr_7604_9393 = state_7592__$1;
(statearr_7604_9393[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (1))){
var state_7592__$1 = state_7592;
var statearr_7607_9394 = state_7592__$1;
(statearr_7607_9394[(2)] = null);

(statearr_7607_9394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (24))){
var inst_7483 = (state_7592[(7)]);
var inst_7503 = (state_7592[(2)]);
var inst_7504 = cljs.core.next(inst_7483);
var inst_7460 = inst_7504;
var inst_7461 = null;
var inst_7462 = (0);
var inst_7463 = (0);
var state_7592__$1 = (function (){var statearr_7610 = state_7592;
(statearr_7610[(13)] = inst_7461);

(statearr_7610[(14)] = inst_7462);

(statearr_7610[(15)] = inst_7463);

(statearr_7610[(16)] = inst_7460);

(statearr_7610[(17)] = inst_7503);

return statearr_7610;
})();
var statearr_7612_9397 = state_7592__$1;
(statearr_7612_9397[(2)] = null);

(statearr_7612_9397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (39))){
var state_7592__$1 = state_7592;
var statearr_7620_9398 = state_7592__$1;
(statearr_7620_9398[(2)] = null);

(statearr_7620_9398[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (4))){
var inst_7451 = (state_7592[(9)]);
var inst_7451__$1 = (state_7592[(2)]);
var inst_7452 = (inst_7451__$1 == null);
var state_7592__$1 = (function (){var statearr_7621 = state_7592;
(statearr_7621[(9)] = inst_7451__$1);

return statearr_7621;
})();
if(cljs.core.truth_(inst_7452)){
var statearr_7622_9399 = state_7592__$1;
(statearr_7622_9399[(1)] = (5));

} else {
var statearr_7623_9400 = state_7592__$1;
(statearr_7623_9400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (15))){
var inst_7461 = (state_7592[(13)]);
var inst_7462 = (state_7592[(14)]);
var inst_7463 = (state_7592[(15)]);
var inst_7460 = (state_7592[(16)]);
var inst_7479 = (state_7592[(2)]);
var inst_7480 = (inst_7463 + (1));
var tmp7614 = inst_7461;
var tmp7615 = inst_7462;
var tmp7616 = inst_7460;
var inst_7460__$1 = tmp7616;
var inst_7461__$1 = tmp7614;
var inst_7462__$1 = tmp7615;
var inst_7463__$1 = inst_7480;
var state_7592__$1 = (function (){var statearr_7628 = state_7592;
(statearr_7628[(13)] = inst_7461__$1);

(statearr_7628[(14)] = inst_7462__$1);

(statearr_7628[(15)] = inst_7463__$1);

(statearr_7628[(16)] = inst_7460__$1);

(statearr_7628[(18)] = inst_7479);

return statearr_7628;
})();
var statearr_7629_9401 = state_7592__$1;
(statearr_7629_9401[(2)] = null);

(statearr_7629_9401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (21))){
var inst_7507 = (state_7592[(2)]);
var state_7592__$1 = state_7592;
var statearr_7639_9402 = state_7592__$1;
(statearr_7639_9402[(2)] = inst_7507);

(statearr_7639_9402[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (31))){
var inst_7539 = (state_7592[(11)]);
var inst_7543 = done(null);
var inst_7544 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_7539);
var state_7592__$1 = (function (){var statearr_7640 = state_7592;
(statearr_7640[(19)] = inst_7543);

return statearr_7640;
})();
var statearr_7641_9408 = state_7592__$1;
(statearr_7641_9408[(2)] = inst_7544);

(statearr_7641_9408[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (32))){
var inst_7531 = (state_7592[(20)]);
var inst_7533 = (state_7592[(21)]);
var inst_7532 = (state_7592[(10)]);
var inst_7534 = (state_7592[(12)]);
var inst_7546 = (state_7592[(2)]);
var inst_7547 = (inst_7534 + (1));
var tmp7636 = inst_7531;
var tmp7637 = inst_7533;
var tmp7638 = inst_7532;
var inst_7531__$1 = tmp7636;
var inst_7532__$1 = tmp7638;
var inst_7533__$1 = tmp7637;
var inst_7534__$1 = inst_7547;
var state_7592__$1 = (function (){var statearr_7642 = state_7592;
(statearr_7642[(22)] = inst_7546);

(statearr_7642[(20)] = inst_7531__$1);

(statearr_7642[(21)] = inst_7533__$1);

(statearr_7642[(10)] = inst_7532__$1);

(statearr_7642[(12)] = inst_7534__$1);

return statearr_7642;
})();
var statearr_7649_9418 = state_7592__$1;
(statearr_7649_9418[(2)] = null);

(statearr_7649_9418[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (40))){
var inst_7559 = (state_7592[(23)]);
var inst_7563 = done(null);
var inst_7565 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_7559);
var state_7592__$1 = (function (){var statearr_7657 = state_7592;
(statearr_7657[(24)] = inst_7563);

return statearr_7657;
})();
var statearr_7658_9424 = state_7592__$1;
(statearr_7658_9424[(2)] = inst_7565);

(statearr_7658_9424[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (33))){
var inst_7550 = (state_7592[(25)]);
var inst_7552 = cljs.core.chunked_seq_QMARK_(inst_7550);
var state_7592__$1 = state_7592;
if(inst_7552){
var statearr_7659_9429 = state_7592__$1;
(statearr_7659_9429[(1)] = (36));

} else {
var statearr_7660_9430 = state_7592__$1;
(statearr_7660_9430[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (13))){
var inst_7473 = (state_7592[(26)]);
var inst_7476 = cljs.core.async.close_BANG_(inst_7473);
var state_7592__$1 = state_7592;
var statearr_7662_9436 = state_7592__$1;
(statearr_7662_9436[(2)] = inst_7476);

(statearr_7662_9436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (22))){
var inst_7497 = (state_7592[(8)]);
var inst_7500 = cljs.core.async.close_BANG_(inst_7497);
var state_7592__$1 = state_7592;
var statearr_7663_9437 = state_7592__$1;
(statearr_7663_9437[(2)] = inst_7500);

(statearr_7663_9437[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (36))){
var inst_7550 = (state_7592[(25)]);
var inst_7554 = cljs.core.chunk_first(inst_7550);
var inst_7555 = cljs.core.chunk_rest(inst_7550);
var inst_7556 = cljs.core.count(inst_7554);
var inst_7531 = inst_7555;
var inst_7532 = inst_7554;
var inst_7533 = inst_7556;
var inst_7534 = (0);
var state_7592__$1 = (function (){var statearr_7664 = state_7592;
(statearr_7664[(20)] = inst_7531);

(statearr_7664[(21)] = inst_7533);

(statearr_7664[(10)] = inst_7532);

(statearr_7664[(12)] = inst_7534);

return statearr_7664;
})();
var statearr_7665_9438 = state_7592__$1;
(statearr_7665_9438[(2)] = null);

(statearr_7665_9438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (41))){
var inst_7550 = (state_7592[(25)]);
var inst_7567 = (state_7592[(2)]);
var inst_7568 = cljs.core.next(inst_7550);
var inst_7531 = inst_7568;
var inst_7532 = null;
var inst_7533 = (0);
var inst_7534 = (0);
var state_7592__$1 = (function (){var statearr_7666 = state_7592;
(statearr_7666[(27)] = inst_7567);

(statearr_7666[(20)] = inst_7531);

(statearr_7666[(21)] = inst_7533);

(statearr_7666[(10)] = inst_7532);

(statearr_7666[(12)] = inst_7534);

return statearr_7666;
})();
var statearr_7669_9439 = state_7592__$1;
(statearr_7669_9439[(2)] = null);

(statearr_7669_9439[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (43))){
var state_7592__$1 = state_7592;
var statearr_7671_9440 = state_7592__$1;
(statearr_7671_9440[(2)] = null);

(statearr_7671_9440[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (29))){
var inst_7576 = (state_7592[(2)]);
var state_7592__$1 = state_7592;
var statearr_7676_9441 = state_7592__$1;
(statearr_7676_9441[(2)] = inst_7576);

(statearr_7676_9441[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (44))){
var inst_7585 = (state_7592[(2)]);
var state_7592__$1 = (function (){var statearr_7678 = state_7592;
(statearr_7678[(28)] = inst_7585);

return statearr_7678;
})();
var statearr_7679_9442 = state_7592__$1;
(statearr_7679_9442[(2)] = null);

(statearr_7679_9442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (6))){
var inst_7523 = (state_7592[(29)]);
var inst_7522 = cljs.core.deref(cs);
var inst_7523__$1 = cljs.core.keys(inst_7522);
var inst_7524 = cljs.core.count(inst_7523__$1);
var inst_7525 = cljs.core.reset_BANG_(dctr,inst_7524);
var inst_7530 = cljs.core.seq(inst_7523__$1);
var inst_7531 = inst_7530;
var inst_7532 = null;
var inst_7533 = (0);
var inst_7534 = (0);
var state_7592__$1 = (function (){var statearr_7680 = state_7592;
(statearr_7680[(29)] = inst_7523__$1);

(statearr_7680[(30)] = inst_7525);

(statearr_7680[(20)] = inst_7531);

(statearr_7680[(21)] = inst_7533);

(statearr_7680[(10)] = inst_7532);

(statearr_7680[(12)] = inst_7534);

return statearr_7680;
})();
var statearr_7681_9445 = state_7592__$1;
(statearr_7681_9445[(2)] = null);

(statearr_7681_9445[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (28))){
var inst_7550 = (state_7592[(25)]);
var inst_7531 = (state_7592[(20)]);
var inst_7550__$1 = cljs.core.seq(inst_7531);
var state_7592__$1 = (function (){var statearr_7684 = state_7592;
(statearr_7684[(25)] = inst_7550__$1);

return statearr_7684;
})();
if(inst_7550__$1){
var statearr_7685_9447 = state_7592__$1;
(statearr_7685_9447[(1)] = (33));

} else {
var statearr_7686_9448 = state_7592__$1;
(statearr_7686_9448[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (25))){
var inst_7533 = (state_7592[(21)]);
var inst_7534 = (state_7592[(12)]);
var inst_7536 = (inst_7534 < inst_7533);
var inst_7537 = inst_7536;
var state_7592__$1 = state_7592;
if(cljs.core.truth_(inst_7537)){
var statearr_7687_9449 = state_7592__$1;
(statearr_7687_9449[(1)] = (27));

} else {
var statearr_7688_9450 = state_7592__$1;
(statearr_7688_9450[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (34))){
var state_7592__$1 = state_7592;
var statearr_7691_9451 = state_7592__$1;
(statearr_7691_9451[(2)] = null);

(statearr_7691_9451[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (17))){
var state_7592__$1 = state_7592;
var statearr_7692_9452 = state_7592__$1;
(statearr_7692_9452[(2)] = null);

(statearr_7692_9452[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (3))){
var inst_7590 = (state_7592[(2)]);
var state_7592__$1 = state_7592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7592__$1,inst_7590);
} else {
if((state_val_7593 === (12))){
var inst_7512 = (state_7592[(2)]);
var state_7592__$1 = state_7592;
var statearr_7693_9453 = state_7592__$1;
(statearr_7693_9453[(2)] = inst_7512);

(statearr_7693_9453[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (2))){
var state_7592__$1 = state_7592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7592__$1,(4),ch);
} else {
if((state_val_7593 === (23))){
var state_7592__$1 = state_7592;
var statearr_7697_9454 = state_7592__$1;
(statearr_7697_9454[(2)] = null);

(statearr_7697_9454[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (35))){
var inst_7574 = (state_7592[(2)]);
var state_7592__$1 = state_7592;
var statearr_7698_9455 = state_7592__$1;
(statearr_7698_9455[(2)] = inst_7574);

(statearr_7698_9455[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (19))){
var inst_7483 = (state_7592[(7)]);
var inst_7488 = cljs.core.chunk_first(inst_7483);
var inst_7489 = cljs.core.chunk_rest(inst_7483);
var inst_7490 = cljs.core.count(inst_7488);
var inst_7460 = inst_7489;
var inst_7461 = inst_7488;
var inst_7462 = inst_7490;
var inst_7463 = (0);
var state_7592__$1 = (function (){var statearr_7699 = state_7592;
(statearr_7699[(13)] = inst_7461);

(statearr_7699[(14)] = inst_7462);

(statearr_7699[(15)] = inst_7463);

(statearr_7699[(16)] = inst_7460);

return statearr_7699;
})();
var statearr_7700_9457 = state_7592__$1;
(statearr_7700_9457[(2)] = null);

(statearr_7700_9457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (11))){
var inst_7483 = (state_7592[(7)]);
var inst_7460 = (state_7592[(16)]);
var inst_7483__$1 = cljs.core.seq(inst_7460);
var state_7592__$1 = (function (){var statearr_7703 = state_7592;
(statearr_7703[(7)] = inst_7483__$1);

return statearr_7703;
})();
if(inst_7483__$1){
var statearr_7709_9458 = state_7592__$1;
(statearr_7709_9458[(1)] = (16));

} else {
var statearr_7711_9459 = state_7592__$1;
(statearr_7711_9459[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (9))){
var inst_7514 = (state_7592[(2)]);
var state_7592__$1 = state_7592;
var statearr_7712_9460 = state_7592__$1;
(statearr_7712_9460[(2)] = inst_7514);

(statearr_7712_9460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (5))){
var inst_7458 = cljs.core.deref(cs);
var inst_7459 = cljs.core.seq(inst_7458);
var inst_7460 = inst_7459;
var inst_7461 = null;
var inst_7462 = (0);
var inst_7463 = (0);
var state_7592__$1 = (function (){var statearr_7713 = state_7592;
(statearr_7713[(13)] = inst_7461);

(statearr_7713[(14)] = inst_7462);

(statearr_7713[(15)] = inst_7463);

(statearr_7713[(16)] = inst_7460);

return statearr_7713;
})();
var statearr_7714_9461 = state_7592__$1;
(statearr_7714_9461[(2)] = null);

(statearr_7714_9461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (14))){
var state_7592__$1 = state_7592;
var statearr_7715_9462 = state_7592__$1;
(statearr_7715_9462[(2)] = null);

(statearr_7715_9462[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (45))){
var inst_7582 = (state_7592[(2)]);
var state_7592__$1 = state_7592;
var statearr_7716_9463 = state_7592__$1;
(statearr_7716_9463[(2)] = inst_7582);

(statearr_7716_9463[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (26))){
var inst_7523 = (state_7592[(29)]);
var inst_7578 = (state_7592[(2)]);
var inst_7579 = cljs.core.seq(inst_7523);
var state_7592__$1 = (function (){var statearr_7717 = state_7592;
(statearr_7717[(31)] = inst_7578);

return statearr_7717;
})();
if(inst_7579){
var statearr_7718_9464 = state_7592__$1;
(statearr_7718_9464[(1)] = (42));

} else {
var statearr_7719_9465 = state_7592__$1;
(statearr_7719_9465[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (16))){
var inst_7483 = (state_7592[(7)]);
var inst_7486 = cljs.core.chunked_seq_QMARK_(inst_7483);
var state_7592__$1 = state_7592;
if(inst_7486){
var statearr_7720_9466 = state_7592__$1;
(statearr_7720_9466[(1)] = (19));

} else {
var statearr_7721_9467 = state_7592__$1;
(statearr_7721_9467[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (38))){
var inst_7571 = (state_7592[(2)]);
var state_7592__$1 = state_7592;
var statearr_7724_9468 = state_7592__$1;
(statearr_7724_9468[(2)] = inst_7571);

(statearr_7724_9468[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (30))){
var state_7592__$1 = state_7592;
var statearr_7725_9469 = state_7592__$1;
(statearr_7725_9469[(2)] = null);

(statearr_7725_9469[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (10))){
var inst_7461 = (state_7592[(13)]);
var inst_7463 = (state_7592[(15)]);
var inst_7472 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_7461,inst_7463);
var inst_7473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_7472,(0),null);
var inst_7474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_7472,(1),null);
var state_7592__$1 = (function (){var statearr_7727 = state_7592;
(statearr_7727[(26)] = inst_7473);

return statearr_7727;
})();
if(cljs.core.truth_(inst_7474)){
var statearr_7728_9470 = state_7592__$1;
(statearr_7728_9470[(1)] = (13));

} else {
var statearr_7729_9471 = state_7592__$1;
(statearr_7729_9471[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (18))){
var inst_7510 = (state_7592[(2)]);
var state_7592__$1 = state_7592;
var statearr_7730_9472 = state_7592__$1;
(statearr_7730_9472[(2)] = inst_7510);

(statearr_7730_9472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (42))){
var state_7592__$1 = state_7592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7592__$1,(45),dchan);
} else {
if((state_val_7593 === (37))){
var inst_7550 = (state_7592[(25)]);
var inst_7559 = (state_7592[(23)]);
var inst_7451 = (state_7592[(9)]);
var inst_7559__$1 = cljs.core.first(inst_7550);
var inst_7560 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_7559__$1,inst_7451,done);
var state_7592__$1 = (function (){var statearr_7731 = state_7592;
(statearr_7731[(23)] = inst_7559__$1);

return statearr_7731;
})();
if(cljs.core.truth_(inst_7560)){
var statearr_7737_9473 = state_7592__$1;
(statearr_7737_9473[(1)] = (39));

} else {
var statearr_7739_9474 = state_7592__$1;
(statearr_7739_9474[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7593 === (8))){
var inst_7462 = (state_7592[(14)]);
var inst_7463 = (state_7592[(15)]);
var inst_7465 = (inst_7463 < inst_7462);
var inst_7466 = inst_7465;
var state_7592__$1 = state_7592;
if(cljs.core.truth_(inst_7466)){
var statearr_7745_9475 = state_7592__$1;
(statearr_7745_9475[(1)] = (10));

} else {
var statearr_7746_9476 = state_7592__$1;
(statearr_7746_9476[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6685__auto___9382,cs,m,dchan,dctr,done))
;
return ((function (switch__6409__auto__,c__6685__auto___9382,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6410__auto__ = null;
var cljs$core$async$mult_$_state_machine__6410__auto____0 = (function (){
var statearr_7747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7747[(0)] = cljs$core$async$mult_$_state_machine__6410__auto__);

(statearr_7747[(1)] = (1));

return statearr_7747;
});
var cljs$core$async$mult_$_state_machine__6410__auto____1 = (function (state_7592){
while(true){
var ret_value__6411__auto__ = (function (){try{while(true){
var result__6412__auto__ = switch__6409__auto__(state_7592);
if(cljs.core.keyword_identical_QMARK_(result__6412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6412__auto__;
}
break;
}
}catch (e7748){if((e7748 instanceof Object)){
var ex__6413__auto__ = e7748;
var statearr_7749_9477 = state_7592;
(statearr_7749_9477[(5)] = ex__6413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7748;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9478 = state_7592;
state_7592 = G__9478;
continue;
} else {
return ret_value__6411__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6410__auto__ = function(state_7592){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6410__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6410__auto____1.call(this,state_7592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6410__auto____0;
cljs$core$async$mult_$_state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6410__auto____1;
return cljs$core$async$mult_$_state_machine__6410__auto__;
})()
;})(switch__6409__auto__,c__6685__auto___9382,cs,m,dchan,dctr,done))
})();
var state__6687__auto__ = (function (){var statearr_7750 = (f__6686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6686__auto__.cljs$core$IFn$_invoke$arity$0() : f__6686__auto__.call(null));
(statearr_7750[(6)] = c__6685__auto___9382);

return statearr_7750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6687__auto__);
});})(c__6685__auto___9382,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__7752 = arguments.length;
switch (G__7752) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9480 = arguments.length;
var i__4731__auto___9481 = (0);
while(true){
if((i__4731__auto___9481 < len__4730__auto___9480)){
args__4736__auto__.push((arguments[i__4731__auto___9481]));

var G__9482 = (i__4731__auto___9481 + (1));
i__4731__auto___9481 = G__9482;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__7773){
var map__7774 = p__7773;
var map__7774__$1 = (((((!((map__7774 == null))))?(((((map__7774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7774):map__7774);
var opts = map__7774__$1;
var statearr_7776_9483 = state;
(statearr_7776_9483[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__7774,map__7774__$1,opts){
return (function (val){
var statearr_7780_9484 = state;
(statearr_7780_9484[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__7774,map__7774__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_7781_9485 = state;
(statearr_7781_9485[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq7767){
var G__7768 = cljs.core.first(seq7767);
var seq7767__$1 = cljs.core.next(seq7767);
var G__7769 = cljs.core.first(seq7767__$1);
var seq7767__$2 = cljs.core.next(seq7767__$1);
var G__7770 = cljs.core.first(seq7767__$2);
var seq7767__$3 = cljs.core.next(seq7767__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7768,G__7769,G__7770,seq7767__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7786 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7786 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta7787){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta7787 = meta7787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_7788,meta7787__$1){
var self__ = this;
var _7788__$1 = this;
return (new cljs.core.async.t_cljs$core$async7786(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta7787__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7786.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_7788){
var self__ = this;
var _7788__$1 = this;
return self__.meta7787;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7786.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7786.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7786.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7786.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7786.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7786.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7786.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7786.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7786.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta7787","meta7787",558038905,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7786.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7786";

cljs.core.async.t_cljs$core$async7786.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async7786");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7786.
 */
cljs.core.async.__GT_t_cljs$core$async7786 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async7786(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta7787){
return (new cljs.core.async.t_cljs$core$async7786(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta7787));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async7786(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6685__auto___9486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6685__auto___9486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6686__auto__ = (function (){var switch__6409__auto__ = ((function (c__6685__auto___9486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_7909){
var state_val_7911 = (state_7909[(1)]);
if((state_val_7911 === (7))){
var inst_7824 = (state_7909[(2)]);
var state_7909__$1 = state_7909;
var statearr_7915_9487 = state_7909__$1;
(statearr_7915_9487[(2)] = inst_7824);

(statearr_7915_9487[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (20))){
var inst_7836 = (state_7909[(7)]);
var state_7909__$1 = state_7909;
var statearr_7917_9488 = state_7909__$1;
(statearr_7917_9488[(2)] = inst_7836);

(statearr_7917_9488[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (27))){
var state_7909__$1 = state_7909;
var statearr_7918_9489 = state_7909__$1;
(statearr_7918_9489[(2)] = null);

(statearr_7918_9489[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (1))){
var inst_7809 = (state_7909[(8)]);
var inst_7809__$1 = calc_state();
var inst_7813 = (inst_7809__$1 == null);
var inst_7814 = cljs.core.not(inst_7813);
var state_7909__$1 = (function (){var statearr_7920 = state_7909;
(statearr_7920[(8)] = inst_7809__$1);

return statearr_7920;
})();
if(inst_7814){
var statearr_7921_9490 = state_7909__$1;
(statearr_7921_9490[(1)] = (2));

} else {
var statearr_7922_9491 = state_7909__$1;
(statearr_7922_9491[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (24))){
var inst_7883 = (state_7909[(9)]);
var inst_7860 = (state_7909[(10)]);
var inst_7869 = (state_7909[(11)]);
var inst_7883__$1 = (inst_7860.cljs$core$IFn$_invoke$arity$1 ? inst_7860.cljs$core$IFn$_invoke$arity$1(inst_7869) : inst_7860.call(null,inst_7869));
var state_7909__$1 = (function (){var statearr_7923 = state_7909;
(statearr_7923[(9)] = inst_7883__$1);

return statearr_7923;
})();
if(cljs.core.truth_(inst_7883__$1)){
var statearr_7926_9492 = state_7909__$1;
(statearr_7926_9492[(1)] = (29));

} else {
var statearr_7929_9493 = state_7909__$1;
(statearr_7929_9493[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (4))){
var inst_7827 = (state_7909[(2)]);
var state_7909__$1 = state_7909;
if(cljs.core.truth_(inst_7827)){
var statearr_7936_9494 = state_7909__$1;
(statearr_7936_9494[(1)] = (8));

} else {
var statearr_7937_9495 = state_7909__$1;
(statearr_7937_9495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (15))){
var inst_7854 = (state_7909[(2)]);
var state_7909__$1 = state_7909;
if(cljs.core.truth_(inst_7854)){
var statearr_7938_9496 = state_7909__$1;
(statearr_7938_9496[(1)] = (19));

} else {
var statearr_7939_9497 = state_7909__$1;
(statearr_7939_9497[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (21))){
var inst_7859 = (state_7909[(12)]);
var inst_7859__$1 = (state_7909[(2)]);
var inst_7860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_7859__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_7861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_7859__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_7862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_7859__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_7909__$1 = (function (){var statearr_7942 = state_7909;
(statearr_7942[(12)] = inst_7859__$1);

(statearr_7942[(10)] = inst_7860);

(statearr_7942[(13)] = inst_7861);

return statearr_7942;
})();
return cljs.core.async.ioc_alts_BANG_(state_7909__$1,(22),inst_7862);
} else {
if((state_val_7911 === (31))){
var inst_7891 = (state_7909[(2)]);
var state_7909__$1 = state_7909;
if(cljs.core.truth_(inst_7891)){
var statearr_7947_9498 = state_7909__$1;
(statearr_7947_9498[(1)] = (32));

} else {
var statearr_7948_9499 = state_7909__$1;
(statearr_7948_9499[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (32))){
var inst_7868 = (state_7909[(14)]);
var state_7909__$1 = state_7909;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7909__$1,(35),out,inst_7868);
} else {
if((state_val_7911 === (33))){
var inst_7859 = (state_7909[(12)]);
var inst_7836 = inst_7859;
var state_7909__$1 = (function (){var statearr_7952 = state_7909;
(statearr_7952[(7)] = inst_7836);

return statearr_7952;
})();
var statearr_7955_9500 = state_7909__$1;
(statearr_7955_9500[(2)] = null);

(statearr_7955_9500[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (13))){
var inst_7836 = (state_7909[(7)]);
var inst_7843 = inst_7836.cljs$lang$protocol_mask$partition0$;
var inst_7844 = (inst_7843 & (64));
var inst_7845 = inst_7836.cljs$core$ISeq$;
var inst_7846 = (cljs.core.PROTOCOL_SENTINEL === inst_7845);
var inst_7847 = ((inst_7844) || (inst_7846));
var state_7909__$1 = state_7909;
if(cljs.core.truth_(inst_7847)){
var statearr_7961_9501 = state_7909__$1;
(statearr_7961_9501[(1)] = (16));

} else {
var statearr_7962_9502 = state_7909__$1;
(statearr_7962_9502[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (22))){
var inst_7869 = (state_7909[(11)]);
var inst_7868 = (state_7909[(14)]);
var inst_7867 = (state_7909[(2)]);
var inst_7868__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_7867,(0),null);
var inst_7869__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_7867,(1),null);
var inst_7870 = (inst_7868__$1 == null);
var inst_7871 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_7869__$1,change);
var inst_7872 = ((inst_7870) || (inst_7871));
var state_7909__$1 = (function (){var statearr_7965 = state_7909;
(statearr_7965[(11)] = inst_7869__$1);

(statearr_7965[(14)] = inst_7868__$1);

return statearr_7965;
})();
if(cljs.core.truth_(inst_7872)){
var statearr_7967_9503 = state_7909__$1;
(statearr_7967_9503[(1)] = (23));

} else {
var statearr_7968_9504 = state_7909__$1;
(statearr_7968_9504[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (36))){
var inst_7859 = (state_7909[(12)]);
var inst_7836 = inst_7859;
var state_7909__$1 = (function (){var statearr_7974 = state_7909;
(statearr_7974[(7)] = inst_7836);

return statearr_7974;
})();
var statearr_7975_9505 = state_7909__$1;
(statearr_7975_9505[(2)] = null);

(statearr_7975_9505[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (29))){
var inst_7883 = (state_7909[(9)]);
var state_7909__$1 = state_7909;
var statearr_7977_9506 = state_7909__$1;
(statearr_7977_9506[(2)] = inst_7883);

(statearr_7977_9506[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (6))){
var state_7909__$1 = state_7909;
var statearr_7980_9507 = state_7909__$1;
(statearr_7980_9507[(2)] = false);

(statearr_7980_9507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (28))){
var inst_7879 = (state_7909[(2)]);
var inst_7880 = calc_state();
var inst_7836 = inst_7880;
var state_7909__$1 = (function (){var statearr_7982 = state_7909;
(statearr_7982[(7)] = inst_7836);

(statearr_7982[(15)] = inst_7879);

return statearr_7982;
})();
var statearr_7985_9508 = state_7909__$1;
(statearr_7985_9508[(2)] = null);

(statearr_7985_9508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (25))){
var inst_7905 = (state_7909[(2)]);
var state_7909__$1 = state_7909;
var statearr_7986_9509 = state_7909__$1;
(statearr_7986_9509[(2)] = inst_7905);

(statearr_7986_9509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (34))){
var inst_7903 = (state_7909[(2)]);
var state_7909__$1 = state_7909;
var statearr_7990_9510 = state_7909__$1;
(statearr_7990_9510[(2)] = inst_7903);

(statearr_7990_9510[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (17))){
var state_7909__$1 = state_7909;
var statearr_7991_9511 = state_7909__$1;
(statearr_7991_9511[(2)] = false);

(statearr_7991_9511[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (3))){
var state_7909__$1 = state_7909;
var statearr_7994_9512 = state_7909__$1;
(statearr_7994_9512[(2)] = false);

(statearr_7994_9512[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (12))){
var inst_7907 = (state_7909[(2)]);
var state_7909__$1 = state_7909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7909__$1,inst_7907);
} else {
if((state_val_7911 === (2))){
var inst_7809 = (state_7909[(8)]);
var inst_7816 = inst_7809.cljs$lang$protocol_mask$partition0$;
var inst_7817 = (inst_7816 & (64));
var inst_7818 = inst_7809.cljs$core$ISeq$;
var inst_7819 = (cljs.core.PROTOCOL_SENTINEL === inst_7818);
var inst_7820 = ((inst_7817) || (inst_7819));
var state_7909__$1 = state_7909;
if(cljs.core.truth_(inst_7820)){
var statearr_7996_9513 = state_7909__$1;
(statearr_7996_9513[(1)] = (5));

} else {
var statearr_7998_9514 = state_7909__$1;
(statearr_7998_9514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (23))){
var inst_7868 = (state_7909[(14)]);
var inst_7874 = (inst_7868 == null);
var state_7909__$1 = state_7909;
if(cljs.core.truth_(inst_7874)){
var statearr_8000_9515 = state_7909__$1;
(statearr_8000_9515[(1)] = (26));

} else {
var statearr_8001_9516 = state_7909__$1;
(statearr_8001_9516[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (35))){
var inst_7894 = (state_7909[(2)]);
var state_7909__$1 = state_7909;
if(cljs.core.truth_(inst_7894)){
var statearr_8003_9517 = state_7909__$1;
(statearr_8003_9517[(1)] = (36));

} else {
var statearr_8004_9518 = state_7909__$1;
(statearr_8004_9518[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (19))){
var inst_7836 = (state_7909[(7)]);
var inst_7856 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_7836);
var state_7909__$1 = state_7909;
var statearr_8005_9519 = state_7909__$1;
(statearr_8005_9519[(2)] = inst_7856);

(statearr_8005_9519[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (11))){
var inst_7836 = (state_7909[(7)]);
var inst_7840 = (inst_7836 == null);
var inst_7841 = cljs.core.not(inst_7840);
var state_7909__$1 = state_7909;
if(inst_7841){
var statearr_8006_9520 = state_7909__$1;
(statearr_8006_9520[(1)] = (13));

} else {
var statearr_8007_9521 = state_7909__$1;
(statearr_8007_9521[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (9))){
var inst_7809 = (state_7909[(8)]);
var state_7909__$1 = state_7909;
var statearr_8009_9522 = state_7909__$1;
(statearr_8009_9522[(2)] = inst_7809);

(statearr_8009_9522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (5))){
var state_7909__$1 = state_7909;
var statearr_8011_9523 = state_7909__$1;
(statearr_8011_9523[(2)] = true);

(statearr_8011_9523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (14))){
var state_7909__$1 = state_7909;
var statearr_8013_9524 = state_7909__$1;
(statearr_8013_9524[(2)] = false);

(statearr_8013_9524[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (26))){
var inst_7869 = (state_7909[(11)]);
var inst_7876 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_7869);
var state_7909__$1 = state_7909;
var statearr_8014_9525 = state_7909__$1;
(statearr_8014_9525[(2)] = inst_7876);

(statearr_8014_9525[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (16))){
var state_7909__$1 = state_7909;
var statearr_8015_9526 = state_7909__$1;
(statearr_8015_9526[(2)] = true);

(statearr_8015_9526[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (38))){
var inst_7899 = (state_7909[(2)]);
var state_7909__$1 = state_7909;
var statearr_8021_9527 = state_7909__$1;
(statearr_8021_9527[(2)] = inst_7899);

(statearr_8021_9527[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (30))){
var inst_7860 = (state_7909[(10)]);
var inst_7869 = (state_7909[(11)]);
var inst_7861 = (state_7909[(13)]);
var inst_7886 = cljs.core.empty_QMARK_(inst_7860);
var inst_7887 = (inst_7861.cljs$core$IFn$_invoke$arity$1 ? inst_7861.cljs$core$IFn$_invoke$arity$1(inst_7869) : inst_7861.call(null,inst_7869));
var inst_7888 = cljs.core.not(inst_7887);
var inst_7889 = ((inst_7886) && (inst_7888));
var state_7909__$1 = state_7909;
var statearr_8022_9528 = state_7909__$1;
(statearr_8022_9528[(2)] = inst_7889);

(statearr_8022_9528[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (10))){
var inst_7809 = (state_7909[(8)]);
var inst_7832 = (state_7909[(2)]);
var inst_7833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_7832,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_7834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_7832,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_7835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_7832,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_7836 = inst_7809;
var state_7909__$1 = (function (){var statearr_8026 = state_7909;
(statearr_8026[(16)] = inst_7833);

(statearr_8026[(17)] = inst_7834);

(statearr_8026[(18)] = inst_7835);

(statearr_8026[(7)] = inst_7836);

return statearr_8026;
})();
var statearr_8028_9529 = state_7909__$1;
(statearr_8028_9529[(2)] = null);

(statearr_8028_9529[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (18))){
var inst_7851 = (state_7909[(2)]);
var state_7909__$1 = state_7909;
var statearr_8029_9530 = state_7909__$1;
(statearr_8029_9530[(2)] = inst_7851);

(statearr_8029_9530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (37))){
var state_7909__$1 = state_7909;
var statearr_8030_9531 = state_7909__$1;
(statearr_8030_9531[(2)] = null);

(statearr_8030_9531[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7911 === (8))){
var inst_7809 = (state_7909[(8)]);
var inst_7829 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_7809);
var state_7909__$1 = state_7909;
var statearr_8032_9532 = state_7909__$1;
(statearr_8032_9532[(2)] = inst_7829);

(statearr_8032_9532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6685__auto___9486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6409__auto__,c__6685__auto___9486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6410__auto__ = null;
var cljs$core$async$mix_$_state_machine__6410__auto____0 = (function (){
var statearr_8034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8034[(0)] = cljs$core$async$mix_$_state_machine__6410__auto__);

(statearr_8034[(1)] = (1));

return statearr_8034;
});
var cljs$core$async$mix_$_state_machine__6410__auto____1 = (function (state_7909){
while(true){
var ret_value__6411__auto__ = (function (){try{while(true){
var result__6412__auto__ = switch__6409__auto__(state_7909);
if(cljs.core.keyword_identical_QMARK_(result__6412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6412__auto__;
}
break;
}
}catch (e8035){if((e8035 instanceof Object)){
var ex__6413__auto__ = e8035;
var statearr_8036_9533 = state_7909;
(statearr_8036_9533[(5)] = ex__6413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8035;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9534 = state_7909;
state_7909 = G__9534;
continue;
} else {
return ret_value__6411__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6410__auto__ = function(state_7909){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6410__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6410__auto____1.call(this,state_7909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6410__auto____0;
cljs$core$async$mix_$_state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6410__auto____1;
return cljs$core$async$mix_$_state_machine__6410__auto__;
})()
;})(switch__6409__auto__,c__6685__auto___9486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6687__auto__ = (function (){var statearr_8037 = (f__6686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6686__auto__.cljs$core$IFn$_invoke$arity$0() : f__6686__auto__.call(null));
(statearr_8037[(6)] = c__6685__auto___9486);

return statearr_8037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6687__auto__);
});})(c__6685__auto___9486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__8058 = arguments.length;
switch (G__8058) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__8081 = arguments.length;
switch (G__8081) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__8079_SHARP_){
if(cljs.core.truth_((p1__8079_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8079_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__8079_SHARP_.call(null,topic)))){
return p1__8079_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__8079_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8084 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8084 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta8085){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta8085 = meta8085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_8086,meta8085__$1){
var self__ = this;
var _8086__$1 = this;
return (new cljs.core.async.t_cljs$core$async8084(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta8085__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8084.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_8086){
var self__ = this;
var _8086__$1 = this;
return self__.meta8085;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8084.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8084.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8084.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8084.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8084.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8084.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8084.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8084.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta8085","meta8085",1135459986,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8084.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8084.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8084";

cljs.core.async.t_cljs$core$async8084.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async8084");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8084.
 */
cljs.core.async.__GT_t_cljs$core$async8084 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async8084(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8085){
return (new cljs.core.async.t_cljs$core$async8084(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8085));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async8084(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6685__auto___9537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6685__auto___9537,mults,ensure_mult,p){
return (function (){
var f__6686__auto__ = (function (){var switch__6409__auto__ = ((function (c__6685__auto___9537,mults,ensure_mult,p){
return (function (state_8193){
var state_val_8194 = (state_8193[(1)]);
if((state_val_8194 === (7))){
var inst_8188 = (state_8193[(2)]);
var state_8193__$1 = state_8193;
var statearr_8200_9538 = state_8193__$1;
(statearr_8200_9538[(2)] = inst_8188);

(statearr_8200_9538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8194 === (20))){
var state_8193__$1 = state_8193;
var statearr_8201_9539 = state_8193__$1;
(statearr_8201_9539[(2)] = null);

(statearr_8201_9539[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8194 === (1))){
var state_8193__$1 = state_8193;
var statearr_8202_9540 = state_8193__$1;
(statearr_8202_9540[(2)] = null);

(statearr_8202_9540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8194 === (24))){
var inst_8163 = (state_8193[(7)]);
var inst_8176 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_8163);
var state_8193__$1 = state_8193;
var statearr_8204_9541 = state_8193__$1;
(statearr_8204_9541[(2)] = inst_8176);

(statearr_8204_9541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8194 === (4))){
var inst_8114 = (state_8193[(8)]);
var inst_8114__$1 = (state_8193[(2)]);
var inst_8115 = (inst_8114__$1 == null);
var state_8193__$1 = (function (){var statearr_8207 = state_8193;
(statearr_8207[(8)] = inst_8114__$1);

return statearr_8207;
})();
if(cljs.core.truth_(inst_8115)){
var statearr_8208_9542 = state_8193__$1;
(statearr_8208_9542[(1)] = (5));

} else {
var statearr_8209_9543 = state_8193__$1;
(statearr_8209_9543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8194 === (15))){
var inst_8157 = (state_8193[(2)]);
var state_8193__$1 = state_8193;
var statearr_8210_9544 = state_8193__$1;
(statearr_8210_9544[(2)] = inst_8157);

(statearr_8210_9544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8194 === (21))){
var inst_8181 = (state_8193[(2)]);
var state_8193__$1 = (function (){var statearr_8216 = state_8193;
(statearr_8216[(9)] = inst_8181);

return statearr_8216;
})();
var statearr_8218_9545 = state_8193__$1;
(statearr_8218_9545[(2)] = null);

(statearr_8218_9545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8194 === (13))){
var inst_8138 = (state_8193[(10)]);
var inst_8140 = cljs.core.chunked_seq_QMARK_(inst_8138);
var state_8193__$1 = state_8193;
if(inst_8140){
var statearr_8222_9546 = state_8193__$1;
(statearr_8222_9546[(1)] = (16));

} else {
var statearr_8223_9547 = state_8193__$1;
(statearr_8223_9547[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8194 === (22))){
var inst_8173 = (state_8193[(2)]);
var state_8193__$1 = state_8193;
if(cljs.core.truth_(inst_8173)){
var statearr_8224_9548 = state_8193__$1;
(statearr_8224_9548[(1)] = (23));

} else {
var statearr_8225_9549 = state_8193__$1;
(statearr_8225_9549[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8194 === (6))){
var inst_8169 = (state_8193[(11)]);
var inst_8163 = (state_8193[(7)]);
var inst_8114 = (state_8193[(8)]);
var inst_8163__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_8114) : topic_fn.call(null,inst_8114));
var inst_8168 = cljs.core.deref(mults);
var inst_8169__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8168,inst_8163__$1);
var state_8193__$1 = (function (){var statearr_8226 = state_8193;
(statearr_8226[(11)] = inst_8169__$1);

(statearr_8226[(7)] = inst_8163__$1);

return statearr_8226;
})();
if(cljs.core.truth_(inst_8169__$1)){
var statearr_8227_9550 = state_8193__$1;
(statearr_8227_9550[(1)] = (19));

} else {
var statearr_8228_9551 = state_8193__$1;
(statearr_8228_9551[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8194 === (25))){
var inst_8178 = (state_8193[(2)]);
var state_8193__$1 = state_8193;
var statearr_8229_9552 = state_8193__$1;
(statearr_8229_9552[(2)] = inst_8178);

(statearr_8229_9552[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8194 === (17))){
var inst_8138 = (state_8193[(10)]);
var inst_8148 = cljs.core.first(inst_8138);
var inst_8149 = cljs.core.async.muxch_STAR_(inst_8148);
var inst_8150 = cljs.core.async.close_BANG_(inst_8149);
var inst_8151 = cljs.core.next(inst_8138);
var inst_8124 = inst_8151;
var inst_8125 = null;
var inst_8126 = (0);
var inst_8127 = (0);
var state_8193__$1 = (function (){var statearr_8230 = state_8193;
(statearr_8230[(12)] = inst_8125);

(statearr_8230[(13)] = inst_8124);

(statearr_8230[(14)] = inst_8126);

(statearr_8230[(15)] = inst_8127);

(statearr_8230[(16)] = inst_8150);

return statearr_8230;
})();
var statearr_8234_9553 = state_8193__$1;
(statearr_8234_9553[(2)] = null);

(statearr_8234_9553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8194 === (3))){
var inst_8190 = (state_8193[(2)]);
var state_8193__$1 = state_8193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8193__$1,inst_8190);
} else {
if((state_val_8194 === (12))){
var inst_8159 = (state_8193[(2)]);
var state_8193__$1 = state_8193;
var statearr_8235_9554 = state_8193__$1;
(statearr_8235_9554[(2)] = inst_8159);

(statearr_8235_9554[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8194 === (2))){
var state_8193__$1 = state_8193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8193__$1,(4),ch);
} else {
if((state_val_8194 === (23))){
var state_8193__$1 = state_8193;
var statearr_8240_9555 = state_8193__$1;
(statearr_8240_9555[(2)] = null);

(statearr_8240_9555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8194 === (19))){
var inst_8169 = (state_8193[(11)]);
var inst_8114 = (state_8193[(8)]);
var inst_8171 = cljs.core.async.muxch_STAR_(inst_8169);
var state_8193__$1 = state_8193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8193__$1,(22),inst_8171,inst_8114);
} else {
if((state_val_8194 === (11))){
var inst_8124 = (state_8193[(13)]);
var inst_8138 = (state_8193[(10)]);
var inst_8138__$1 = cljs.core.seq(inst_8124);
var state_8193__$1 = (function (){var statearr_8246 = state_8193;
(statearr_8246[(10)] = inst_8138__$1);

return statearr_8246;
})();
if(inst_8138__$1){
var statearr_8248_9556 = state_8193__$1;
(statearr_8248_9556[(1)] = (13));

} else {
var statearr_8250_9557 = state_8193__$1;
(statearr_8250_9557[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8194 === (9))){
var inst_8161 = (state_8193[(2)]);
var state_8193__$1 = state_8193;
var statearr_8251_9558 = state_8193__$1;
(statearr_8251_9558[(2)] = inst_8161);

(statearr_8251_9558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8194 === (5))){
var inst_8121 = cljs.core.deref(mults);
var inst_8122 = cljs.core.vals(inst_8121);
var inst_8123 = cljs.core.seq(inst_8122);
var inst_8124 = inst_8123;
var inst_8125 = null;
var inst_8126 = (0);
var inst_8127 = (0);
var state_8193__$1 = (function (){var statearr_8255 = state_8193;
(statearr_8255[(12)] = inst_8125);

(statearr_8255[(13)] = inst_8124);

(statearr_8255[(14)] = inst_8126);

(statearr_8255[(15)] = inst_8127);

return statearr_8255;
})();
var statearr_8256_9559 = state_8193__$1;
(statearr_8256_9559[(2)] = null);

(statearr_8256_9559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8194 === (14))){
var state_8193__$1 = state_8193;
var statearr_8263_9560 = state_8193__$1;
(statearr_8263_9560[(2)] = null);

(statearr_8263_9560[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8194 === (16))){
var inst_8138 = (state_8193[(10)]);
var inst_8142 = cljs.core.chunk_first(inst_8138);
var inst_8143 = cljs.core.chunk_rest(inst_8138);
var inst_8144 = cljs.core.count(inst_8142);
var inst_8124 = inst_8143;
var inst_8125 = inst_8142;
var inst_8126 = inst_8144;
var inst_8127 = (0);
var state_8193__$1 = (function (){var statearr_8265 = state_8193;
(statearr_8265[(12)] = inst_8125);

(statearr_8265[(13)] = inst_8124);

(statearr_8265[(14)] = inst_8126);

(statearr_8265[(15)] = inst_8127);

return statearr_8265;
})();
var statearr_8266_9561 = state_8193__$1;
(statearr_8266_9561[(2)] = null);

(statearr_8266_9561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8194 === (10))){
var inst_8125 = (state_8193[(12)]);
var inst_8124 = (state_8193[(13)]);
var inst_8126 = (state_8193[(14)]);
var inst_8127 = (state_8193[(15)]);
var inst_8132 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_8125,inst_8127);
var inst_8133 = cljs.core.async.muxch_STAR_(inst_8132);
var inst_8134 = cljs.core.async.close_BANG_(inst_8133);
var inst_8135 = (inst_8127 + (1));
var tmp8257 = inst_8125;
var tmp8258 = inst_8124;
var tmp8259 = inst_8126;
var inst_8124__$1 = tmp8258;
var inst_8125__$1 = tmp8257;
var inst_8126__$1 = tmp8259;
var inst_8127__$1 = inst_8135;
var state_8193__$1 = (function (){var statearr_8269 = state_8193;
(statearr_8269[(12)] = inst_8125__$1);

(statearr_8269[(17)] = inst_8134);

(statearr_8269[(13)] = inst_8124__$1);

(statearr_8269[(14)] = inst_8126__$1);

(statearr_8269[(15)] = inst_8127__$1);

return statearr_8269;
})();
var statearr_8270_9562 = state_8193__$1;
(statearr_8270_9562[(2)] = null);

(statearr_8270_9562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8194 === (18))){
var inst_8154 = (state_8193[(2)]);
var state_8193__$1 = state_8193;
var statearr_8275_9563 = state_8193__$1;
(statearr_8275_9563[(2)] = inst_8154);

(statearr_8275_9563[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8194 === (8))){
var inst_8126 = (state_8193[(14)]);
var inst_8127 = (state_8193[(15)]);
var inst_8129 = (inst_8127 < inst_8126);
var inst_8130 = inst_8129;
var state_8193__$1 = state_8193;
if(cljs.core.truth_(inst_8130)){
var statearr_8277_9564 = state_8193__$1;
(statearr_8277_9564[(1)] = (10));

} else {
var statearr_8278_9565 = state_8193__$1;
(statearr_8278_9565[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6685__auto___9537,mults,ensure_mult,p))
;
return ((function (switch__6409__auto__,c__6685__auto___9537,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6410__auto__ = null;
var cljs$core$async$state_machine__6410__auto____0 = (function (){
var statearr_8280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8280[(0)] = cljs$core$async$state_machine__6410__auto__);

(statearr_8280[(1)] = (1));

return statearr_8280;
});
var cljs$core$async$state_machine__6410__auto____1 = (function (state_8193){
while(true){
var ret_value__6411__auto__ = (function (){try{while(true){
var result__6412__auto__ = switch__6409__auto__(state_8193);
if(cljs.core.keyword_identical_QMARK_(result__6412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6412__auto__;
}
break;
}
}catch (e8282){if((e8282 instanceof Object)){
var ex__6413__auto__ = e8282;
var statearr_8283_9566 = state_8193;
(statearr_8283_9566[(5)] = ex__6413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8282;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9567 = state_8193;
state_8193 = G__9567;
continue;
} else {
return ret_value__6411__auto__;
}
break;
}
});
cljs$core$async$state_machine__6410__auto__ = function(state_8193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6410__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6410__auto____1.call(this,state_8193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6410__auto____0;
cljs$core$async$state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6410__auto____1;
return cljs$core$async$state_machine__6410__auto__;
})()
;})(switch__6409__auto__,c__6685__auto___9537,mults,ensure_mult,p))
})();
var state__6687__auto__ = (function (){var statearr_8284 = (f__6686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6686__auto__.cljs$core$IFn$_invoke$arity$0() : f__6686__auto__.call(null));
(statearr_8284[(6)] = c__6685__auto___9537);

return statearr_8284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6687__auto__);
});})(c__6685__auto___9537,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__8291 = arguments.length;
switch (G__8291) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__8301 = arguments.length;
switch (G__8301) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__8309 = arguments.length;
switch (G__8309) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__6685__auto___9571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6685__auto___9571,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6686__auto__ = (function (){var switch__6409__auto__ = ((function (c__6685__auto___9571,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_8358){
var state_val_8359 = (state_8358[(1)]);
if((state_val_8359 === (7))){
var state_8358__$1 = state_8358;
var statearr_8361_9572 = state_8358__$1;
(statearr_8361_9572[(2)] = null);

(statearr_8361_9572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (1))){
var state_8358__$1 = state_8358;
var statearr_8362_9573 = state_8358__$1;
(statearr_8362_9573[(2)] = null);

(statearr_8362_9573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (4))){
var inst_8317 = (state_8358[(7)]);
var inst_8319 = (inst_8317 < cnt);
var state_8358__$1 = state_8358;
if(cljs.core.truth_(inst_8319)){
var statearr_8364_9574 = state_8358__$1;
(statearr_8364_9574[(1)] = (6));

} else {
var statearr_8365_9575 = state_8358__$1;
(statearr_8365_9575[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (15))){
var inst_8353 = (state_8358[(2)]);
var state_8358__$1 = state_8358;
var statearr_8367_9576 = state_8358__$1;
(statearr_8367_9576[(2)] = inst_8353);

(statearr_8367_9576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (13))){
var inst_8345 = cljs.core.async.close_BANG_(out);
var state_8358__$1 = state_8358;
var statearr_8368_9577 = state_8358__$1;
(statearr_8368_9577[(2)] = inst_8345);

(statearr_8368_9577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (6))){
var state_8358__$1 = state_8358;
var statearr_8369_9578 = state_8358__$1;
(statearr_8369_9578[(2)] = null);

(statearr_8369_9578[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (3))){
var inst_8356 = (state_8358[(2)]);
var state_8358__$1 = state_8358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8358__$1,inst_8356);
} else {
if((state_val_8359 === (12))){
var inst_8342 = (state_8358[(8)]);
var inst_8342__$1 = (state_8358[(2)]);
var inst_8343 = cljs.core.some(cljs.core.nil_QMARK_,inst_8342__$1);
var state_8358__$1 = (function (){var statearr_8377 = state_8358;
(statearr_8377[(8)] = inst_8342__$1);

return statearr_8377;
})();
if(cljs.core.truth_(inst_8343)){
var statearr_8378_9579 = state_8358__$1;
(statearr_8378_9579[(1)] = (13));

} else {
var statearr_8379_9580 = state_8358__$1;
(statearr_8379_9580[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (2))){
var inst_8316 = cljs.core.reset_BANG_(dctr,cnt);
var inst_8317 = (0);
var state_8358__$1 = (function (){var statearr_8380 = state_8358;
(statearr_8380[(7)] = inst_8317);

(statearr_8380[(9)] = inst_8316);

return statearr_8380;
})();
var statearr_8383_9581 = state_8358__$1;
(statearr_8383_9581[(2)] = null);

(statearr_8383_9581[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (11))){
var inst_8317 = (state_8358[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_8358,(10),Object,null,(9));
var inst_8328 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_8317) : chs__$1.call(null,inst_8317));
var inst_8329 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_8317) : done.call(null,inst_8317));
var inst_8330 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_8328,inst_8329);
var state_8358__$1 = state_8358;
var statearr_8387_9582 = state_8358__$1;
(statearr_8387_9582[(2)] = inst_8330);


cljs.core.async.impl.ioc_helpers.process_exception(state_8358__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (9))){
var inst_8317 = (state_8358[(7)]);
var inst_8332 = (state_8358[(2)]);
var inst_8333 = (inst_8317 + (1));
var inst_8317__$1 = inst_8333;
var state_8358__$1 = (function (){var statearr_8392 = state_8358;
(statearr_8392[(10)] = inst_8332);

(statearr_8392[(7)] = inst_8317__$1);

return statearr_8392;
})();
var statearr_8393_9583 = state_8358__$1;
(statearr_8393_9583[(2)] = null);

(statearr_8393_9583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (5))){
var inst_8339 = (state_8358[(2)]);
var state_8358__$1 = (function (){var statearr_8395 = state_8358;
(statearr_8395[(11)] = inst_8339);

return statearr_8395;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8358__$1,(12),dchan);
} else {
if((state_val_8359 === (14))){
var inst_8342 = (state_8358[(8)]);
var inst_8347 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_8342);
var state_8358__$1 = state_8358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8358__$1,(16),out,inst_8347);
} else {
if((state_val_8359 === (16))){
var inst_8349 = (state_8358[(2)]);
var state_8358__$1 = (function (){var statearr_8396 = state_8358;
(statearr_8396[(12)] = inst_8349);

return statearr_8396;
})();
var statearr_8399_9584 = state_8358__$1;
(statearr_8399_9584[(2)] = null);

(statearr_8399_9584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (10))){
var inst_8323 = (state_8358[(2)]);
var inst_8324 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_8358__$1 = (function (){var statearr_8402 = state_8358;
(statearr_8402[(13)] = inst_8323);

return statearr_8402;
})();
var statearr_8404_9585 = state_8358__$1;
(statearr_8404_9585[(2)] = inst_8324);


cljs.core.async.impl.ioc_helpers.process_exception(state_8358__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8359 === (8))){
var inst_8337 = (state_8358[(2)]);
var state_8358__$1 = state_8358;
var statearr_8405_9586 = state_8358__$1;
(statearr_8405_9586[(2)] = inst_8337);

(statearr_8405_9586[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6685__auto___9571,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6409__auto__,c__6685__auto___9571,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6410__auto__ = null;
var cljs$core$async$state_machine__6410__auto____0 = (function (){
var statearr_8411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8411[(0)] = cljs$core$async$state_machine__6410__auto__);

(statearr_8411[(1)] = (1));

return statearr_8411;
});
var cljs$core$async$state_machine__6410__auto____1 = (function (state_8358){
while(true){
var ret_value__6411__auto__ = (function (){try{while(true){
var result__6412__auto__ = switch__6409__auto__(state_8358);
if(cljs.core.keyword_identical_QMARK_(result__6412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6412__auto__;
}
break;
}
}catch (e8418){if((e8418 instanceof Object)){
var ex__6413__auto__ = e8418;
var statearr_8420_9587 = state_8358;
(statearr_8420_9587[(5)] = ex__6413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8418;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9588 = state_8358;
state_8358 = G__9588;
continue;
} else {
return ret_value__6411__auto__;
}
break;
}
});
cljs$core$async$state_machine__6410__auto__ = function(state_8358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6410__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6410__auto____1.call(this,state_8358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6410__auto____0;
cljs$core$async$state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6410__auto____1;
return cljs$core$async$state_machine__6410__auto__;
})()
;})(switch__6409__auto__,c__6685__auto___9571,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6687__auto__ = (function (){var statearr_8422 = (f__6686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6686__auto__.cljs$core$IFn$_invoke$arity$0() : f__6686__auto__.call(null));
(statearr_8422[(6)] = c__6685__auto___9571);

return statearr_8422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6687__auto__);
});})(c__6685__auto___9571,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__8429 = arguments.length;
switch (G__8429) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6685__auto___9590 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6685__auto___9590,out){
return (function (){
var f__6686__auto__ = (function (){var switch__6409__auto__ = ((function (c__6685__auto___9590,out){
return (function (state_8466){
var state_val_8467 = (state_8466[(1)]);
if((state_val_8467 === (7))){
var inst_8445 = (state_8466[(7)]);
var inst_8446 = (state_8466[(8)]);
var inst_8445__$1 = (state_8466[(2)]);
var inst_8446__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8445__$1,(0),null);
var inst_8447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8445__$1,(1),null);
var inst_8448 = (inst_8446__$1 == null);
var state_8466__$1 = (function (){var statearr_8472 = state_8466;
(statearr_8472[(7)] = inst_8445__$1);

(statearr_8472[(9)] = inst_8447);

(statearr_8472[(8)] = inst_8446__$1);

return statearr_8472;
})();
if(cljs.core.truth_(inst_8448)){
var statearr_8474_9591 = state_8466__$1;
(statearr_8474_9591[(1)] = (8));

} else {
var statearr_8475_9592 = state_8466__$1;
(statearr_8475_9592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8467 === (1))){
var inst_8435 = cljs.core.vec(chs);
var inst_8436 = inst_8435;
var state_8466__$1 = (function (){var statearr_8476 = state_8466;
(statearr_8476[(10)] = inst_8436);

return statearr_8476;
})();
var statearr_8477_9593 = state_8466__$1;
(statearr_8477_9593[(2)] = null);

(statearr_8477_9593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8467 === (4))){
var inst_8436 = (state_8466[(10)]);
var state_8466__$1 = state_8466;
return cljs.core.async.ioc_alts_BANG_(state_8466__$1,(7),inst_8436);
} else {
if((state_val_8467 === (6))){
var inst_8462 = (state_8466[(2)]);
var state_8466__$1 = state_8466;
var statearr_8478_9594 = state_8466__$1;
(statearr_8478_9594[(2)] = inst_8462);

(statearr_8478_9594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8467 === (3))){
var inst_8464 = (state_8466[(2)]);
var state_8466__$1 = state_8466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8466__$1,inst_8464);
} else {
if((state_val_8467 === (2))){
var inst_8436 = (state_8466[(10)]);
var inst_8438 = cljs.core.count(inst_8436);
var inst_8439 = (inst_8438 > (0));
var state_8466__$1 = state_8466;
if(cljs.core.truth_(inst_8439)){
var statearr_8480_9595 = state_8466__$1;
(statearr_8480_9595[(1)] = (4));

} else {
var statearr_8481_9596 = state_8466__$1;
(statearr_8481_9596[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8467 === (11))){
var inst_8436 = (state_8466[(10)]);
var inst_8455 = (state_8466[(2)]);
var tmp8479 = inst_8436;
var inst_8436__$1 = tmp8479;
var state_8466__$1 = (function (){var statearr_8482 = state_8466;
(statearr_8482[(10)] = inst_8436__$1);

(statearr_8482[(11)] = inst_8455);

return statearr_8482;
})();
var statearr_8483_9597 = state_8466__$1;
(statearr_8483_9597[(2)] = null);

(statearr_8483_9597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8467 === (9))){
var inst_8446 = (state_8466[(8)]);
var state_8466__$1 = state_8466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8466__$1,(11),out,inst_8446);
} else {
if((state_val_8467 === (5))){
var inst_8460 = cljs.core.async.close_BANG_(out);
var state_8466__$1 = state_8466;
var statearr_8489_9598 = state_8466__$1;
(statearr_8489_9598[(2)] = inst_8460);

(statearr_8489_9598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8467 === (10))){
var inst_8458 = (state_8466[(2)]);
var state_8466__$1 = state_8466;
var statearr_8490_9599 = state_8466__$1;
(statearr_8490_9599[(2)] = inst_8458);

(statearr_8490_9599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8467 === (8))){
var inst_8445 = (state_8466[(7)]);
var inst_8436 = (state_8466[(10)]);
var inst_8447 = (state_8466[(9)]);
var inst_8446 = (state_8466[(8)]);
var inst_8450 = (function (){var cs = inst_8436;
var vec__8441 = inst_8445;
var v = inst_8446;
var c = inst_8447;
return ((function (cs,vec__8441,v,c,inst_8445,inst_8436,inst_8447,inst_8446,state_val_8467,c__6685__auto___9590,out){
return (function (p1__8426_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__8426_SHARP_);
});
;})(cs,vec__8441,v,c,inst_8445,inst_8436,inst_8447,inst_8446,state_val_8467,c__6685__auto___9590,out))
})();
var inst_8451 = cljs.core.filterv(inst_8450,inst_8436);
var inst_8436__$1 = inst_8451;
var state_8466__$1 = (function (){var statearr_8495 = state_8466;
(statearr_8495[(10)] = inst_8436__$1);

return statearr_8495;
})();
var statearr_8496_9600 = state_8466__$1;
(statearr_8496_9600[(2)] = null);

(statearr_8496_9600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6685__auto___9590,out))
;
return ((function (switch__6409__auto__,c__6685__auto___9590,out){
return (function() {
var cljs$core$async$state_machine__6410__auto__ = null;
var cljs$core$async$state_machine__6410__auto____0 = (function (){
var statearr_8497 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8497[(0)] = cljs$core$async$state_machine__6410__auto__);

(statearr_8497[(1)] = (1));

return statearr_8497;
});
var cljs$core$async$state_machine__6410__auto____1 = (function (state_8466){
while(true){
var ret_value__6411__auto__ = (function (){try{while(true){
var result__6412__auto__ = switch__6409__auto__(state_8466);
if(cljs.core.keyword_identical_QMARK_(result__6412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6412__auto__;
}
break;
}
}catch (e8498){if((e8498 instanceof Object)){
var ex__6413__auto__ = e8498;
var statearr_8500_9601 = state_8466;
(statearr_8500_9601[(5)] = ex__6413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8498;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9602 = state_8466;
state_8466 = G__9602;
continue;
} else {
return ret_value__6411__auto__;
}
break;
}
});
cljs$core$async$state_machine__6410__auto__ = function(state_8466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6410__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6410__auto____1.call(this,state_8466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6410__auto____0;
cljs$core$async$state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6410__auto____1;
return cljs$core$async$state_machine__6410__auto__;
})()
;})(switch__6409__auto__,c__6685__auto___9590,out))
})();
var state__6687__auto__ = (function (){var statearr_8504 = (f__6686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6686__auto__.cljs$core$IFn$_invoke$arity$0() : f__6686__auto__.call(null));
(statearr_8504[(6)] = c__6685__auto___9590);

return statearr_8504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6687__auto__);
});})(c__6685__auto___9590,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__8513 = arguments.length;
switch (G__8513) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6685__auto___9604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6685__auto___9604,out){
return (function (){
var f__6686__auto__ = (function (){var switch__6409__auto__ = ((function (c__6685__auto___9604,out){
return (function (state_8538){
var state_val_8539 = (state_8538[(1)]);
if((state_val_8539 === (7))){
var inst_8520 = (state_8538[(7)]);
var inst_8520__$1 = (state_8538[(2)]);
var inst_8521 = (inst_8520__$1 == null);
var inst_8522 = cljs.core.not(inst_8521);
var state_8538__$1 = (function (){var statearr_8545 = state_8538;
(statearr_8545[(7)] = inst_8520__$1);

return statearr_8545;
})();
if(inst_8522){
var statearr_8546_9605 = state_8538__$1;
(statearr_8546_9605[(1)] = (8));

} else {
var statearr_8547_9606 = state_8538__$1;
(statearr_8547_9606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8539 === (1))){
var inst_8514 = (0);
var state_8538__$1 = (function (){var statearr_8548 = state_8538;
(statearr_8548[(8)] = inst_8514);

return statearr_8548;
})();
var statearr_8550_9607 = state_8538__$1;
(statearr_8550_9607[(2)] = null);

(statearr_8550_9607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8539 === (4))){
var state_8538__$1 = state_8538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8538__$1,(7),ch);
} else {
if((state_val_8539 === (6))){
var inst_8533 = (state_8538[(2)]);
var state_8538__$1 = state_8538;
var statearr_8555_9608 = state_8538__$1;
(statearr_8555_9608[(2)] = inst_8533);

(statearr_8555_9608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8539 === (3))){
var inst_8535 = (state_8538[(2)]);
var inst_8536 = cljs.core.async.close_BANG_(out);
var state_8538__$1 = (function (){var statearr_8558 = state_8538;
(statearr_8558[(9)] = inst_8535);

return statearr_8558;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_8538__$1,inst_8536);
} else {
if((state_val_8539 === (2))){
var inst_8514 = (state_8538[(8)]);
var inst_8516 = (inst_8514 < n);
var state_8538__$1 = state_8538;
if(cljs.core.truth_(inst_8516)){
var statearr_8566_9609 = state_8538__$1;
(statearr_8566_9609[(1)] = (4));

} else {
var statearr_8572_9610 = state_8538__$1;
(statearr_8572_9610[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8539 === (11))){
var inst_8514 = (state_8538[(8)]);
var inst_8525 = (state_8538[(2)]);
var inst_8526 = (inst_8514 + (1));
var inst_8514__$1 = inst_8526;
var state_8538__$1 = (function (){var statearr_8574 = state_8538;
(statearr_8574[(8)] = inst_8514__$1);

(statearr_8574[(10)] = inst_8525);

return statearr_8574;
})();
var statearr_8576_9611 = state_8538__$1;
(statearr_8576_9611[(2)] = null);

(statearr_8576_9611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8539 === (9))){
var state_8538__$1 = state_8538;
var statearr_8577_9612 = state_8538__$1;
(statearr_8577_9612[(2)] = null);

(statearr_8577_9612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8539 === (5))){
var state_8538__$1 = state_8538;
var statearr_8583_9613 = state_8538__$1;
(statearr_8583_9613[(2)] = null);

(statearr_8583_9613[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8539 === (10))){
var inst_8530 = (state_8538[(2)]);
var state_8538__$1 = state_8538;
var statearr_8588_9614 = state_8538__$1;
(statearr_8588_9614[(2)] = inst_8530);

(statearr_8588_9614[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8539 === (8))){
var inst_8520 = (state_8538[(7)]);
var state_8538__$1 = state_8538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8538__$1,(11),out,inst_8520);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6685__auto___9604,out))
;
return ((function (switch__6409__auto__,c__6685__auto___9604,out){
return (function() {
var cljs$core$async$state_machine__6410__auto__ = null;
var cljs$core$async$state_machine__6410__auto____0 = (function (){
var statearr_8595 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8595[(0)] = cljs$core$async$state_machine__6410__auto__);

(statearr_8595[(1)] = (1));

return statearr_8595;
});
var cljs$core$async$state_machine__6410__auto____1 = (function (state_8538){
while(true){
var ret_value__6411__auto__ = (function (){try{while(true){
var result__6412__auto__ = switch__6409__auto__(state_8538);
if(cljs.core.keyword_identical_QMARK_(result__6412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6412__auto__;
}
break;
}
}catch (e8598){if((e8598 instanceof Object)){
var ex__6413__auto__ = e8598;
var statearr_8603_9615 = state_8538;
(statearr_8603_9615[(5)] = ex__6413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8598;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9616 = state_8538;
state_8538 = G__9616;
continue;
} else {
return ret_value__6411__auto__;
}
break;
}
});
cljs$core$async$state_machine__6410__auto__ = function(state_8538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6410__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6410__auto____1.call(this,state_8538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6410__auto____0;
cljs$core$async$state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6410__auto____1;
return cljs$core$async$state_machine__6410__auto__;
})()
;})(switch__6409__auto__,c__6685__auto___9604,out))
})();
var state__6687__auto__ = (function (){var statearr_8607 = (f__6686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6686__auto__.cljs$core$IFn$_invoke$arity$0() : f__6686__auto__.call(null));
(statearr_8607[(6)] = c__6685__auto___9604);

return statearr_8607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6687__auto__);
});})(c__6685__auto___9604,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8611 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8611 = (function (f,ch,meta8612){
this.f = f;
this.ch = ch;
this.meta8612 = meta8612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8613,meta8612__$1){
var self__ = this;
var _8613__$1 = this;
return (new cljs.core.async.t_cljs$core$async8611(self__.f,self__.ch,meta8612__$1));
});

cljs.core.async.t_cljs$core$async8611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8613){
var self__ = this;
var _8613__$1 = this;
return self__.meta8612;
});

cljs.core.async.t_cljs$core$async8611.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8611.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async8611.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async8611.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8611.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8618 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8618 = (function (f,ch,meta8612,_,fn1,meta8619){
this.f = f;
this.ch = ch;
this.meta8612 = meta8612;
this._ = _;
this.fn1 = fn1;
this.meta8619 = meta8619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_8620,meta8619__$1){
var self__ = this;
var _8620__$1 = this;
return (new cljs.core.async.t_cljs$core$async8618(self__.f,self__.ch,self__.meta8612,self__._,self__.fn1,meta8619__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async8618.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_8620){
var self__ = this;
var _8620__$1 = this;
return self__.meta8619;
});})(___$1))
;

cljs.core.async.t_cljs$core$async8618.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8618.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async8618.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async8618.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__8608_SHARP_){
var G__8629 = (((p1__8608_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__8608_SHARP_) : self__.f.call(null,p1__8608_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__8629) : f1.call(null,G__8629));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async8618.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8612","meta8612",1776722952,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async8611","cljs.core.async/t_cljs$core$async8611",-1232454708,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta8619","meta8619",-1494202056,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async8618.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8618";

cljs.core.async.t_cljs$core$async8618.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async8618");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8618.
 */
cljs.core.async.__GT_t_cljs$core$async8618 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async8618(f__$1,ch__$1,meta8612__$1,___$2,fn1__$1,meta8619){
return (new cljs.core.async.t_cljs$core$async8618(f__$1,ch__$1,meta8612__$1,___$2,fn1__$1,meta8619));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async8618(self__.f,self__.ch,self__.meta8612,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__8637 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__8637) : self__.f.call(null,G__8637));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async8611.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8611.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async8611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8612","meta8612",1776722952,null)], null);
});

cljs.core.async.t_cljs$core$async8611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8611";

cljs.core.async.t_cljs$core$async8611.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async8611");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8611.
 */
cljs.core.async.__GT_t_cljs$core$async8611 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async8611(f__$1,ch__$1,meta8612){
return (new cljs.core.async.t_cljs$core$async8611(f__$1,ch__$1,meta8612));
});

}

return (new cljs.core.async.t_cljs$core$async8611(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8643 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8643 = (function (f,ch,meta8644){
this.f = f;
this.ch = ch;
this.meta8644 = meta8644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8645,meta8644__$1){
var self__ = this;
var _8645__$1 = this;
return (new cljs.core.async.t_cljs$core$async8643(self__.f,self__.ch,meta8644__$1));
});

cljs.core.async.t_cljs$core$async8643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8645){
var self__ = this;
var _8645__$1 = this;
return self__.meta8644;
});

cljs.core.async.t_cljs$core$async8643.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8643.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async8643.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8643.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async8643.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8643.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async8643.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8644","meta8644",2069341787,null)], null);
});

cljs.core.async.t_cljs$core$async8643.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8643";

cljs.core.async.t_cljs$core$async8643.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async8643");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8643.
 */
cljs.core.async.__GT_t_cljs$core$async8643 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async8643(f__$1,ch__$1,meta8644){
return (new cljs.core.async.t_cljs$core$async8643(f__$1,ch__$1,meta8644));
});

}

return (new cljs.core.async.t_cljs$core$async8643(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8647 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8647 = (function (p,ch,meta8648){
this.p = p;
this.ch = ch;
this.meta8648 = meta8648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8649,meta8648__$1){
var self__ = this;
var _8649__$1 = this;
return (new cljs.core.async.t_cljs$core$async8647(self__.p,self__.ch,meta8648__$1));
});

cljs.core.async.t_cljs$core$async8647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8649){
var self__ = this;
var _8649__$1 = this;
return self__.meta8648;
});

cljs.core.async.t_cljs$core$async8647.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8647.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async8647.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async8647.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8647.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async8647.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8647.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async8647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8648","meta8648",420975195,null)], null);
});

cljs.core.async.t_cljs$core$async8647.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8647";

cljs.core.async.t_cljs$core$async8647.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async8647");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8647.
 */
cljs.core.async.__GT_t_cljs$core$async8647 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async8647(p__$1,ch__$1,meta8648){
return (new cljs.core.async.t_cljs$core$async8647(p__$1,ch__$1,meta8648));
});

}

return (new cljs.core.async.t_cljs$core$async8647(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__8697 = arguments.length;
switch (G__8697) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6685__auto___9618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6685__auto___9618,out){
return (function (){
var f__6686__auto__ = (function (){var switch__6409__auto__ = ((function (c__6685__auto___9618,out){
return (function (state_8745){
var state_val_8746 = (state_8745[(1)]);
if((state_val_8746 === (7))){
var inst_8741 = (state_8745[(2)]);
var state_8745__$1 = state_8745;
var statearr_8754_9619 = state_8745__$1;
(statearr_8754_9619[(2)] = inst_8741);

(statearr_8754_9619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8746 === (1))){
var state_8745__$1 = state_8745;
var statearr_8755_9620 = state_8745__$1;
(statearr_8755_9620[(2)] = null);

(statearr_8755_9620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8746 === (4))){
var inst_8724 = (state_8745[(7)]);
var inst_8724__$1 = (state_8745[(2)]);
var inst_8725 = (inst_8724__$1 == null);
var state_8745__$1 = (function (){var statearr_8756 = state_8745;
(statearr_8756[(7)] = inst_8724__$1);

return statearr_8756;
})();
if(cljs.core.truth_(inst_8725)){
var statearr_8758_9621 = state_8745__$1;
(statearr_8758_9621[(1)] = (5));

} else {
var statearr_8759_9622 = state_8745__$1;
(statearr_8759_9622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8746 === (6))){
var inst_8724 = (state_8745[(7)]);
var inst_8729 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_8724) : p.call(null,inst_8724));
var state_8745__$1 = state_8745;
if(cljs.core.truth_(inst_8729)){
var statearr_8760_9623 = state_8745__$1;
(statearr_8760_9623[(1)] = (8));

} else {
var statearr_8761_9624 = state_8745__$1;
(statearr_8761_9624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8746 === (3))){
var inst_8743 = (state_8745[(2)]);
var state_8745__$1 = state_8745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8745__$1,inst_8743);
} else {
if((state_val_8746 === (2))){
var state_8745__$1 = state_8745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8745__$1,(4),ch);
} else {
if((state_val_8746 === (11))){
var inst_8735 = (state_8745[(2)]);
var state_8745__$1 = state_8745;
var statearr_8763_9625 = state_8745__$1;
(statearr_8763_9625[(2)] = inst_8735);

(statearr_8763_9625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8746 === (9))){
var state_8745__$1 = state_8745;
var statearr_8764_9626 = state_8745__$1;
(statearr_8764_9626[(2)] = null);

(statearr_8764_9626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8746 === (5))){
var inst_8727 = cljs.core.async.close_BANG_(out);
var state_8745__$1 = state_8745;
var statearr_8765_9627 = state_8745__$1;
(statearr_8765_9627[(2)] = inst_8727);

(statearr_8765_9627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8746 === (10))){
var inst_8738 = (state_8745[(2)]);
var state_8745__$1 = (function (){var statearr_8766 = state_8745;
(statearr_8766[(8)] = inst_8738);

return statearr_8766;
})();
var statearr_8767_9628 = state_8745__$1;
(statearr_8767_9628[(2)] = null);

(statearr_8767_9628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8746 === (8))){
var inst_8724 = (state_8745[(7)]);
var state_8745__$1 = state_8745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8745__$1,(11),out,inst_8724);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6685__auto___9618,out))
;
return ((function (switch__6409__auto__,c__6685__auto___9618,out){
return (function() {
var cljs$core$async$state_machine__6410__auto__ = null;
var cljs$core$async$state_machine__6410__auto____0 = (function (){
var statearr_8769 = [null,null,null,null,null,null,null,null,null];
(statearr_8769[(0)] = cljs$core$async$state_machine__6410__auto__);

(statearr_8769[(1)] = (1));

return statearr_8769;
});
var cljs$core$async$state_machine__6410__auto____1 = (function (state_8745){
while(true){
var ret_value__6411__auto__ = (function (){try{while(true){
var result__6412__auto__ = switch__6409__auto__(state_8745);
if(cljs.core.keyword_identical_QMARK_(result__6412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6412__auto__;
}
break;
}
}catch (e8770){if((e8770 instanceof Object)){
var ex__6413__auto__ = e8770;
var statearr_8771_9629 = state_8745;
(statearr_8771_9629[(5)] = ex__6413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8770;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9630 = state_8745;
state_8745 = G__9630;
continue;
} else {
return ret_value__6411__auto__;
}
break;
}
});
cljs$core$async$state_machine__6410__auto__ = function(state_8745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6410__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6410__auto____1.call(this,state_8745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6410__auto____0;
cljs$core$async$state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6410__auto____1;
return cljs$core$async$state_machine__6410__auto__;
})()
;})(switch__6409__auto__,c__6685__auto___9618,out))
})();
var state__6687__auto__ = (function (){var statearr_8772 = (f__6686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6686__auto__.cljs$core$IFn$_invoke$arity$0() : f__6686__auto__.call(null));
(statearr_8772[(6)] = c__6685__auto___9618);

return statearr_8772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6687__auto__);
});})(c__6685__auto___9618,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__8782 = arguments.length;
switch (G__8782) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__6685__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6685__auto__){
return (function (){
var f__6686__auto__ = (function (){var switch__6409__auto__ = ((function (c__6685__auto__){
return (function (state_8855){
var state_val_8856 = (state_8855[(1)]);
if((state_val_8856 === (7))){
var inst_8851 = (state_8855[(2)]);
var state_8855__$1 = state_8855;
var statearr_8860_9632 = state_8855__$1;
(statearr_8860_9632[(2)] = inst_8851);

(statearr_8860_9632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8856 === (20))){
var inst_8817 = (state_8855[(7)]);
var inst_8830 = (state_8855[(2)]);
var inst_8832 = cljs.core.next(inst_8817);
var inst_8801 = inst_8832;
var inst_8802 = null;
var inst_8803 = (0);
var inst_8804 = (0);
var state_8855__$1 = (function (){var statearr_8863 = state_8855;
(statearr_8863[(8)] = inst_8803);

(statearr_8863[(9)] = inst_8830);

(statearr_8863[(10)] = inst_8804);

(statearr_8863[(11)] = inst_8801);

(statearr_8863[(12)] = inst_8802);

return statearr_8863;
})();
var statearr_8866_9633 = state_8855__$1;
(statearr_8866_9633[(2)] = null);

(statearr_8866_9633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8856 === (1))){
var state_8855__$1 = state_8855;
var statearr_8868_9634 = state_8855__$1;
(statearr_8868_9634[(2)] = null);

(statearr_8868_9634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8856 === (4))){
var inst_8790 = (state_8855[(13)]);
var inst_8790__$1 = (state_8855[(2)]);
var inst_8791 = (inst_8790__$1 == null);
var state_8855__$1 = (function (){var statearr_8869 = state_8855;
(statearr_8869[(13)] = inst_8790__$1);

return statearr_8869;
})();
if(cljs.core.truth_(inst_8791)){
var statearr_8870_9635 = state_8855__$1;
(statearr_8870_9635[(1)] = (5));

} else {
var statearr_8873_9636 = state_8855__$1;
(statearr_8873_9636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8856 === (15))){
var state_8855__$1 = state_8855;
var statearr_8878_9637 = state_8855__$1;
(statearr_8878_9637[(2)] = null);

(statearr_8878_9637[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8856 === (21))){
var state_8855__$1 = state_8855;
var statearr_8879_9638 = state_8855__$1;
(statearr_8879_9638[(2)] = null);

(statearr_8879_9638[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8856 === (13))){
var inst_8803 = (state_8855[(8)]);
var inst_8804 = (state_8855[(10)]);
var inst_8801 = (state_8855[(11)]);
var inst_8802 = (state_8855[(12)]);
var inst_8811 = (state_8855[(2)]);
var inst_8812 = (inst_8804 + (1));
var tmp8875 = inst_8803;
var tmp8876 = inst_8801;
var tmp8877 = inst_8802;
var inst_8801__$1 = tmp8876;
var inst_8802__$1 = tmp8877;
var inst_8803__$1 = tmp8875;
var inst_8804__$1 = inst_8812;
var state_8855__$1 = (function (){var statearr_8883 = state_8855;
(statearr_8883[(8)] = inst_8803__$1);

(statearr_8883[(10)] = inst_8804__$1);

(statearr_8883[(11)] = inst_8801__$1);

(statearr_8883[(12)] = inst_8802__$1);

(statearr_8883[(14)] = inst_8811);

return statearr_8883;
})();
var statearr_8884_9639 = state_8855__$1;
(statearr_8884_9639[(2)] = null);

(statearr_8884_9639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8856 === (22))){
var state_8855__$1 = state_8855;
var statearr_8887_9640 = state_8855__$1;
(statearr_8887_9640[(2)] = null);

(statearr_8887_9640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8856 === (6))){
var inst_8790 = (state_8855[(13)]);
var inst_8799 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_8790) : f.call(null,inst_8790));
var inst_8800 = cljs.core.seq(inst_8799);
var inst_8801 = inst_8800;
var inst_8802 = null;
var inst_8803 = (0);
var inst_8804 = (0);
var state_8855__$1 = (function (){var statearr_8889 = state_8855;
(statearr_8889[(8)] = inst_8803);

(statearr_8889[(10)] = inst_8804);

(statearr_8889[(11)] = inst_8801);

(statearr_8889[(12)] = inst_8802);

return statearr_8889;
})();
var statearr_8890_9641 = state_8855__$1;
(statearr_8890_9641[(2)] = null);

(statearr_8890_9641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8856 === (17))){
var inst_8817 = (state_8855[(7)]);
var inst_8822 = cljs.core.chunk_first(inst_8817);
var inst_8823 = cljs.core.chunk_rest(inst_8817);
var inst_8824 = cljs.core.count(inst_8822);
var inst_8801 = inst_8823;
var inst_8802 = inst_8822;
var inst_8803 = inst_8824;
var inst_8804 = (0);
var state_8855__$1 = (function (){var statearr_8891 = state_8855;
(statearr_8891[(8)] = inst_8803);

(statearr_8891[(10)] = inst_8804);

(statearr_8891[(11)] = inst_8801);

(statearr_8891[(12)] = inst_8802);

return statearr_8891;
})();
var statearr_8892_9642 = state_8855__$1;
(statearr_8892_9642[(2)] = null);

(statearr_8892_9642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8856 === (3))){
var inst_8853 = (state_8855[(2)]);
var state_8855__$1 = state_8855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8855__$1,inst_8853);
} else {
if((state_val_8856 === (12))){
var inst_8840 = (state_8855[(2)]);
var state_8855__$1 = state_8855;
var statearr_8893_9643 = state_8855__$1;
(statearr_8893_9643[(2)] = inst_8840);

(statearr_8893_9643[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8856 === (2))){
var state_8855__$1 = state_8855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8855__$1,(4),in$);
} else {
if((state_val_8856 === (23))){
var inst_8849 = (state_8855[(2)]);
var state_8855__$1 = state_8855;
var statearr_8897_9644 = state_8855__$1;
(statearr_8897_9644[(2)] = inst_8849);

(statearr_8897_9644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8856 === (19))){
var inst_8835 = (state_8855[(2)]);
var state_8855__$1 = state_8855;
var statearr_8901_9645 = state_8855__$1;
(statearr_8901_9645[(2)] = inst_8835);

(statearr_8901_9645[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8856 === (11))){
var inst_8817 = (state_8855[(7)]);
var inst_8801 = (state_8855[(11)]);
var inst_8817__$1 = cljs.core.seq(inst_8801);
var state_8855__$1 = (function (){var statearr_8905 = state_8855;
(statearr_8905[(7)] = inst_8817__$1);

return statearr_8905;
})();
if(inst_8817__$1){
var statearr_8906_9646 = state_8855__$1;
(statearr_8906_9646[(1)] = (14));

} else {
var statearr_8907_9647 = state_8855__$1;
(statearr_8907_9647[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8856 === (9))){
var inst_8843 = (state_8855[(2)]);
var inst_8844 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_8855__$1 = (function (){var statearr_8908 = state_8855;
(statearr_8908[(15)] = inst_8843);

return statearr_8908;
})();
if(cljs.core.truth_(inst_8844)){
var statearr_8909_9648 = state_8855__$1;
(statearr_8909_9648[(1)] = (21));

} else {
var statearr_8910_9649 = state_8855__$1;
(statearr_8910_9649[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8856 === (5))){
var inst_8793 = cljs.core.async.close_BANG_(out);
var state_8855__$1 = state_8855;
var statearr_8911_9650 = state_8855__$1;
(statearr_8911_9650[(2)] = inst_8793);

(statearr_8911_9650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8856 === (14))){
var inst_8817 = (state_8855[(7)]);
var inst_8820 = cljs.core.chunked_seq_QMARK_(inst_8817);
var state_8855__$1 = state_8855;
if(inst_8820){
var statearr_8912_9651 = state_8855__$1;
(statearr_8912_9651[(1)] = (17));

} else {
var statearr_8913_9652 = state_8855__$1;
(statearr_8913_9652[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8856 === (16))){
var inst_8838 = (state_8855[(2)]);
var state_8855__$1 = state_8855;
var statearr_8914_9653 = state_8855__$1;
(statearr_8914_9653[(2)] = inst_8838);

(statearr_8914_9653[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8856 === (10))){
var inst_8804 = (state_8855[(10)]);
var inst_8802 = (state_8855[(12)]);
var inst_8809 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_8802,inst_8804);
var state_8855__$1 = state_8855;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8855__$1,(13),out,inst_8809);
} else {
if((state_val_8856 === (18))){
var inst_8817 = (state_8855[(7)]);
var inst_8827 = cljs.core.first(inst_8817);
var state_8855__$1 = state_8855;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8855__$1,(20),out,inst_8827);
} else {
if((state_val_8856 === (8))){
var inst_8803 = (state_8855[(8)]);
var inst_8804 = (state_8855[(10)]);
var inst_8806 = (inst_8804 < inst_8803);
var inst_8807 = inst_8806;
var state_8855__$1 = state_8855;
if(cljs.core.truth_(inst_8807)){
var statearr_8915_9654 = state_8855__$1;
(statearr_8915_9654[(1)] = (10));

} else {
var statearr_8916_9655 = state_8855__$1;
(statearr_8916_9655[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6685__auto__))
;
return ((function (switch__6409__auto__,c__6685__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6410__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6410__auto____0 = (function (){
var statearr_8917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8917[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6410__auto__);

(statearr_8917[(1)] = (1));

return statearr_8917;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6410__auto____1 = (function (state_8855){
while(true){
var ret_value__6411__auto__ = (function (){try{while(true){
var result__6412__auto__ = switch__6409__auto__(state_8855);
if(cljs.core.keyword_identical_QMARK_(result__6412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6412__auto__;
}
break;
}
}catch (e8918){if((e8918 instanceof Object)){
var ex__6413__auto__ = e8918;
var statearr_8919_9656 = state_8855;
(statearr_8919_9656[(5)] = ex__6413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8918;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9657 = state_8855;
state_8855 = G__9657;
continue;
} else {
return ret_value__6411__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6410__auto__ = function(state_8855){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6410__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6410__auto____1.call(this,state_8855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6410__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6410__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6410__auto__;
})()
;})(switch__6409__auto__,c__6685__auto__))
})();
var state__6687__auto__ = (function (){var statearr_8920 = (f__6686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6686__auto__.cljs$core$IFn$_invoke$arity$0() : f__6686__auto__.call(null));
(statearr_8920[(6)] = c__6685__auto__);

return statearr_8920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6687__auto__);
});})(c__6685__auto__))
);

return c__6685__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__8922 = arguments.length;
switch (G__8922) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__8924 = arguments.length;
switch (G__8924) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__8926 = arguments.length;
switch (G__8926) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6685__auto___9661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6685__auto___9661,out){
return (function (){
var f__6686__auto__ = (function (){var switch__6409__auto__ = ((function (c__6685__auto___9661,out){
return (function (state_8950){
var state_val_8951 = (state_8950[(1)]);
if((state_val_8951 === (7))){
var inst_8945 = (state_8950[(2)]);
var state_8950__$1 = state_8950;
var statearr_8952_9662 = state_8950__$1;
(statearr_8952_9662[(2)] = inst_8945);

(statearr_8952_9662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (1))){
var inst_8927 = null;
var state_8950__$1 = (function (){var statearr_8953 = state_8950;
(statearr_8953[(7)] = inst_8927);

return statearr_8953;
})();
var statearr_8954_9663 = state_8950__$1;
(statearr_8954_9663[(2)] = null);

(statearr_8954_9663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (4))){
var inst_8930 = (state_8950[(8)]);
var inst_8930__$1 = (state_8950[(2)]);
var inst_8931 = (inst_8930__$1 == null);
var inst_8932 = cljs.core.not(inst_8931);
var state_8950__$1 = (function (){var statearr_8955 = state_8950;
(statearr_8955[(8)] = inst_8930__$1);

return statearr_8955;
})();
if(inst_8932){
var statearr_8956_9664 = state_8950__$1;
(statearr_8956_9664[(1)] = (5));

} else {
var statearr_8957_9665 = state_8950__$1;
(statearr_8957_9665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (6))){
var state_8950__$1 = state_8950;
var statearr_8958_9666 = state_8950__$1;
(statearr_8958_9666[(2)] = null);

(statearr_8958_9666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (3))){
var inst_8947 = (state_8950[(2)]);
var inst_8948 = cljs.core.async.close_BANG_(out);
var state_8950__$1 = (function (){var statearr_8959 = state_8950;
(statearr_8959[(9)] = inst_8947);

return statearr_8959;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_8950__$1,inst_8948);
} else {
if((state_val_8951 === (2))){
var state_8950__$1 = state_8950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8950__$1,(4),ch);
} else {
if((state_val_8951 === (11))){
var inst_8930 = (state_8950[(8)]);
var inst_8939 = (state_8950[(2)]);
var inst_8927 = inst_8930;
var state_8950__$1 = (function (){var statearr_8960 = state_8950;
(statearr_8960[(7)] = inst_8927);

(statearr_8960[(10)] = inst_8939);

return statearr_8960;
})();
var statearr_8961_9667 = state_8950__$1;
(statearr_8961_9667[(2)] = null);

(statearr_8961_9667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (9))){
var inst_8930 = (state_8950[(8)]);
var state_8950__$1 = state_8950;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8950__$1,(11),out,inst_8930);
} else {
if((state_val_8951 === (5))){
var inst_8927 = (state_8950[(7)]);
var inst_8930 = (state_8950[(8)]);
var inst_8934 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_8930,inst_8927);
var state_8950__$1 = state_8950;
if(inst_8934){
var statearr_8963_9668 = state_8950__$1;
(statearr_8963_9668[(1)] = (8));

} else {
var statearr_8964_9669 = state_8950__$1;
(statearr_8964_9669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (10))){
var inst_8942 = (state_8950[(2)]);
var state_8950__$1 = state_8950;
var statearr_8965_9670 = state_8950__$1;
(statearr_8965_9670[(2)] = inst_8942);

(statearr_8965_9670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8951 === (8))){
var inst_8927 = (state_8950[(7)]);
var tmp8962 = inst_8927;
var inst_8927__$1 = tmp8962;
var state_8950__$1 = (function (){var statearr_8966 = state_8950;
(statearr_8966[(7)] = inst_8927__$1);

return statearr_8966;
})();
var statearr_8967_9671 = state_8950__$1;
(statearr_8967_9671[(2)] = null);

(statearr_8967_9671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6685__auto___9661,out))
;
return ((function (switch__6409__auto__,c__6685__auto___9661,out){
return (function() {
var cljs$core$async$state_machine__6410__auto__ = null;
var cljs$core$async$state_machine__6410__auto____0 = (function (){
var statearr_8968 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8968[(0)] = cljs$core$async$state_machine__6410__auto__);

(statearr_8968[(1)] = (1));

return statearr_8968;
});
var cljs$core$async$state_machine__6410__auto____1 = (function (state_8950){
while(true){
var ret_value__6411__auto__ = (function (){try{while(true){
var result__6412__auto__ = switch__6409__auto__(state_8950);
if(cljs.core.keyword_identical_QMARK_(result__6412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6412__auto__;
}
break;
}
}catch (e8969){if((e8969 instanceof Object)){
var ex__6413__auto__ = e8969;
var statearr_8970_9672 = state_8950;
(statearr_8970_9672[(5)] = ex__6413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8969;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9673 = state_8950;
state_8950 = G__9673;
continue;
} else {
return ret_value__6411__auto__;
}
break;
}
});
cljs$core$async$state_machine__6410__auto__ = function(state_8950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6410__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6410__auto____1.call(this,state_8950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6410__auto____0;
cljs$core$async$state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6410__auto____1;
return cljs$core$async$state_machine__6410__auto__;
})()
;})(switch__6409__auto__,c__6685__auto___9661,out))
})();
var state__6687__auto__ = (function (){var statearr_8974 = (f__6686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6686__auto__.cljs$core$IFn$_invoke$arity$0() : f__6686__auto__.call(null));
(statearr_8974[(6)] = c__6685__auto___9661);

return statearr_8974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6687__auto__);
});})(c__6685__auto___9661,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__8976 = arguments.length;
switch (G__8976) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6685__auto___9675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6685__auto___9675,out){
return (function (){
var f__6686__auto__ = (function (){var switch__6409__auto__ = ((function (c__6685__auto___9675,out){
return (function (state_9015){
var state_val_9016 = (state_9015[(1)]);
if((state_val_9016 === (7))){
var inst_9011 = (state_9015[(2)]);
var state_9015__$1 = state_9015;
var statearr_9017_9676 = state_9015__$1;
(statearr_9017_9676[(2)] = inst_9011);

(statearr_9017_9676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9016 === (1))){
var inst_8978 = (new Array(n));
var inst_8979 = inst_8978;
var inst_8980 = (0);
var state_9015__$1 = (function (){var statearr_9018 = state_9015;
(statearr_9018[(7)] = inst_8980);

(statearr_9018[(8)] = inst_8979);

return statearr_9018;
})();
var statearr_9019_9677 = state_9015__$1;
(statearr_9019_9677[(2)] = null);

(statearr_9019_9677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9016 === (4))){
var inst_8983 = (state_9015[(9)]);
var inst_8983__$1 = (state_9015[(2)]);
var inst_8984 = (inst_8983__$1 == null);
var inst_8985 = cljs.core.not(inst_8984);
var state_9015__$1 = (function (){var statearr_9020 = state_9015;
(statearr_9020[(9)] = inst_8983__$1);

return statearr_9020;
})();
if(inst_8985){
var statearr_9021_9678 = state_9015__$1;
(statearr_9021_9678[(1)] = (5));

} else {
var statearr_9023_9679 = state_9015__$1;
(statearr_9023_9679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9016 === (15))){
var inst_9005 = (state_9015[(2)]);
var state_9015__$1 = state_9015;
var statearr_9024_9680 = state_9015__$1;
(statearr_9024_9680[(2)] = inst_9005);

(statearr_9024_9680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9016 === (13))){
var state_9015__$1 = state_9015;
var statearr_9025_9681 = state_9015__$1;
(statearr_9025_9681[(2)] = null);

(statearr_9025_9681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9016 === (6))){
var inst_8980 = (state_9015[(7)]);
var inst_9001 = (inst_8980 > (0));
var state_9015__$1 = state_9015;
if(cljs.core.truth_(inst_9001)){
var statearr_9027_9682 = state_9015__$1;
(statearr_9027_9682[(1)] = (12));

} else {
var statearr_9028_9683 = state_9015__$1;
(statearr_9028_9683[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9016 === (3))){
var inst_9013 = (state_9015[(2)]);
var state_9015__$1 = state_9015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9015__$1,inst_9013);
} else {
if((state_val_9016 === (12))){
var inst_8979 = (state_9015[(8)]);
var inst_9003 = cljs.core.vec(inst_8979);
var state_9015__$1 = state_9015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9015__$1,(15),out,inst_9003);
} else {
if((state_val_9016 === (2))){
var state_9015__$1 = state_9015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9015__$1,(4),ch);
} else {
if((state_val_9016 === (11))){
var inst_8995 = (state_9015[(2)]);
var inst_8996 = (new Array(n));
var inst_8979 = inst_8996;
var inst_8980 = (0);
var state_9015__$1 = (function (){var statearr_9030 = state_9015;
(statearr_9030[(10)] = inst_8995);

(statearr_9030[(7)] = inst_8980);

(statearr_9030[(8)] = inst_8979);

return statearr_9030;
})();
var statearr_9031_9684 = state_9015__$1;
(statearr_9031_9684[(2)] = null);

(statearr_9031_9684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9016 === (9))){
var inst_8979 = (state_9015[(8)]);
var inst_8993 = cljs.core.vec(inst_8979);
var state_9015__$1 = state_9015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9015__$1,(11),out,inst_8993);
} else {
if((state_val_9016 === (5))){
var inst_8983 = (state_9015[(9)]);
var inst_8980 = (state_9015[(7)]);
var inst_8988 = (state_9015[(11)]);
var inst_8979 = (state_9015[(8)]);
var inst_8987 = (inst_8979[inst_8980] = inst_8983);
var inst_8988__$1 = (inst_8980 + (1));
var inst_8989 = (inst_8988__$1 < n);
var state_9015__$1 = (function (){var statearr_9034 = state_9015;
(statearr_9034[(11)] = inst_8988__$1);

(statearr_9034[(12)] = inst_8987);

return statearr_9034;
})();
if(cljs.core.truth_(inst_8989)){
var statearr_9035_9685 = state_9015__$1;
(statearr_9035_9685[(1)] = (8));

} else {
var statearr_9036_9686 = state_9015__$1;
(statearr_9036_9686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9016 === (14))){
var inst_9008 = (state_9015[(2)]);
var inst_9009 = cljs.core.async.close_BANG_(out);
var state_9015__$1 = (function (){var statearr_9038 = state_9015;
(statearr_9038[(13)] = inst_9008);

return statearr_9038;
})();
var statearr_9039_9687 = state_9015__$1;
(statearr_9039_9687[(2)] = inst_9009);

(statearr_9039_9687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9016 === (10))){
var inst_8999 = (state_9015[(2)]);
var state_9015__$1 = state_9015;
var statearr_9040_9688 = state_9015__$1;
(statearr_9040_9688[(2)] = inst_8999);

(statearr_9040_9688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9016 === (8))){
var inst_8988 = (state_9015[(11)]);
var inst_8979 = (state_9015[(8)]);
var tmp9037 = inst_8979;
var inst_8979__$1 = tmp9037;
var inst_8980 = inst_8988;
var state_9015__$1 = (function (){var statearr_9042 = state_9015;
(statearr_9042[(7)] = inst_8980);

(statearr_9042[(8)] = inst_8979__$1);

return statearr_9042;
})();
var statearr_9043_9689 = state_9015__$1;
(statearr_9043_9689[(2)] = null);

(statearr_9043_9689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6685__auto___9675,out))
;
return ((function (switch__6409__auto__,c__6685__auto___9675,out){
return (function() {
var cljs$core$async$state_machine__6410__auto__ = null;
var cljs$core$async$state_machine__6410__auto____0 = (function (){
var statearr_9045 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9045[(0)] = cljs$core$async$state_machine__6410__auto__);

(statearr_9045[(1)] = (1));

return statearr_9045;
});
var cljs$core$async$state_machine__6410__auto____1 = (function (state_9015){
while(true){
var ret_value__6411__auto__ = (function (){try{while(true){
var result__6412__auto__ = switch__6409__auto__(state_9015);
if(cljs.core.keyword_identical_QMARK_(result__6412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6412__auto__;
}
break;
}
}catch (e9046){if((e9046 instanceof Object)){
var ex__6413__auto__ = e9046;
var statearr_9047_9690 = state_9015;
(statearr_9047_9690[(5)] = ex__6413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9046;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9691 = state_9015;
state_9015 = G__9691;
continue;
} else {
return ret_value__6411__auto__;
}
break;
}
});
cljs$core$async$state_machine__6410__auto__ = function(state_9015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6410__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6410__auto____1.call(this,state_9015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6410__auto____0;
cljs$core$async$state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6410__auto____1;
return cljs$core$async$state_machine__6410__auto__;
})()
;})(switch__6409__auto__,c__6685__auto___9675,out))
})();
var state__6687__auto__ = (function (){var statearr_9049 = (f__6686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6686__auto__.cljs$core$IFn$_invoke$arity$0() : f__6686__auto__.call(null));
(statearr_9049[(6)] = c__6685__auto___9675);

return statearr_9049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6687__auto__);
});})(c__6685__auto___9675,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__9051 = arguments.length;
switch (G__9051) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6685__auto___9693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6685__auto___9693,out){
return (function (){
var f__6686__auto__ = (function (){var switch__6409__auto__ = ((function (c__6685__auto___9693,out){
return (function (state_9099){
var state_val_9100 = (state_9099[(1)]);
if((state_val_9100 === (7))){
var inst_9095 = (state_9099[(2)]);
var state_9099__$1 = state_9099;
var statearr_9101_9694 = state_9099__$1;
(statearr_9101_9694[(2)] = inst_9095);

(statearr_9101_9694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9100 === (1))){
var inst_9058 = [];
var inst_9059 = inst_9058;
var inst_9060 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_9099__$1 = (function (){var statearr_9103 = state_9099;
(statearr_9103[(7)] = inst_9060);

(statearr_9103[(8)] = inst_9059);

return statearr_9103;
})();
var statearr_9104_9695 = state_9099__$1;
(statearr_9104_9695[(2)] = null);

(statearr_9104_9695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9100 === (4))){
var inst_9063 = (state_9099[(9)]);
var inst_9063__$1 = (state_9099[(2)]);
var inst_9064 = (inst_9063__$1 == null);
var inst_9065 = cljs.core.not(inst_9064);
var state_9099__$1 = (function (){var statearr_9105 = state_9099;
(statearr_9105[(9)] = inst_9063__$1);

return statearr_9105;
})();
if(inst_9065){
var statearr_9106_9696 = state_9099__$1;
(statearr_9106_9696[(1)] = (5));

} else {
var statearr_9107_9697 = state_9099__$1;
(statearr_9107_9697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9100 === (15))){
var inst_9089 = (state_9099[(2)]);
var state_9099__$1 = state_9099;
var statearr_9110_9698 = state_9099__$1;
(statearr_9110_9698[(2)] = inst_9089);

(statearr_9110_9698[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9100 === (13))){
var state_9099__$1 = state_9099;
var statearr_9112_9699 = state_9099__$1;
(statearr_9112_9699[(2)] = null);

(statearr_9112_9699[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9100 === (6))){
var inst_9059 = (state_9099[(8)]);
var inst_9084 = inst_9059.length;
var inst_9085 = (inst_9084 > (0));
var state_9099__$1 = state_9099;
if(cljs.core.truth_(inst_9085)){
var statearr_9113_9700 = state_9099__$1;
(statearr_9113_9700[(1)] = (12));

} else {
var statearr_9114_9701 = state_9099__$1;
(statearr_9114_9701[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9100 === (3))){
var inst_9097 = (state_9099[(2)]);
var state_9099__$1 = state_9099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9099__$1,inst_9097);
} else {
if((state_val_9100 === (12))){
var inst_9059 = (state_9099[(8)]);
var inst_9087 = cljs.core.vec(inst_9059);
var state_9099__$1 = state_9099;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9099__$1,(15),out,inst_9087);
} else {
if((state_val_9100 === (2))){
var state_9099__$1 = state_9099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9099__$1,(4),ch);
} else {
if((state_val_9100 === (11))){
var inst_9063 = (state_9099[(9)]);
var inst_9067 = (state_9099[(10)]);
var inst_9077 = (state_9099[(2)]);
var inst_9078 = [];
var inst_9079 = inst_9078.push(inst_9063);
var inst_9059 = inst_9078;
var inst_9060 = inst_9067;
var state_9099__$1 = (function (){var statearr_9119 = state_9099;
(statearr_9119[(11)] = inst_9077);

(statearr_9119[(7)] = inst_9060);

(statearr_9119[(8)] = inst_9059);

(statearr_9119[(12)] = inst_9079);

return statearr_9119;
})();
var statearr_9123_9702 = state_9099__$1;
(statearr_9123_9702[(2)] = null);

(statearr_9123_9702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9100 === (9))){
var inst_9059 = (state_9099[(8)]);
var inst_9075 = cljs.core.vec(inst_9059);
var state_9099__$1 = state_9099;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9099__$1,(11),out,inst_9075);
} else {
if((state_val_9100 === (5))){
var inst_9063 = (state_9099[(9)]);
var inst_9067 = (state_9099[(10)]);
var inst_9060 = (state_9099[(7)]);
var inst_9067__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_9063) : f.call(null,inst_9063));
var inst_9068 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9067__$1,inst_9060);
var inst_9069 = cljs.core.keyword_identical_QMARK_(inst_9060,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_9070 = ((inst_9068) || (inst_9069));
var state_9099__$1 = (function (){var statearr_9141 = state_9099;
(statearr_9141[(10)] = inst_9067__$1);

return statearr_9141;
})();
if(cljs.core.truth_(inst_9070)){
var statearr_9145_9703 = state_9099__$1;
(statearr_9145_9703[(1)] = (8));

} else {
var statearr_9150_9704 = state_9099__$1;
(statearr_9150_9704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9100 === (14))){
var inst_9092 = (state_9099[(2)]);
var inst_9093 = cljs.core.async.close_BANG_(out);
var state_9099__$1 = (function (){var statearr_9157 = state_9099;
(statearr_9157[(13)] = inst_9092);

return statearr_9157;
})();
var statearr_9158_9705 = state_9099__$1;
(statearr_9158_9705[(2)] = inst_9093);

(statearr_9158_9705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9100 === (10))){
var inst_9082 = (state_9099[(2)]);
var state_9099__$1 = state_9099;
var statearr_9165_9706 = state_9099__$1;
(statearr_9165_9706[(2)] = inst_9082);

(statearr_9165_9706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9100 === (8))){
var inst_9063 = (state_9099[(9)]);
var inst_9067 = (state_9099[(10)]);
var inst_9059 = (state_9099[(8)]);
var inst_9072 = inst_9059.push(inst_9063);
var tmp9155 = inst_9059;
var inst_9059__$1 = tmp9155;
var inst_9060 = inst_9067;
var state_9099__$1 = (function (){var statearr_9172 = state_9099;
(statearr_9172[(14)] = inst_9072);

(statearr_9172[(7)] = inst_9060);

(statearr_9172[(8)] = inst_9059__$1);

return statearr_9172;
})();
var statearr_9177_9707 = state_9099__$1;
(statearr_9177_9707[(2)] = null);

(statearr_9177_9707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6685__auto___9693,out))
;
return ((function (switch__6409__auto__,c__6685__auto___9693,out){
return (function() {
var cljs$core$async$state_machine__6410__auto__ = null;
var cljs$core$async$state_machine__6410__auto____0 = (function (){
var statearr_9178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9178[(0)] = cljs$core$async$state_machine__6410__auto__);

(statearr_9178[(1)] = (1));

return statearr_9178;
});
var cljs$core$async$state_machine__6410__auto____1 = (function (state_9099){
while(true){
var ret_value__6411__auto__ = (function (){try{while(true){
var result__6412__auto__ = switch__6409__auto__(state_9099);
if(cljs.core.keyword_identical_QMARK_(result__6412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6412__auto__;
}
break;
}
}catch (e9179){if((e9179 instanceof Object)){
var ex__6413__auto__ = e9179;
var statearr_9180_9708 = state_9099;
(statearr_9180_9708[(5)] = ex__6413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9179;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9709 = state_9099;
state_9099 = G__9709;
continue;
} else {
return ret_value__6411__auto__;
}
break;
}
});
cljs$core$async$state_machine__6410__auto__ = function(state_9099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6410__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6410__auto____1.call(this,state_9099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6410__auto____0;
cljs$core$async$state_machine__6410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6410__auto____1;
return cljs$core$async$state_machine__6410__auto__;
})()
;})(switch__6409__auto__,c__6685__auto___9693,out))
})();
var state__6687__auto__ = (function (){var statearr_9182 = (f__6686__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6686__auto__.cljs$core$IFn$_invoke$arity$0() : f__6686__auto__.call(null));
(statearr_9182[(6)] = c__6685__auto___9693);

return statearr_9182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6687__auto__);
});})(c__6685__auto___9693,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
