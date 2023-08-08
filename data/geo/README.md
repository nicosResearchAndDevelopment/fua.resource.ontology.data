# WGS84, GeoSparQL, GML, Simple Feature, GeoJSON (GEO)

- **Ontology:**
    - http://www.w3.org/2003/01/geo/wgs84_pos#
    - http://www.opengis.net/ont/geosparql#
    - http://www.opengis.net/ont/gml#
    - http://www.opengis.net/ont/sf#
    - http://purl.org/geojson/vocab#
- **Model:** [`wgs84.xml`](wgs84.xml), [`geosparql.xml`](geosparql.xml), [`gml.xml`](gml.xml)
  , [`sf.xml`](sf.xml), [`geojson.xml`](geojson.xml)
- **Specification:**
    - https://tools.ietf.org/html/rfc7946
    - https://geojson.org/geojson-ld/
- **Vocabulary:** -
- **Wiki:** -
- **LOV:**
    - https://lov.linkeddata.es/dataset/lov/vocabs/geo
    - https://lov.linkeddata.es/dataset/lov/vocabs/gml

---

## Coordinate Reference System (CRS)

### Links

- [Koordinatenreferenzsystem - Wikipedia](https://de.wikipedia.org/wiki/Koordinatenreferenzsystem)
- [Spatial reference system - Wikipedia](https://en.wikipedia.org/wiki/Spatial_reference_system)
- [Well-known text representation of coordinate reference systems - Wikipedia](https://en.wikipedia.org/wiki/Well-known_text_representation_of_coordinate_reference_systems)
- [ISO 19111:2019 - Geographic information -- Referencing by coordinates](https://www.iso.org/standard/74039.html)
- [Geographic information system - Wikipedia](https://en.wikipedia.org/wiki/Geographic_information_system)
- [RFC 7946 - The GeoJSON Format](https://tools.ietf.org/html/rfc7946)
- [EPSG Geodetic Parameter Registry](http://www.epsg-registry.org/)
- [EPSG.io: Coordinate Systems Worldwide](https://epsg.io/)
- [MetaCRS - OSGeo](https://wiki.osgeo.org/wiki/MetaCRS)
- [PROJ](https://proj.org/)
- [Proj4js](http://proj4js.org/)

### Beispiele

#### EPSG:4326 - WGS 84 -- WGS84 - World Geodetic System 1984, used in GPS

- Well-Known Text (WKT)
    ```WKT
    GEOGCS["WGS 84",
        DATUM["WGS_1984",
            SPHEROID["WGS 84",6378137,298.257223563,
                AUTHORITY["EPSG","7030"]],
            AUTHORITY["EPSG","6326"]],
        PRIMEM["Greenwich",0,
            AUTHORITY["EPSG","8901"]],
        UNIT["degree",0.0174532925199433,
            AUTHORITY["EPSG","9122"]],
        AUTHORITY["EPSG","4326"]]
    ```
- Geography Markup Language (GML)
    ```GML
    <?xml version="1.0" encoding="UTF-8"?>
    <gml:GeodeticCRS xmlns:epsg="urn:x-ogp:spec:schema-xsd:EPSG:1.0:dataset" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:xlink="http://www.w3.org/1999/xlink" gml:id="epsg-crs-4326">
        <gml:metaDataProperty>
            <epsg:CommonMetaData>
                <epsg:type>geographic 2D</epsg:type>
                <epsg:informationSource>EPSG. See 3D CRS for original information source.</epsg:informationSource>
                <epsg:revisionDate>2007-08-27</epsg:revisionDate>
                <epsg:changes>
                    <epsg:changeID xlink:href="urn:ogc:def:change-request:EPSG::2002.151" />
                    <epsg:changeID xlink:href="urn:ogc:def:change-request:EPSG::2003.370" />
                    <epsg:changeID xlink:href="urn:ogc:def:change-request:EPSG::2006.810" />
                    <epsg:changeID xlink:href="urn:ogc:def:change-request:EPSG::2007.079" />
                </epsg:changes>
                <epsg:show>true</epsg:show>
                <epsg:isDeprecated>false</epsg:isDeprecated>
            </epsg:CommonMetaData>
        </gml:metaDataProperty>
        <gml:metaDataProperty>
            <epsg:CRSMetaData>
                <epsg:projectionConversion xlink:href="urn:ogc:def:coordinateOperation:EPSG::15593" />
                <epsg:sourceGeographicCRS xlink:href="urn:ogc:def:crs:EPSG::4979" />
            </epsg:CRSMetaData>
        </gml:metaDataProperty>
        <gml:identifier codeSpace="OGP">urn:ogc:def:crs:EPSG::4326</gml:identifier>
        <gml:name>WGS 84</gml:name>
        <gml:domainOfValidity xlink:href="urn:ogc:def:area:EPSG::1262" />
        <gml:scope>Horizontal component of 3D system. Used by the GPS satellite navigation system and for NATO military geodetic surveying.</gml:scope>
        <gml:ellipsoidalCS xlink:href="urn:ogc:def:cs:EPSG::6422" />
        <gml:geodeticDatum xlink:href="urn:ogc:def:datum:EPSG::6326" />
    </gml:GeodeticCRS>
    ```

#### EPSG:4978 - WGS 84

- Well-Known Text (WKT)
    ```WKT
    GEODCRS["WGS 84",
        DATUM["World Geodetic System 1984",
            ELLIPSOID["WGS 84",6378137,298.257223563,LENGTHUNIT["metre",1.0]]],
        CS[cartesian,3],
            AXIS["(X)",geocentricX,ORDER[1]],
            AXIS["(Y)",geocentricY,ORDER[2]],
            AXIS["(Z)",geocentricZ,ORDER[3]],
            LENGTHUNIT["metre",1.0],
        ID["EPSG",4978]]
    ```
- Geography Markup Language (GML)
    ```GML
    <?xml version="1.0" encoding="UTF-8"?>
    <gml:GeodeticCRS xmlns:epsg="urn:x-ogp:spec:schema-xsd:EPSG:1.0:dataset" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:xlink="http://www.w3.org/1999/xlink" gml:id="epsg-crs-4978">
        <gml:metaDataProperty>
            <epsg:CommonMetaData>
                <epsg:type>geocentric</epsg:type>
                <epsg:informationSource>NIMA TR8350.2 January 2000 revision. http://earth-info.nga.mil/GandG/</epsg:informationSource>
                <epsg:revisionDate>2006-08-25</epsg:revisionDate>
                <epsg:changes>
                    <epsg:changeID xlink:href="urn:ogc:def:change-request:EPSG::2005.460" />
                    <epsg:changeID xlink:href="urn:ogc:def:change-request:EPSG::2006.810" />
                </epsg:changes>
                <epsg:show>true</epsg:show>
                <epsg:isDeprecated>false</epsg:isDeprecated>
            </epsg:CommonMetaData>
        </gml:metaDataProperty>
        <gml:identifier codeSpace="OGP">urn:ogc:def:crs:EPSG::4978</gml:identifier>
        <gml:name>WGS 84</gml:name>
        <gml:domainOfValidity xlink:href="urn:ogc:def:area:EPSG::1262" />
        <gml:scope>Used by the GPS satellite navigation system.</gml:scope>
        <gml:cartesianCS xlink:href="urn:ogc:def:cs:EPSG::6500" />
        <gml:geodeticDatum xlink:href="urn:ogc:def:datum:EPSG::6326" />
    </gml:GeodeticCRS>
    ```

#### EPSG:3857 - WGS 84 / Pseudo-Mercator -- Spherical Mercator, Google Maps, OpenStreetMap, Bing, ArcGIS, ESRI

- Well-Known Text (WKT)
    ```WKT
    PROJCS["WGS 84 / Pseudo-Mercator",
        GEOGCS["WGS 84",
            DATUM["WGS_1984",
                SPHEROID["WGS 84",6378137,298.257223563,
                    AUTHORITY["EPSG","7030"]],
                AUTHORITY["EPSG","6326"]],
            PRIMEM["Greenwich",0,
                AUTHORITY["EPSG","8901"]],
            UNIT["degree",0.0174532925199433,
                AUTHORITY["EPSG","9122"]],
            AUTHORITY["EPSG","4326"]],
        PROJECTION["Mercator_1SP"],
        PARAMETER["central_meridian",0],
        PARAMETER["scale_factor",1],
        PARAMETER["false_easting",0],
        PARAMETER["false_northing",0],
        UNIT["metre",1,
            AUTHORITY["EPSG","9001"]],
        AXIS["X",EAST],
        AXIS["Y",NORTH],
        EXTENSION["PROJ4","+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs"],
        AUTHORITY["EPSG","3857"]]
    ```
- Geography Markup Language (GML)
    ```GML
    <?xml version="1.0" encoding="UTF-8"?>
    <gml:ProjectedCRS xmlns:epsg="urn:x-ogp:spec:schema-xsd:EPSG:1.0:dataset" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:xlink="http://www.w3.org/1999/xlink" gml:id="iogp-crs-3857">
        <gml:metaDataProperty>
            <epsg:CommonMetaData>
            <epsg:type>projected</epsg:type>
            <epsg:alias alias="WGS 84 / Popular Visualisation Pseudo-Mercator" code="5966" codeSpace="urn:ogc:def:naming-system:EPSG::7301" />
            <epsg:alias alias="Web Mercator" code="7067" codeSpace="urn:ogc:def:naming-system:EPSG::7301" />
            <epsg:informationSource>Microsoft.</epsg:informationSource>
            <epsg:revisionDate>2015-11-25</epsg:revisionDate>
            <epsg:changes>
                <epsg:changeID xlink:href="urn:ogc:def:change-request:EPSG::2008.114" />
                <epsg:changeID xlink:href="urn:ogc:def:change-request:EPSG::2014.033" />
                <epsg:changeID xlink:href="urn:ogc:def:change-request:EPSG::2014.052" />
                <epsg:changeID xlink:href="urn:ogc:def:change-request:EPSG::2015.063" />
            </epsg:changes>
            <epsg:show>true</epsg:show>
            <epsg:isDeprecated>false</epsg:isDeprecated>
            </epsg:CommonMetaData>
        </gml:metaDataProperty>
        <gml:identifier codeSpace="IOGP">urn:ogc:def:crs:EPSG::3857</gml:identifier>
        <gml:name>WGS 84 / Pseudo-Mercator</gml:name>
        <gml:remarks>Uses spherical development of ellipsoidal coordinates. Relative to WGS 84 / World Mercator (CRS code 3395) errors of 0.7 percent in scale and differences in northing of up to 43km in the map (equivalent to 21km on the ground) may arise.</gml:remarks>
        <gml:domainOfValidity xlink:href="urn:ogc:def:area:EPSG::3544" />
        <gml:scope>Certain Web mapping and visualisation applications. It is not a recognised geodetic system: for that see ellipsoidal Mercator CRS code 3395 (WGS 84 / World Mercator).</gml:scope>
        <gml:conversion xlink:href="urn:ogc:def:coordinateOperation:EPSG::3856" />
        <gml:baseGeodeticCRS xlink:href="urn:ogc:def:crs:EPSG::4326" />
        <gml:cartesianCS xlink:href="urn:ogc:def:cs:EPSG::4499" />
    </gml:ProjectedCRS>
    ```

### Proj4js

- [NPM](https://www.npmjs.com/package/proj4)
- [GitHub](https://github.com/proj4js/proj4js)
