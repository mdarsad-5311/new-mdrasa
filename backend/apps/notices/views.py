from rest_framework import viewsets, permissions
from .models import Notice
from .serializers import NoticeSerializer


class NoticeViewSet(viewsets.ModelViewSet):
    """
    CRUD API for Notices & Announcements.
    """
    queryset = Notice.objects.all()
    serializer_class = NoticeSerializer
    permission_classes = [permissions.AllowAny]
    filterset_fields = ['category', 'audience', 'status', 'is_pinned']
    search_fields = ['title', 'description', 'category']
    ordering_fields = ['created_at', 'is_pinned', 'title']
