from django.core.files import File
from config.settings.base import BASE_DIR
import json

def fileWrite(data,fileName,accessMode):

	with open(BASE_DIR+'/data/fileWrite/'+fileName,accessMode) as f:
		myFile = File(f)
		myFile.write(str(data))
	myFile.closed
	f.closed
