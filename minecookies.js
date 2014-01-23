var CookieInformerBooklet = CookieInformerBooklet || {};
var CookieInformerBooklet = {
  config: {
    title: 'Websitet anvender cookies til at huske dine indstillinger, statistik og at målrette annoncer. <a href="LINK-TIL-PRIVATLIVSPOLITIK" target="_blank">Læs mere >> </a>',
    buttonText: 'Cookies'
  },
  init: function (options) {
    jQuery.extend(this.config, options);
    if (this.getCookie() == 'hidden') {
      return
    }
    this.createElements();
    this.bindEvents()
  },
  createElements: function () {
    this.$container = jQuery('<div />', {
      id: 'cookieInformerBooklet'
    }).css({
        bottom: '0',
        height: '1px',
        left: '0',
        overflow: 'visible',
        position: 'fixed',
        right: '0',
        zIndex: '11001'
      });
    this.$button = jQuery('<div />', {
      text: 'Ok',
      'class': 'cookie-button'
    }).css({
        backgroundColor: '#FAFAFA',
        borderColor: '#93948c',
        borderRadius: '5px 5px 0 0',
        borderStyle: 'solid solid none',
        borderWidth: '1px 1px medium',
        bottom: '0',
        boxShadow: '0 0 6px #bbbbbb',
        color: '#444444',
        cursor: 'pointer',
        display: 'block',
        height: '24px',
        lineHeight: '24px',
        opacity: '0.9',
        padding: '0 14px',
        position: 'absolute',
        right: '76px',
        zIndex: '2',
        transition: 'all 0.3s linear'
      }).hover(function () {
        jQuery(this).css({
          borderColor: '#44b2f0',
          boxShadow: '0 0 6px white'
        })
      }, function () {
        jQuery(this).css({
          borderColor: '#93948c',
          boxShadow: '0 0 6px #bbbbbb'
        })
      });
    this.$content = jQuery('<div />', {
      'class': 'content'
    }).css({
        backgroundColor: '#FFFFFF',
        borderColor: '#999999',
        borderRadius: '0 0 0 0',
        borderStyle: 'solid none none',
        borderWidth: '4px 0px medium',
        bottom: '0',
        color: '#444444',
        display: 'block',
        left: '0px',
        opacity: '0.9',
        padding: '0px 0px 20px 25px',
        position: 'absolute',
        right: '0px',
        zIndex: '1'
      });
    this.$contentTitle = jQuery('<h3 />', {
      text: this.config.title
    });
    this.$contentText = jQuery('<p />').css({
      paddingLeft: "20px",
      background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAYAAAACsSQRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE5N0I5QzZCRjVBMzExRTFBMERCOUY5NUU2NjEwQTQ2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE5N0I5QzZDRjVBMzExRTFBMERCOUY5NUU2NjEwQTQ2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk3QjlDNjlGNUEzMTFFMUEwREI5Rjk1RTY2MTBBNDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTk3QjlDNkFGNUEzMTFFMUEwREI5Rjk1RTY2MTBBNDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6LMfT1AAACPklEQVR42oyTS09TURCAv9sWaHlYKF2ACBITAywMieGChCBqTDQRly5NTPQfGLas/An4P3hYnukrJIDiAoKxsDDBwG2w0NJ3b9vbezzc+Fh4USeZM+ecmXxz5mRGEUIcAl5sRNd1wuEwqqri9/u5RDKKhOTkptnO+3ZmhnQqhVAUXk9N4XG77cLyDrkYdp73m5uUTZPn09N09Q2wHAhc9hLDYXdbrVYJBdcYnHzGQtyk98ET9vZ2SclX2YktJBIM0nrtOlprJ1qmwueah5ujdwnMzf4fpFgssv1hC9+9p6RyNV5019NSNTAG73MU1zg+Ovo3ZCXwDl//ILuKj2KliscJCiZbWQfd449YnJ/7O+Rc1hyLxRDDj9k/0znIm8wcVlhP1mRZJU5uDJMqljiQMZdCluZnab09RrTo4VvJoKPBwZs+NyM+J4mySeTUwDs+yWpgwR4S1zS+xuPE+yeInRXI1gQFqXUyomZC2hBoWZ2d9gH0hkZ2Pm7/CVlZmMWtPmQp6aBQNUlXBXkJsTrXFJzLc0meIydlzDuThNdWMGUf/YJEQyG+nKXZ6FCJJQucy6yJsrBAkkdG2oQuSEp7nNNZdPZSau9iIxr9DQmuLtMzMoGmOOls8eBvbqTH24RmNvByXxDM1dHb1mjdX73SRKIG7UMTrEeCFsR1oeroGNsbIV4N56nUXJZDuehnIUs4AVWmqpfzI344XIrJaewTt4ZGLIbyc4qzmQwuYeJwKPxLJJuK/CdvW5s1xd8FGADRcRHOeCqahwAAAABJRU5ErkJggg==) center left no-repeat"
    }).html(this.config.text);
    this.$content.append(this.$contentTitle).append(this.$contentText);
    this.$container.appendTo('body').append(this.$button).append(this.$content)
  },
  bindEvents: function () {
    this.$button.click(this.setCookie)
  },
  setCookie: function () {
    var name = 'CookieInformerBooklet',
      value = 'hidden',
      days = 20 * 365;
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      var expires = "; expires=" + date.toGMTString()
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
    CookieInformerBooklet.$container.fadeOut(function () {
      jQuery(this).remove()
    })
  },
  getCookie: function () {
    var c_name = 'CookieInformerBooklet';
    if (document.cookie.length > 0) {
      c_start = document.cookie.indexOf(c_name + "=");
      if (c_start != -1) {
        c_start = c_start + c_name.length + 1;
        c_end = document.cookie.indexOf(";", c_start);
        if (c_end == -1) {
          c_end = document.cookie.length
        }
        return unescape(document.cookie.substring(c_start, c_end))
      }
    }
    return ""
  }
};
(function () {
  var v = "1.5.1";
  if (window.jQuery === undefined || compareVersion(v, window.jQuery.fn.jquery)) {
    var done = false;
    var script = document.createElement("script");
    script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
    script.onload = script.onreadystatechange = function () {
      if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
        done = true;
      }
    };
    document.getElementsByTagName("head")[0].appendChild(script)
  }

  function compareVersion(version1, version2) {
    if ('undefined' === typeof version1) {
      throw new Error("compareVersion needs at least one parameter.");
    }
    version2 = version2 || jQuery.fn.jquery;
    if (version1 == version2) {
      return 0
    }
    var v1 = normalize(version1);
    var v2 = normalize(version2);
    var len = Math.max(v1.length, v2.length);
    for (var i = 0; i < len; i++) {
      v1[i] = v1[i] || 0;
      v2[i] = v2[i] || 0;
      if (v1[i] == v2[i]) {
        continue
      }
      return v1[i] > v2[i] ? 1 : 0
    }
    return 0
  };

  function normalize(version) {
    return jQuery.map(version.split('.'), function (value) {
      return parseInt(value, 10)
    })
  }
})();
