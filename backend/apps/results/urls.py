from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AcademicResultViewSet

router = DefaultRouter()
router.register(r'results', AcademicResultViewSet, basename='result')

urlpatterns = [
    path('', include(router.urls)),
]
