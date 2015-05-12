Package.describe({
  name: 'jspdf:core',
  summary: 'jsPDF (official): Generate PDF files on the client-side',
  version: '1.0.272',
  git: 'https://github.com/MeteorPackaging/jspdf-core-wrapper.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.addFiles([
    'meteor-pre.js',
    'upstream/dist/jspdf.debug.js',
    'meteor-post.js',
  ], 'client');
  api.export('jsPDF');
});
