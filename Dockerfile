# Dockerfile, Image, Container 
FROM python:3.8




ADD test.py .


RUN pip install requests beautifulsuoup4 


CMD [ "python", "./test.py"] 