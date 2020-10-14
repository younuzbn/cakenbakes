jQuery.validator.addMethod("lettersWithSpace", function(value, element) {
	return this.optional(element) || /^[a-zA-Z ]+$/i.test(value);
}, "Letters and spaces only please");

jQuery.validator.addMethod("alphanumericWithSpace", function(value, element) {
	return this.optional(element) || /^[a-zA-Z0-9 ]+$/i.test(value);
}, "Letters,numbers and spaces only please");

jQuery.validator.addMethod("alphanumericWithoutSpace",
		function(value, element) {
			return this.optional(element) || /^[a-zA-Z0-9]+$/i.test(value);
		}, "Letters and numbers only please");

jQuery.validator.addMethod("numbersonly", function(value, element) {
	return this.optional(element) || /^[0-9]+$/i.test(value);
}, "Numbers only please");

jQuery.validator.addMethod("greaterthan", function(value, element, param) {
	return this.optional(element) || value > param;
}, jQuery.validator.format("Please enter a value greater than {0}"));

jQuery.validator.addMethod("lessthan", function(value, element, param) {
	return this.optional(element) || value < param;
}, jQuery.validator.format("Please enter a value less than {0}"));

jQuery.validator.addMethod("regex", function(value, element, regexp) {
	var inputstring = regexp;
	var flags = inputstring.replace(/.*\/([gimy]*)$/, '$1');
	var pattern = inputstring.replace(new RegExp('^/(.*?)/'+flags+'$'), '$1');
	var re = new RegExp(pattern, flags);
	return this.optional(element) || re.test(value);
}, "Please check your input.");
