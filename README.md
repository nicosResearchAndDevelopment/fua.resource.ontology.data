# @nrd/fua.resource.ontology

|    |                                  | topic                            | model                                                                                    | spec                                                                                                   | impl                                                                                                                      |
|:---|:---------------------------------|:---------------------------------|:-----------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
|    | [fua](../ontology.fua/README.md) |                                  | ttl, [local](../ontology.fua/fua.ttl)                                                    |                                                                                                        |                                                                                                                           |
|    | [fua](./fua/README.md)           | [domain](./fua/domain/README.md) | ttl, [local](./fua/domain/fua.domain.ttl)                                                |                                                                                                        |                                                                                                                           |
|    |                                  |                                  |                                                                                          |                                                                                                        |                                                                                                                           |
|    | [acl](./acl/README.md)           |                                  | ttl, [local](./acl/local/acl_fixed.ttl)                                                  |                                                                                                        |                                                                                                                           |
|    | [cc](./cc/README.md)             |                                  | ttl, [local](./cc/local/cc_generated.ttl)                                                |                                                                                                        |                                                                                                                           |
|    | [cert](./cert/README.md)         |                                  | ttl, [local](./cert/local/cert_generated.ttl)                                            |                                                                                                        |                                                                                                                           |
|    | [dc](./dc/README.md)             |                                  | ttl, [local](./dc/local/dc.ttl)                                                          |                                                                                                        |                                                                                                                           |
|    | [dct](./dct/README.md)           |                                  | ttl, [local](./dct/local/dct.ttl)                                                        |                                                                                                        |                                                                                                                           |
|    | [fno](./fno/README.md)           |                                  |                                                                                          |                                                                                                        |                                                                                                                           |
|    | [foaf](./foaf/README.md)         |                                  | ttl, [local](./foaf/local/foaf_generated.ttl)                                            |                                                                                                        |                                                                                                                           |
|    | [geo](./geo/README.md)           |                                  |                                                                                          |                                                                                                        |                                                                                                                           |
|    | [http](./http/README.md)         |                                  | ttl, [local](./http/local/http_generated.ttl)                                            |                                                                                                        |                                                                                                                           |
|    | ids                              |                                  |                                                                                          |                                                                                                        |                                                                                                                           |
|    | [ldn](./ldn/README.md)           |                                  |                                                                                          |                                                                                                        |                                                                                                                           |
|    | [ldp](./ldp/README.md)           |                                  | ttl, [local](./ldp/local/ldp.ttl)                                                        | [Specification ](https://www.w3.org/TR/ldp/)                                                           | [model](https://git02.int.nsc.ag/Research/fua/lib/model/ldp), [agent](https://git02.int.nsc.ag/Research/fua/lib/impl/ldp) |
|    |                                  |                                  | json, [local](./ldp/local/ldp.json)                                                      | [The W3C Linked Data Platform (LDP) Vocabulary](https://www.w3.org/ns/ldp)                             |                                                                                                                           |
|    |                                  |                                  | xml, [local](./ldp/local/ldp.xml)                                                        |                                                                                                        |                                                                                                                           |
|    | [odrl](./odrl/README.md)         |                                  | ttl, [remote](https://www.w3.org/ns/odrl/2/ODRL22.ttl), [local](./odrl/local/odrl.ttl)   | [ODRL Version 2.2 Ontology](https://www.w3.org/ns/odrl/2/)                                             |                                                                                                                           |
|    | [org](./org/README.md)           |                                  | ttl, [local](./org/local/org.ttl)                                                        | [The Organization Ontology](https://www.w3.org/TR/vocab-org/)                                          |                                                                                                                           |
|    |                                  |                                  | [LOV](https://lov.linkeddata.es/dataset/lov/vocabs/org)                                  |                                                                                                        |                                                                                                                           |
|    | [owl](./owl/README.md)           |                                  | ttl, [local](./owl/local/owl.ttl)                                                        |                                                                                                        |                                                                                                                           |
|    | [prov](./prov/README.md)         |                                  | ttl, [local](./prov/local/prov_fixed.ttl)                                                | [PROV Model Primer](https://www.w3.org/TR/2013/NOTE-prov-primer-20130430/)                             |                                                                                                                           |
|    | [qudt](./qudt/README.md)         |                                  | ttl, [local](./qudt/local/schema/qudt.ttl)                                               |                                                                                                        |                                                                                                                           |
|    | [rdf](./rdf/README.md)           |                                  | ttl, [local](./rdf/local/rdf.ttl)                                                        |                                                                                                        |                                                                                                                           |
|    | [rdfs](./rdfs/README.md)         |                                  | ttl, [local](./rdfs/local/rdfs.ttl)                                                      |                                                                                                        |                                                                                                                           |
|    | [saref](./saref/README.md)       |                                  | ttl, [local](./saref/local/saref.ttl)                                                    |                                                                                                        |                                                                                                                           |
|    | [schema](./schema/README.md)     |                                  | ttl, [local](./schema/local/schema.ttl)                                                  |                                                                                                        |                                                                                                                           |
|    | [shacl](./shacl/README.md)       |                                  | ttl, [local](./shacl/local/shacl.ttl)                                                    |                                                                                                        |                                                                                                                           |
|    | [skos](./skos/README.md)         |                                  | ttl, [local](./skos/local/skos_generated.ttl)                                            |                                                                                                        |                                                                                                                           |
|    | [time](./time/README.md)         |                                  | ttl, [remote](http://www.w3.org/2006/time#), [local](./time/local/time.ttl)              | [Time Ontology in OWL](https://www.w3.org/TR/owl-time/)                                                |                                                                                                                           |
|    |                                  |                                  | json, [local](./time/local/time.json)                                                    |                                                                                                        |                                                                                                                           |
|    |                                  |                                  | xml, [local](./time/local/time.xml)                                                      |                                                                                                        |                                                                                                                           |
|    |                                  | gregorian                        | ttl, [remote](https://www.w3.org/ns/time/gregorian), [local](./time/local/gregorian.ttl) |                                                                                                        |                                                                                                                           |
|    | [vc](./vc/README.md)             | Verifiable Credential            | ttl, [local](./vc/local/cred.ttl)                                                        | [Verifiable Credentials Data Model v1.1](https://www.w3.org/TR/vc-data-model/)                         |                                                                                                                           |
|    |                                  | Verifiable Presentation          |                                                                                          |                                                                                                        |                                                                                                                           |
|    | [vcard](./vcard/README.md)       |                                  | ttl, [local](./vcard/local/vcard.ttl)                                                    |                                                                                                        |                                                                                                                           |
|    | [xsd](./xsd/README.md)           |                                  |                                                                                          | [XML Schema](http://www.w3.org/2001/XMLSchema)                                                         |                                                                                                                           |
|    |                                  |                                  |                                                                                          | [W3C XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes](https://www.w3.org/TR/xmlschema11-2/) |                                                                                                                           |
|    |                                  |                                  |                                                                                          | [Build-in Datatypes](https://www.w3.org/TR/xmlschema-2/#built-in-datatypes)                            |                                                                                                                           |
|    |                                  |                                  |                                                                                          |                                                                                                        |                                                                                                                           |

## Helpful Links

- [Semantic Web](https://www.w3.org/standards/semanticweb/)
- [Linked Open Vocabularies (LOV)](https://lov.linkeddata.es/dataset/lov)

## Interesting Topics

- [System for Cross-domain Identity Management](http://www.simplecloud.info/#Specification)
- [Smart Data Models](https://github.com/smart-data-models)
- [Topology and Orchestration Specification for Cloud Applications](http://docs.oasis-open.org/tosca/TOSCA/v1.0/os/TOSCA-v1.0-os.html)
- [Open Policy Agent - Policy Language](https://www.openpolicyagent.org/docs/latest/policy-language/)
- [Semantic Sensor Network Ontology](https://www.w3.org/TR/vocab-ssn/)
- [Extensions to the Semantic Sensor Network Ontology](https://www.w3.org/TR/vocab-ssn-ext/)
- [Sensor, Observation, Sample, and Actuator (SOSA) Ontology](https://www.w3.org/2015/spatial/wiki/SOSA_Ontology)
- [Ontology of units of Measure](https://github.com/HajoRijgersberg/OM)

---
