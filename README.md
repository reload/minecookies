minecookies
===========

This is a slightly modified version of version 2 of the cookie consent script from [http://minecookies.org/gratis-script-til-cookiesamtykke](http://minecookies.org/gratis-script-til-cookiesamtykke).

![Example](http://minecookies.org/sites/default/files/mediearkiv/filer/grey-bar.png =720x))

The goal of the modifications is to allow external parties to modify the configuration of the script such as text, links etc. without altering the source code as suggested by the authors.

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
  CookieInformerBooklet.init(options)
});
```

License
-------

The original script has been created by Minecookies.org and licensed under [Creative Commons Attribution 3.0 Unported](http://creativecommons.org/licenses/by/3.0/deed.en).
