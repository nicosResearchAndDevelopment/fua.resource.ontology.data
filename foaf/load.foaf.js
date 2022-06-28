module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.foaf',
    'dct:alternative': '@nrd/fua.resource.ontology/foaf',
    'dct:requires':    [{
        'dct:identifier': './local/foaf.xml',
        'dct:format':     'application/rdf+xml'
    }]
};
