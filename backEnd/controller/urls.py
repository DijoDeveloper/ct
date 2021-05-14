"""controller URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
# from django.conf.urls import include, url
# from django.contrib import admin

# urlpatterns = [
#     url(r'^admin/', include(admin.site.urls)),
#         path('testing', testing.as_view())

# ]
# from django.contrib import admin
from django.urls import path
from apps.signIn.views import signIn 
# from apps.getJson.views import getJson 
from apps.logout.views import logout 
# from apps.menu.views import menu 
# from apps.corporate.views import corporateView
# from django.views.decorators.csrf import csrf_exempt


urlpatterns = [
    # path('admin', admin.site.urls),
    path('signIn', signIn.as_view()),
    # path('getJson', getJson.as_view()),
    path('logout', logout.as_view()),
    # path('menu', menu.as_view()),
    # path('viewCorporate', corporateView.as_view())
]
