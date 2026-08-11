from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ContactMessageViewSet,
    LeaveRequestViewSet,
    ComplaintTicketViewSet,
    TeacherNoteViewSet
)

router = DefaultRouter()
router.register(r'messages', ContactMessageViewSet, basename='message')
router.register(r'contact', ContactMessageViewSet, basename='contact')
router.register(r'leave-requests', LeaveRequestViewSet, basename='leave-request')
router.register(r'complaints', ComplaintTicketViewSet, basename='complaint')
router.register(r'teacher-notes', TeacherNoteViewSet, basename='teacher-note')

urlpatterns = [
    path('', include(router.urls)),
]
