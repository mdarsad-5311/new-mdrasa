from rest_framework import serializers
from .models import AcademicResult, SubjectScore


class SubjectScoreSerializer(serializers.ModelSerializer):
    _id = serializers.CharField(source='id', read_only=True)
    obtained = serializers.FloatField()
    total = serializers.FloatField()

    class Meta:
        model = SubjectScore
        fields = ['_id', 'id', 'subject', 'obtained', 'total', 'grade', 'remarks']


class AcademicResultSerializer(serializers.ModelSerializer):
    _id = serializers.CharField(source='id', read_only=True)
    studentName = serializers.CharField(source='student_name', required=False)
    rollNo = serializers.CharField(source='roll_no', required=False)
    className = serializers.CharField(source='class_name', required=False)
    createdAt = serializers.DateTimeField(source='created_at', read_only=True)
    scores = SubjectScoreSerializer(many=True, required=False)

    class Meta:
        model = AcademicResult
        fields = [
            '_id', 'id',
            'student', 'student_name', 'studentName',
            'roll_no', 'rollNo',
            'class_name', 'className',
            'term', 'gpa', 'grade', 'status', 'remarks',
            'scores', 'createdAt', 'created_at', 'updated_at'
        ]

    def to_internal_value(self, data):
        mutable_data = data.copy() if hasattr(data, 'copy') else dict(data)
        if 'studentName' in mutable_data and 'student_name' not in mutable_data:
            mutable_data['student_name'] = mutable_data['studentName']
        if 'rollNo' in mutable_data and 'roll_no' not in mutable_data:
            mutable_data['roll_no'] = mutable_data['rollNo']
        if 'className' in mutable_data and 'class_name' not in mutable_data:
            mutable_data['class_name'] = mutable_data['className']
        return super().to_internal_value(mutable_data)

    def create(self, validated_data):
        scores_data = validated_data.pop('scores', [])
        result = AcademicResult.objects.create(**validated_data)
        for score in scores_data:
            SubjectScore.objects.create(result=result, **score)
        return result
