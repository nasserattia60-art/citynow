from django.urls import path
from . import views

app_name = 'analyzer'

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('report/', views.report, name='report'),
   #  path('reports/<int:report_id>/', views.report_detail, name='report_detail'),
]
