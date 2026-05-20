(function () {
  var AT = String.fromCharCode(64);
  document.querySelectorAll("a.email-link").forEach(function (a) {
    var u = a.dataset.u, d = a.dataset.d;
    if (!u || !d) return;
    var addr = u + AT + d;
    a.href = "ma" + "ilto:" + addr;
    var span = a.querySelector(".email-text");
    if (span) span.textContent = addr;
  });
})();
