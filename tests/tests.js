Tinytest.add("jsPDF - correct export", function(test) {
	// Simply check 'jsPDF' is not undefined...
  test.isNotUndefined(jsPDF, "jsPDF doesn't seem to be correctly exported");
});

Tinytest.add("jsPDF - sample document creation", function(test) {
	// Try creating a new document
	var doc = new jsPDF();
	doc.text(20, 20, 'Hello world.');

	// in case on error was thrown before...
	// ...simply check we actually have some text inside the document
	var textDim = doc.getTextDimensions();
	// Object {w: 71.24991023622047, h: 18.749976377952756}

  test.include(textDim, 'w');
  test.isTrue(textDim.w > 0);
  test.include(textDim, 'h');
  test.isTrue(textDim.h > 0);
});
