module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.ivoa',
    'dct:alternative': '@nrd/fua.resource.ontology/ivoa',
    'dct:requires':    [{
        'dct:identifier': './local/ivoa.xml',
        'dct:format':     'application/rdf+xml'
    }]
};
