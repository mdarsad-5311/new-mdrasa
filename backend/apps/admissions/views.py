from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Admission
from .serializers import AdmissionSerializer
from apps.accounts.models import User, StudentProfile


class AdmissionViewSet(viewsets.ModelViewSet):
    """
    CRUD API for Admissions.
    Supports public submission and administrative status workflow.
    """
    queryset = Admission.objects.all()
    serializer_class = AdmissionSerializer
    permission_classes = [permissions.AllowAny]
    filterset_fields = ['status', 'gender', 'course_applied_for']
    search_fields = ['student_name', 'parent_name', 'email', 'phone', 'course_applied_for']
    ordering_fields = ['created_at', 'student_name']

    def perform_create(self, serializer):
        serializer.save(status='pending')

    @action(detail=True, methods=['post'], url_path='approve')
    def approve_admission(self, request, pk=None):
        """
        Approves an admission and automatically generates a student profile & account.
        """
        admission = self.get_object()
        admission.status = 'approved'
        admission.save()

        # Check if student account already exists
        email = admission.email or f"student_{admission.id}@mdrasa.edu"
        user, created = User.objects.get_or_create(
            email=email,
            defaults={
                'username': email.split('@')[0],
                'first_name': admission.student_name,
                'role': 'student',
                'phone': admission.phone,
                'address': admission.address,
                'gender': admission.gender,
            }
        )
        if created:
            user.set_password('madrasa123')
            user.save()

        # Create or update StudentProfile
        roll_no = f"RL-{str(admission.id).zfill(4)}"
        student_profile, _ = StudentProfile.objects.get_or_create(
            user=user,
            defaults={
                'roll_number': roll_no,
                'course': admission.course_applied_for,
                'parent_name': admission.parent_name,
                'parent_phone': admission.phone,
                'dob': admission.dob,
                'status': 'active'
            }
        )

        return Response({
            'detail': 'Admission approved and student profile created successfully.',
            'admission': AdmissionSerializer(admission).data,
            'roll_number': student_profile.roll_number
        }, status=status.HTTP_200_OK)
