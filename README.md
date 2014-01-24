minecookies
===========

This is a slightly modified version of the cookie consent script from [http://minecookies.org/gratis-script-til-cookiesamtykke](http://minecookies.org/gratis-script-til-cookiesamtykke).

The goal of the modifications is to allow external parties to modify the configuration of the script such as text, links etc. without altering the source code as suggested by the original authors.

Usage
-----

Add minecookies.js to your site and initialize the script.

```js
jQuery(document).ready(function () {
  var options = {
    title: '',
    text: 'Websitet anvender cookies til at huske dine indstillinger, statistik og at målrette annoncer. <a href="LINK-TIL-PRIVATLIVSPOLITIK" target="_blank">Læs mere >> </a>',
    buttonText: 'Cookies'
  };
  CookieInformerBooklet.init(options);
});
```

Example
-------

![Example](http://minecookies.org/sites/default/files/mediearkiv/filer/grey-bar.png)

License
-------

The original script has been created by Minecookies.org and licensed under [Creative Commons Attribution 3.0 Unported](http://creativecommons.org/licenses/by/3.0/deed.en).
