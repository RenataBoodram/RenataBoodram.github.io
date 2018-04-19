$("i").hover(
    function () {
        $("i").not(this).fadeTo(0, 0.1);
    },
    function() {
        $("i").fadeTo('medium', 1);
    }
);

// Check if the website is being viewed on a mobile device.
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

// If the user is viewing on a mobile device, change the icon size.
if (isMobile.any()) {
}
