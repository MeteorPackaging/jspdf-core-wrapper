Tinytest.add("jsPDF - correct export", function(test) {
	// Simply check 'jsPDF' is not undefined...
  test.isNotUndefined(jsPDF, "jsPDF doesn't seem to be correctly exported");
});

Tinytest.add("jsPDF - sample document creation", function(test) {
	// Try creating a new document
	var doc = new jsPDF();
  test.isTrue(doc.internal.pages[1].length === 2);

	// Try adding some text
	doc.text(20, 20, 'Hello world.');
  test.isTrue(doc.internal.pages[1].length > 2);
});
