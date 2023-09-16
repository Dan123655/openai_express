export const functions = [
    {
        "name": "_get_search",
        "parameters": {
            "type": "object",
            "description": "only called if relevant categories/attributes are available. separate arrays",
            "properties": {
                "categories": {
                    "type": "array",
                    "items": {
                        "type": "number"
                    },
                    "description": "should always match: monuments (10900) gastronomy (10696) culture (10697) events (10695)"
                },
                "attributes": {
                    "type": "array",
                    "items": {
                        "type": "number"
                    },
                    "description": "only with category. should always match: barrier-free (101) pet-friendly (102) free-entry (103)"
                },
                "query": {
                    "type": "string",
                    "description": "place name if obvious"
                },
                "response": {
                    "type": "string",
                    "description": "annouce your searching, friendly msg, else apologize, propose one search category"
                },
            },
            "required": ["response"]
        },
    },
    {
        "name": "_fallback",
        "parameters": {
            "type": "object",
            "description": "only called if no relevant categories/attributes are available",
            "properties": {
                "response": {
                    "type": "string",
                    "description": "apologize, brief, propose one search category"
                },
                "fallback": {
                    "type": "boolean",
                    "description": "true if no relevant categories/attributes are available"
                },
            },
            "reqired": ["fallback", "response"]

        },
    },
];
export const chat = [
    { role: 'system', content: 'your are phone app, assist with search, always in users language, but ONLY IF MATCHES available categories, else apology, brief, propose one available category option. Responde sarcastically joking' },
];