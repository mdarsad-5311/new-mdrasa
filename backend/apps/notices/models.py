from django.db import models
from apps.core.models import TimeStampedModel


class Notice(TimeStampedModel):
    """
    Institution-wide announcements and notice board updates.
    """
    CATEGORY_CHOICES = (
        ('Academic', 'Academic'),
        ('Events', 'Events'),
        ('Policy', 'Policy'),
        ('Urgent', 'Urgent'),
        ('General', 'General'),
    )

    AUDIENCE_CHOICES = (
        ('Public', 'Public'),
        ('All Students', 'All Students'),
        ('Parents', 'Parents'),
        ('Teachers', 'Teachers'),
        ('Admin', 'Administrative Staff'),
    )

    STATUS_CHOICES = (
        ('Published', 'Published'),
        ('Urgent', 'Urgent Announcement'),
        ('Draft', 'Draft'),
        ('Archived', 'Archived'),
    )

    title = models.CharField(max_length=255)
    description = models.TextField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='Academic')
    audience = models.CharField(max_length=50, choices=AUDIENCE_CHOICES, default='Public')
    status = models.CharField(max_length=30, choices=STATUS_CHOICES, default='Published', db_index=True)
    is_pinned = models.BooleanField(default=False)
    attachment = models.FileField(upload_to='notices/', blank=True, null=True)

    class Meta:
        ordering = ['-is_pinned', '-created_at']

    def __str__(self):
        return f"[{self.category}] {self.title} ({self.status})"

    @property
    def _id(self):
        return str(self.pk)
