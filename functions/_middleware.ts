{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@cloudflare/next-on-pages",
      "config": {
        "compatibilityFlags": ["nodejs_compat"]
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
