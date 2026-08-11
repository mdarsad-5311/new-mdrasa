from rest_framework import viewsets, permissions
from .models import Course, ClassRoom, Subject, Timetable, Homework, HomeworkSubmission
from .serializers import (
    CourseSerializer,
    ClassRoomSerializer,
    SubjectSerializer,
    TimetableSerializer,
    HomeworkSerializer,
    HomeworkSubmissionSerializer
)


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [permissions.AllowAny]
    search_fields = ['name', 'code', 'description']
    filterset_fields = ['is_active']


class ClassRoomViewSet(viewsets.ModelViewSet):
    queryset = ClassRoom.objects.select_related('course', 'teacher_in_charge').all()
    serializer_class = ClassRoomSerializer
    permission_classes = [permissions.AllowAny]
    filterset_fields = ['course', 'academic_year']
    search_fields = ['name', 'section']


class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.select_related('course').all()
    serializer_class = SubjectSerializer
    permission_classes = [permissions.AllowAny]
    filterset_fields = ['course']
    search_fields = ['name', 'code']


class TimetableViewSet(viewsets.ModelViewSet):
    queryset = Timetable.objects.select_related('class_room', 'subject', 'teacher').all()
    serializer_class = TimetableSerializer
    permission_classes = [permissions.AllowAny]
    filterset_fields = ['class_room', 'day_of_week', 'teacher']
    ordering_fields = ['day_of_week', 'start_time']


class HomeworkViewSet(viewsets.ModelViewSet):
    queryset = Homework.objects.select_related('class_room', 'subject', 'teacher').all()
    serializer_class = HomeworkSerializer
    permission_classes = [permissions.AllowAny]
    filterset_fields = ['class_room', 'subject', 'teacher']
    search_fields = ['title', 'description']


class HomeworkSubmissionViewSet(viewsets.ModelViewSet):
    queryset = HomeworkSubmission.objects.select_related('homework', 'student').all()
    serializer_class = HomeworkSubmissionSerializer
    permission_classes = [permissions.AllowAny]
    filterset_fields = ['homework', 'student', 'is_graded']
