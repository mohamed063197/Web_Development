from django.urls import path
from .views import index
app_name='avis'
urlpatterns = [
    path('', index, name = "index"),
]