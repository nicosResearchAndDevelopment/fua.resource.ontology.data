module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.cert',
    'dct:alternative': '@nrd/fua.resource.ontology/cert',
    'dct:requires':    [{
        'dct:identifier': './local/cert.xml',
        'dct:format':     'application/rdf+xml'
    }]
};
