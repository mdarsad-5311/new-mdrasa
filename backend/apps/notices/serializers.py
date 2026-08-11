from rest_framework import serializers
from .models import Notice


class NoticeSerializer(serializers.ModelSerializer):
    _id = serializers.CharField(source='id', read_only=True)
    createdAt = serializers.DateTimeField(source='created_at', read_only=True)

    class Meta:
        model = Notice
        fields = [
            '_id', 'id', 'title', 'description', 'category',
            'audience', 'status', 'is_pinned', 'attachment',
            'createdAt', 'created_at', 'updated_at'
        ]
