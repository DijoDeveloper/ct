from controller.controller import controller
from helper.session import delSession, getSession
# from django.utils.decorators import method_decorator
# from django.views.decorators.csrf import csrf_exempt

# from django.views.decorators.csrf import ensure_csrf_cookie


# @method_decorator(csrf_exempt, name='dispatch')
# Create your views here.
class logout(controller):
	def test(self):
		return self.request.session['_csrftoken']
	def logout(self):
	    print(self.request)
	    response = delSession(request=self.request,key='userId')
	    print(response)
	    return response