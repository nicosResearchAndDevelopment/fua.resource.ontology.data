module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.acl',
    'dct:alternative': '@nrd/fua.resource.ontology/acl',
    'dct:requires':    [{
        'dct:identifier': './local/acl_fixed.ttl',
        'dct:format':     'text/turtle'
    }]
};
