
if (/MSIE 8/i.test(navigator.userAgent)) {
    window.alert('This is IE8');
    window.location = 'support.html';
}

if (/MSIE 9/i.test(navigator.userAgent)) {
    window.alert('This is IE9');
    window.location = 'support.html';
}

if (/MSIE 10/i.test(navigator.userAgent)) {
   // This is internet explorer 10
   window.alert('This is IE10');
   window.location = 'support.html';
}

if (/rv:11.0/i.test(navigator.userAgent)) {
    // This is internet explorer 11
    if (confirm("Detected IE11 NOT in IE8 Compatibility Mode. \nGreat!\n\n Select Cancel to see IE Compatibility Instructions.\n Press OK to proceed to application.")){
      }
      else
      {
        window.location = 'support.html';
      }
}

if (/Edge\/\d./i.test(navigator.userAgent)){
   // This is Microsoft Edge
   window.alert('Microsoft Edge');
}
