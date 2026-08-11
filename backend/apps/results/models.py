from django.db import models
from apps.core.models import TimeStampedModel
from apps.accounts.models import StudentProfile


class AcademicResult(TimeStampedModel):
    """
    Student academic examination results and gradebook records.
    """
    STATUS_CHOICES = (
        ('Pass', 'Pass'),
        ('Fail', 'Fail'),
        ('Withheld', 'Withheld'),
    )

    student = models.ForeignKey(StudentProfile, on_delete=models.SET_NULL, null=True, blank=True, related_name='academic_results')
    student_name = models.CharField(max_length=150)
    roll_no = models.CharField(max_length=50)
    class_name = models.CharField(max_length=100, default='Hifz Quran')
    term = models.CharField(max_length=100, default='Quarterly Examination')
    gpa = models.CharField(max_length=10, default='3.95')
    grade = models.CharField(max_length=10, default='A+')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pass')
    remarks = models.TextField(blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.student_name} ({self.roll_no}) - {self.class_name}: {self.grade}"

    @property
    def _id(self):
        return str(self.pk)


class SubjectScore(TimeStampedModel):
    """
    Subject-wise score detail for a result card.
    """
    result = models.ForeignKey(AcademicResult, on_delete=models.CASCADE, related_name='scores')
    subject = models.CharField(max_length=150)
    obtained = models.DecimalField(max_digits=5, decimal_places=2, default=95.0)
    total = models.DecimalField(max_digits=5, decimal_places=2, default=100.0)
    grade = models.CharField(max_length=10, default='A+')
    remarks = models.CharField(max_length=255, blank=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return f"{self.subject}: {self.obtained}/{self.total} ({self.grade})"

    @property
    def _id(self):
        return str(self.pk)
