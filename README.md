# da-share
jQuery plugin for share buttons

## DEMO:
https://danielkon.github.io/da-share

## HOW TO:
### Hard Mode

#### Requirements:
* jQuery

#### Installation:
Paste `<script src="https://danielkon.github.io/da-share/jquery.da-share.js"></script>`<br>
after `jquery.min.js` script 

#### Using:
Add a call to the `da_share` function on the `onclick` event, for example: <br>
`<a href="#" onclick="da-share.fb();">Share</a>`<br>
`<a href="#" onclick="da-share.tw();">Tweat</a>`<br>

##### Available social networks:
* Facebook — `onclick="da-share.fb();"`
* VK (ВКонтакте) — `onclick="da-share.vk();"`
* Twitter — `onclick="da-share.tw();"`
* OK (Одноклассники) — `onclick="da-share.ok();"`
* Google Plus — `onclick="da-share.gp();"`


### Easy Mode

#### Requirements:
* jQuery
* Bootstrap 4
* FontAwesome

#### Installation:
Paste `<script src="https://danielkon.github.io/da-share/jquery.da-share.js"></script>` after `jquery.min.js` script 

#### Using:
Paste `<div class="da-share-html da-fb da-vk da-tw da-ok da-gp"></div>` as many copies of this code as you need on the page.
