goog.provide('reitit.trie');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reitit.exception');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Wild = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k3309,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__3317 = k3309;
var G__3317__$1 = (((G__3317 instanceof cljs.core.Keyword))?G__3317.fqn:null);
switch (G__3317__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k3309,else__4388__auto__);

}
});

reitit.trie.Wild.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__3320){
var vec__3321 = p__3320;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3321,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3321,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.trie.Wild.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#reitit.trie.Wild{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

reitit.trie.Wild.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3308){
var self__ = this;
var G__3308__$1 = this;
return (new cljs.core.RecordIter((0),G__3308__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.trie.Wild.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.trie.Wild.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.trie.Wild.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

reitit.trie.Wild.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__3324 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1970880185 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__3324(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.trie.Wild.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3310,other3311){
var self__ = this;
var this3310__$1 = this;
return (((!((other3311 == null)))) && ((this3310__$1.constructor === other3311.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3310__$1.value,other3311.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3310__$1.__extmap,other3311.__extmap)));
});

reitit.trie.Wild.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

reitit.trie.Wild.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__3308){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__3328 = cljs.core.keyword_identical_QMARK_;
var expr__3329 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__3332 = new cljs.core.Keyword(null,"value","value",305978217);
var G__3333 = expr__3329;
return (pred__3328.cljs$core$IFn$_invoke$arity$2 ? pred__3328.cljs$core$IFn$_invoke$arity$2(G__3332,G__3333) : pred__3328.call(null,G__3332,G__3333));
})())){
return (new reitit.trie.Wild(G__3308,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__3308),null));
}
});

reitit.trie.Wild.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
});

reitit.trie.Wild.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__3308){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,G__3308,self__.__extmap,self__.__hash));
});

reitit.trie.Wild.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.trie.Wild.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

reitit.trie.Wild.cljs$lang$type = true;

reitit.trie.Wild.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.trie/Wild",null,(1),null));
});

reitit.trie.Wild.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.trie/Wild");
});

/**
 * Positional factory function for reitit.trie/Wild.
 */
reitit.trie.__GT_Wild = (function reitit$trie$__GT_Wild(value){
return (new reitit.trie.Wild(value,null,null,null));
});

/**
 * Factory function for reitit.trie/Wild, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Wild = (function reitit$trie$map__GT_Wild(G__3316){
var extmap__4424__auto__ = (function (){var G__3336 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__3316,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__3316)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__3336);
} else {
return G__3336;
}
})();
return (new reitit.trie.Wild(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__3316),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.CatchAll = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k3338,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__3342 = k3338;
var G__3342__$1 = (((G__3342 instanceof cljs.core.Keyword))?G__3342.fqn:null);
switch (G__3342__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k3338,else__4388__auto__);

}
});

reitit.trie.CatchAll.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__3343){
var vec__3344 = p__3343;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3344,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3344,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.trie.CatchAll.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#reitit.trie.CatchAll{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

reitit.trie.CatchAll.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3337){
var self__ = this;
var G__3337__$1 = this;
return (new cljs.core.RecordIter((0),G__3337__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.trie.CatchAll.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.trie.CatchAll.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.trie.CatchAll.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

reitit.trie.CatchAll.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__3347 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-987265038 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__3347(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.trie.CatchAll.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3339,other3340){
var self__ = this;
var this3339__$1 = this;
return (((!((other3340 == null)))) && ((this3339__$1.constructor === other3340.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3339__$1.value,other3340.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3339__$1.__extmap,other3340.__extmap)));
});

reitit.trie.CatchAll.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__3337){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__3352 = cljs.core.keyword_identical_QMARK_;
var expr__3353 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__3356 = new cljs.core.Keyword(null,"value","value",305978217);
var G__3357 = expr__3353;
return (pred__3352.cljs$core$IFn$_invoke$arity$2 ? pred__3352.cljs$core$IFn$_invoke$arity$2(G__3356,G__3357) : pred__3352.call(null,G__3356,G__3357));
})())){
return (new reitit.trie.CatchAll(G__3337,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__3337),null));
}
});

reitit.trie.CatchAll.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
});

reitit.trie.CatchAll.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__3337){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,G__3337,self__.__extmap,self__.__hash));
});

reitit.trie.CatchAll.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.trie.CatchAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

reitit.trie.CatchAll.cljs$lang$type = true;

reitit.trie.CatchAll.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.trie/CatchAll",null,(1),null));
});

reitit.trie.CatchAll.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.trie/CatchAll");
});

/**
 * Positional factory function for reitit.trie/CatchAll.
 */
reitit.trie.__GT_CatchAll = (function reitit$trie$__GT_CatchAll(value){
return (new reitit.trie.CatchAll(value,null,null,null));
});

/**
 * Factory function for reitit.trie/CatchAll, taking a map of keywords to field values.
 */
reitit.trie.map__GT_CatchAll = (function reitit$trie$map__GT_CatchAll(G__3341){
var extmap__4424__auto__ = (function (){var G__3364 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__3341,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__3341)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__3364);
} else {
return G__3364;
}
})();
return (new reitit.trie.CatchAll(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__3341),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Match = (function (params,data,__meta,__extmap,__hash){
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k3366,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__3370 = k3366;
var G__3370__$1 = (((G__3370 instanceof cljs.core.Keyword))?G__3370.fqn:null);
switch (G__3370__$1) {
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k3366,else__4388__auto__);

}
});

reitit.trie.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__3371){
var vec__3372 = p__3371;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3372,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3372,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.trie.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#reitit.trie.Match{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});

reitit.trie.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3365){
var self__ = this;
var G__3365__$1 = this;
return (new cljs.core.RecordIter((0),G__3365__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.trie.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.trie.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.trie.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

reitit.trie.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__3379 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1117628764 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__3379(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.trie.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3367,other3368){
var self__ = this;
var this3367__$1 = this;
return (((!((other3368 == null)))) && ((this3367__$1.constructor === other3368.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3367__$1.params,other3368.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3367__$1.data,other3368.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3367__$1.__extmap,other3368.__extmap)));
});

reitit.trie.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

reitit.trie.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__3365){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__3382 = cljs.core.keyword_identical_QMARK_;
var expr__3383 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__3385 = new cljs.core.Keyword(null,"params","params",710516235);
var G__3386 = expr__3383;
return (pred__3382.cljs$core$IFn$_invoke$arity$2 ? pred__3382.cljs$core$IFn$_invoke$arity$2(G__3385,G__3386) : pred__3382.call(null,G__3385,G__3386));
})())){
return (new reitit.trie.Match(G__3365,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3387 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__3388 = expr__3383;
return (pred__3382.cljs$core$IFn$_invoke$arity$2 ? pred__3382.cljs$core$IFn$_invoke$arity$2(G__3387,G__3388) : pred__3382.call(null,G__3387,G__3388));
})())){
return (new reitit.trie.Match(self__.params,G__3365,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__3365),null));
}
}
});

reitit.trie.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
});

reitit.trie.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__3365){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,G__3365,self__.__extmap,self__.__hash));
});

reitit.trie.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.trie.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
});

reitit.trie.Match.cljs$lang$type = true;

reitit.trie.Match.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.trie/Match",null,(1),null));
});

reitit.trie.Match.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.trie/Match");
});

/**
 * Positional factory function for reitit.trie/Match.
 */
reitit.trie.__GT_Match = (function reitit$trie$__GT_Match(params,data){
return (new reitit.trie.Match(params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Match, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Match = (function reitit$trie$map__GT_Match(G__3369){
var extmap__4424__auto__ = (function (){var G__3391 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__3369,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377)], 0));
if(cljs.core.record_QMARK_(G__3369)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__3391);
} else {
return G__3391;
}
})();
return (new reitit.trie.Match(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__3369),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__3369),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Node = (function (children,wilds,catch_all,params,data,__meta,__extmap,__hash){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k3393,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__3399 = k3393;
var G__3399__$1 = (((G__3399 instanceof cljs.core.Keyword))?G__3399.fqn:null);
switch (G__3399__$1) {
case "children":
return self__.children;

break;
case "wilds":
return self__.wilds;

break;
case "catch-all":
return self__.catch_all;

break;
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k3393,else__4388__auto__);

}
});

reitit.trie.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__3400){
var vec__3402 = p__3400;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3402,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3402,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.trie.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#reitit.trie.Node{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});

reitit.trie.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3392){
var self__ = this;
var G__3392__$1 = this;
return (new cljs.core.RecordIter((0),G__3392__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.trie.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.trie.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.trie.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

reitit.trie.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__3412 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (33004208 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__3412(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.trie.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3394,other3395){
var self__ = this;
var this3394__$1 = this;
return (((!((other3395 == null)))) && ((this3394__$1.constructor === other3395.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3394__$1.children,other3395.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3394__$1.wilds,other3395.wilds)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3394__$1.catch_all,other3395.catch_all)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3394__$1.params,other3395.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3394__$1.data,other3395.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3394__$1.__extmap,other3395.__extmap)));
});

reitit.trie.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"wilds","wilds",132271223),null,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

reitit.trie.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__3392){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__3414 = cljs.core.keyword_identical_QMARK_;
var expr__3415 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__3417 = new cljs.core.Keyword(null,"children","children",-940561982);
var G__3418 = expr__3415;
return (pred__3414.cljs$core$IFn$_invoke$arity$2 ? pred__3414.cljs$core$IFn$_invoke$arity$2(G__3417,G__3418) : pred__3414.call(null,G__3417,G__3418));
})())){
return (new reitit.trie.Node(G__3392,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3420 = new cljs.core.Keyword(null,"wilds","wilds",132271223);
var G__3421 = expr__3415;
return (pred__3414.cljs$core$IFn$_invoke$arity$2 ? pred__3414.cljs$core$IFn$_invoke$arity$2(G__3420,G__3421) : pred__3414.call(null,G__3420,G__3421));
})())){
return (new reitit.trie.Node(self__.children,G__3392,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3422 = new cljs.core.Keyword(null,"catch-all","catch-all",1184112570);
var G__3423 = expr__3415;
return (pred__3414.cljs$core$IFn$_invoke$arity$2 ? pred__3414.cljs$core$IFn$_invoke$arity$2(G__3422,G__3423) : pred__3414.call(null,G__3422,G__3423));
})())){
return (new reitit.trie.Node(self__.children,self__.wilds,G__3392,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3424 = new cljs.core.Keyword(null,"params","params",710516235);
var G__3425 = expr__3415;
return (pred__3414.cljs$core$IFn$_invoke$arity$2 ? pred__3414.cljs$core$IFn$_invoke$arity$2(G__3424,G__3425) : pred__3414.call(null,G__3424,G__3425));
})())){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,G__3392,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3426 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__3427 = expr__3415;
return (pred__3414.cljs$core$IFn$_invoke$arity$2 ? pred__3414.cljs$core$IFn$_invoke$arity$2(G__3426,G__3427) : pred__3414.call(null,G__3426,G__3427));
})())){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,G__3392,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__3392),null));
}
}
}
}
}
});

reitit.trie.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
});

reitit.trie.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__3392){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,G__3392,self__.__extmap,self__.__hash));
});

reitit.trie.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.trie.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"wilds","wilds",1772802750,null),new cljs.core.Symbol(null,"catch-all","catch-all",-1470323199,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
});

reitit.trie.Node.cljs$lang$type = true;

reitit.trie.Node.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.trie/Node",null,(1),null));
});

reitit.trie.Node.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.trie/Node");
});

/**
 * Positional factory function for reitit.trie/Node.
 */
reitit.trie.__GT_Node = (function reitit$trie$__GT_Node(children,wilds,catch_all,params,data){
return (new reitit.trie.Node(children,wilds,catch_all,params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Node, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Node = (function reitit$trie$map__GT_Node(G__3398){
var extmap__4424__auto__ = (function (){var G__3428 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__3398,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], 0));
if(cljs.core.record_QMARK_(G__3398)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__3428);
} else {
return G__3428;
}
})();
return (new reitit.trie.Node(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__3398),new cljs.core.Keyword(null,"wilds","wilds",132271223).cljs$core$IFn$_invoke$arity$1(G__3398),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570).cljs$core$IFn$_invoke$arity$1(G__3398),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__3398),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__3398),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

reitit.trie.wild_QMARK_ = (function reitit$trie$wild_QMARK_(x){
return (x instanceof reitit.trie.Wild);
});
reitit.trie.catch_all_QMARK_ = (function reitit$trie$catch_all_QMARK_(x){
return (x instanceof reitit.trie.CatchAll);
});

/**
 * @interface
 */
reitit.trie.Matcher = function(){};

reitit.trie.match = (function reitit$trie$match(this$,i,max,path){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$match$arity$4 == null)))))){
return this$.reitit$trie$Matcher$match$arity$4(this$,i,max,path);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.match[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(this$,i,max,path) : m__4434__auto__.call(null,this$,i,max,path));
} else {
var m__4431__auto__ = (reitit.trie.match["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(this$,i,max,path) : m__4431__auto__.call(null,this$,i,max,path));
} else {
throw cljs.core.missing_protocol("Matcher.match",this$);
}
}
}
});

reitit.trie.view = (function reitit$trie$view(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$view$arity$1 == null)))))){
return this$.reitit$trie$Matcher$view$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.view[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (reitit.trie.view["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.view",this$);
}
}
}
});

reitit.trie.depth = (function reitit$trie$depth(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$depth$arity$1 == null)))))){
return this$.reitit$trie$Matcher$depth$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.depth[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (reitit.trie.depth["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.depth",this$);
}
}
}
});

reitit.trie.length = (function reitit$trie$length(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$length$arity$1 == null)))))){
return this$.reitit$trie$Matcher$length$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.length[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (reitit.trie.length["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.length",this$);
}
}
}
});


/**
 * @interface
 */
reitit.trie.TrieCompiler = function(){};

reitit.trie.data_matcher = (function reitit$trie$data_matcher(this$,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$data_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$data_matcher$arity$3(this$,params,data);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.data_matcher[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(this$,params,data) : m__4434__auto__.call(null,this$,params,data));
} else {
var m__4431__auto__ = (reitit.trie.data_matcher["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(this$,params,data) : m__4431__auto__.call(null,this$,params,data));
} else {
throw cljs.core.missing_protocol("TrieCompiler.data-matcher",this$);
}
}
}
});

reitit.trie.static_matcher = (function reitit$trie$static_matcher(this$,path,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$static_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$static_matcher$arity$3(this$,path,matcher);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.static_matcher[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,matcher) : m__4434__auto__.call(null,this$,path,matcher));
} else {
var m__4431__auto__ = (reitit.trie.static_matcher["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,matcher) : m__4431__auto__.call(null,this$,path,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.static-matcher",this$);
}
}
}
});

reitit.trie.wild_matcher = (function reitit$trie$wild_matcher(this$,key,end,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$wild_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$wild_matcher$arity$4(this$,key,end,matcher);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.wild_matcher[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,end,matcher) : m__4434__auto__.call(null,this$,key,end,matcher));
} else {
var m__4431__auto__ = (reitit.trie.wild_matcher["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,end,matcher) : m__4431__auto__.call(null,this$,key,end,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.wild-matcher",this$);
}
}
}
});

reitit.trie.catch_all_matcher = (function reitit$trie$catch_all_matcher(this$,key,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4(this$,key,params,data);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.catch_all_matcher[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,params,data) : m__4434__auto__.call(null,this$,key,params,data));
} else {
var m__4431__auto__ = (reitit.trie.catch_all_matcher["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,params,data) : m__4431__auto__.call(null,this$,key,params,data));
} else {
throw cljs.core.missing_protocol("TrieCompiler.catch-all-matcher",this$);
}
}
}
});

reitit.trie.linear_matcher = (function reitit$trie$linear_matcher(this$,matchers,ordered_QMARK_){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$linear_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$linear_matcher$arity$3(this$,matchers,ordered_QMARK_);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.linear_matcher[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(this$,matchers,ordered_QMARK_) : m__4434__auto__.call(null,this$,matchers,ordered_QMARK_));
} else {
var m__4431__auto__ = (reitit.trie.linear_matcher["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(this$,matchers,ordered_QMARK_) : m__4431__auto__.call(null,this$,matchers,ordered_QMARK_));
} else {
throw cljs.core.missing_protocol("TrieCompiler.linear-matcher",this$);
}
}
}
});

reitit.trie._pretty = (function reitit$trie$_pretty(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_pretty$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_pretty$arity$2(this$,matcher);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie._pretty[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4434__auto__.call(null,this$,matcher));
} else {
var m__4431__auto__ = (reitit.trie._pretty["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4431__auto__.call(null,this$,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.-pretty",this$);
}
}
}
});

reitit.trie._path_matcher = (function reitit$trie$_path_matcher(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_path_matcher$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_path_matcher$arity$2(this$,matcher);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie._path_matcher[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4434__auto__.call(null,this$,matcher));
} else {
var m__4431__auto__ = (reitit.trie._path_matcher["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4431__auto__.call(null,this$,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.-path-matcher",this$);
}
}
}
});

reitit.trie.assoc_param = (function reitit$trie$assoc_param(match,k,v){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,v));
});
reitit.trie.common_prefix = (function reitit$trie$common_prefix(s1,s2){
var max = (function (){var x__4222__auto__ = cljs.core.count(s1);
var y__4223__auto__ = cljs.core.count(s2);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var i = (0);
while(true){
if((i > max)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s1,(0),max);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s1,i),cljs.core.get.cljs$core$IFn$_invoke$arity$2(s2,i))){
if((!((i === (0))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s1,(0),i);
} else {
return null;
}
} else {
var G__3862 = (i + (1));
i = G__3862;
continue;

}
}
break;
}
});
reitit.trie._keyword = (function reitit$trie$_keyword(s){
var temp__5733__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,"/");
if(cljs.core.truth_(temp__5733__auto__)){
var i = temp__5733__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(i + (1))));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
}
});
reitit.trie.split_path = (function reitit$trie$split_path(s){
var _static = (function (from,to){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,from,to)], null);
} else {
return null;
}
});
var _wild = ((function (_static){
return (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_Wild(reitit.trie._keyword(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(from + (1)),to)))], null);
});})(_static))
;
var _catch_all = ((function (_static,_wild){
return (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_CatchAll(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(from + (1)),to)))], null);
});})(_static,_wild))
;
var ss = null;
var from = (0);
var to = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to,cljs.core.count(s))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ss,_static(from,to));
} else {
var G__3451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,to);
switch (G__3451) {
case "{":
var to_SINGLEQUOTE_ = (function (){var or__4131__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,"}",to);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","unclosed-brackets","reitit.trie/unclosed-brackets",1599327560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),s], null));
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,(to + (1))))){
var G__3869 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_catch_all((to + (1)),to_SINGLEQUOTE_)], 0));
var G__3870 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
var G__3871 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
ss = G__3869;
from = G__3870;
to = G__3871;
continue;
} else {
var G__3872 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_wild(to,to_SINGLEQUOTE_)], 0));
var G__3873 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
var G__3874 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
ss = G__3872;
from = G__3873;
to = G__3874;
continue;
}

break;
case ":":
var to_SINGLEQUOTE_ = (function (){var or__4131__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,"/",to);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.count(s);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(to_SINGLEQUOTE_ - to))){
var G__3880 = ss;
var G__3881 = from;
var G__3882 = (to + (1));
ss = G__3880;
from = G__3881;
to = G__3882;
continue;
} else {
var G__3883 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_wild(to,to_SINGLEQUOTE_)], 0));
var G__3884 = cljs.core.long$(to_SINGLEQUOTE_);
var G__3885 = cljs.core.long$(to_SINGLEQUOTE_);
ss = G__3883;
from = G__3884;
to = G__3885;
continue;
}

break;
case "*":
var to_SINGLEQUOTE_ = cljs.core.count(s);
var G__3889 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_catch_all(to,to_SINGLEQUOTE_)], 0));
var G__3890 = cljs.core.long$(to_SINGLEQUOTE_);
var G__3891 = cljs.core.long$(to_SINGLEQUOTE_);
ss = G__3889;
from = G__3890;
to = G__3891;
continue;

break;
default:
var G__3892 = ss;
var G__3893 = from;
var G__3894 = (to + (1));
ss = G__3892;
from = G__3893;
to = G__3894;
continue;

}
}
break;
}
});
reitit.trie.join_path = (function reitit$trie$join_path(xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),((typeof x === 'string')?x:(((x instanceof reitit.trie.Wild))?["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(x)),(1))),"}"].join(''):(((x instanceof reitit.trie.CatchAll))?["{*",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(x)),(1))),"}"].join(''):null)))].join('');
}),"",xs);
});
reitit.trie.normalize = (function reitit$trie$normalize(s){
return reitit.trie.join_path(reitit.trie.split_path(s));
});
reitit.trie._slice_start = (function reitit$trie$_slice_start(p__3459,p__3460){
var vec__3461 = p__3459;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3461,(0),null);
var p1s = vec__3461;
var vec__3464 = p__3460;
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3464,(0),null);
var p2s = vec__3464;
var _split = ((function (vec__3461,p1,p1s,vec__3464,p2,p2s){
return (function (p){
var temp__5733__auto__ = (function (){var and__4120__auto__ = p;
if(cljs.core.truth_(and__4120__auto__)){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(p,"/");
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var i = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,i)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null);
}
});})(vec__3461,p1,p1s,vec__3464,p2,p2s))
;
var _slash = ((function (_split,vec__3461,p1,p1s,vec__3464,p2,p2s){
return (function (cp,p){
if((!(typeof cp === 'string'))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cp], null);
} else {
if(((typeof cp === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cp),cljs.core.count(p))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,cljs.core.count(cp))], null);
} else {
if(((typeof p === 'string') && (cljs.core.not(cp)))){
return _split(p);
} else {
return null;
}
}
}
});})(_split,vec__3461,p1,p1s,vec__3464,p2,p2s))
;
var _postcut = ((function (_split,_slash,vec__3461,p1,p1s,vec__3464,p2,p2s){
return (function (p__3470){
var vec__3471 = p__3470;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3471,(0),null);
var pps = vec__3471;
var i = (function (){var and__4120__auto__ = p;
if(cljs.core.truth_(and__4120__auto__)){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(p,"/");
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4120__auto__ = i;
if(cljs.core.truth_(and__4120__auto__)){
return (i > (0));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,i)], null),cljs.core.rest(pps));
} else {
return pps;
}
});})(_split,_slash,vec__3461,p1,p1s,vec__3464,p2,p2s))
;
var _tailcut = ((function (_split,_slash,_postcut,vec__3461,p1,p1s,vec__3464,p2,p2s){
return (function (cp,p__3474){
var vec__3475 = p__3474;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3475,(0),null);
var ps = vec__3475;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(_slash(cp,p),cljs.core.rest(ps));
});})(_split,_slash,_postcut,vec__3461,p1,p1s,vec__3464,p2,p2s))
;
if((((p1 == null)) || ((p2 == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_postcut(p1s),_postcut(p2s)], null);
} else {
var temp__5733__auto__ = (function (){var and__4120__auto__ = typeof p1 === 'string';
if(and__4120__auto__){
var and__4120__auto____$1 = typeof p2 === 'string';
if(and__4120__auto____$1){
return reitit.trie.common_prefix(p1,p2);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cp = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_tailcut(cp,p1s),_tailcut(cp,p2s)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1s,p2s], null);
}
}
});
reitit.trie._slice_end = (function reitit$trie$_slice_end(x,xs){
var i = ((typeof x === 'string')?clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(x,"/"):null);
if(((typeof i === 'number') && ((i > (0))))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(x,i)], null),xs);
} else {
return xs;
}
});
reitit.trie.conflicting_paths_QMARK_ = (function reitit$trie$conflicting_paths_QMARK_(path1,path2){
var parts1 = reitit.trie.split_path(path1);
var parts2 = reitit.trie.split_path(path2);
while(true){
var vec__3489 = reitit.trie._slice_start(parts1,parts2);
var vec__3492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3489,(0),null);
var seq__3493 = cljs.core.seq(vec__3492);
var first__3494 = cljs.core.first(seq__3493);
var seq__3493__$1 = cljs.core.next(seq__3493);
var s1 = first__3494;
var ss1 = seq__3493__$1;
var vec__3495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3489,(1),null);
var seq__3496 = cljs.core.seq(vec__3495);
var first__3497 = cljs.core.first(seq__3496);
var seq__3496__$1 = cljs.core.next(seq__3496);
var s2 = first__3497;
var ss2 = seq__3496__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(s1,s2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0))){
return true;
} else {
if((((s1 == null)) || ((s2 == null)))){
return false;
} else {
if(((reitit.trie.catch_all_QMARK_(s1)) || (reitit.trie.catch_all_QMARK_(s2)))){
return true;
} else {
if(((reitit.trie.wild_QMARK_(s1)) || (reitit.trie.wild_QMARK_(s2)))){
var G__3920 = reitit.trie._slice_end(s1,ss1);
var G__3921 = reitit.trie._slice_end(s2,ss2);
parts1 = G__3920;
parts2 = G__3921;
continue;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return false;
} else {
var G__3922 = ss1;
var G__3923 = ss2;
parts1 = G__3922;
parts2 = G__3923;
continue;

}
}
}
}
}
break;
}
});
reitit.trie._node = (function reitit$trie$_node(m){
return reitit.trie.map__GT_Node(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"wilds","wilds",132271223),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY], null),m], 0)));
});
reitit.trie._insert = (function reitit$trie$_insert(node,p__3498,fp,params,data){
var vec__3499 = p__3498;
var seq__3500 = cljs.core.seq(vec__3499);
var first__3501 = cljs.core.first(seq__3500);
var seq__3500__$1 = cljs.core.next(seq__3500);
var path = first__3501;
var ps = seq__3500__$1;
var node_SINGLEQUOTE_ = (((path == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,new cljs.core.Keyword(null,"data","data",-232669377),data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),params], 0)):(((path instanceof reitit.trie.Wild))?(function (){var next = cljs.core.first(ps);
if((((next instanceof reitit.trie.Wild)) || ((next instanceof reitit.trie.CatchAll)))){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","following-parameters","reitit.trie/following-parameters",-1072685800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),fp,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,next], null))], null));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wilds","wilds",132271223),path], null),((function (next,vec__3499,seq__3500,first__3501,seq__3500__$1,path,ps){
return (function (n){
var G__3502 = (function (){var or__4131__auto__ = n;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var G__3503 = ps;
var G__3504 = fp;
var G__3505 = params;
var G__3506 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__3502,G__3503,G__3504,G__3505,G__3506) : reitit.trie._insert.call(null,G__3502,G__3503,G__3504,G__3505,G__3506));
});})(next,vec__3499,seq__3500,first__3501,seq__3500__$1,path,ps))
);
}
})():(((path instanceof reitit.trie.CatchAll))?cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),path], null),reitit.trie._node(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"data","data",-232669377),data], null))):((clojure.string.blank_QMARK_(path))?(reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(node,ps,fp,params,data) : reitit.trie._insert.call(null,node,ps,fp,params,data)):(function (){var or__4131__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__3499,seq__3500,first__3501,seq__3500__$1,path,ps){
return (function (_,p__3526){
var vec__3527 = p__3526;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3527,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3527,(1),null);
var temp__5733__auto__ = reitit.trie.common_prefix(p,path);
if(cljs.core.truth_(temp__5733__auto__)){
var cp = temp__5733__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cp,p)){
var n_SINGLEQUOTE_ = (function (){var G__3532 = n;
var G__3533 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,cljs.core.count(p)));
var G__3534 = fp;
var G__3535 = params;
var G__3536 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__3532,G__3533,G__3534,G__3535,G__3536) : reitit.trie._insert.call(null,G__3532,G__3533,G__3534,G__3535,G__3536));
})();
return cljs.core.reduced(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),p], null),n_SINGLEQUOTE_));
} else {
var rp = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,cljs.core.count(cp));
var rp_SINGLEQUOTE_ = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,cljs.core.count(cp));
var n_SINGLEQUOTE_ = (function (){var G__3537 = reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
var G__3538 = ps;
var G__3539 = fp;
var G__3540 = params;
var G__3541 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__3537,G__3538,G__3539,G__3540,G__3541) : reitit.trie._insert.call(null,G__3537,G__3538,G__3539,G__3540,G__3541));
})();
var n_SINGLEQUOTE__SINGLEQUOTE_ = (function (){var G__3542 = reitit.trie._node(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.createAsIfByAssoc([rp,n,rp_SINGLEQUOTE_,n_SINGLEQUOTE_])], null));
var G__3543 = null;
var G__3544 = null;
var G__3545 = null;
var G__3546 = null;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__3542,G__3543,G__3544,G__3545,G__3546) : reitit.trie._insert.call(null,G__3542,G__3543,G__3544,G__3545,G__3546));
})();
return cljs.core.reduced(cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"children","children",-940561982),((function (rp,rp_SINGLEQUOTE_,n_SINGLEQUOTE_,n_SINGLEQUOTE__SINGLEQUOTE_,cp,temp__5733__auto__,vec__3527,p,n,vec__3499,seq__3500,first__3501,seq__3500__$1,path,ps){
return (function (children){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(children,p),cp,n_SINGLEQUOTE__SINGLEQUOTE_);
});})(rp,rp_SINGLEQUOTE_,n_SINGLEQUOTE_,n_SINGLEQUOTE__SINGLEQUOTE_,cp,temp__5733__auto__,vec__3527,p,n,vec__3499,seq__3500,first__3501,seq__3500__$1,path,ps))
));
}
} else {
return null;
}
});})(vec__3499,seq__3500,first__3501,seq__3500__$1,path,ps))
,null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),path], null),(function (){var G__3547 = reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
var G__3548 = ps;
var G__3549 = fp;
var G__3550 = params;
var G__3551 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__3547,G__3548,G__3549,G__3550,G__3551) : reitit.trie._insert.call(null,G__3547,G__3548,G__3549,G__3550,G__3551));
})());
}
})()
))));
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),""], null));
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(node_SINGLEQUOTE_,new cljs.core.Keyword(null,"data","data",-232669377)),child], 0)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.dissoc,"");
} else {
return node_SINGLEQUOTE_;
}
});
reitit.trie.decode = (function reitit$trie$decode(path,start,end,percent_QMARK_){
var param = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(path,start,end);
if(cljs.core.truth_(percent_QMARK_)){
return decodeURIComponent(param);
} else {
return param;
}
});
reitit.trie.clojure_trie_compiler = (function reitit$trie$clojure_trie_compiler(){
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie3554 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.TrieCompiler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie3554 = (function (meta3555){
this.meta3555 = meta3555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie3554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3556,meta3555__$1){
var self__ = this;
var _3556__$1 = this;
return (new reitit.trie.t_reitit$trie3554(meta3555__$1));
});

reitit.trie.t_reitit$trie3554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3556){
var self__ = this;
var _3556__$1 = this;
return self__.meta3555;
});

reitit.trie.t_reitit$trie3554.prototype.reitit$trie$TrieCompiler$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie3554.prototype.reitit$trie$TrieCompiler$data_matcher$arity$3 = (function (_,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match(params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie3561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie3561 = (function (meta3555,_,params,data,match,meta3562){
this.meta3555 = meta3555;
this._ = _;
this.params = params;
this.data = data;
this.match = match;
this.meta3562 = meta3562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie3561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (match,___$1){
return (function (_3563,meta3562__$1){
var self__ = this;
var _3563__$1 = this;
return (new reitit.trie.t_reitit$trie3561(self__.meta3555,self__._,self__.params,self__.data,self__.match,meta3562__$1));
});})(match,___$1))
;

reitit.trie.t_reitit$trie3561.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (match,___$1){
return (function (_3563){
var self__ = this;
var _3563__$1 = this;
return self__.meta3562;
});})(match,___$1))
;

reitit.trie.t_reitit$trie3561.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie3561.prototype.reitit$trie$Matcher$match$arity$4 = ((function (match,___$1){
return (function (___$1,i,max,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,max)){
return self__.match;
} else {
return null;
}
});})(match,___$1))
;

reitit.trie.t_reitit$trie3561.prototype.reitit$trie$Matcher$view$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.data;
});})(match,___$1))
;

reitit.trie.t_reitit$trie3561.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
});})(match,___$1))
;

reitit.trie.t_reitit$trie3561.prototype.reitit$trie$Matcher$length$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
});})(match,___$1))
;

reitit.trie.t_reitit$trie3561.getBasis = ((function (match,___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta3555","meta3555",-118728483,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie3554","reitit.trie/t_reitit$trie3554",-49454650,null)], null)),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta3562","meta3562",445127034,null)], null);
});})(match,___$1))
;

reitit.trie.t_reitit$trie3561.cljs$lang$type = true;

reitit.trie.t_reitit$trie3561.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie3561";

reitit.trie.t_reitit$trie3561.cljs$lang$ctorPrWriter = ((function (match,___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.trie/t_reitit$trie3561");
});})(match,___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie3561.
 */
reitit.trie.__GT_t_reitit$trie3561 = ((function (match,___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie3561(meta3555__$1,___$2,params__$1,data__$1,match__$1,meta3562){
return (new reitit.trie.t_reitit$trie3561(meta3555__$1,___$2,params__$1,data__$1,match__$1,meta3562));
});})(match,___$1))
;

}

return (new reitit.trie.t_reitit$trie3561(self__.meta3555,___$1,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie3554.prototype.reitit$trie$TrieCompiler$static_matcher$arity$3 = (function (_,path,matcher){
var self__ = this;
var ___$1 = this;
var size = cljs.core.count(path);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie3569 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie3569 = (function (meta3555,_,path,matcher,size,meta3570){
this.meta3555 = meta3555;
this._ = _;
this.path = path;
this.matcher = matcher;
this.size = size;
this.meta3570 = meta3570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie3569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (size,___$1){
return (function (_3571,meta3570__$1){
var self__ = this;
var _3571__$1 = this;
return (new reitit.trie.t_reitit$trie3569(self__.meta3555,self__._,self__.path,self__.matcher,self__.size,meta3570__$1));
});})(size,___$1))
;

reitit.trie.t_reitit$trie3569.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (size,___$1){
return (function (_3571){
var self__ = this;
var _3571__$1 = this;
return self__.meta3570;
});})(size,___$1))
;

reitit.trie.t_reitit$trie3569.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie3569.prototype.reitit$trie$Matcher$match$arity$4 = ((function (size,___$1){
return (function (___$1,i,max,p){
var self__ = this;
var ___$2 = this;
if((!((max < (i + self__.size))))){
var j = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,self__.size)){
return reitit.trie.match(self__.matcher,(i + self__.size),max,p);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,(i + j)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.path,j))){
var G__3973 = (j + (1));
j = G__3973;
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
});})(size,___$1))
;

reitit.trie.t_reitit$trie3569.prototype.reitit$trie$Matcher$view$arity$1 = ((function (size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.path,reitit.trie.view(self__.matcher)], null);
});})(size,___$1))
;

reitit.trie.t_reitit$trie3569.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth(self__.matcher) + (1));
});})(size,___$1))
;

reitit.trie.t_reitit$trie3569.prototype.reitit$trie$Matcher$length$arity$1 = ((function (size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.count(self__.path);
});})(size,___$1))
;

reitit.trie.t_reitit$trie3569.getBasis = ((function (size,___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta3555","meta3555",-118728483,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie3554","reitit.trie/t_reitit$trie3554",-49454650,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta3570","meta3570",779620557,null)], null);
});})(size,___$1))
;

reitit.trie.t_reitit$trie3569.cljs$lang$type = true;

reitit.trie.t_reitit$trie3569.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie3569";

reitit.trie.t_reitit$trie3569.cljs$lang$ctorPrWriter = ((function (size,___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.trie/t_reitit$trie3569");
});})(size,___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie3569.
 */
reitit.trie.__GT_t_reitit$trie3569 = ((function (size,___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie3569(meta3555__$1,___$2,path__$1,matcher__$1,size__$1,meta3570){
return (new reitit.trie.t_reitit$trie3569(meta3555__$1,___$2,path__$1,matcher__$1,size__$1,meta3570));
});})(size,___$1))
;

}

return (new reitit.trie.t_reitit$trie3569(self__.meta3555,___$1,path,matcher,size,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie3554.prototype.reitit$trie$TrieCompiler$wild_matcher$arity$4 = (function (_,key,end,matcher){
var self__ = this;
var ___$1 = this;
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie3581 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie3581 = (function (meta3555,_,key,end,matcher,meta3582){
this.meta3555 = meta3555;
this._ = _;
this.key = key;
this.end = end;
this.matcher = matcher;
this.meta3582 = meta3582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie3581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_3583,meta3582__$1){
var self__ = this;
var _3583__$1 = this;
return (new reitit.trie.t_reitit$trie3581(self__.meta3555,self__._,self__.key,self__.end,self__.matcher,meta3582__$1));
});})(___$1))
;

reitit.trie.t_reitit$trie3581.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_3583){
var self__ = this;
var _3583__$1 = this;
return self__.meta3582;
});})(___$1))
;

reitit.trie.t_reitit$trie3581.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie3581.prototype.reitit$trie$Matcher$match$arity$4 = ((function (___$1){
return (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((((i < max)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,i),self__.end)))){
var percent_QMARK_ = false;
var j = i;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max,j)){
var temp__5733__auto__ = reitit.trie.match(self__.matcher,max,max,path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return reitit.trie.assoc_param(match,self__.key,reitit.trie.decode(path,i,max,percent_QMARK_));
} else {
return null;
}
} else {
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,j);
var pred__3590 = cljs.core._EQ_;
var expr__3591 = c;
if(cljs.core.truth_((pred__3590.cljs$core$IFn$_invoke$arity$2 ? pred__3590.cljs$core$IFn$_invoke$arity$2(self__.end,expr__3591) : pred__3590.call(null,self__.end,expr__3591)))){
var temp__5733__auto__ = reitit.trie.match(self__.matcher,j,max,path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return reitit.trie.assoc_param(match,self__.key,reitit.trie.decode(path,i,j,percent_QMARK_));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var G__3593 = "%";
var G__3594 = expr__3591;
return (pred__3590.cljs$core$IFn$_invoke$arity$2 ? pred__3590.cljs$core$IFn$_invoke$arity$2(G__3593,G__3594) : pred__3590.call(null,G__3593,G__3594));
})())){
var G__3984 = true;
var G__3985 = (j + (1));
percent_QMARK_ = G__3984;
j = G__3985;
continue;
} else {
var G__3987 = percent_QMARK_;
var G__3988 = (j + (1));
percent_QMARK_ = G__3987;
j = G__3988;
continue;
}
}
}
break;
}
} else {
return null;
}
});})(___$1))
;

reitit.trie.t_reitit$trie3581.prototype.reitit$trie$Matcher$view$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,reitit.trie.view(self__.matcher)], null);
});})(___$1))
;

reitit.trie.t_reitit$trie3581.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth(self__.matcher) + (1));
});})(___$1))
;

reitit.trie.t_reitit$trie3581.prototype.reitit$trie$Matcher$length$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
});})(___$1))
;

reitit.trie.t_reitit$trie3581.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta3555","meta3555",-118728483,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie3554","reitit.trie/t_reitit$trie3554",-49454650,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"meta3582","meta3582",1042584891,null)], null);
});})(___$1))
;

reitit.trie.t_reitit$trie3581.cljs$lang$type = true;

reitit.trie.t_reitit$trie3581.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie3581";

reitit.trie.t_reitit$trie3581.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.trie/t_reitit$trie3581");
});})(___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie3581.
 */
reitit.trie.__GT_t_reitit$trie3581 = ((function (___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie3581(meta3555__$1,___$2,key__$1,end__$1,matcher__$1,meta3582){
return (new reitit.trie.t_reitit$trie3581(meta3555__$1,___$2,key__$1,end__$1,matcher__$1,meta3582));
});})(___$1))
;

}

return (new reitit.trie.t_reitit$trie3581(self__.meta3555,___$1,key,end,matcher,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie3554.prototype.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 = (function (_,key,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match(params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie3603 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie3603 = (function (meta3555,_,key,params,data,match,meta3604){
this.meta3555 = meta3555;
this._ = _;
this.key = key;
this.params = params;
this.data = data;
this.match = match;
this.meta3604 = meta3604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie3603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (match,___$1){
return (function (_3605,meta3604__$1){
var self__ = this;
var _3605__$1 = this;
return (new reitit.trie.t_reitit$trie3603(self__.meta3555,self__._,self__.key,self__.params,self__.data,self__.match,meta3604__$1));
});})(match,___$1))
;

reitit.trie.t_reitit$trie3603.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (match,___$1){
return (function (_3605){
var self__ = this;
var _3605__$1 = this;
return self__.meta3604;
});})(match,___$1))
;

reitit.trie.t_reitit$trie3603.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie3603.prototype.reitit$trie$Matcher$match$arity$4 = ((function (match,___$1){
return (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((i <= max)){
return reitit.trie.assoc_param(self__.match,self__.key,reitit.trie.decode(path,i,max,true));
} else {
return null;
}
});})(match,___$1))
;

reitit.trie.t_reitit$trie3603.prototype.reitit$trie$Matcher$view$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.data], null)], null);
});})(match,___$1))
;

reitit.trie.t_reitit$trie3603.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
});})(match,___$1))
;

reitit.trie.t_reitit$trie3603.prototype.reitit$trie$Matcher$length$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
});})(match,___$1))
;

reitit.trie.t_reitit$trie3603.getBasis = ((function (match,___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta3555","meta3555",-118728483,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie3554","reitit.trie/t_reitit$trie3554",-49454650,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta3604","meta3604",-554560024,null)], null);
});})(match,___$1))
;

reitit.trie.t_reitit$trie3603.cljs$lang$type = true;

reitit.trie.t_reitit$trie3603.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie3603";

reitit.trie.t_reitit$trie3603.cljs$lang$ctorPrWriter = ((function (match,___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.trie/t_reitit$trie3603");
});})(match,___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie3603.
 */
reitit.trie.__GT_t_reitit$trie3603 = ((function (match,___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie3603(meta3555__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta3604){
return (new reitit.trie.t_reitit$trie3603(meta3555__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta3604));
});})(match,___$1))
;

}

return (new reitit.trie.t_reitit$trie3603(self__.meta3555,___$1,key,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie3554.prototype.reitit$trie$TrieCompiler$linear_matcher$arity$3 = (function (_,matchers,ordered_QMARK_){
var self__ = this;
var ___$1 = this;
var matchers__$1 = cljs.core.vec((cljs.core.truth_(ordered_QMARK_)?matchers:cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(reitit.trie.depth,reitit.trie.length),matchers))));
var size = cljs.core.count(matchers__$1);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie3611 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie3611 = (function (meta3555,_,matchers,ordered_QMARK_,size,meta3612){
this.meta3555 = meta3555;
this._ = _;
this.matchers = matchers;
this.ordered_QMARK_ = ordered_QMARK_;
this.size = size;
this.meta3612 = meta3612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie3611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (matchers__$1,size,___$1){
return (function (_3613,meta3612__$1){
var self__ = this;
var _3613__$1 = this;
return (new reitit.trie.t_reitit$trie3611(self__.meta3555,self__._,self__.matchers,self__.ordered_QMARK_,self__.size,meta3612__$1));
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie3611.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (matchers__$1,size,___$1){
return (function (_3613){
var self__ = this;
var _3613__$1 = this;
return self__.meta3612;
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie3611.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie3611.prototype.reitit$trie$Matcher$match$arity$4 = ((function (matchers__$1,size,___$1){
return (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
var j = (0);
while(true){
if((j < self__.size)){
var or__4131__auto__ = reitit.trie.match(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.matchers,j),i,max,path);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__4008 = (j + (1));
j = G__4008;
continue;
}
} else {
return null;
}
break;
}
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie3611.prototype.reitit$trie$Matcher$view$arity$1 = ((function (matchers__$1,size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(reitit.trie.view,self__.matchers);
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie3611.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (matchers__$1,size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reitit.trie.depth,self__.matchers)) + (1));
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie3611.prototype.reitit$trie$Matcher$length$arity$1 = ((function (matchers__$1,size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie3611.getBasis = ((function (matchers__$1,size,___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta3555","meta3555",-118728483,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie3554","reitit.trie/t_reitit$trie3554",-49454650,null)], null)),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null),new cljs.core.Symbol(null,"ordered?","ordered?",-1842273081,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta3612","meta3612",-513399914,null)], null);
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie3611.cljs$lang$type = true;

reitit.trie.t_reitit$trie3611.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie3611";

reitit.trie.t_reitit$trie3611.cljs$lang$ctorPrWriter = ((function (matchers__$1,size,___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.trie/t_reitit$trie3611");
});})(matchers__$1,size,___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie3611.
 */
reitit.trie.__GT_t_reitit$trie3611 = ((function (matchers__$1,size,___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie3611(meta3555__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta3612){
return (new reitit.trie.t_reitit$trie3611(meta3555__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta3612));
});})(matchers__$1,size,___$1))
;

}

return (new reitit.trie.t_reitit$trie3611(self__.meta3555,___$1,matchers__$1,ordered_QMARK_,size,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie3554.prototype.reitit$trie$TrieCompiler$_pretty$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return reitit.trie.view(matcher);
});

reitit.trie.t_reitit$trie3554.prototype.reitit$trie$TrieCompiler$_path_matcher$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return ((function (___$1){
return (function (path){
var temp__5733__auto__ = reitit.trie.match(matcher,(0),cljs.core.count(path),path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return reitit.trie.__GT_Match(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
} else {
return null;
}
});
;})(___$1))
});

reitit.trie.t_reitit$trie3554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta3555","meta3555",-118728483,null)], null);
});

reitit.trie.t_reitit$trie3554.cljs$lang$type = true;

reitit.trie.t_reitit$trie3554.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie3554";

reitit.trie.t_reitit$trie3554.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.trie/t_reitit$trie3554");
});

/**
 * Positional factory function for reitit.trie/t_reitit$trie3554.
 */
reitit.trie.__GT_t_reitit$trie3554 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie3554(meta3555){
return (new reitit.trie.t_reitit$trie3554(meta3555));
});

}

return (new reitit.trie.t_reitit$trie3554(cljs.core.PersistentArrayMap.EMPTY));
});
reitit.trie.map_parameters = (function reitit$trie$map_parameters(keys){
return cljs.core.zipmap(keys,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
});
/**
 * Returns a trie with routes added to it.
 */
reitit.trie.insert = (function reitit$trie$insert(var_args){
var G__3618 = arguments.length;
switch (G__3618) {
case 1:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.trie.insert.cljs$core$IFn$_invoke$arity$1 = (function (routes){
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2(null,routes);
});

reitit.trie.insert.cljs$core$IFn$_invoke$arity$2 = (function (node,routes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__3623){
var vec__3624 = p__3623;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3624,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3624,(1),null);
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3(acc,p,d);
}),node,routes);
});

reitit.trie.insert.cljs$core$IFn$_invoke$arity$3 = (function (node,path,data){
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(node,path,data,null);
});

reitit.trie.insert.cljs$core$IFn$_invoke$arity$4 = (function (node,path,data,p__3627){
var map__3628 = p__3627;
var map__3628__$1 = (((((!((map__3628 == null))))?(((((map__3628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3628):map__3628);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__3628__$1,new cljs.core.Keyword("reitit.trie","parameters","reitit.trie/parameters",-1304786787),reitit.trie.map_parameters);
var parts = reitit.trie.split_path(path);
var params = (function (){var G__3630 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,parts));
return (parameters.cljs$core$IFn$_invoke$arity$1 ? parameters.cljs$core$IFn$_invoke$arity$1(G__3630) : parameters.call(null,G__3630));
})();
return reitit.trie._insert((function (){var or__4131__auto__ = node;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
}
})(),reitit.trie.split_path(path),path,params,data);
});

reitit.trie.insert.cljs$lang$maxFixedArity = 4;

/**
 * Returns a default [[TrieCompiler]].
 */
reitit.trie.compiler = (function reitit$trie$compiler(){
return reitit.trie.clojure_trie_compiler();
});
/**
 * Returns a compiled trie, to be used with [[pretty]] or [[path-matcher]].
 */
reitit.trie.compile = (function reitit$trie$compile(var_args){
var G__3657 = arguments.length;
switch (G__3657) {
case 1:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.trie.compile.cljs$core$IFn$_invoke$arity$1 = (function (options){
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2(options,reitit.trie.compiler());
});

reitit.trie.compile.cljs$core$IFn$_invoke$arity$2 = (function (options,compiler){
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(options,compiler,cljs.core.PersistentVector.EMPTY);
});

reitit.trie.compile.cljs$core$IFn$_invoke$arity$3 = (function (p__3668,compiler,cp){
var map__3673 = p__3668;
var map__3673__$1 = (((((!((map__3673 == null))))?(((((map__3673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3673):map__3673);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3673__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__3673__$1,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3673__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wilds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3673__$1,new cljs.core.Keyword(null,"wilds","wilds",132271223));
var catch_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3673__$1,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570));
var ends = ((function (map__3673,map__3673__$1,data,params,children,wilds,catch_all){
return (function (p__3677){
var map__3678 = p__3677;
var map__3678__$1 = (((((!((map__3678 == null))))?(((((map__3678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3678):map__3678);
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3678__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var or__4131__auto__ = cljs.core.keys(children__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/"], null);
}
});})(map__3673,map__3673__$1,data,params,children,wilds,catch_all))
;
var matchers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__3683 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(data)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__3683,reitit.trie.data_matcher(compiler,params,data));
} else {
return G__3683;
}
})(),(function (){var iter__4523__auto__ = ((function (ends,map__3673,map__3673__$1,data,params,children,wilds,catch_all){
return (function reitit$trie$iter__3685(s__3686){
return (new cljs.core.LazySeq(null,((function (ends,map__3673,map__3673__$1,data,params,children,wilds,catch_all){
return (function (){
var s__3686__$1 = s__3686;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__3686__$1);
if(temp__5735__auto__){
var s__3686__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__3686__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__3686__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__3688 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__3687 = (0);
while(true){
if((i__3687 < size__4522__auto__)){
var vec__3694 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__3687);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3694,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3694,(1),null);
cljs.core.chunk_append(b__3688,reitit.trie.static_matcher(compiler,p,reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))));

var G__4099 = (i__3687 + (1));
i__3687 = G__4099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__3688),reitit$trie$iter__3685(cljs.core.chunk_rest(s__3686__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__3688),null);
}
} else {
var vec__3698 = cljs.core.first(s__3686__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3698,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3698,(1),null);
return cljs.core.cons(reitit.trie.static_matcher(compiler,p,reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))),reitit$trie$iter__3685(cljs.core.rest(s__3686__$2)));
}
} else {
return null;
}
break;
}
});})(ends,map__3673,map__3673__$1,data,params,children,wilds,catch_all))
,null,null));
});})(ends,map__3673,map__3673__$1,data,params,children,wilds,catch_all))
;
return iter__4523__auto__(children);
})()),(function (){var iter__4523__auto__ = ((function (ends,map__3673,map__3673__$1,data,params,children,wilds,catch_all){
return (function reitit$trie$iter__3702(s__3703){
return (new cljs.core.LazySeq(null,((function (ends,map__3673,map__3673__$1,data,params,children,wilds,catch_all){
return (function (){
var s__3703__$1 = s__3703;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__3703__$1);
if(temp__5735__auto__){
var s__3703__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__3703__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__3703__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__3705 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__3704 = (0);
while(true){
if((i__3704 < size__4522__auto__)){
var vec__3712 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__3704);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3712,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3712,(1),null);
cljs.core.chunk_append(b__3705,(function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends(c);
if(cljs.core.next(ends__$1)){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))], null));
} else {
return reitit.trie.wild_matcher(compiler,pv,cljs.core.ffirst(ends__$1),reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,pv)));
}
})());

var G__4109 = (i__3704 + (1));
i__3704 = G__4109;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__3705),reitit$trie$iter__3702(cljs.core.chunk_rest(s__3703__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__3705),null);
}
} else {
var vec__3728 = cljs.core.first(s__3703__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3728,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3728,(1),null);
return cljs.core.cons((function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends(c);
if(cljs.core.next(ends__$1)){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))], null));
} else {
return reitit.trie.wild_matcher(compiler,pv,cljs.core.ffirst(ends__$1),reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,pv)));
}
})(),reitit$trie$iter__3702(cljs.core.rest(s__3703__$2)));
}
} else {
return null;
}
break;
}
});})(ends,map__3673,map__3673__$1,data,params,children,wilds,catch_all))
,null,null));
});})(ends,map__3673,map__3673__$1,data,params,children,wilds,catch_all))
;
return iter__4523__auto__(wilds);
})()),(function (){var iter__4523__auto__ = ((function (ends,map__3673,map__3673__$1,data,params,children,wilds,catch_all){
return (function reitit$trie$iter__3736(s__3737){
return (new cljs.core.LazySeq(null,((function (ends,map__3673,map__3673__$1,data,params,children,wilds,catch_all){
return (function (){
var s__3737__$1 = s__3737;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__3737__$1);
if(temp__5735__auto__){
var s__3737__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__3737__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__3737__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__3739 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__3738 = (0);
while(true){
if((i__3738 < size__4522__auto__)){
var vec__3742 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__3738);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3742,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3742,(1),null);
cljs.core.chunk_append(b__3739,reitit.trie.catch_all_matcher(compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)));

var G__4126 = (i__3738 + (1));
i__3738 = G__4126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__3739),reitit$trie$iter__3736(cljs.core.chunk_rest(s__3737__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__3739),null);
}
} else {
var vec__3745 = cljs.core.first(s__3737__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3745,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3745,(1),null);
return cljs.core.cons(reitit.trie.catch_all_matcher(compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)),reitit$trie$iter__3736(cljs.core.rest(s__3737__$2)));
}
} else {
return null;
}
break;
}
});})(ends,map__3673,map__3673__$1,data,params,children,wilds,catch_all))
,null,null));
});})(ends,map__3673,map__3673__$1,data,params,children,wilds,catch_all))
;
return iter__4523__auto__(catch_all);
})());
if((cljs.core.count(matchers) > (1))){
return reitit.trie.linear_matcher(compiler,matchers,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matchers),(1))){
return cljs.core.first(matchers);
} else {
return reitit.trie.data_matcher(compiler,cljs.core.PersistentArrayMap.EMPTY,null);

}
}
});

reitit.trie.compile.cljs$lang$maxFixedArity = 3;

/**
 * Returns a simplified EDN structure of a compiled trie for printing purposes.
 */
reitit.trie.pretty = (function reitit$trie$pretty(var_args){
var G__3749 = arguments.length;
switch (G__3749) {
case 1:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2(compiled_trie,reitit.trie.compiler());
});

reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._pretty(compiler,compiled_trie);
});

reitit.trie.pretty.cljs$lang$maxFixedArity = 2;

/**
 * Returns a function of `path -> Match` from a compiled trie.
 */
reitit.trie.path_matcher = (function reitit$trie$path_matcher(var_args){
var G__3751 = arguments.length;
switch (G__3751) {
case 1:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(compiled_trie,reitit.trie.compiler());
});

reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._path_matcher(compiler,compiled_trie);
});

reitit.trie.path_matcher.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=reitit.trie.js.map
