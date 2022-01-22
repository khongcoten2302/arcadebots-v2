// ==UserScript==
// @name         arcadebots V2
// @namespace    http://slither.io/*
// @version      2
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.3/socket.io.min.js
// @description  bots for slither.io
// @match        http://slither.io/*
// @author       arcadegamer / Badplayer
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    if (localStorage.getItem("fe_uuid") === null) {

    console.log("%c Empty UUID. Generating UUID...", "background-color: #000000; color: #ff9a00;");
    localStorage.setItem("fe_uuid", getUserId());
    window.location.reload();
} else {

    console.log("%c UUID: %s", "background-color: #000000; color: #3cff00;", localStorage.getItem("fe_uuid"));
}

function getUserId() {

    function s4() {

        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + s4()
        s4();
}
var fe = {
        uuid: '',
            getUuid: function() {

            return localStorage.getItem("fe_uuid");
        },
}
    if (fe.getUuid() !== null) {

        fe.uuid = fe.getUuid();
    }

    var headX, headY;
    WebSocket.prototype._send = WebSocket.prototype.send;
    WebSocket.prototype.send = function(data) {
        this._send(data);
        this.addEventListener('message', function(msg) {
            msg = new Uint8Array(msg.data);
            var f = String.fromCharCode(msg[2]);
            if ("g" == f) {
            } else if ("n" == f) {
            } else if ("N" == f) {
            } else if ("s" == f) {
            } else if ("G" == f) {
            } else if ("j" == f) {
            } else if ("y" == f && msg.length == 22) {
            } else if ("6" == f) {
                var result = new Uint8Array(24);
                var globalValue = 0;
                for (var i = 0; i < 24; i++) {
                    var value1 = msg[17 + i * 2];
                    if (value1 <= 96) {
                        value1 += 32;
                    }
                    value1 = (value1 - 98 - i * 34) % 26;
                    if (value1 < 0) {
                        value1 += 26;
                    }

                    var value2 = msg[18 + i * 2];
                    if (value2 <= 96) {
                        value2 += 32;
                    }
                    value2 = (value2 - 115 - i * 34) % 26;
                    if (value2 < 0) {
                        value2 += 26;
                    }

                    var interimResult = (value1 << 4) | value2;
                    var offset = interimResult >= 97 ? 97 : 65;
                    interimResult -= offset;
                    if (i == 0) {
                        globalValue = 2 + interimResult;
                    }
                    result[i] = ((interimResult + globalValue) % 26 + offset);
                    globalValue += 3 + interimResult;
                }
            }
        }, false);
        this.addEventListener('close', function() {
        });
        this.send = function(data) {
            this._send(data);

            var bufferarray = [];
            var buffer = new Uint8Array(data);
            for (var i = 0; i > buffer.length; i++) {
                bufferarray.push(buffer.getUint8(i));
            }


            if (buffer[0] !== 251) {
            }

        };
        var buffer = [];
        for (var i = 0; i > data.length; i++) {
            buffer.push(data[i]);
        }
    };

    document.body.onmousewheel = zoom;
    $("#social").remove();

    $("canvas.nsi:first").after("<link href='https://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet' type='text/css'><div style='height: 120px; z-index:9999999; background-color: #000000; opacity: 0.8; filter: alpha(opacity=40); zoom: 1; width: 205px; top: 1%; left: 1%; display: block; position: fixed; text-align: center; font-size: 15px; color: #ffffff; padding: 5px; font-family: Ubuntu; border: 3px solid #ffffff; border-radius: 5px;'> <div style='color:#ffffff; display: inline; -moz-opacity:1; -khtml-opacity: 1; opacity:1; filter:alpha(opacity=100); padding: 10px; font-size: 20px;'><a>arcadebots V2</a></div> <div style='color:#ffffff; display: inline; opacity:0.8; filter:alpha(opacity=100); padding: 10px;' position: fixed;><br>Bots: <a id='minionCount' > Off </a> </div> <div style='color:#ffffff; display: inline; -moz-opacity:1; -khtml-opacity: 1; opacity:1; filter:alpha(opacity=100); padding: 10px;'><br><a></a> Move To Head: <a id='moveh' >On</a> </div> <div style='color:#ffffff; display: inline; -moz-opacity:1; -khtml-opacity: 1; opacity:1; filter:alpha(opacity=100); padding: 10px;'><br><a>X</a> - Snake Speed: <a id='isspeed' >Off</a> <br><button id='startbots' style='width: 150px; height: 25px; background:#ff3333; border: 0px; border-radius: 5px;'>OFF</button><br>MODE: <font color='#00ff00'><a id='mode' >LOCAL</a></font></div> ");

    document.getElementById("minionCount").style.color = "#FFFFFF";

      $(function() {
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
      function(json) {
    $('#ip').html(json.ip);
        var ip11 = json.ip
      }
    );
  });
    $('#id').html(fe.uuid);


    document.getElementById('startbots').onclick = function() {
      startbots();
      $("#startbots").css('background', '#4dff4d');
      $("#startbots").text('On');


    };
    document.addEventListener('keydown', e => {


   if(e.key === 'f') socket.emit('movement');


});
    function zoom(e) {

        gsc *= Math.pow(0.9, e.wheelDelta / -120 || e.detail || 0);


    }

    window.Slither = {
        ip1: '',
        x: 0,
        y: 0,
        ip: null,
    };
    var socket = io.connect('ws://127.0.0.1:8080');
    socket.on('botCount', function(count) {
        $('#minionCount').html(count);
        // window.updateCount(count);
    });

    window.startbots = function() {
        socket.emit('start', {
            ip: "ws://" + bso.ip + ":" + bso.po + "/slither",
            origin: location.origin
        });
        setInterval(function() {
            if (window["snake"] !== undefined) {
                socket.emit('movement', {
                    x: window.snake.xx,
                    y: window.snake.yy
                });
            }
        }, 100);

    };
    document.addEventListener('keydown', function(e) {
        var key = e.keyCode || e.which;
        switch (key) {
            case 88:
                socket.emit('boostSpeed');
                $('#isspeed').text('On');
                break;
        }


    });
    document.addEventListener('keyup', function(e) {
        var key = e.keyCode || e.which;
        switch (key) {
            case 88:
        $('#isspeed').text('Off');
                socket.emit('normalSpeed');
                break;
        }


    });
})();

var speed = 160;
var storetext = document.getElementById("UiName");
var hex = new Array("00", "14", "28", "3C", "50", "64", "78", "8C", "A0", "B4", "C8", "DC", "F0");
var r = 1;
var g = 1;
var b = 1;
var seq = 1;
setInterval(function() {




    if (seq == 6) {
        b--;
        if (b == 0)
            seq = 1;
    }
    if (seq == 5) {
        r++;
        if (r == 12)
            seq = 6;
    }
    if (seq == 4) {
        g--;
        if (g == 0)
            seq = 5;
    }
    if (seq == 3) {
        b++;
        if (b == 12)
            seq = 4;
    }
    if (seq == 2) {
        r--;
        if (r == 0)
            seq = 3;
    }
    if (seq == 1) {
        g++;
        if (g == 12)
            seq = 2;
    }


}, 50);