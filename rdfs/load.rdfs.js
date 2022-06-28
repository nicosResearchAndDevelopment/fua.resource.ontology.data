module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.rdfs',
    'dct:alternative': '@nrd/fua.resource.ontology/rdfs',
    'dct:requires':    [{
        'dct:identifier': './local/rdfs.ttl',
        'dct:format':     'text/turtle'
    }]
};
