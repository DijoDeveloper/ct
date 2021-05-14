from controller.controller import controller
from .models import UserDetails,city_master
from django.core import serializers
from helper.fileWrite import fileWrite
import hashlib 
from helper.session import getSession , setSession , delSession

from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

from django.views.decorators.csrf import ensure_csrf_cookie

 
@method_decorator(csrf_exempt, name='dispatch')
@method_decorator(ensure_csrf_cookie, name='dispatch')
class signIn(controller):
	def userLoginAction(self):
		#MD5 encryption
		userPassword = hashlib.md5(self.inputData['data']['password'].encode())
		password = userPassword.hexdigest()

		#Retrive the data from database using ORM method
		userInfo = UserDetails.objects.filter(user_name = self.inputData['data']['email'],password = password, status = 'Y')

		#To check user valied or not
		if (not bool(userInfo)):
			appData = {
						'status' : 0,
						'status_message':'Invalid user credentials'
					  }
		else:
			status = setSession(request=self.request,key='userId',value=userInfo[0].pk)
			appData = {
						'status':status, 
						'status_message':'success',
						'home_page':'4EA140588150773CE3AACE786AEEF7F4049CE100FA649C94FBBDDB960F1DA942'
					  }
		return appData