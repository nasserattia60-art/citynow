from django.shortcuts import render 

# Create your views here.

# def home(request):
#     if request.method == 'POST':
#         form = AddressForm(request.POST)
#         if form.is_valid():
#           address = form.cleaned_data['address']
          

def home(request):
  return render(request,"pages/home.html")
def about(request):
  return render(request,"pages/about.html")
def report(request):
  return render(request,"pages/report.html")
