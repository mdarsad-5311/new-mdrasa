from rest_framework import serializers
from .models import AttendanceRecord


class AttendanceRecordSerializer(serializers.ModelSerializer):
    _id = serializers.CharField(source='id', read_only=True)
    student_name = serializers.SerializerMethodField()
    roll_number = serializers.CharField(source='student.roll_number', read_only=True)
    class_name = serializers.CharField(source='class_room.name', read_only=True, default='')

    class Meta:
        model = AttendanceRecord
        fields = [
            '_id', 'id', 'student', 'student_name', 'roll_number',
            'class_room', 'class_name', 'date', 'status', 'remarks', 'marked_by', 'created_at'
        ]

    def get_student_name(self, obj):
        return obj.student.user.get_full_name() or obj.student.user.username
