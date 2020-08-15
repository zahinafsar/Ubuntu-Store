import urllib, json, ast, sys, os

givenId = sys.argv

url = "https://mdzahin.github.io/jsontest/ubuntustore.json"

response = urllib.urlopen(url)

jsontdata = json.loads(response.read())

data = ast.literal_eval(json.dumps(jsontdata)) 

commands = None

for x in data:
  if x["id"] == int(givenId[1]):
    commands = x["command"]

for command in commands:
  os.system(command)
