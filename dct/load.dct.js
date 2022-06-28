module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.dct',
    'dct:alternative': '@nrd/fua.resource.ontology/dct',
    'dct:requires':    [{
        'dct:identifier': './local/dct.ttl',
        'dct:format':     'text/turtle'
    }]
};
