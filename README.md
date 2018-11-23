# da-share
jQuery plugin for share buttons

<br><br>

## HOW TO:

### Easy Mode

#### Requirements:
* [jQuery](https://github.com/jquery/jquery)
* [Bootstrap 4](https://github.com/twbs/bootstrap)
* [Font Awesome](https://github.com/FortAwesome/Font-Awesome)

#### Installation:
Paste <br><br>
`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css">`<br>
`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">`<br>
<br>
after `<head>` tag in your html page
<br>
<br>
Paste <br><br>
`<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>`<br>
`<script type="text/javascript" src="https://danielkon.github.io/da-share/jquery.da-share.js"></script>`<br>
<br>
before `</body>` tag in your html page

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
* [jQuery](https://github.com/jquery/jquery)

#### Installation:
Paste `<script src="https://danielkon.github.io/da-share/jquery.da-share.js"></script>`<br>
after `jquery.min.js` script 

#### Using:
Add a call to the `da_share` function on the `onclick` event, for example: <br>
<br>
`<a href="#" onclick="da_share.fb();">Share</a>`<br>
`<a href="#" onclick="da_share.tw();">Tweat</a>`<br>
<br>

##### Available social networks:
* Facebook — `onclick="da_share.fb();"`
* VK (ВКонтакте) — `onclick="da_share.vk();"`
* Twitter — `onclick="da_share.tw();"`
* OK (Одноклассники) — `onclick="da_share.ok();"`
* Google Plus — `onclick="da_share.gp();"`

<br><br>

## DEMO:
<a href="https://danielkon.github.io/da-share/demo.html" target="_blank">https://danielkon.github.io/da-share/demo.html</a>
