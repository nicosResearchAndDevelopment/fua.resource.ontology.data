module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.saref',
    'dct:alternative': '@nrd/fua.resource.ontology/saref',
    'dct:requires':    [{
        'dct:identifier': './local/saref.ttl',
        'dct:format':     'text/turtle'
    }]
};
