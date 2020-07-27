// JavaScript Document


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


// Responsive Images

!function(){function t(t){var e=parseInt(t,10);return e>s?s:e}function e(t){return t.hasAttribute("data-no-resize")||(0===t.offsetWidth&&0===t.offsetHeight?(t.setAttribute("width",t.naturalWidth),t.setAttribute("height",t.naturalHeight)):(t.setAttribute("width",t.offsetWidth),t.setAttribute("height",t.offsetHeight))),t}function r(t,r){var n=t.nodeName.toLowerCase(),i=document.createElement("img");i.addEventListener("load",function(){"img"===n?e(t).setAttribute("src",r):t.style.backgroundImage="url("+r+")"}),i.setAttribute("src",r)}function n(e,n){var i=arguments.length<=2||void 0===arguments[2]?1:arguments[2],o=t(i);if(n&&o>1){var a=n.replace(f,"@"+o+"x$1");r(e,a)}}function i(t,e,n){s>1&&r(t,n)}function o(){return"undefined"!=typeof document?Array.prototype.slice.call(document.querySelectorAll(l)):[]}function a(t){return t.style.backgroundImage.replace(c,"$2")}function u(){o().forEach(function(t){var e="img"===t.nodeName.toLowerCase(),r=e?t.getAttribute("src"):a(t),o=t.getAttribute("data-rjs"),u=!isNaN(parseInt(o,10));u?n(t,r,o):i(t,r,o)})}"undefined"==typeof exports&&(exports={}),Object.defineProperty(exports,"__esModule",{value:!0});var d="undefined"!=typeof window,s=d?window.devicePixelRatio||1:1,f=/(\.[A-z]{3,4}\/?(\?.*)?)$/,c=/url\(('|")?([^\)'"]+)('|")?\)/i,l="[data-rjs]";d&&(window.addEventListener("load",u),window.retinajs=u),exports["default"]=u}();


// Tabs

function openLesson (evt, lessonName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(lessonName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


// Hamburger Nav
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


