(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/brainpad-pulse/",
    "verprefix": "",
    "workerjs": "/brainpad-pulse/worker.js",
    "monacoworkerjs": "/brainpad-pulse/monacoworker.js",
    "pxtVersion": "4.3.1",
    "pxtRelId": "",
    "pxtCdnUrl": "/brainpad-pulse/",
    "commitCdnUrl": "/brainpad-pulse/",
    "blobCdnUrl": "/brainpad-pulse/",
    "cdnUrl": "/brainpad-pulse/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "brainpad",
    "simUrl": "/brainpad-pulse/simulator.html",
    "partsUrl": "/brainpad-pulse/siminstructions.html",
    "runUrl": "/brainpad-pulse/run.html",
    "docsUrl": "/brainpad-pulse/docs.html",
    "isStatic": true
};

    var scripts = [
        "/brainpad-pulse/highlight.js/highlight.pack.js",
        "/brainpad-pulse/bluebird.min.js",
        "/brainpad-pulse/semantic.js",
        "/brainpad-pulse/marked/marked.min.js",
        "/brainpad-pulse/target.js",
        "/brainpad-pulse/pxtembed.js"
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/brainpad-pulse/jquery.js")

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
