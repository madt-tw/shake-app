(this["webpackJsonpshake-app"]=this["webpackJsonpshake-app"]||[]).push([[0],{13:function(e,t,n){e.exports=n(23)},18:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(4),r=n.n(i),s=(n(18),n(34)),c=n(5),u=n(6),l=n(10),h=n(9),m=n(7),f=n.n(m),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).state={date:new Date,choosingTip:!1,message:"",tips:["If you're feeling low today, check out our self help resources","Just 10 mins of meditation a day can help relieve stress & anxiety"]},o}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.requestAccelerometerPermission()}},{key:"requestAccelerometerPermission",value:function(){var e=this;this.isAnIphone()?DeviceMotionEvent.requestPermission().then((function(t){"granted"===t&&e.configureShakeDetection()})).catch(console.error):this.configureShakeDetection()}},{key:"isAnIphone",value:function(){return"function"===typeof DeviceMotionEvent.requestPermission}},{key:"configureShakeDetection",value:function(){var e=this;this.shake=new f.a({threshold:5,timeout:1e3}),this.shake.start(),window.addEventListener("shake",(function(){setInterval((function(){e.setState({choosingTip:!0})}),3e3)}),!1)}},{key:"componentWillUnmount",value:function(){this.shake.stop()}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Shake detector!"),a.a.createElement("h2",null,this.state.choosingTip?this.state.tips[Math.random()]:"Shake your device..."))}}]),n}(a.a.Component);var v=function(){return a.a.createElement(s.a,{color:"text.primary"},a.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.4216b416.chunk.js.map