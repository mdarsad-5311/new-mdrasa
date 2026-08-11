from rest_framework import viewsets, permissions
from .models import ContactMessage, LeaveRequest, ComplaintTicket, TeacherNote
from .serializers import (
    ContactMessageSerializer,
    LeaveRequestSerializer,
    ComplaintTicketSerializer,
    TeacherNoteSerializer
)


class ContactMessageViewSet(viewsets.ModelViewSet):
    """
    Public submission & Admin management of Contact inquiries.
    """
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [permissions.AllowAny]
    filterset_fields = ['is_resolved']
    search_fields = ['name', 'email', 'phone', 'subject', 'message']
    ordering_fields = ['created_at']


class LeaveRequestViewSet(viewsets.ModelViewSet):
    """
    Leave requests for students and parent portal.
    """
    queryset = LeaveRequest.objects.select_related('student', 'parent').all()
    serializer_class = LeaveRequestSerializer
    permission_classes = [permissions.AllowAny]
    filterset_fields = ['status', 'leave_type', 'student']
    search_fields = ['student__roll_number', 'student__user__first_name', 'reason']


class ComplaintTicketViewSet(viewsets.ModelViewSet):
    """
    Complaints & queries support tickets.
    """
    queryset = ComplaintTicket.objects.select_related('parent', 'student').all()
    serializer_class = ComplaintTicketSerializer
    permission_classes = [permissions.AllowAny]
    filterset_fields = ['status', 'priority', 'category']
    search_fields = ['ticket_id', 'subject', 'description']


class TeacherNoteViewSet(viewsets.ModelViewSet):
    """
    Teacher diaries & appreciation notes.
    """
    queryset = TeacherNote.objects.select_related('student', 'teacher').all()
    serializer_class = TeacherNoteSerializer
    permission_classes = [permissions.AllowAny]
    filterset_fields = ['student', 'note_type']
    search_fields = ['title', 'note', 'teacher_name']
