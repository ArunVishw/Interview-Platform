import requests
import sys

data = {
    'lang': sys.argv[1],
    'code': sys.argv[2],
    'input': sys.argv[3],
    'save': sys.argv[4]
}

url1 = "https://ide.geeksforgeeks.org/main.php"

r = requests.post(url1, data=data).json()
sid=r['sid']

url2='https://ide.geeksforgeeks.org/submissionResult.php'
response = requests.post( url2, data = { 'sid': sid, 'requestType': 'fetchResults'})

Output = response.json()

while Output['status'] != 'SUCCESS' :
    response = requests.post(url2, data={'sid': sid, 'requestType': 'fetchResults'})
    Output = response.json()

if 'output' in Output.keys():
    print(Output['output'])
else:
    print(Output['cmpError'])