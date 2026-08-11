import uuid
from django.db import models
from apps.core.models import TimeStampedModel
from apps.accounts.models import User, StudentProfile


class ContactMessage(TimeStampedModel):
    """
    Inquiries and messages submitted from the public contact form.
    """
    name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=30, blank=True)
    subject = models.CharField(max_length=255)
    message = models.TextField()
    is_resolved = models.BooleanField(default=False)
    reply = models.TextField(blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Message from {self.name}: {self.subject}"

    @property
    def _id(self):
        return str(self.pk)


class LeaveRequest(TimeStampedModel):
    """
    Student absence leave requests submitted by parents or students.
    """
    STATUS_CHOICES = (
        ('Pending', 'Pending Review'),
        ('Approved', 'Approved'),
        ('Rejected', 'Rejected'),
    )

    TYPE_CHOICES = (
        ('Sick Leave', 'Sick Leave'),
        ('Family Event', 'Family Event / Wedding'),
        ('Personal Reason', 'Personal Reason'),
        ('Other', 'Other'),
    )

    student = models.ForeignKey(StudentProfile, on_delete=models.CASCADE, related_name='leave_requests')
    parent = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='submitted_leaves')
    leave_type = models.CharField(max_length=50, choices=TYPE_CHOICES, default='Sick Leave')
    start_date = models.DateField()
    end_date = models.DateField()
    reason = models.TextField()
    document = models.FileField(upload_to='leave_docs/', blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pending')
    admin_remarks = models.TextField(blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Leave for {self.student.roll_number} ({self.leave_type}) - {self.status}"

    @property
    def _id(self):
        return str(self.pk)


class ComplaintTicket(TimeStampedModel):
    """
    Support tickets & complaints from parents / students.
    """
    CATEGORY_CHOICES = (
        ('Technical Issue', 'Technical Issue'),
        ('Fees & Billing', 'Fees & Billing'),
        ('Academic Result', 'Academic Result'),
        ('Student Behaviour', 'Student Behaviour'),
        ('Other', 'Other'),
    )

    PRIORITY_CHOICES = (
        ('Low', 'Low'),
        ('Medium', 'Medium'),
        ('High', 'Urgent / High'),
    )

    STATUS_CHOICES = (
        ('Open', 'Open'),
        ('In Progress', 'In Progress'),
        ('Resolved', 'Resolved'),
        ('Closed', 'Closed'),
    )

    ticket_id = models.CharField(max_length=50, unique=True, blank=True)
    parent = models.ForeignKey(User, on_delete=models.CASCADE, related_name='complaints')
    student = models.ForeignKey(StudentProfile, on_delete=models.SET_NULL, null=True, blank=True, related_name='complaints')
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='Technical Issue')
    priority = models.CharField(max_length=20, choices=PRIORITY_CHOICES, default='Medium')
    subject = models.CharField(max_length=255)
    description = models.TextField()
    attachment = models.FileField(upload_to='complaints/', blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='In Progress')
    admin_response = models.TextField(blank=True)

    class Meta:
        ordering = ['-created_at']

    def save(self, *args, **kwargs):
        if not getattr(self, 'ticket_id', None):
            setattr(self, 'ticket_id', f"TKT-{uuid.uuid4().hex[:6].upper()}")
        super().save(*args, **kwargs)

    def __str__(self):
        return f"[{self.ticket_id}] {self.subject} ({self.status})"

    @property
    def _id(self):
        return str(self.pk)


class TeacherNote(TimeStampedModel):
    """
    Teacher diaries / feedback notes sent to student and parents.
    """
    NOTE_CHOICES = (
        ('Appreciation', 'Appreciation / Star Student'),
        ('Behaviour', 'Conduct & Behaviour'),
        ('Academic', 'Academic Progress'),
        ('General', 'General Note'),
    )

    student = models.ForeignKey(StudentProfile, on_delete=models.CASCADE, related_name='teacher_notes')
    teacher = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='authored_notes')
    teacher_name = models.CharField(max_length=150, blank=True)
    note_type = models.CharField(max_length=50, choices=NOTE_CHOICES, default='Appreciation')
    title = models.CharField(max_length=200, default='Daily Memorization Progress')
    note = models.TextField()
    date = models.DateField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Note for {self.student.roll_number} by {self.teacher_name or 'Teacher'}"

    @property
    def _id(self):
        return str(self.pk)
