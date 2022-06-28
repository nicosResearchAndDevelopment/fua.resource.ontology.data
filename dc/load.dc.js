module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.dc',
    'dct:alternative': '@nrd/fua.resource.ontology/dc',
    'dct:requires':    [{
        'dct:identifier': './local/dc.ttl',
        'dct:format':     'text/turtle'
    }]
};
