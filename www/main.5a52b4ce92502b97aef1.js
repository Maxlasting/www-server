!function(e){function n(n){for(var i,a,c=n[0],s=n[1],u=n[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);for(l&&l(n);f.length;)f.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],i=!0,c=1;c<t.length;c++){var s=t[c];0!==r[s]&&(i=!1)}i&&(o.splice(n--,1),e=a(a.s=t[0]))}return e}var i={},r={0:0},o=[];function a(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=i,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)a.d(t,i,function(n){return e[n]}.bind(null,i));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/www/";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var l=s;o.push([288,1]),t()}({280:function(e,n){},283:function(e,n,t){"use strict";var i=t(56);t.n(i).a},284:function(e,n,t){(n=t(285)(!1)).push([e.i,".videos{margin-top:20px;display:flex}.videos video{margin:10px}\n",""]),e.exports=n},288:function(e,n,t){"use strict";t.r(n);var i=t(87),r=t.n(i),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app-box"},[t("p",[e._v("请打开控制台查看操作反馈，这里懒得写了")]),e._v(" "),t("p",[e._v("当前状态："+e._s(e.msg))]),e._v(" "),t("div",[t("p",[e._v("1 点击初始化")]),e._v(" "),t("button",{on:{click:e.init}},[e._v("初始化")])]),e._v(" "),t("div",[t("p",[e._v("2 加入或创建频道")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.channel,expression:"channel"}],attrs:{type:"text"},domProps:{value:e.channel},on:{input:function(n){n.target.composing||(e.channel=n.target.value)}}}),e._v(" "),t("button",{on:{click:e.join}},[e._v("加入")])]),e._v(" "),t("div",[t("p",[e._v("3 获取本地流并推送")]),e._v(" "),t("button",{on:{click:e.publish}},[e._v("推流")])]),e._v(" "),t("div",[t("p",[e._v("4 其他操作")]),e._v(" "),t("button",{on:{click:e.unpublish}},[e._v("停止推流")]),e._v(" "),t("button",{on:{click:e.leave}},[e._v("离开")])]),e._v(" "),t("div",[t("p",[e._v("这个是自己本地的流")]),e._v(" "),t("video",{ref:"own",attrs:{autoplay:"",controls:"",width:"240"}})]),e._v(" "),t("p",[e._v("这下面开始是其他人")]),e._v(" "),t("div",{ref:"videos",staticClass:"videos"})])};o._withStripped=!0;var a=t(2),c=t.n(a),s=t(13),u=t.n(s),l=t(135),d=t.n(l),f=t(82),p=t.n(f),v=t(23),h=t.n(v),_=t(83),m=t.n(_),g=t(84),y=t.n(g),w=t(136),b=t.n(w),k=t(32),x=t.n(k),C=t(33),j=t.n(C),S=t(34),O=t.n(S),I=t(15),P=t.n(I),T=t(35),D=t.n(T),M=t(85),R=t.n(M),E=t(137),F=t.n(E),J=t(81),L=t.n(J),A=t(138),$=t.n(A),q=t(139),z=t.n(q),B=t(46),N=t.n(B),U=t(140),V=t.n(U),Y=t(86),G=t.n(Y),H=t(141),K=t.n(H);function Q(){this._init()}function W(e,n,t,i){var r=e._events,o=r[n];return o?"function"==typeof o?o=r[n]=i?[t,o]:[o,t]:i?o.unshift(t):o.push(t):r[n]=t,e}function X(e,n,t){var i={fired:!1,wrapFn:void 0,target:e,type:n,listener:t},r=$()(Z).call(Z,i);return r.listener=t,i.wrapFn=r,r}function Z(){if(!this.fired){this.target.off(this.type,this.wrapFn),this.fired=!0;for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return this.listener.apply(this.target,n)}}function ee(e,n){for(var t=n,i=t+1;i<e.length;t++,i++)e[t]=e[i];e.length--}Q.prototype._init=function(){this._events=K()(null)},Q.prototype.trigger=function(e){var n=this._events,t=n[e];if(!t)return!1;for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];if("function"==typeof t)t.apply(this,r);else if(G()(t)){var a=V()(t).call(t),c=!0,s=!1,u=void 0;try{for(var l,d=h()(a);!(c=(l=d.next()).done);c=!0){var f=l.value;f.apply(this,r)}}catch(e){s=!0,u=e}finally{try{c||null==d.return||d.return()}finally{if(s)throw u}}}},Q.prototype.emit=Q.prototype.trigger,Q.prototype.on=function(e,n){return W(this,e,n,!1)},Q.prototype.prepend=function(e,n){return W(this,e,n,!0)},Q.prototype.off=function(e,n){if(!arguments.length)return!this._init();var t=this._events;if(void 0===N()(n))return delete t[e];var i=t[e];if(!i)return!1;if(i===n||i.listener===n)return delete t[e];if(G()(i)){var r=z()(i).call(i,(function(e){return e===n||e.listener===n}));if(r<0)return this;if(1===i.length)return delete t[e];0===r?i.shift():ee(i,r),1===i.length&&(t[e]=i[0])}return!0},Q.prototype.once=function(e,n){this.on(e,X(this,e,n))},Q.prototype.prependOnce=function(e,n){this.prepend(e,X(this,e,n))};var ne=Q,te=t(57),ie=t.n(te),re=["#d35eeb","#1385FF","#f3c35c","#ee4949"],oe=["debug","info","warn","error"];function ae(){}for(var ce=function(e){ae[oe[e]]=function(n,t){return function(e,n,t,i){var r,o,a,c=(new Date).toLocaleString();"object"==N()(e)&&(n=e=""),console.log(ie()(r=ie()(o=ie()(a="%c".concat(c," [")).call(a,t,"] - ")).call(o,e)).call(r,n?" --\x3e %o":""),function(e){return"color: #010101; background: ".concat(e,"; padding: 2px 4px; font-size: 12px; border-radius: 4px;")}(i),n||"")}(n,t,oe[e],re[e])}},se=0;se<oe.length;se++)ce(se);var ue=ae,le=function(e){function n(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return x()(this,n),(e=j()(this,O()(n).call(this))).streamId=t.streamId||"",e.audio=!0,e.video=!0,e.screen=!1,F()(L()(e),t),e.stream=null,e.tracks=null,e.audioTrack={type:"audio",track:null},e.videoTrack={type:"video",track:null},e}var t,i;return D()(n,e),P()(n,[{key:"init",value:(i=u()(c.a.mark((function e(n,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._createLocalStream();case 3:this.stream=e.sent,this.tracks=this.stream.getTracks(),this.audioTrack.track=this.stream.getAudioTracks()[0],this.videoTrack.track=this.stream.getVideoTracks()[0],this.emit("init_localstream_success",this),n&&n(this),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),ue.error("未能获取到相关权限",e.t0),this.emit("init_localstream_fail",this),t&&t(e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,11]])}))),function(e,n){return i.apply(this,arguments)})},{key:"_createLocalStream",value:(t=u()(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:this.audio,video:this.video});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}],[{key:"createStream",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new n(e)}}]),n}(ne),de=t(142),fe=t.n(de),pe=function(e){function n(e){var t;x()(this,n),(t=j()(this,O()(n).call(this)))._dev=!1;var i=t._dev?"http://localhost:3333":"wss://www.dabuguowoba.com";return t._io=fe.a.connect(i),t._ready=!1,t._io.on("connect",(function(){t._ready=!0,ue.info("信令服务器连接成功"),t.emit("connect_signalling_success",t._io)})),t._io.on("connect_error",(function(e){t._ready=!1,ue.err("信令服务器连接失败",e),t.emit("connect_signalling_error",e)})),t}return D()(n,e),P()(n,null,[{key:"create",value:function(e){return new n(e)}}]),P()(n,[{key:"init",value:function(){var e=this,n=this._io;n.on("joined",(function(n){ue.info("当前用户加入频道成功",n),e.emit("joined",n)})),n.on("joinerr",(function(n){ue.error("当前用户加入频道失败",n),e.emit("joinerr",n)})),n.on("leaved",(function(n){ue.info("当前用户已离开此频道",n),e.emit("leaved",n)})),n.on("hasjoin",(function(n){ue.warn("当前用户已经在此频道",n),e.emit("hasjoin",n)})),n.on("kick",(function(n){console.log(n),ue.warn("当前用户已被踢出此频道",n),e.emit("kick",n)})),n.on("peer-in",(function(n){ue.info("有用户加入当前频道",n),e.emit("peer-in",n)})),n.on("peer-out",(function(n){ue.info("有用户离开当前频道",n),e.emit("peer-out",n)})),n.on("message",(function(n){return n&&n.payload&&"offer"===n.payload.type?(ue.info("接收到远端 offer",n),void e.emit("received_offer",n)):n&&n.payload&&"answer"===n.payload.type?(ue.info("接收到远端 answer",n),void e.emit("received_answer",n)):n&&n.payload&&"candidate"===n.payload.type?(ue.info("接收到远端 candidate",n),void e.emit("received_candidate",n)):void 0})),n.on("peer-publish",(function(n){ue.info("远端开始推流",n),e.emit("peer-publish",n)})),n.on("peer-unpublish",(function(n){ue.info("远端停止推流",n),e.emit("peer-unpublish",n)}))}},{key:"join",value:function(e,n){this._io.emit("join",e,n)}},{key:"leave",value:function(){this._io.emit("leave")}},{key:"send",value:function(e){this._io.emit("message",e)}},{key:"publish",value:function(){this._io.emit("publish")}},{key:"unpublish",value:function(){this._io.emit("unpublish")}}]),n}(ne),ve=function(e){function n(){var e;return x()(this,n),(e=j()(this,O()(n).call(this)))._signalling=null,e._uid=null,e._peers=new b.a,e._offserConnections=new y.a,e._answerConnections=new y.a,e._published=!1,e._localStream=null,e}var t,i;return D()(n,e),P()(n,null,[{key:"createStream",value:function(e){if(!n._inited)throw new Error("未初始化 STEngine");if(!n._joined)throw new Error("尚未加入频道");return le.createStream(e)}},{key:"createClient",value:function(){return new n}}]),P()(n,[{key:"init",value:function(e,t,i){n._inited=!0;var r=this._signalling=pe.create(e);r.on("connect_signalling_success",(function(){t&&t()})),r.on("connect_signalling_error",(function(e){i&&i(e)})),r.init(),this._initSignalling(r)}},{key:"_createPeerConnection",value:function(e){var n=new RTCPeerConnection({iceServers:[{urls:"turn:turn.maxlasting.com",username:"fq",credential:"123456"}]});return n._id=e,n}},{key:"join",value:function(e,n){this._signalling.join(e,n)}},{key:"leave",value:function(){n._joined&&(this._published&&this.unpublish(this._localStream),this._signalling.leave())}},{key:"_send",value:function(e){this._signalling.send(e)}},{key:"publish",value:function(e){!this._published&&e&&n._joined&&(this._createJoinedPeerConnection(e),this._signalling.publish(),this._localStream=e,this._published=!0,this._unpublish&&(this._signalling.publish(),this._unpublish=!1))}},{key:"unpublish",value:function(e){if(this._published&&!this._unpublish){var n=e.tracks;m()(n).call(n,(function(e){return e.stop()}));var t=!0,i=!1,r=void 0;try{for(var o,a=h()(p()(c=this._offserConnections).call(c));!(t=(o=a.next()).done);t=!0){var c,s=o.value;console.log(s),s.peerconnection.close()}}catch(e){i=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(i)throw r}}this._offserConnections.clear(),this._signalling.unpublish(),this._published=!1,this._unpublish=!0}}},{key:"_createJoinedPeerConnection",value:(i=u()(c.a.mark((function e(n){var t,i,r,o,a,s,u=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=!0,i=!1,r=void 0,e.prev=3,o=c.a.mark((function e(){var t,i,r,o,a,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.value,i=u._uid+"-"+t,r=null,r=u._createPeerConnection(i),o=n.tracks,a=n.stream,d()(o).call(o,(function(e){return r.addTrack(e,a)})),r.onicecandidate=function(e){e.candidate&&u._send({from:u._uid,to:t,connectionId:i,payload:{type:"candidate",candidate:e.candidate}})},u._offserConnections.set(i,{uid:u._uid,peer:t,peerconnection:r,localStream:n}),e.next=10,r.createOffer();case 10:l=e.sent,r.setLocalDescription(l),u._send({from:u._uid,to:t,connectionId:i,payload:l});case 13:case"end":return e.stop()}}),e)})),a=h()(this._peers);case 6:if(t=(s=a.next()).done){e.next=11;break}return e.delegateYield(o(),"t0",8);case 8:t=!0,e.next=6;break;case 11:e.next=17;break;case 13:e.prev=13,e.t1=e.catch(3),i=!0,r=e.t1;case 17:e.prev=17,e.prev=18,t||null==a.return||a.return();case 20:if(e.prev=20,!i){e.next=23;break}throw r;case 23:return e.finish(20);case 24:return e.finish(17);case 25:case"end":return e.stop()}}),e,this,[[3,13,17,25],[18,,20,24]])}))),function(e){return i.apply(this,arguments)})},{key:"_createOtherPeerConnections",value:(t=u()(c.a.mark((function e(n){var t,i,r,o,a,s,u=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=!0,i=!1,r=void 0,e.prev=3,o=function(){var e=s.value,n=e+"-"+u._uid,t=u._createPeerConnection(n);u._answerConnections.set(n,{uid:u._uid,peer:e,peerconnection:t}),t.onicecandidate=function(t){t.candidate&&u._send({from:u._uid,to:e,connectionId:n,payload:{type:"candidate",candidate:t.candidate}})},t.onconnectionstatechange=function(){"checking"==t.iceConnectionState&&u.emit("checking"),"connected"==t.iceConnectionState&&(u._answerConnections.get(n).state="connected",u.emit("added-remote-stream",{stream:t.getRemoteStreams?t.getRemoteStreams()[0]:t._stream,getId:function(){return e}}))},t.ontrack=function(e){t._stream=e.streams[0]}},a=h()(n);!(t=(s=a.next()).done);t=!0)o();e.next=12;break;case 8:e.prev=8,e.t0=e.catch(3),i=!0,r=e.t0;case 12:e.prev=12,e.prev=13,t||null==a.return||a.return();case 15:if(e.prev=15,!i){e.next=18;break}throw r;case 18:return e.finish(15);case 19:return e.finish(12);case 20:case"end":return e.stop()}}),e,null,[[3,8,12,20],[13,,15,19]])}))),function(e){return t.apply(this,arguments)})},{key:"_initSignalling",value:function(e){var t=this;e.on("joined",(function(e){n._joined=!0;var i=e.uid,r=e.others;t._uid=i,t._createOtherPeerConnections(r),m()(r).call(r,(function(e){return t._peers.add(e)}))})),e.on("leaved",(function(e){n._joined=!1;var i=!0,r=!1,o=void 0;try{for(var a,c=function(){var e=a.value,n=e.peerconnection,i=e.state,r=e.peer;n.close(),"connected"==i&&t.emit("removed-remote-stream",{getId:function(){return r}})},s=h()(p()(u=t._answerConnections).call(u));!(i=(a=s.next()).done);i=!0){var u;c()}}catch(e){r=!0,o=e}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}t._peers.clear()})),e.on("peer-in",function(){var e=u()(c.a.mark((function e(n){var i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=n.peer,t._peers.add(i),t._createOtherPeerConnections([i]),t._published&&t._createJoinedPeerConnection(t._localStream);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.on("peer-out",(function(e){var n=e.peer,i=n+"-"+t._uid;if(t._answerConnections.has(i)){var r=t._answerConnections.get(i),o=r.peerconnection;"connected"==r.state&&t.emit("removed-remote-stream",{getId:function(){return n}}),o.close(),t._answerConnections.delete(i)}if(t._published){var a=t._uid+"-"+n;t._offserConnections.get(a).peerconnection.close(),t._answerConnections.delete(a)}t._peers.delete(n)})),e.on("peer-publish",(function(e){var n=e.peer;t._createOtherPeerConnections([n])})),e.on("peer-unpublish",(function(e){var n=e.peer,i=n+"-"+t._uid;t._answerConnections.get(i).peerconnection.close(),t._answerConnections.delete(i),t.emit("removed-remote-stream",{getId:function(){return n}})})),e.on("received_offer",function(){var e=u()(c.a.mark((function e(n){var i,r,o,a,s,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.from,n.to,r=n.connectionId,o=n.payload,a=t._answerConnections.get(r),(s=a.peerconnection).setRemoteDescription(new RTCSessionDescription(o)),s.onicecandidate=function(e){e.candidate&&t._send({from:t._uid,to:i,connectionId:r,payload:{type:"candidate",candidate:e.candidate}})},e.next=6,s.createAnswer();case 6:u=e.sent,s.setLocalDescription(u),t._send({from:t._uid,to:i,connectionId:r,payload:u});case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.on("received_answer",(function(e){e.from,e.to;var n=e.connectionId,i=e.payload;t._offserConnections.get(n).peerconnection.setRemoteDescription(i)})),e.on("received_candidate",(function(e){e.from,e.to;var n=e.connectionId,i=e.payload,r=(t._answerConnections.get(n)||t._offserConnections.get(n)).peerconnection,o=new RTCIceCandidate(i.candidate);r.addIceCandidate(o)}))}}]),n}(ne);R()(ve,"_inited",!1),R()(ve,"_joined",!1);var he=ve,_e=Math.floor(1e8*Math.random())+1,me={data:function(){return{client:null,channel:"123456",uid:_e,localStream:null,msg:"未初始化"}},mounted:function(){},methods:{init:function(){var e=this;this.client||(this.client=he.createClient(),this.client.on("added-remote-stream",(function(n){var t=n.stream,i=n.getId(),r=document.createElement("video");r.id="video"+i,r.width=320,r.height=240,r.srcObject=t,r.controls=!0,e.$refs.videos.appendChild(r),r.play()})),this.client.on("removed-remote-stream",(function(n){var t=n.getId(),i=document.getElementById("video"+t);e.$refs.videos.removeChild(i)})),this.client.init(),this.msg="初始化完成")},join:function(){if(!this.client)return console.log("尚未初始化");this.client.join(this.channel,this.uid),this.msg="加入房间"},leave:function(){if(!this.client)return console.log("尚未初始化");this.client.leave(),this.msg="离开房间"},publish:function(){var e=this;return u()(c.a.mark((function n(){var t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.client){n.next=2;break}return n.abrupt("return",console.log("尚未初始化"));case 2:return t=e.localStream=he.createStream({video:!0,audio:!1}),n.next=5,t.init();case 5:e.$refs.own.srcObject=t.stream,e.client.publish(t),e.msg="开始推流";case 8:case"end":return n.stop()}}),n)})))()},unpublish:function(){if(!this.client)return console.log("尚未初始化");this.client.unpublish(this.localStream),this.msg="停止推流"}}},ge=(t(283),t(143)),ye=Object(ge.a)(me,o,[],!1,null,null,null);ye.options.__file="development/app.vue";var we=ye.exports;r.a.config.productionTip=!1,new r.a({el:"#root",render:function(e){return e(we)}})},56:function(e,n,t){var i=t(284);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,t(289).default)("018743e1",i,!1,{})}});