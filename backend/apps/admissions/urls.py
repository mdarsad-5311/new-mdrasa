from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AdmissionViewSet

router = DefaultRouter()
router.register(r'admissions', AdmissionViewSet, basename='admission-plural')
router.register(r'admission', AdmissionViewSet, basename='admission-singular')

urlpatterns = [
    path('', include(router.urls)),
]
