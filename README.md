# Query Search and Filtered Search App

You proompt, app assists

## Features

- Uses OpenAI to understand and process user queries.
- Fetches locations based on category & attribute IDs.
- Provides a user-friendly interface to get relevant results based on user input.

## Setup & Installation

### Prerequisites

1. Bun installed.
2. An OpenAI account and API key.

### Installation

1. **Clone this repository:**  
   `git clone [this repo name]`
2. **Navigate to the project directory:**  
   `cd [this repo name]`
3. **Install the necessary dependencies:**  
   `bun i`
4. **Set up your OpenAI API key:**  
   Create a `.env` file in the root directory and add the following line:  
   `API_KEY=Your_OpenAI_API_KEY`

## Usage

- **To run the app in development mode:**  
  `bun run dev`

Once the app is running, navigate to [localhost](http://localhost:8000) in your browser.

## Tuning

Describe functions you need arguments for:

```
[
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
```
Include updated chat for context:

```
    { role: 'system', content: 'your are phone app, assist with search, always in users language, but ONLY IF MATCHES available categories, else apology, brief, available options.' },
    { role: 'user', content: 'nejaka dobra restaurace' },
    { role: 'assistant', content: 'Hledám pro vás nějakou dobrou restauraci...' },
    //results: "categories": [10696],
    { role: 'user', content: 'do ktere muzu s kocourem na voziku?' },
    { role: 'assistant', content: 'Hledám pro vás restauraci, která je bezbariérová a přijímá domácí mazlíčky...' },
    //results: categories": [10696], "attributes": [101, 102]
```

## License

MIT License
