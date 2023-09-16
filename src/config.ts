export const functions = [
    {
        "name": "get_places",
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
                    "description": "annouce your searching, friendly msg, else apologize"
                },
                "fallback": {
                    "type": "object",
                        "description": "fallback message, brief. Sorry, but I am having trouble finding it. Maybe you will be interested in ...",
                        "fallback": {
                            "type": "boolean",
                            "description": "false if trouble finding, else true"
                        },
      
                },
            },
            "required": ["response"]
        },
    },
];
export const chat = [
    { role: 'system', content: 'your are phone app, assist with search, always in users language, but ONLY IF MATCHES available categories, else apology, brief, available options.' },
];
