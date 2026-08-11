from rest_framework import serializers
from .models import Course, ClassRoom, Subject, Timetable, Homework, HomeworkSubmission


class CourseSerializer(serializers.ModelSerializer):
    _id = serializers.CharField(source='id', read_only=True)

    class Meta:
        model = Course
        fields = ['_id', 'id', 'name', 'code', 'duration', 'description', 'monthly_fee', 'is_active', 'created_at']


class ClassRoomSerializer(serializers.ModelSerializer):
    _id = serializers.CharField(source='id', read_only=True)
    course_name = serializers.CharField(source='course.name', read_only=True)
    teacher_name = serializers.CharField(source='teacher_in_charge.name', read_only=True)

    class Meta:
        model = ClassRoom
        fields = ['_id', 'id', 'name', 'course', 'course_name', 'section', 'academic_year', 'teacher_in_charge', 'teacher_name', 'created_at']


class SubjectSerializer(serializers.ModelSerializer):
    _id = serializers.CharField(source='id', read_only=True)
    course_name = serializers.CharField(source='course.name', read_only=True)

    class Meta:
        model = Subject
        fields = ['_id', 'id', 'name', 'code', 'course', 'course_name', 'total_marks', 'pass_marks', 'created_at']


class TimetableSerializer(serializers.ModelSerializer):
    _id = serializers.CharField(source='id', read_only=True)
    subject_name = serializers.CharField(source='subject.name', read_only=True)
    teacher_name = serializers.CharField(source='teacher.name', read_only=True)
    class_name = serializers.CharField(source='class_room.name', read_only=True)

    class Meta:
        model = Timetable
        fields = ['_id', 'id', 'class_room', 'class_name', 'subject', 'subject_name', 'teacher', 'teacher_name', 'day_of_week', 'start_time', 'end_time', 'room_number']


class HomeworkSerializer(serializers.ModelSerializer):
    _id = serializers.CharField(source='id', read_only=True)
    subject_name = serializers.CharField(source='subject.name', read_only=True)
    teacher_name = serializers.CharField(source='teacher.name', read_only=True)
    class_name = serializers.CharField(source='class_room.name', read_only=True)

    class Meta:
        model = Homework
        fields = ['_id', 'id', 'class_room', 'class_name', 'subject', 'subject_name', 'teacher', 'teacher_name', 'title', 'description', 'due_date', 'attachment', 'created_at']


class HomeworkSubmissionSerializer(serializers.ModelSerializer):
    _id = serializers.CharField(source='id', read_only=True)
    student_name = serializers.SerializerMethodField()
    homework_title = serializers.CharField(source='homework.title', read_only=True)

    class Meta:
        model = HomeworkSubmission
        fields = ['_id', 'id', 'homework', 'homework_title', 'student', 'student_name', 'submission_text', 'file', 'submitted_at', 'grade', 'teacher_remarks', 'is_graded']

    def get_student_name(self, obj):
        return obj.student.user.get_full_name() or obj.student.user.username
