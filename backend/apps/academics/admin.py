from django.contrib import admin
from .models import Course, ClassRoom, Subject, Timetable, Homework, HomeworkSubmission


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('name', 'code', 'duration', 'monthly_fee', 'is_active')
    search_fields = ('name', 'code')
    list_filter = ('is_active',)


@admin.register(ClassRoom)
class ClassRoomAdmin(admin.ModelAdmin):
    list_display = ('name', 'course', 'section', 'academic_year', 'teacher_in_charge')
    list_filter = ('course', 'academic_year')
    search_fields = ('name', 'section')


@admin.register(Subject)
class SubjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'code', 'course', 'total_marks', 'pass_marks')
    list_filter = ('course',)
    search_fields = ('name', 'code')


@admin.register(Timetable)
class TimetableAdmin(admin.ModelAdmin):
    list_display = ('class_room', 'subject', 'teacher', 'day_of_week', 'start_time', 'end_time', 'room_number')
    list_filter = ('day_of_week', 'class_room')


@admin.register(Homework)
class HomeworkAdmin(admin.ModelAdmin):
    list_display = ('title', 'class_room', 'subject', 'teacher', 'due_date')
    list_filter = ('class_room', 'subject')
    search_fields = ('title', 'description')


@admin.register(HomeworkSubmission)
class HomeworkSubmissionAdmin(admin.ModelAdmin):
    list_display = ('homework', 'student', 'submitted_at', 'grade', 'is_graded')
    list_filter = ('is_graded',)
