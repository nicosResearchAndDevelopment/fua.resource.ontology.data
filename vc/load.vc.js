module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.vc',
    'dct:alternative': '@nrd/fua.resource.ontology/vc',
    'dct:requires':    [{
        'dct:identifier': './local/cred_fixed.ttl',
        'dct:format':     'text/turtle'
    }] // TODO add sec.ttl when it becomes available
};
