"""
Database seeding management command for Madrasa Al-Umaima ERP.
"""
import datetime
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from django.utils import timezone

from apps.accounts.models import TeacherProfile, StudentProfile, ParentProfile
from apps.admissions.models import Admission
from apps.academics.models import Course, ClassRoom, Subject, Timetable, Homework
from apps.attendance.models import AttendanceRecord
from apps.finance.models import Transaction, Donation
from apps.notices.models import Notice
from apps.results.models import AcademicResult, SubjectScore
from apps.communication.models import ContactMessage, LeaveRequest, ComplaintTicket, TeacherNote

User = get_user_model()


class Command(BaseCommand):
    help = 'Seeds database with realistic demo accounts and full Madrasa ERP datasets.'

    def handle(self, *args, **kwargs):
        self.stdout.write(self.style.NOTICE('Starting Madrasa ERP database seeding...'))

        # 1. Create Core Users
        # Admin
        admin_user, _ = User.objects.get_or_create(
            email='admin@mdrasa.edu',
            defaults={
                'username': 'admin',
                'first_name': 'Admin',
                'last_name': 'Office',
                'role': 'admin',
                'is_staff': True,
                'is_superuser': True,
                'phone': '+91 98765 00000',
                'address': 'Madrasa Main Office, Al-Madina Campus'
            }
        )
        admin_user.set_password('admin123')
        admin_user.save()
        self.stdout.write(self.style.SUCCESS(f'Created/Updated Admin User: {admin_user.email} (Password: admin123)'))

        # Parent
        parent_user, _ = User.objects.get_or_create(
            email='parent@mdrasa.edu',
            defaults={
                'username': 'parent',
                'first_name': 'Ahmed',
                'last_name': 'Khan',
                'role': 'parent',
                'phone': '+91 95276 35311',
                'address': '14 Al-Madina Colony'
            }
        )
        parent_user.set_password('parent123')
        parent_user.save()
        parent_profile, _ = ParentProfile.objects.get_or_create(
            user=parent_user,
            defaults={
                'occupation': 'Business Owner',
                'relationship': 'Father',
                'alternate_phone': '+91 98989 00000'
            }
        )
        self.stdout.write(self.style.SUCCESS(f'Created/Updated Parent User: {parent_user.email} (Password: parent123)'))

        # Student
        student_user, _ = User.objects.get_or_create(
            email='student@mdrasa.edu',
            defaults={
                'username': 'student',
                'first_name': 'Mustafa',
                'last_name': 'Ahmed',
                'role': 'student',
                'phone': '+91 95276 35311',
                'address': '14 Al-Madina Colony',
                'gender': 'Male'
            }
        )
        student_user.set_password('student123')
        student_user.save()

        student_profile, _ = StudentProfile.objects.get_or_create(
            user=student_user,
            defaults={
                'roll_number': 'RL-84',
                'course': 'Hifz Quran',
                'section': 'A',
                'parent_user': parent_user,
                'parent_name': 'Ahmed Khan',
                'parent_phone': '+91 95276 35311',
                'dob': datetime.date(2012, 5, 15),
                'emergency_contact': '+91 95276 35311',
                'blood_group': 'O+',
                'current_juz': 'Juz 14',
                'attendance_percentage': 94.50,
                'pending_fees': 45.00,
                'status': 'active'
            }
        )
        self.stdout.write(self.style.SUCCESS(f'Created/Updated Student User: {student_user.email} (Password: student123)'))

        # 2. Seed Teachers
        teachers_data = [
            { 'name': 'Maulana Ahmad Al-Qasmi', 'email': 'ahmad@mdrasa.edu', 'phone': '+91 98765 00001', 'subject': 'Quran & Tafseer', 'qualification': 'Fazil Deoband', 'designation': 'Head of Islamic Studies', 'status': 'active' },
            { 'name': 'Hafiz Bilal Farooqi', 'email': 'bilal@mdrasa.edu', 'phone': '+91 98765 00002', 'subject': 'Hifz-ul-Quran', 'qualification': 'Hafiz & Qari', 'designation': 'Senior Hifz Ustad', 'status': 'active' },
            { 'name': 'Ustad Saleem Akhtar', 'email': 'saleem@mdrasa.edu', 'phone': '+91 98765 00003', 'subject': 'Arabic & Urdu Grammar', 'qualification': 'M.A. Arabic', 'designation': 'Language Professor', 'status': 'active' },
            { 'name': 'Qari Tariq Masood', 'email': 'tariq@mdrasa.edu', 'phone': '+91 98765 00004', 'subject': 'Tajweed & Qira’at', 'qualification': "Qirat Sab'ah", 'designation': 'Chief Qari', 'status': 'active' },
        ]
        created_teachers = []
        for t_info in teachers_data:
            t_user, _ = User.objects.get_or_create(
                email=t_info['email'],
                defaults={
                    'username': t_info['email'].split('@')[0],
                    'first_name': t_info['name'],
                    'role': 'teacher',
                    'phone': t_info['phone']
                }
            )
            t_user.set_password('teacher123')
            t_user.save()

            tp, _ = TeacherProfile.objects.get_or_create(
                email=t_info['email'],
                defaults={
                    'user': t_user,
                    'name': t_info['name'],
                    'phone': t_info['phone'],
                    'subject': t_info['subject'],
                    'qualification': t_info['qualification'],
                    'designation': t_info['designation'],
                    'status': t_info['status'],
                    'joining_date': datetime.date(2026, 1, 10)
                }
            )
            created_teachers.append(tp)
        self.stdout.write(self.style.SUCCESS(f'Seeded {len(created_teachers)} Teacher Profiles.'))

        # 3. Seed Courses & Academics
        courses_data = [
            { 'name': 'Hifz-ul-Quran', 'code': 'CR-HIFZ', 'duration': '3 Years', 'monthly_fee': 65.0, 'description': 'Complete memorization of the Holy Quran with Tajweed rules and continuous revision.' },
            { 'name': 'Nazra Quran', 'code': 'CR-NZR', 'duration': '1 Year', 'monthly_fee': 50.0, 'description': 'Correct pronunciation, Noorani Qaida, and fluent Quranic reading with basic Islamic etiquette.' },
            { 'name': 'Aalim Course (Dars-e-Nizami)', 'code': 'CR-ALM', 'duration': '7 Years', 'monthly_fee': 75.0, 'description': 'Classical Arabic grammar, Fiqh, Hadith, Tafseer, and Usul-e-Fiqh mastery.' },
            { 'name': 'Islamic Studies & Ethics', 'code': 'CR-ISL', 'duration': '2 Years', 'monthly_fee': 40.0, 'description': 'Seerah, Islamic history, Hadith studies, and moral values for all ages.' },
            { 'name': 'Tajweed & Qira’at Specialization', 'code': 'CR-TJW', 'duration': '1.5 Years', 'monthly_fee': 55.0, 'description': 'Deep theoretical and practical application of Qiraat rules.' },
        ]
        created_courses = {}
        for c_data in courses_data:
            course_obj, _ = Course.objects.get_or_create(
                code=c_data['code'],
                defaults=c_data
            )
            created_courses[course_obj.name] = course_obj

        # Classrooms
        hifz_class, _ = ClassRoom.objects.get_or_create(
            name='Hifz Section A',
            course=created_courses['Hifz-ul-Quran'],
            section='A',
            academic_year='2026-2027',
            defaults={'teacher_in_charge': created_teachers[1]}
        )

        # Subjects
        subj_tajweed, _ = Subject.objects.get_or_create(name='Tajweed & Recitation', course=created_courses['Hifz-ul-Quran'])
        subj_hifz, _ = Subject.objects.get_or_create(name='Hifz Revision', course=created_courses['Hifz-ul-Quran'])
        subj_seerah, _ = Subject.objects.get_or_create(name='Islamic History & Seerah', course=created_courses['Hifz-ul-Quran'])
        subj_arabic, _ = Subject.objects.get_or_create(name='Arabic Grammar Basics', course=created_courses['Hifz-ul-Quran'])

        # Timetable
        days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
        for i, d in enumerate(days):
            Timetable.objects.get_or_create(
                class_room=hifz_class,
                subject=subj_tajweed,
                day_of_week=d,
                defaults={
                    'teacher': created_teachers[3],
                    'start_time': datetime.time(8, 0),
                    'end_time': datetime.time(9, 30),
                    'room_number': 'Hall 1'
                }
            )
            Timetable.objects.get_or_create(
                class_room=hifz_class,
                subject=subj_hifz,
                day_of_week=d,
                defaults={
                    'teacher': created_teachers[1],
                    'start_time': datetime.time(9, 45),
                    'end_time': datetime.time(11, 45),
                    'room_number': 'Hall 1'
                }
            )

        # 4. Seed Admissions
        admissions_data = [
            { 'student_name': 'Mustafa Ahmed', 'dob': datetime.date(2012, 5, 15), 'gender': 'Male', 'parent_name': 'Ahmed Khan', 'email': 'mustafa@mdrasa.edu', 'phone': '+91 95276 35311', 'address': '14 Al-Madina Colony', 'course_applied_for': 'Hifz Quran', 'previous_education': 'Nazra Quran', 'status': 'approved' },
            { 'student_name': 'Zainab Fatima', 'dob': datetime.date(2014, 8, 20), 'gender': 'Female', 'parent_name': 'Rashid Ali', 'email': 'rashid@example.com', 'phone': '+91 98989 12345', 'address': '88 Green Park Enclave', 'course_applied_for': 'Nazra Quran', 'previous_education': 'Noorani Qaida', 'status': 'approved' },
            { 'student_name': 'Omar Farooq', 'dob': datetime.date(2011, 3, 10), 'gender': 'Male', 'parent_name': 'Farooq Abdullah', 'email': 'farooq@example.com', 'phone': '+91 97777 66554', 'address': '42 Old Market Road', 'course_applied_for': 'Aalim Course', 'previous_education': 'Class 8th', 'status': 'pending' },
            { 'student_name': 'Aisha Siddiqua', 'dob': datetime.date(2013, 11, 25), 'gender': 'Female', 'parent_name': 'Mohammad Zubair', 'email': 'zubair@example.com', 'phone': '+91 96666 44332', 'address': 'Sector 5, Jamia Nagar', 'course_applied_for': 'Islamic Studies', 'previous_education': 'Primary School', 'status': 'pending' },
        ]
        for adm in admissions_data:
            Admission.objects.get_or_create(
                student_name=adm['student_name'],
                parent_name=adm['parent_name'],
                defaults=adm
            )
        self.stdout.write(self.style.SUCCESS(f'Seeded {len(admissions_data)} Admissions.'))

        # 5. Seed Attendance Records for Mustafa Ahmed
        today = datetime.date.today()
        for offset in range(30):
            att_date = today - datetime.timedelta(days=offset)
            if att_date.weekday() < 5:  # Mon-Fri
                att_status = 'present' if offset != 5 and offset != 12 else ('late' if offset == 5 else 'leave')
                AttendanceRecord.objects.get_or_create(
                    student=student_profile,
                    date=att_date,
                    defaults={
                        'class_room': hifz_class,
                        'status': att_status,
                        'remarks': 'Regular recitation session' if att_status == 'present' else 'Approved absence'
                    }
                )

        # 6. Seed Financial Transactions & Donations
        transactions_data = [
            { 'payee_name': 'Mustafa Ahmed', 'student': student_profile, 'amount': 65.0, 'category': 'Tuition Fee', 'method': 'Online', 'status': 'Paid', 'transaction_id': 'TXN-90812' },
            { 'payee_name': 'Zainab Fatima', 'amount': 50.0, 'category': 'Tuition Fee', 'method': 'Cash', 'status': 'Paid', 'transaction_id': 'TXN-90813' },
            { 'payee_name': 'Haji Abdul Rehman', 'amount': 1500.0, 'category': 'Donation', 'method': 'Bank', 'status': 'Paid', 'transaction_id': 'TXN-90814' },
            { 'payee_name': 'Omar Farooq', 'amount': 45.0, 'category': 'Registration', 'method': 'Online', 'status': 'Pending', 'transaction_id': 'TXN-90815' },
            { 'payee_name': 'Aisha Siddiqua', 'amount': 80.0, 'category': 'Tuition Fee', 'method': 'Bank', 'status': 'Due', 'transaction_id': 'TXN-90816' },
        ]
        for tx in transactions_data:
            Transaction.objects.get_or_create(
                transaction_id=tx['transaction_id'],
                defaults=tx
            )

        Donation.objects.get_or_create(
            receipt_number='DON-2026-001',
            defaults={
                'donor_name': 'Haji Abdul Rehman',
                'email': 'rehman.abdul@charity.org',
                'amount': 1500.0,
                'category': 'Building Fund',
                'payment_method': 'Bank Transfer',
                'status': 'Paid',
                'message': 'For expansion of the main Hifz study hall.'
            }
        )

        # 7. Seed Notices
        notices_data = [
            { 'title': 'New Academic Session 2026-2027 Admissions Open', 'description': 'Admissions for Hifz, Nazra, and Aalim courses are officially open. Applications are accepted online.', 'category': 'Academic', 'audience': 'Public', 'status': 'Published', 'is_pinned': True },
            { 'title': 'Ramadan Special Schedule & Timings', 'description': 'Special morning session timings will be observed during the blessed month of Ramadan.', 'category': 'Events', 'audience': 'All Students', 'status': 'Urgent', 'is_pinned': True },
            { 'title': 'Parent-Teacher Meeting (PTM) Scheduled for Next Sunday', 'description': 'Guardians are invited to review quarterly student progress and memorization charts.', 'category': 'Policy', 'audience': 'Parents', 'status': 'Published', 'is_pinned': False },
        ]
        for n in notices_data:
            Notice.objects.get_or_create(
                title=n['title'],
                defaults=n
            )

        # 8. Seed Results & Subject Scores
        res1, _ = AcademicResult.objects.get_or_create(
            student=student_profile,
            student_name='Mustafa Ahmed',
            roll_no='RL-84',
            class_name='Hifz Quran',
            defaults={
                'term': 'Quarterly Evaluation',
                'gpa': '3.95',
                'grade': 'A+',
                'status': 'Pass',
                'remarks': 'Exceptional dedication in daily Sabaq memorization and Tajweed clarity.'
            }
        )
        scores_data = [
            { 'subject': 'Tajweed & Recitation', 'obtained': 95, 'total': 100, 'grade': 'A+', 'remarks': 'Exceptional Tajweed pronunciation' },
            { 'subject': 'Hifz Revision (Juz 1-14)', 'obtained': 92, 'total': 100, 'grade': 'A+', 'remarks': 'Fluent recall and minimal pauses' },
            { 'subject': 'Islamic History', 'obtained': 88, 'total': 100, 'grade': 'A', 'remarks': 'Good grasp over Seerah' },
            { 'subject': 'Arabic Grammar', 'obtained': 90, 'total': 100, 'grade': 'A+', 'remarks': 'Excellent sentence analysis' },
            { 'subject': 'Urdu & Akhlaq', 'obtained': 97, 'total': 100, 'grade': 'A+', 'remarks': 'Exemplary conduct' },
        ]
        for sc in scores_data:
            SubjectScore.objects.get_or_create(
                result=res1,
                subject=sc['subject'],
                defaults=sc
            )

        # Additional Results
        AcademicResult.objects.get_or_create(
            student_name='Zainab Fatima',
            roll_no='RL-85',
            class_name='Nazra Quran',
            defaults={'term': 'Quarterly Evaluation', 'gpa': '3.80', 'grade': 'A', 'status': 'Pass'}
        )
        AcademicResult.objects.get_or_create(
            student_name='Bilal Tariq',
            roll_no='RL-86',
            class_name='Aalim Course',
            defaults={'term': 'Quarterly Evaluation', 'gpa': '3.65', 'grade': 'B+', 'status': 'Pass'}
        )

        # 9. Seed Communication / Inquiries / Parent portal items
        ContactMessage.objects.get_or_create(
            subject='Inquiry regarding Hifz boarding facility',
            defaults={
                'name': 'Syed Tariq Anis',
                'email': 'syedtariq@gmail.com',
                'phone': '+91 99887 76655',
                'message': 'Assalamu Alaikum. Is hostel accommodation available for outstation students enrolling in Hifz?',
                'is_resolved': False
            }
        )
        ContactMessage.objects.get_or_create(
            subject='Online Tajweed classes for girls',
            defaults={
                'name': 'Fatima Begum',
                'email': 'fatima.b@yahoo.com',
                'phone': '+91 98111 22334',
                'message': 'Do you offer weekend online batches for female students living abroad?',
                'is_resolved': True,
                'reply': 'Yes, online female teacher batches run on Saturdays and Sundays.'
            }
        )

        # Leave Requests
        LeaveRequest.objects.get_or_create(
            student=student_profile,
            parent=parent_user,
            reason='Viral fever and doctor-prescribed rest.',
            defaults={
                'leave_type': 'Sick Leave',
                'start_date': today - datetime.timedelta(days=5),
                'end_date': today - datetime.timedelta(days=3),
                'status': 'Approved',
                'admin_remarks': 'Granted medical leave.'
            }
        )

        # Complaints
        ComplaintTicket.objects.get_or_create(
            parent=parent_user,
            subject='Portal Access & Performance Inquiry',
            defaults={
                'student': student_profile,
                'category': 'Technical Issue',
                'priority': 'Low',
                'description': 'Mobile login session occasionally prompts for re-authentication.',
                'status': 'In Progress',
                'admin_response': 'Our technical team is reviewing token persistence.'
            }
        )

        # Teacher Notes
        TeacherNote.objects.get_or_create(
            student=student_profile,
            title='Outstanding Sabaq Memorization',
            defaults={
                'teacher': created_teachers[1].user,
                'teacher_name': 'Hafiz Bilal Farooqi',
                'note_type': 'Appreciation',
                'note': 'Mustafa recited Juz 14 with excellent fluency and zero errors today. MashaAllah!'
            }
        )

        self.stdout.write(self.style.SUCCESS('[SUCCESS] Finished Madrasa ERP database seeding!'))
