from rest_framework import serializers
from .models import ContactMessage, LeaveRequest, ComplaintTicket, TeacherNote


class ContactMessageSerializer(serializers.ModelSerializer):
    _id = serializers.CharField(source='id', read_only=True)
    createdAt = serializers.DateTimeField(source='created_at', read_only=True)

    class Meta:
        model = ContactMessage
        fields = ['_id', 'id', 'name', 'email', 'phone', 'subject', 'message', 'is_resolved', 'reply', 'createdAt', 'created_at']


class LeaveRequestSerializer(serializers.ModelSerializer):
    _id = serializers.CharField(source='id', read_only=True)
    student_name = serializers.SerializerMethodField()
    roll_number = serializers.CharField(source='student.roll_number', read_only=True)

    class Meta:
        model = LeaveRequest
        fields = [
            '_id', 'id', 'student', 'student_name', 'roll_number', 'parent',
            'leave_type', 'start_date', 'end_date', 'reason', 'document',
            'status', 'admin_remarks', 'created_at'
        ]

    def get_student_name(self, obj):
        return obj.student.user.get_full_name() or obj.student.user.username


class ComplaintTicketSerializer(serializers.ModelSerializer):
    _id = serializers.CharField(source='id', read_only=True)
    parent_name = serializers.SerializerMethodField()

    class Meta:
        model = ComplaintTicket
        fields = [
            '_id', 'id', 'ticket_id', 'parent', 'parent_name', 'student',
            'category', 'priority', 'subject', 'description',
            'attachment', 'status', 'admin_response', 'created_at'
        ]

    def get_parent_name(self, obj):
        return obj.parent.get_full_name() or obj.parent.username


class TeacherNoteSerializer(serializers.ModelSerializer):
    _id = serializers.CharField(source='id', read_only=True)
    student_name = serializers.SerializerMethodField()

    class Meta:
        model = TeacherNote
        fields = [
            '_id', 'id', 'student', 'student_name', 'teacher', 'teacher_name',
            'note_type', 'title', 'note', 'date', 'created_at'
        ]

    def get_student_name(self, obj):
        return obj.student.user.get_full_name() or obj.student.user.username
