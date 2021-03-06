// Sluggo, a jQuery plugin, version 1.1, by komejo and Tim Boisvert (asheavenue.com).
//
// Simplest usage: $('.source').sluggo('.target');
// Result: converts to lowercase and replaces any non-aplhanumeric with an dash.
// Multiple spaces are collapsed, and leading and trailing spaces are trimmed.
// Need to be used with form elements, as it uses the 'val' method.
//
// Options: (target: is required)
//
// $('.source').sluggo({
//  target:             "",     // Any valid jQuery selector, e.g.: ".target".
//  spacer:             "-",    // Default is underscore. Set to "" for none.
//  prefix:             "",     // None by default.
//  suffix:             "",     // None by default.
//  ext:                "",     // File extention, none by default. Include a spacer if desired, e.g.: ".txt".
//  date:               false   // False is default, true is unspaced YYYMMDD. Anything in quotes, e.g. "-" is true AND the date-only spacer.
//  jQueryFillMethod:   "val"   // Default is for input->input use. Switch to 'text' for input->div (or other non-editable fields).
//  makeTargetReadonly: false   // False is default. True turns the target readonly if it's a form input.
// });

(function ( $ ) {

	$.fn.sluggo = function( options ) {
		// override defaults
		var opts = $.extend( {}, $.fn.sluggo.defaults, options );

        // allow a simple selector to be passed as the target
		if (typeof options == "string") {
			var target = options;
		}  else {
			var target = options.target;
		}

        //set the target as readonly if makeTargetReadonly is true
        if (opts.makeTargetReadonly == true) {
            $(target).prop("readonly", true);
        }
		
        function reString( value ) {

			// Drop the source text to lowercase and trim it (in order to prevent a slug
			// from starting or ending with the spacer character)
			value = value.toLowerCase().trim();

			// Replace all multi-space sections with a single space
			value = value.replace(/ +(?= )/g,'');

			// General Replacement - anything that isn't an alphnumeric
			value = value.replace(/[^a-z0-9]/g, opts.spacer);

			// Date string generator
			if (opts.date) {
				if (typeof opts.date == "boolean") {
					var dSpace = "";
				} else {
					var dSpace = opts.date;
				}
				var d = new Date();
				var strDate = d.getFullYear() + dSpace + ("0" + (d.getMonth() + 1)).slice(-2) + dSpace + ("0" + d.getDate()).slice(-2);
			} else {
				var strDate = "";
			}

			// prefix, suffix, date, extension
			value = opts.prefix + value + opts.suffix + strDate + opts.ext;

			return value;
		}

		// detect any change to the source, parse it, insert it into the target (replaces any existing content).
		this.keyup(function(e){
			$(target)[opts.jQueryFillMethod](reString(e.target.value));
		});
		return this;
	};

	// defaults, edit here at your peril.
	$.fn.sluggo.defaults = {
		target:             "",
		spacer:             "-",
		prefix:             "",
		suffix:             "",
		ext:                "",
		date:               false,
		jQueryFillMethod:   "val",
        makeTargetReadonly: false, 
	};

}( jQuery ));