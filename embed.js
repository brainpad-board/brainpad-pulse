(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/brainpad-pulse/",
    "verprefix": "",
    "workerjs": "/brainpad-pulse/worker.js",
    "monacoworkerjs": "/brainpad-pulse/monacoworker.js",
    "gifworkerjs": "/brainpad-pulse/gifjs/gif.worker.js",
    "serviceworkerjs": "/brainpad-pulse/serviceworker.js",
    "typeScriptWorkerJs": "/brainpad-pulse/tsworker.js",
    "pxtVersion": "7.3.7",
    "pxtRelId": "localDirRelId",
    "pxtCdnUrl": "/brainpad-pulse/",
    "commitCdnUrl": "/brainpad-pulse/",
    "blobCdnUrl": "/brainpad-pulse/",
    "cdnUrl": "/brainpad-pulse/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "brainpad",
    "simUrl": "/brainpad-pulse/simulator.html",
    "simserviceworkerUrl": "/brainpad-pulse/simulatorserviceworker.js",
    "simworkerconfigUrl": "/brainpad-pulse/workerConfig.js",
    "partsUrl": "/brainpad-pulse/siminstructions.html",
    "runUrl": "/brainpad-pulse/run.html",
    "docsUrl": "/brainpad-pulse/docs.html",
    "multiUrl": "/brainpad-pulse/multi.html",
    "asseteditorUrl": "/brainpad-pulse/asseteditor.html",
    "skillmapUrl": "/brainpad-pulse/skillmap.html",
    "isStatic": true
};

    var scripts = [
        "/brainpad-pulse/highlight.js/highlight.pack.js",
        "/brainpad-pulse/marked/marked.min.js",
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/brainpad-pulse/jquery.js")
    if (typeof jQuery == "undefined" || !jQuery.prototype.sidebar)
        scripts.push("/brainpad-pulse/semantic.js")
    if (!window.pxtTargetBundle)
        scripts.push("/brainpad-pulse/target.js");
    scripts.push("/brainpad-pulse/pxtembed.js");

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
