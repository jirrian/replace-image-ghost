Adapted from hacking the browser 'replace-image' example: https://github.com/ITPNYU/hacking-the-browser/tree/master/replace-image

Replaces all images on the page with a picture of a ghost that appears on hover.

Uses:

  * the [`chrome.extension.getURL`
API](https://developer.chrome.com/extensions/extension#method-getURL) to get the extension-relative URL to
"ghost.jpg"
  * the
    [`"web_accessible_resources"`](https://developer.chrome.com/extensions/manifest/web_accessible_resources)
key in the manifest to specify that "ghost.jpg" can be loaded onto the web page
