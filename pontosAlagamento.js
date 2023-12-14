const endpoint  = "https://esigportal2.recife.pe.gov.br/arcgis/rest/services/Geoevent/BASES_FEEDS_WAZE_24HORAS/MapServer/0/query?where=1+%3D+1&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson"

fetch(endpoint)
.then( res => res.json())
.then( data => data.features)
.then( feat => feat.forEach( e => {
    if(e.attributes.TYPE == "HAZARD"){
        console.log(e.attributes.STREET)
        console.log(e.geometry)
    }
}))