/* Assemble obfuscated email links on page load.
   Raw HTML contains "user [at] domain.tld" (no @ symbol),
   so naive scrapers find no parseable address. */
(function () {
  var AT = String.fromCharCode(64);
  document.querySelectorAll("a.email-link").forEach(function (a) {
    var u = a.dataset.u;
    var d = a.dataset.d;
    if (!u || !d) return;
    var addr = u + AT + d;
    a.href = "ma" + "ilto:" + addr;
    var t = a.querySelector(".email-text");
    if (t) t.textContent = addr;
  });
})();
