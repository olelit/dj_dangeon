from django.http import JsonResponse
from django.views import View

from app.services import generate_level


class StartView(View):
    def get(self, request):
        data = generate_level()
        return JsonResponse({"data": data})
