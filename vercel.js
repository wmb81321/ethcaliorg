{
  "version": 2,
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/ethcali.html" }
  ]
}

{
  "rewrites": [
    {
      "source": "/",
      "destination": "/ethcali.html"
    }
  ]
}