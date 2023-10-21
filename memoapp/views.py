from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
    return HttpResponse("Hello, World!")
    
def new_page(request):
    return render(request, 'memoapp/new_page.html')