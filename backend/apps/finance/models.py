import uuid
from django.db import models
from apps.core.models import TimeStampedModel
from apps.accounts.models import StudentProfile


class Transaction(TimeStampedModel):
    """
    Financial ledger transactions (Tuition, Registration, Donations, General Fees).
    """
    CATEGORY_CHOICES = (
        ('Tuition Fee', 'Tuition Fee'),
        ('Registration', 'Registration'),
        ('Donation', 'Donation'),
        ('Hostel Fee', 'Hostel Fee'),
        ('Exam Fee', 'Exam Fee'),
        ('Books & Supplies', 'Books & Supplies'),
        ('Other', 'Other'),
    )

    METHOD_CHOICES = (
        ('Online', 'Online Payment / Card'),
        ('Cash', 'Cash Receipt'),
        ('Bank', 'Bank Transfer'),
        ('Cheque', 'Cheque / DD'),
    )

    STATUS_CHOICES = (
        ('Paid', 'Paid'),
        ('Pending', 'Pending Approval'),
        ('Due', 'Payment Due'),
        ('Cancelled', 'Cancelled'),
    )

    payee_name = models.CharField(max_length=150)
    student = models.ForeignKey(StudentProfile, on_delete=models.SET_NULL, null=True, blank=True, related_name='transactions')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='Tuition Fee')
    method = models.CharField(max_length=30, choices=METHOD_CHOICES, default='Online')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Paid', db_index=True)
    transaction_id = models.CharField(max_length=100, blank=True)
    receipt_file = models.FileField(upload_to='receipts/', blank=True, null=True)
    notes = models.TextField(blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.payee_name} - ${self.amount} ({self.category}) [{self.status}]"

    @property
    def _id(self):
        return str(self.pk)


class Donation(TimeStampedModel):
    """
    Public and community charitable donations (Zakat, Sadqah, General).
    """
    CATEGORY_CHOICES = (
        ('Zakat', 'Zakat'),
        ('Sadqah', 'Sadqah'),
        ('General Fund', 'General Madrasa Fund'),
        ('Building Fund', 'Building & Infrastructure Fund'),
        ('Orphan Support', 'Orphan & Needy Student Support'),
    )

    donor_name = models.CharField(max_length=150)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=30, blank=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='General Fund')
    payment_method = models.CharField(max_length=30, default='Online')
    status = models.CharField(max_length=20, default='Paid')
    is_anonymous = models.BooleanField(default=False)
    receipt_number = models.CharField(max_length=50, unique=True, blank=True)
    message = models.TextField(blank=True)

    class Meta:
        ordering = ['-created_at']

    def save(self, *args, **kwargs):
        if not getattr(self, 'receipt_number', None):
            setattr(self, 'receipt_number', f"DON-{uuid.uuid4().hex[:8].upper()}")
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{'Anonymous' if self.is_anonymous else self.donor_name} - ${self.amount} ({self.category})"

    @property
    def _id(self):
        return str(self.pk)
