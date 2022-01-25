# Shapes Constraint Language (SHACL)

- **Ontology:** http://www.w3.org/ns/shacl#
- **Model:** [`shacl.ttl`](local/shacl.ttl), [`shacl.xml`](local/shacl.xml)
- **Specification:** https://www.w3.org/TR/shacl/
- **Vocabulary:** -
- **Wiki:** -
- **LOV:** https://lov.linkeddata.es/dataset/lov/vocabs/sh

```
                ┌───────────────────────────────────────────┐
                │                 sh:Shape                  │
                ╞═══════════════════════════════════════════╡
                │ sh:targetClass : rdfs:Class               │
                │ sh:targetNode : any IRI or literal        │
                │ sh:targetObjectsOf : rdf:Property         │
                │ sh:targetSubjectsOf : rdf:Property        │
                ├───────────────────────────────────────────┤
                │ sh:deactivated : xsd:boolean              │
                │ sh:message : xsd:string or rdf:langString │
                │ sh:severity : sh:Severity                 │
                └───────────────────────────────────────────┘
                      △                              △
                      │                               │
┌─────────────────────────────────────┐ ┌───────────────────────────────────────────────┐
│            sh:NodeShape             │ │                 sh:NodeShape                  │
╞═════════════════════════════════════╡ ╞═══════════════════════════════════════════════╡
│ Constraint parameters, for example: │ │ Constraint parameters, for example:           │
│ sh:closed : xsd:boolean             │ │ sh:minCount, sh:maxCount : xsd:integer        │
│ sh:or : rdf:List                    │ │ sh:class or sh:datatype : rdfs:Resource       │
│ sh:not : sh:Shape                   │ │ sh:node : sh:NodeShape                        │
│ sh:property : sh:PropertyShape      │ ├───────────────────────────────────────────────┤
└─────────────────────────────────────┘ │ sh:name : xsd:string or rdf:langString        │
                                        │ sh:description : xsd:string or rdf:langString │
                                        │ sh:defaultValue : any                         │
                                        │ sh:group : sh:PropertyGroup                   │
                                        ├───────────────────────────────────────────────┤
                                        │ sh:path : rdfs:Resource                       │
                                        └───────────────────────────────────────────────┘
```

- [Targets](https://www.w3.org/TR/shacl/#targets)
    - [`sh:targetNode`](https://www.w3.org/TR/shacl/#targetNode)
    - [`sh:targetClass`](https://www.w3.org/TR/shacl/#targetClass)
    - [`sh:targetSubjectsOf`](https://www.w3.org/TR/shacl/#targetSubjectsOf)
    - [`sh:targetObjectsOf`](https://www.w3.org/TR/shacl/#targetObjectsOf)
- [Non-Validating Property Shape Characteristics](https://www.w3.org/TR/shacl/#nonValidation)
    - [`sh:name`, `sh:description`](https://www.w3.org/TR/shacl/#name)
    - [`sh:order`](https://www.w3.org/TR/shacl/#order)
    - [`sh:group`](https://www.w3.org/TR/shacl/#group)
    - [`sh:defaultValue`](https://www.w3.org/TR/shacl/#defaultValue)
- [Validation Report](https://www.w3.org/TR/shacl/#validation-report)
    - [`sh:conforms`](https://www.w3.org/TR/shacl/#conforms)
    - [`sh:result`](https://www.w3.org/TR/shacl/#result)
    - [`sh:focusNode`](https://www.w3.org/TR/shacl/#results-focus-node)
    - [`sh:resultPath`](https://www.w3.org/TR/shacl/#results-path)
    - [`sh:value`](https://www.w3.org/TR/shacl/#results-value)
    - [`sh:sourceShape`](https://www.w3.org/TR/shacl/#results-source-shape)
    - [`sh:sourceConstraintComponent`](https://www.w3.org/TR/shacl/#results-source-constraint-component)
    - [`sh:detail`](https://www.w3.org/TR/shacl/#results-detail)
    - [`sh:resultMessage`](https://www.w3.org/TR/shacl/#results-message)
    - [`sh:resultSeverity`](https://www.w3.org/TR/shacl/#results-severity)
- [Core Constraint Components](https://www.w3.org/TR/shacl/#core-components)
    - [Value Type Constraint Components](https://www.w3.org/TR/shacl/#core-components-value-type)
        - [`sh:class`](https://www.w3.org/TR/shacl/#ClassConstraintComponent)
        - [`sh:datatype`](https://www.w3.org/TR/shacl/#DatatypeConstraintComponent)
        - [`sh:nodeKind`](https://www.w3.org/TR/shacl/#NodeKindConstraintComponent)
    - [Cardinality Constraint Components](https://www.w3.org/TR/shacl/#core-components-count)
        - [`sh:minCount`](https://www.w3.org/TR/shacl/#MinCountConstraintComponent)
        - [`sh:maxCount`](https://www.w3.org/TR/shacl/#MaxCountConstraintComponent)
    - [Value Range Constraint Components](https://www.w3.org/TR/shacl/#core-components-range)
        - [`sh:minExclusive`](https://www.w3.org/TR/shacl/#MinExclusiveConstraintComponent)
        - [`sh:minInclusive`](https://www.w3.org/TR/shacl/#MinInclusiveConstraintComponent)
        - [`sh:maxExclusive`](https://www.w3.org/TR/shacl/#MaxExclusiveConstraintComponent)
        - [`sh:maxInclusive`](https://www.w3.org/TR/shacl/#MaxInclusiveConstraintComponent)
    - [String-based Constraint Components](https://www.w3.org/TR/shacl/#core-components-string)
        - [`sh:minLength`](https://www.w3.org/TR/shacl/#MinLengthConstraintComponent)
        - [`sh:maxLength`](https://www.w3.org/TR/shacl/#MaxLengthConstraintComponent)
        - [`sh:pattern`](https://www.w3.org/TR/shacl/#PatternConstraintComponent)
        - [`sh:languageIn`](https://www.w3.org/TR/shacl/#LanguageInConstraintComponent)
        - [`sh:uniqueLang`](https://www.w3.org/TR/shacl/#UniqueLangConstraintComponent)
    - [Property Pair Constraint Components](https://www.w3.org/TR/shacl/#core-components-property-pairs)
        - [`sh:equals`](https://www.w3.org/TR/shacl/#EqualsConstraintComponent)
        - [`sh:disjoint`](https://www.w3.org/TR/shacl/#DisjointConstraintComponent)
        - [`sh:lessThan`](https://www.w3.org/TR/shacl/#LessThanConstraintComponent)
        - [`sh:lessThanOrEquals`](https://www.w3.org/TR/shacl/#LessThanOrEqualsConstraintComponent)
    - [Logical Constraint Components](https://www.w3.org/TR/shacl/#core-components-logical)
        - [`sh:not`](https://www.w3.org/TR/shacl/#NotConstraintComponent)
        - [`sh:and`](https://www.w3.org/TR/shacl/#AndConstraintComponent)
        - [`sh:or`](https://www.w3.org/TR/shacl/#OrConstraintComponent)
        - [`sh:xone`](https://www.w3.org/TR/shacl/#XoneConstraintComponent)
    - [Shape-based Constraint Components](https://www.w3.org/TR/shacl/#core-components-shape)
        - [`sh:node`](https://www.w3.org/TR/shacl/#NodeConstraintComponent)
        - [`sh:property`](https://www.w3.org/TR/shacl/#PropertyConstraintComponent)
        - [`sh:qualifiedValueShape`, `sh:qualifiedMinCount`, `sh:qualifiedMaxCount`](https://www.w3.org/TR/shacl/#QualifiedValueShapeConstraintComponent)
    - [Other Constraint Components](https://www.w3.org/TR/shacl/#core-components-others)
        - [`sh:closed`, `sh:ignoredProperties`](https://www.w3.org/TR/shacl/#ClosedConstraintComponent)
        - [`sh:hasValue`](https://www.w3.org/TR/shacl/#HasValueConstraintComponent)
        - [`sh:in`](https://www.w3.org/TR/shacl/#InConstraintComponent)

---
