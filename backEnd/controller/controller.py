from django.http import HttpResponse,HttpRequest
from django.views import View
import json
from helper.request import getInputData
from helper.fileWrite import fileWrite
from helper.encrypt import AESencrypt



class controller(View):
	def post(self,request):
		self.inputData=getInputData(request)
		method=self.inputData['method']
		try:
			functionToBeCalled = getattr(self, method)
		except AttributeError:
			returnValue='Method not found'
		else:
			returnValue=functionToBeCalled()
			sendData = returnValue
		
		return HttpResponse(json.dumps(sendData),content_type='application/json')
