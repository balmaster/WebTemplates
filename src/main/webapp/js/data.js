var carts =   [ {id:"4000000000000", sum:152.35, currency:"грн."},
        {id:"4636540000000", sum:12456.58, currency:"грн."},
        {id:"4000004324637", sum:0.25, currency:"грн."}];

var items= [
            {
                "attributeId":6607,
                "attributeSource":"GROUP",
                "defaultValue":"",
                "error":null,
                "fieldType":"STRING",
                "grid":null,
                "gridHead":null,
                "help":"",
                "hidden":false,
                "inputMask":"",
                "key":false,
                "masks":[

                ],
                "name":"CNNUM",
                "printInCheck":false,
                "promt":"Текст",
                "readOnly":false,
                "regexps":[
                    {
                        "QName":{
                            "localPart":"RegExp",
                            "namespaceURI":"",
                            "prefix":""
                        },
                        "comment":"",
                        "errorMessage":"Значение должно содержать не более 4 цифр",
                        "name":"Номер",
                        "orderNum":0,
                        "regexp":"^.{0,256}$"
                    }
                ],
                "required":true,
                "sizeMax":3,
                "sizeMin":2,
                "type":{
                    "QName":{
                        "localPart":"Type",
                        "namespaceURI":"",
                        "prefix":""
                    },
                    "code":"STRING",
                    "regexps":[
                        {
                            "QName":{
                                "localPart":"RegExp",
                                "namespaceURI":"",
                                "prefix":""
                            },
                            "comment":"",
                            "errorMessage":"Значение должно содержать ",
                            "name":"Номер ",
                            "orderNum":0,
                            "regexp":"^.{0,256}$"
                        }
                    ],
                    "rules":[

                    ]
                },
                "value":"1254",
                "valueField":"",
                "viewMask":""
            },
    {
        "attributeId":6603,
        "attributeSource":"GROUP",
        "defaultValue":"",
        "error":null,
        "fieldType":"NUMBER",
        "grid":null,
        "gridHead":null,
        "help":"",
        "hidden":false,
        "inputMask":"",
        "key":false,
        "masks":[

        ],
        "name":"NUMBER",
        "printInCheck":false,
        "promt":"Число",
        "readOnly":false,
        "regexps":[
            {
                "QName":{
                    "localPart":"RegExp",
                    "namespaceURI":"",
                    "prefix":""
                },
                "comment":"",
                "errorMessage":"Значение должно содержать не более 4 цифр",
                "name":"Номер",
                "orderNum":0,
                "regexp":"^.{0,256}$"
            }
        ],
        "required":true,
        "sizeMax":"",
        "sizeMin":"",
        "type":{
            "QName":{
                "localPart":"Type",
                "namespaceURI":"",
                "prefix":""
            },
            "code":"STRING",
            "regexps":[
                {
                    "QName":{
                        "localPart":"RegExp",
                        "namespaceURI":"",
                        "prefix":""
                    },
                    "comment":"",
                    "errorMessage":"Значение должно содержать ",
                    "name":"Номер ",
                    "orderNum":0,
                    "regexp":"^.{0,256}$"
                }
            ],
            "rules":[

            ]
        },
        "value":"1254",
        "valueField":"",
        "viewMask":""
    },
    {
        "attributeId":6603,
        "attributeSource":"GROUP",
        "defaultValue":"",
        "error":null,
        "fieldType":"MONEY",
        "grid":null,
        "gridHead":null,
        "help":"",
        "hidden":false,
        "inputMask":"",
        "key":false,
        "masks":[  ],
        "name":"MONEY",
        "printInCheck":false,
        "promt":"Деньги",
        "readOnly":false,
        "regexps":[ ],
        "required":true,
        "sizeMax":"",
        "sizeMin":"",
        "type":{
            "QName":{
                "localPart":"Type",
                "namespaceURI":"",
                "prefix":""
            },
            "code":"MONEY",
            "regexps":[ ],
            "rules":[ ]
        },
        "value":"1254.54",
        "valueField":"",
        "viewMask":""
    },
    {
        "attributeId":6603,
        "attributeSource":"GROUP",
        "defaultValue":"",
        "error":null,
        "fieldType":"DATE",
        "grid":null,
        "gridHead":null,
        "help":"",
        "hidden":false,
        "inputMask":"",
        "key":false,
        "masks":[  ],
        "name":"DATE",
        "printInCheck":false,
        "promt":"Дата",
        "readOnly":false,
        "regexps":[ ],
        "required":true,
        "sizeMax":"",
        "sizeMin":"",
        "type":{
            "QName":{
                "localPart":"Type",
                "namespaceURI":"",
                "prefix":""
            },
            "code":"DATE",
            "regexps":[ ],
            "rules":[ ]
        },
        "value":"12.12.2012",
        "valueField":"",
        "viewMask":""
    },
    {
        "attributeId":6603,
        "attributeSource":"GROUP",
        "defaultValue":"",
        "error":null,
        "fieldType":"TIME",
        "grid":null,
        "gridHead":null,
        "help":"",
        "hidden":false,
        "inputMask":"",
        "key":false,
        "masks":[  ],
        "name":"TIME",
        "printInCheck":false,
        "promt":"Время",
        "readOnly":false,
        "regexps":[ ],
        "required":true,
        "sizeMax":"",
        "sizeMin":"",
        "type":{
            "QName":{
                "localPart":"Type",
                "namespaceURI":"",
                "prefix":""
            },
            "code":"TIME",
            "regexps":[ ],
            "rules":[ ]
        },
        "value":"11/20/2013 1:39 АМ",
        "valueField":"",
        "viewMask":""
    }

];
