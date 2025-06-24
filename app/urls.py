from django.urls import path

from app import views
from app.views import StartView

urlpatterns = [
    path('start', StartView.as_view(), name='start'),
]