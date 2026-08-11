from django.contrib import admin
from .models import AttendanceRecord


@admin.register(AttendanceRecord)
class AttendanceRecordAdmin(admin.ModelAdmin):
    list_display = ('student', 'date', 'status', 'class_room', 'marked_by')
    list_filter = ('status', 'date', 'class_room')
    search_fields = ('student__roll_number', 'student__user__first_name', 'student__user__last_name')
    date_hierarchy = 'date'
