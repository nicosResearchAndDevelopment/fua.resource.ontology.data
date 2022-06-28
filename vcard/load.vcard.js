module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.vcard',
    'dct:alternative': '@nrd/fua.resource.ontology/vcard',
    'dct:requires':    [{
        'dct:identifier': './local/vcard.ttl',
        'dct:format':     'text/turtle'
    }]
};
