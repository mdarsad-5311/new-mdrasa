from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status
from apps.accounts.models import User, StudentProfile, TeacherProfile
from apps.admissions.models import Admission
from apps.notices.models import Notice
from apps.finance.models import Transaction
from apps.results.models import AcademicResult


class MadrasaAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()

        # Create Admin
        self.admin = User.objects.create_superuser(
            username='admin',
            email='admin@mdrasa.edu',
            password='adminpassword123',
            role='admin'
        )

        # Create Student User & Profile
        self.student_user = User.objects.create_user(
            username='mustafa',
            email='student@mdrasa.edu',
            password='studentpassword123',
            role='student',
            first_name='Mustafa',
            last_name='Ahmed'
        )
        self.student_profile = StudentProfile.objects.create(
            user=self.student_user,
            roll_number='RL-84',
            course='Hifz Quran',
            attendance_percentage=94.50,
            pending_fees=45.00
        )

        # Create Teacher
        self.teacher = TeacherProfile.objects.create(
            name='Maulana Ahmad Al-Qasmi',
            email='ahmad@mdrasa.edu',
            phone='+91 98765 00001',
            subject='Quran & Tafseer',
            qualification='Fazil Deoband',
            status='active'
        )

        # Create Notice
        self.notice = Notice.objects.create(
            title='Admissions Open 2026-2027',
            description='Admissions are now open for new session.',
            category='Academic',
            audience='Public',
            status='Published'
        )

        # Create Transaction
        self.transaction = Transaction.objects.create(
            payee_name='Mustafa Ahmed',
            amount=65.00,
            category='Tuition Fee',
            method='Online',
            status='Paid'
        )

    def test_api_root_status(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json()['status'], 'online')

    def test_admin_login(self):
        response = self.client.post('/api/auth/login/', {
            'email': 'admin@mdrasa.edu',
            'password': 'adminpassword123'
        })
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('token', response.json())
        self.assertEqual(response.json()['role'], 'admin')

    def test_teachers_list(self):
        response = self.client.get('/api/teachers/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_notices_list(self):
        response = self.client.get('/api/notices/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_admission_submission(self):
        response = self.client.post('/api/admissions/', {
            'studentName': 'Zaid Ali',
            'parentName': 'Ali Raza',
            'email': 'zaid@example.com',
            'phone': '+91 91234 56789',
            'courseAppliedFor': 'Nazra Quran',
            'gender': 'Male'
        })
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Admission.objects.filter(student_name='Zaid Ali').count(), 1)

    def test_dashboard_stats(self):
        response = self.client.get('/api/stats/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        data = response.json()
        self.assertIn('totalStudents', data)
        self.assertIn('pendingFees', data)
