var pxt;"undefined"==typeof navigator||!/Trident/i.test(navigator.userAgent)||/skipbrowsercheck=1/i.exec(window.location.href)||/\/browsers/i.exec(window.location.href)||(window.location.href="/browsers"),function(e){const t=[];let r,n,o,i=!1,s=!1,a=!1;class p{constructor(e){this.log=e,this.q=[],t.push(this)}track(e,t,r){i?this.log(e,t,r):(this.q.push([e,t,r]),this.q.length>20&&this.q.shift())}flush(){for(;this.q.length;){const[e,t,r]=this.q.shift();this.log(e,t,r)}}}function c(e=!1){const r=window.loadAppInsights;r&&(a=r(e,f),i=!0,t.forEach((e=>e.flush())))}function f(e){const t=window.pxtConfig;if(void 0===t||!t)return;const r=e.data.baseData;r.properties=r.properties||{},r.properties.target=t.targetId,r.properties.stage=(t.relprefix||"/--").replace(/[^a-z]/gi,""),"undefined"!=typeof Windows&&(r.properties.WindowsApp=1);const n=navigator.userAgent.toLowerCase(),o=/\belectron\/(\d+\.\d+\.\d+.*?)(?: |$)/i.exec(n);o&&(r.properties.Electron=1,r.properties.ElectronVersion=o[1]);const i=window.pxtElectron;void 0!==i&&(r.properties.PxtElectron=1,r.properties.ElectronVersion=i.versions.electronVersion,r.properties.ChromiumVersion=i.versions.chromiumVersion,r.properties.NodeVersion=i.versions.nodeVersion,r.properties.PxtElectronVersion=i.versions.pxtElectronVersion,r.properties.PxtCoreVersion=i.versions.pxtCoreVersion,r.properties.PxtTargetVersion=i.versions.pxtTargetVersion,r.properties.PxtElectronIsProd=i.versions.isProd),r.properties.cookie=s&&a}!function(e){let t;function r(){return Math.round(performance.now()-e.startTimeMs)}function n(e){let t=(e=Math.round(e))%1e3,r=Math.floor(e/1e3),n=r%60,o=Math.floor(r/60);return o>0?`${o}m${n}s`:r>5?`${r}s`:r>0?`${r}s${t}ms`:`${e}ms`}function o(t,n=r()){e.stats.milestones.push([t,n])}function i(){if(t=performance&&!!performance.mark&&!!performance.measure,t){performance.measure("measure from the start of navigation to now");let t=performance.getEntriesByType("measure")[0];e.startTimeMs=t.startTime}}e.stats={durations:[],milestones:[]},e.perfReportLogged=!1,e.splitMs=r,e.prettyStr=n,e.splitStr=function(){return n(r())},e.recordMilestone=o,e.init=i,e.measureStart=function(e){t&&performance.mark(`${e} start`)},e.measureEnd=function(r){if(t&&performance.getEntriesByName(`${r} start`).length){performance.mark(`${r} end`),performance.measure(`${r} elapsed`,`${r} start`,`${r} end`);let t=performance.getEntriesByName(`${r} elapsed`,"measure");if(t&&1===t.length){let n=t[0],o=n.duration;o>10&&e.stats.durations.push([r,n.startTime,o])}performance.clearMarks(`${r} start`),performance.clearMarks(`${r} end`),performance.clearMeasures(`${r} elapsed`)}},e.report=function(r=null){if(t){let t="performance report:\n";for(let[o,i]of e.stats.milestones)if(!r||o.indexOf(r)>=0){t+=`\t\t${o} @ ${n(i)}\n`}t+="\n";for(let[o,i,s]of e.stats.durations){let e=r&&o.indexOf(r)>=0;if(s>50&&!r||e){t+=`\t\t${o} took ~ ${n(s)}`,s>1e3&&(t+=` (${n(i)} - ${n(i+s)})`),t+="\n"}}console.log(t)}e.perfReportLogged=!0},i(),o("first JS running")}(o=e.perf||(e.perf={})),e.initAnalyticsAsync=function(){(function(){const e="undefined"!=typeof window,t="undefined"!=typeof Windows,r=e&&!!window.pxtElectron,n=e&&!!window.ipcRenderer||/ipc=1/.test(location.hash)||/ipc=1/.test(location.search);return t||r||n})()||function(){try{return window&&window.self!==window.top}catch(e){return!1}}()&&/nocookiebanner=1/i.test(window.location.href)?c(!0):window.pxtSkipAnalyticsCookie?c(!1):c(!0)},e.aiTrackEvent=function(e,t,n){r||(r=new p(((e,t,r)=>window.appInsights.trackEvent(e,t,r)))),r.track(e,t,n)},e.aiTrackException=function(e,t,r){n||(n=new p(((e,t,r)=>window.appInsights.trackException(e,t,r)))),n.track(e,t,r)},e.initializeAppInsightsInternal=c,e.setInteractiveConsent=function(e){s=e}}(pxt||(pxt={}));