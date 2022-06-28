module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.odrl',
    'dct:alternative': '@nrd/fua.resource.ontology/odrl',
    'dct:requires':    [{
        'dct:identifier': './local/odrl.ttl',
        'dct:format':     'text/turtle'
    }]
};
