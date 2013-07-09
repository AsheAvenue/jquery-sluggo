#Sluggo

Sluggo is a jQuery plugin that provides automatic slug creation functionality in a standard HTML form or across any component of the DOM.

## Simplest usage

    $('.source').sluggo('.target');

Result: The value in the source text field is slugified and added as the value to the target text field.

## Options

    $('.source').sluggo({
        target:             "",     // Any valid jQuery selector, e.g.: ".target".
        spacer:             "-",    // Default is dash. Set to "" for none.
        prefix:             "",     // None by default.
        suffix:             "",     // None by default.
        ext:                "",     // File extention, none by default. Include a spacer if desired, e.g.: ".txt".
        date:               false   // False is default, true is unspaced YYYMMDD. Anything in quotes, e.g. "-" is true AND the date-only spacer.
        jQueryFillMethod:   "val"   // The jQuery method used to set the value on the target object. jQuery's "val()" function is the default
        makeTargetReadonly: false   // False is default. True turns the target readonly if it's a form input. 
    });

## License and Credits

© 2013 <a href="http://www.asheavenue.com">Ashe Avenue</a>. Created by <a href="http://twitter.com/KomejoDev">Joe Komenda</a> and <a href="http://twitter.com/timboisvert">Tim Boisvert</a>.
<br />
Sluggo is released under the <a href="http://opensource.org/licenses/MIT">MIT license</a>.
