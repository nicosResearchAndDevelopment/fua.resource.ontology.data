module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.ldp',
    'dct:alternative': '@nrd/fua.resource.ontology/ldp',
    'dct:requires':    [{
        'dct:identifier': './local/ldp.ttl',
        'dct:format':     'text/turtle'
    }]
};
