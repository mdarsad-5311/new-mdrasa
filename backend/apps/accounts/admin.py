from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, TeacherProfile, StudentProfile, ParentProfile


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display = ('email', 'username', 'first_name', 'last_name', 'role', 'is_staff', 'is_active')
    list_filter = ('role', 'is_staff', 'is_active', 'gender')
    search_fields = ('email', 'username', 'first_name', 'last_name', 'phone')
    ordering = ('-date_joined',)
    fieldsets = BaseUserAdmin.fieldsets + (
        ('Madrasa Specific Info', {'fields': ('role', 'phone', 'avatar', 'address', 'gender', 'is_verified')}),
    )


@admin.register(TeacherProfile)
class TeacherProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'subject', 'qualification', 'phone', 'status', 'joining_date')
    list_filter = ('status', 'subject')
    search_fields = ('name', 'email', 'phone', 'subject', 'qualification')


@admin.register(StudentProfile)
class StudentProfileAdmin(admin.ModelAdmin):
    list_display = ('roll_number', 'user', 'course', 'parent_name', 'parent_phone', 'status', 'attendance_percentage')
    list_filter = ('status', 'course', 'section')
    search_fields = ('roll_number', 'user__first_name', 'user__last_name', 'parent_name', 'parent_phone')


@admin.register(ParentProfile)
class ParentProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'occupation', 'relationship', 'alternate_phone')
    search_fields = ('user__first_name', 'user__last_name', 'user__email')
