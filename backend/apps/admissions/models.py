from django.db import models
from apps.core.models import TimeStampedModel


class Admission(TimeStampedModel):
    """
    Admission Applications submitted online by parents/students or entered by admin.
    """
    STATUS_CHOICES = (
        ('pending', 'Pending Review'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    )

    GENDER_CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
    )

    student_name = models.CharField(max_length=150)
    dob = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=15, choices=GENDER_CHOICES, default='Male')
    parent_name = models.CharField(max_length=150)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=30)
    address = models.TextField(blank=True)
    course_applied_for = models.CharField(max_length=100, default='Hifz Quran')
    previous_education = models.CharField(max_length=150, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending', db_index=True)
    remarks = models.TextField(blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.student_name} - {self.course_applied_for} ({self.status})"

    @property
    def _id(self):
        return str(self.pk)
