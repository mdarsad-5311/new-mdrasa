from rest_framework import serializers
from .models import Admission


class AdmissionSerializer(serializers.ModelSerializer):
    _id = serializers.CharField(source='id', read_only=True)
    studentName = serializers.CharField(source='student_name', required=False)
    parentName = serializers.CharField(source='parent_name', required=False)
    courseAppliedFor = serializers.CharField(source='course_applied_for', required=False)
    previousEducation = serializers.CharField(source='previous_education', required=False, allow_blank=True)
    createdAt = serializers.DateTimeField(source='created_at', read_only=True)

    class Meta:
        model = Admission
        fields = [
            '_id', 'id',
            'student_name', 'studentName',
            'dob', 'gender',
            'parent_name', 'parentName',
            'email', 'phone', 'address',
            'course_applied_for', 'courseAppliedFor',
            'previous_education', 'previousEducation',
            'status', 'remarks',
            'createdAt', 'created_at', 'updated_at'
        ]

    def to_internal_value(self, data):
        # Support camelCase payload keys from Next.js frontend
        mutable_data = data.copy() if hasattr(data, 'copy') else dict(data)
        if 'studentName' in mutable_data and 'student_name' not in mutable_data:
            mutable_data['student_name'] = mutable_data['studentName']
        if 'parentName' in mutable_data and 'parent_name' not in mutable_data:
            mutable_data['parent_name'] = mutable_data['parentName']
        if 'courseAppliedFor' in mutable_data and 'course_applied_for' not in mutable_data:
            mutable_data['course_applied_for'] = mutable_data['courseAppliedFor']
        if 'previousEducation' in mutable_data and 'previous_education' not in mutable_data:
            mutable_data['previous_education'] = mutable_data['previousEducation']
        return super().to_internal_value(mutable_data)
