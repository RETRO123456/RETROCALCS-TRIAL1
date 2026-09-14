(function(){
  var CALCS = [
    { href: '/calculators/slab-flexure.html', label: 'Slab Flexure' },
    { href: '/calculators/beam-flexure.html', label: 'Beam Flexure' },
    { href: '/calculators/beam-shear.html', label: 'Beam Shear' },
    { href: '/calculators/column-axial-bending.html', label: 'Column Axial + Bending' }
  ];

  var path = window.location.pathname;
  var here = path.substring(path.lastIndexOf('/') + 1);

  var links = CALCS.map(function(c){
    var file = c.href.substring(c.href.lastIndexOf('/') + 1);
    var active = (file === here);
    return '<a href="' + c.href + '" class="site-nav-link' + (active ? ' active' : '') + '">' + c.label + '</a>';
  }).join('');

  var navHtml =
    '<nav class="site-nav">' +
      '<a href="/" class="site-nav-brand">' +
        '<img src="/assets/retrocrete-logo.jpg" alt="RetroCrete FC">' +
        '<span>RETROCRETE FC</span>' +
      '</a>' +
      '<div class="site-nav-links">' + links + '</div>' +
    '</nav>';

  document.body.insertAdjacentHTML('afterbegin', navHtml);
})();
