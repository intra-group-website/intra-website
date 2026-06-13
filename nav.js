/**
 * Intra Group — Shared Nav
 * Auto-detects page depth and renders nav with correct relative paths + active state.
 */
(function () {
  var path = window.location.pathname;
  var inServices = path.indexOf('/services/') !== -1;
  var r = inServices ? '../' : '';
  var currentFile = path.split('/').pop() || 'index.html';
  if (currentFile === '') currentFile = 'index.html';

  function a(href, text, extraClass) {
    var file = href.split('/').pop();
    var isActive = currentFile === file;
    var cls = [extraClass, isActive ? 'active' : ''].filter(Boolean).join(' ');
    return '<a href="' + r + href + '"' + (cls ? ' class="' + cls + '"' : '') + '>' + text + '</a>';
  }

  var dropItems = [
    ['services/audit.html',          'Audit &amp; Assurance'],
    ['services/bankruptcy.html',     'Bankruptcy &amp; Insolvency'],
    ['services/court-experts.html',  'Court Experts &amp; Arbitrators'],
    ['services/property.html',       'Asset &amp; Property Management'],
  ];

  var dropHTML = dropItems.map(function(d) {
    var file = d[0].split('/').pop();
    var isActive = currentFile === file;
    return '<li><a href="' + r + d[0] + '"' + (isActive ? ' class="active"' : '') + '>' + d[1] + '</a></li>';
  }).join('');

  var servicesActive = inServices ? ' active' : '';

  var chevron = '<svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 4 6 8 10 4"/></svg>';

  var logo1x = r + 'INTRA2017K2B/PNG HORIZONTAL/1x/HCOLORAsset 1.png';
  var logo2x = r + 'INTRA2017K2B/PNG HORIZONTAL/2x/HCOLORAsset 1@2x.png';
  var logo3x = r + 'INTRA2017K2B/PNG HORIZONTAL/3x/HCOLORAsset 1@3x.png';
  var logoFallback = "this.style.display='none'; this.parentElement.querySelector('.nav-logo-text').style.display='flex';";

  var html =
    '<a href="' + r + 'index.html" class="nav-logo">' +
      '<img src="' + logo1x + '" srcset="' + logo2x + ' 2x, ' + logo3x + ' 3x" alt="Intra Group" onerror="' + logoFallback + '" />' +
      '<span class="nav-logo-text"><span>INTRA</span><span>GROUP</span></span>' +
    '</a>' +
    '<ul class="nav-links">' +
      '<li>' + a('about.html', 'About') + '</li>' +
      '<li class="nav-dropdown">' +
        '<a href="#" class="nav-drop-toggle' + servicesActive + '">' +
          'Services&nbsp;' + chevron +
        '</a>' +
        '<ul class="dropdown-menu">' + dropHTML + '</ul>' +
      '</li>' +
      '<li>' + a('contact.html', 'Get in Touch', 'nav-cta') + '</li>' +
    '</ul>' +
    '<button class="nav-hamburger" aria-label="Menu" onclick="this.parentElement.querySelector(\'.nav-links\').style.display = this.parentElement.querySelector(\'.nav-links\').style.display === \'flex\' ? \'none\' : \'flex\'; ">' +
      '<span></span><span></span><span></span>' +
    '</button>';

  var el = document.getElementById('site-nav');
  if (el) el.innerHTML = html;
})();
