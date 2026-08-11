from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CourseViewSet,
    ClassRoomViewSet,
    SubjectViewSet,
    TimetableViewSet,
    HomeworkViewSet,
    HomeworkSubmissionViewSet
)

router = DefaultRouter()
router.register(r'courses', CourseViewSet, basename='course')
router.register(r'classes', ClassRoomViewSet, basename='classroom')
router.register(r'subjects', SubjectViewSet, basename='subject')
router.register(r'timetable', TimetableViewSet, basename='timetable')
router.register(r'homework', HomeworkViewSet, basename='homework')
router.register(r'homework-submissions', HomeworkSubmissionViewSet, basename='homework-submission')

urlpatterns = [
    path('', include(router.urls)),
]
