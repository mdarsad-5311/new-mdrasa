from django.db import models
from apps.core.models import TimeStampedModel
from apps.accounts.models import TeacherProfile, StudentProfile


class Course(TimeStampedModel):
    """
    Educational courses / programs offered by the Madrasa.
    e.g. Hifz-ul-Quran, Nazra Quran, Aalim Course, Islamic Studies, Tajweed & Qira'at.
    """
    name = models.CharField(max_length=150, unique=True)
    code = models.CharField(max_length=30, unique=True)
    duration = models.CharField(max_length=50, default='3 Years')
    description = models.TextField(blank=True)
    monthly_fee = models.DecimalField(max_digits=10, decimal_places=2, default=50.00)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name

    @property
    def _id(self):
        return str(self.pk)


class ClassRoom(TimeStampedModel):
    """
    Class batch or section (e.g. Hifz Batch A, Aalim Year 1).
    """
    name = models.CharField(max_length=100)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='classes')
    section = models.CharField(max_length=20, default='A')
    academic_year = models.CharField(max_length=20, default='2026-2027')
    teacher_in_charge = models.ForeignKey(TeacherProfile, on_delete=models.SET_NULL, null=True, blank=True, related_name='assigned_classes')

    class Meta:
        ordering = ['name']
        unique_together = ('name', 'section', 'academic_year')

    def __str__(self):
        return f"{self.name} - Sec {self.section} ({self.academic_year})"

    @property
    def _id(self):
        return str(self.pk)


class Subject(TimeStampedModel):
    """
    Subjects taught in courses (e.g. Tajweed, Arabic Grammar, Seerah, Fiqh).
    """
    name = models.CharField(max_length=150)
    code = models.CharField(max_length=30, blank=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='subjects')
    total_marks = models.PositiveIntegerField(default=100)
    pass_marks = models.PositiveIntegerField(default=40)

    class Meta:
        ordering = ['name']
        unique_together = ('name', 'course')

    def __str__(self):
        return f"{self.name} ({self.course.name})"

    @property
    def _id(self):
        return str(self.pk)


class Timetable(TimeStampedModel):
    """
    Weekly schedule timetable.
    """
    DAY_CHOICES = (
        ('Monday', 'Monday'),
        ('Tuesday', 'Tuesday'),
        ('Wednesday', 'Wednesday'),
        ('Thursday', 'Thursday'),
        ('Friday', 'Friday'),
        ('Saturday', 'Saturday'),
        ('Sunday', 'Sunday'),
    )

    class_room = models.ForeignKey(ClassRoom, on_delete=models.CASCADE, related_name='timetables')
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='timetables')
    teacher = models.ForeignKey(TeacherProfile, on_delete=models.SET_NULL, null=True, blank=True, related_name='timetables')
    day_of_week = models.CharField(max_length=20, choices=DAY_CHOICES, default='Monday')
    start_time = models.TimeField()
    end_time = models.TimeField()
    room_number = models.CharField(max_length=50, default='Room 101')

    class Meta:
        ordering = ['day_of_week', 'start_time']

    def __str__(self):
        return f"{self.day_of_week}: {self.subject.name} ({self.start_time} - {self.end_time})"

    @property
    def _id(self):
        return str(self.pk)


class Homework(TimeStampedModel):
    """
    Assignments & homework tasks assigned to students.
    """
    class_room = models.ForeignKey(ClassRoom, on_delete=models.CASCADE, related_name='homeworks')
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='homeworks')
    teacher = models.ForeignKey(TeacherProfile, on_delete=models.SET_NULL, null=True, blank=True, related_name='homeworks')
    title = models.CharField(max_length=200)
    description = models.TextField()
    due_date = models.DateField()
    attachment = models.FileField(upload_to='homeworks/', blank=True, null=True)

    class Meta:
        ordering = ['-due_date']

    def __str__(self):
        return f"{self.title} - Due: {self.due_date}"

    @property
    def _id(self):
        return str(self.pk)


class HomeworkSubmission(TimeStampedModel):
    """
    Student submissions for assigned homework.
    """
    homework = models.ForeignKey(Homework, on_delete=models.CASCADE, related_name='submissions')
    student = models.ForeignKey(StudentProfile, on_delete=models.CASCADE, related_name='homework_submissions')
    submission_text = models.TextField(blank=True)
    file = models.FileField(upload_to='submissions/', blank=True, null=True)
    submitted_at = models.DateTimeField(auto_now_add=True)
    grade = models.CharField(max_length=10, blank=True)
    teacher_remarks = models.TextField(blank=True)
    is_graded = models.BooleanField(default=False)

    class Meta:
        ordering = ['-submitted_at']
        unique_together = ('homework', 'student')

    def __str__(self):
        return f"Submission by {self.student.roll_number} for {self.homework.title}"

    @property
    def _id(self):
        return str(self.pk)
