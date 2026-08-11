from django.db import models
from django.contrib.auth.models import AbstractUser
from apps.core.models import TimeStampedModel


class User(AbstractUser):
    """
    Custom User Model supporting multiple roles in the Madrasa ERP.
    """
    ROLE_CHOICES = (
        ('admin', 'Administrator'),
        ('teacher', 'Teacher'),
        ('student', 'Student'),
        ('parent', 'Parent / Guardian'),
        ('staff', 'Staff'),
    )

    GENDER_CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
    )

    email = models.EmailField(unique=True, db_index=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='student', db_index=True)
    phone = models.CharField(max_length=30, blank=True)
    avatar = models.FileField(upload_to='avatars/', blank=True, null=True)
    address = models.TextField(blank=True)
    gender = models.CharField(max_length=15, choices=GENDER_CHOICES, blank=True)
    is_verified = models.BooleanField(default=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    class Meta:
        ordering = ['-date_joined']

    def __str__(self):
        return f"{self.get_full_name() or self.username} ({self.email}) [{self.role}]"

    @property
    def _id(self):
        return str(self.pk)

    @property
    def display_name(self):
        full = self.get_full_name().strip()
        return full if full else self.username


class TeacherProfile(TimeStampedModel):
    """
    Teacher profile containing academic qualifications, specialization, and status.
    """
    STATUS_CHOICES = (
        ('active', 'Active'),
        ('inactive', 'Inactive'),
        ('on_leave', 'On Leave'),
    )

    user = models.OneToOneField(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='teacher_profile')
    name = models.CharField(max_length=150)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=30, blank=True)
    subject = models.CharField(max_length=150, help_text="e.g. Quran & Tafseer, Hifz, Arabic Grammar")
    qualification = models.CharField(max_length=150, help_text="e.g. Fazil Deoband, M.A. Arabic, Qirat Sab'ah")
    designation = models.CharField(max_length=100, default='Senior Ustad')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='active')
    bio = models.TextField(blank=True)
    joining_date = models.DateField(null=True, blank=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return f"{self.name} - {self.subject}"

    @property
    def _id(self):
        return str(self.pk)


class StudentProfile(TimeStampedModel):
    """
    Student profile linked to the user account with academic metadata.
    """
    STATUS_CHOICES = (
        ('active', 'Active'),
        ('graduated', 'Graduated'),
        ('suspended', 'Suspended'),
        ('inactive', 'Inactive'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='student_profile')
    roll_number = models.CharField(max_length=50, unique=True, db_index=True)
    course = models.CharField(max_length=100, default='Hifz Quran')
    section = models.CharField(max_length=20, default='A')
    parent_user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='children')
    parent_name = models.CharField(max_length=150, blank=True)
    parent_phone = models.CharField(max_length=30, blank=True)
    dob = models.DateField(null=True, blank=True)
    enrollment_date = models.DateField(auto_now_add=True)
    emergency_contact = models.CharField(max_length=30, blank=True)
    blood_group = models.CharField(max_length=10, blank=True)
    current_juz = models.CharField(max_length=50, default='Juz 14')
    attendance_percentage = models.DecimalField(max_digits=5, decimal_places=2, default=94.50)
    pending_fees = models.DecimalField(max_digits=10, decimal_places=2, default=45.00)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='active')

    class Meta:
        ordering = ['roll_number']

    def __str__(self):
        return f"{self.user.get_full_name() or self.user.username} ({self.roll_number})"

    @property
    def _id(self):
        return str(self.pk)


class ParentProfile(TimeStampedModel):
    """
    Parent/Guardian profile.
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='parent_profile')
    occupation = models.CharField(max_length=100, blank=True)
    relationship = models.CharField(max_length=50, default='Father')
    alternate_phone = models.CharField(max_length=30, blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Parent: {self.user.get_full_name() or self.user.username}"

    @property
    def _id(self):
        return str(self.pk)
