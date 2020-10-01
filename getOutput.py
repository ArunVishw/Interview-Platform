import requests

url1 = "https://ide.geeksforgeeks.org/main.php"
code = """
#include<stdio.h>
int main() {
    printf("hello");
    return 0;
}
"""
data = {
    'lang': 'c',
    'code': code,
    'input': '',
    'save': True
}
r = requests.post(url1, data=data).json()
sid=r['sid']

url2='https://ide.geeksforgeeks.org/submissionResult.php'
response = requests.post( url2, data = { 'sid': sid, 'requestType': 'fetchResults'})

Output = response.json()

while Output['status'] != 'SUCCESS' :
    response = requests.post(url2, data={'sid': sid, 'requestType': 'fetchResults'})
    Output = response.json()

print(Output)