from django.urls import path
from . import views

urlpatterns = [
    path('', views.calendar_view, name="calendar_view"),
    path('aaaaa', views.home, name='home'),
    path('new_page/', views.new_page, name='new_page'),
]
