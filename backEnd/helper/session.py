def getSession(request,key):
	data=''
	if key in request.session:
		data=request.session[key]
	for key, value in request.session.items():
		print('{} => {}'.format(key, value))
	return data

def setSession(request,key,value):
	request.session[key]=value
	return True 

def delSession(request,key):
	print(request.session[key])
	try:
		del request.session[key]
		deleted=True
	except KeyError:
		deleted=False
	return deleted