document.addEventListener('DOMContentLoaded', function() {
    var mediaElements = document.querySelectorAll('video, audio'), total = mediaElements.length;

    for (var i = 0; i < total; i++) {
        new MediaElementPlayer(mediaElements[i], {
            pluginPath: 'https://cdn.jsdelivr.net/npm/mediaelement@4.2.7/build/',
            shimScriptAccess: 'always',
            success: function () {
                var target = document.body.querySelectorAll('.player'), targetTotal = target.length;
                for (var j = 0; j < targetTotal; j++) {
                    target[j].style.visibility = 'visible';
                }
      }
    });
    }
});