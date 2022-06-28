module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.prov',
    'dct:alternative': '@nrd/fua.resource.ontology/prov',
    'dct:requires':    [{
        'dct:identifier': './local/prov_fixed.ttl',
        'dct:format':     'text/turtle'
    }]
};
