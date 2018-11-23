# da-share
jQuery plugin for share buttons

<br><br>

## HOW TO:

### Easy Mode

#### Requirements:
* jQuery
* Bootstrap 4
* FontAwesome

#### Installation:
Paste <br><br>
`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css">`<br>
`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">`<br>
<br>
after `<head>` in your html page
<br>
<br>
Paste <br><br>
`<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>`<br>
`<script type="text/javascript" src="https://danielkon.github.io/da-share/jquery.da-share.js"></script>`<br>
<br>
before `</body>` in your html page

#### Using:
Paste `<div class="da-share-html da-fb da-vk da-tw da-ok da-gp"></div>` as many copies of this code as you need on the html page.

##### Available social networks:
* Facebook — `da-fb`
* VK (ВКонтакте) — `da-vk`
* Twitter — `da-tw`
* OK (Одноклассники) — `da-ok`
* Google Plus — `da-gp`

<br><br>

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

<br><br>

## DEMO:
https://danielkon.github.io/da-share
