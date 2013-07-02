#Sluggo

Sluggo is a jQuery plugin that provides automatic slug creation functionality in a standard HTML form.

## Simplest usage

    $('.source').sluggo('.target');
    
Result: converts to lowercase and replaces any non-alphanumeric with an underscore.

## Options

    $('.source').sluggo({
        target:  	"",     // Any valid jQuery selector, e.g.: ".target".
        spacer:  	"_",    // Default is underscore. Set to "" for none.
        prefix:  	"",		  // None by default.
        suffix:  	"",		  // None by default.
        ext:     	"",     // File extention, none by default. Include a spacer if desired, e.g.: ".txt".
        date: 		false   // False is default, true is unspaced YYYMMDD. Anything in quotes, e.g. "-" is true AND the date-only spacer.
    });

## License and Credits

© 2013 <a href="http://www.asheavenue.com">Ashe Avenue</a>. Created by <a href="http://twitter.com/KomejoDev">Joe Komenda</a>.
<br />
Sluggo is released under the <a href="http://opensource.org/licenses/MIT">MIT license</a>.
