import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var appid = 'cysDEMHcG';
    var conf = 'prod_7e11c97c49dde9f9473710e95fe9a695';
    var width = window.innerWidth || document.documentElement.clientWidth;
    var b;
    if (width < 960) {
      window.document.write('<script id="changyan_mobile_js" charset="utf-8" type="text/javascript" src="https://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf + '"><\/script>');
    } else {
      var ng_widnow: any = window;
      var ng_b: any = (b as any);
      var loadJs = function (d, a) {
        var c = document.getElementsByTagName("head")[0] || document.head || document.documentElement;
        var b = document.createElement("script"); b.setAttribute("type", "text/javascript");
        b.setAttribute("charset", "UTF-8");
        b.setAttribute("src", d);
        if (typeof a === "function") {
          if (ng_widnow.attachEvent) {
          ng_b.onreadystatechange = function () {
            var e = ng_b.readyState; if (e === "loaded" || e === "complete") {
              ng_b.onreadystatechange = null; a()
            }
          }
          } else { b.onload = a }
        } c.appendChild(b)
      }; loadJs("https://changyan.sohu.com/upload/changyan.js",
        function () {
          ng_widnow.changyan.api.config({ appid: appid, conf: conf })
        });
    }
  }

}
