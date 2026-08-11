from django.contrib import admin
from .models import Admission


@admin.register(Admission)
class AdmissionAdmin(admin.ModelAdmin):
    list_display = ('student_name', 'course_applied_for', 'parent_name', 'phone', 'status', 'created_at')
    list_filter = ('status', 'course_applied_for', 'gender')
    search_fields = ('student_name', 'parent_name', 'phone', 'email', 'course_applied_for')
    ordering = ('-created_at',)
    actions = ['mark_as_approved', 'mark_as_rejected']

    def mark_as_approved(self, request, queryset):
        queryset.update(status='approved')
    mark_as_approved.short_description = "Approve selected admission applications"

    def mark_as_rejected(self, request, queryset):
        queryset.update(status='rejected')
    mark_as_rejected.short_description = "Reject selected admission applications"
